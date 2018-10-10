<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 18:24
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Rbac extends AdminBaseController{

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
        $this->page = $this->input->post_get('pageNum')?$this->input->post_get('pageNum'):1;
        $this->pagesize = $this->input->post_get('numPerPage')?$this->input->post_get('numPerPage'):20;
        $this->load->model('Admin/role_model');
    }

    // 角色管理列表
    public function index() {
        $count = $this->project_db->from('tp_role')->count_all_results();
        $offset = ($this->page-1)*$this->pagesize;
        $list = $this->project_db->from('tp_role')->order_by("listorder","DESC")->limit($this->pagesize,$offset)->get()->result_array();
        $data['totalCount'] = $count;
        $data['pageNum'] = $this->page;
        $data['numPerPage'] = $this->pagesize;
        $data['roles'] = $list;
        $this->load->view('/admin/rbac/index',$data);
    }
    // 添加角色
    public function roleadd() {

        $this->load->view('/admin/rbac/roleadd');
    }
    // 添加角色提交
    public function roleadd_post() {

        if (IS_POST) {

            $res = $this->role_model->form_validate();

            if($res == FALSE){

                $this->error(validation_one_errors());

            }else{
                $posts=$this->input->post();
                //执行添加
                $return = $this->role_model->role_insert($posts);

                if($return){
                    $this->success("rbac_index",'closeCurrent',"/admin/rbac/index");
                }else{
                    $this->error('添加失败！');
                }
            }
        }


    }
    // 编辑角色
    public function roleedit() {
        $id = $this->input->get('id');
        if ($id == 1) {
            $this->error("超级管理员角色不能被修改！");
        }
        $data = $this->role_model->get_one($id);
        if (!$data) {
            $this->error("该角色不存在！");
        }
        $arr['data'] = $data;
        $this->load->view('admin/rbac/roleedit',$arr);
    }
    // 编辑角色提交
    public function roleedit_post() {
        $id = $this->input->post_get('id');
        if ($id == 1) {
            $this->error("超级管理员角色不能被修改！");
        }
        if (IS_POST) {
            $res = $this->role_model->form_validate();

            if($res == FALSE){

                $this->error(validation_one_errors());

            }else{
                $posts=$this->input->post();
                //执行修改
                $return = $this->role_model->role_update($posts,$id);
                if($return){
                    $this->success("rbac_index",'closeCurrent',"/admin/rbac/index");
                }else{
                    $this->error('修改失败！');
                }
            }
        }
    }

    // 删除角色
    public function roledelete() {
        $id = $this->input->get('id');
        if ($id == 1) {
            $this->error("超级管理员角色不能被删除！");
        }

        $count=$this->project_db->where(array('role_id'=>$id))->from('tp_role_user')->count_all_results();

        if($count>0){
            $this->error("该角色已经有用户！");
        }else{
            $return = $this->role_model->role_delete($id);
            if ($return) {
                $this->success("rbac_index","", '/admin/rbac/index');
            } else {
                $this->error("删除失败！");
            }
        }

    }

    /**
     * 角色授权
     */
    public function authorize() {

        header('Content-type:text/html;charset=utf-8');
        //角色ID
        $roleid = $this->input->get('id');
        if (empty($roleid)) {
            $this->error("参数错误！");
        }
        //import("Tree");
        $this->load->library('tree');
        $this->tree->icon = array('│ ', '├─ ', '└─ ');
        $this->tree->nbsp = '&nbsp;&nbsp;&nbsp;';
        //$result = $this->initMenu();
        $this->load->model('Admin/menu_model','menu');
        $result = $this->menu->menu_list();
        $newmenus=array();
        $this->load->model('Admin/authaccess_model','AuthAccess');
        //获取权限表数据
        $priv_data=$this->AuthAccess->get_rulename_list($roleid);

        foreach ($result as $m){
            $newmenus[$m['id']]=$m;
        }

        $menu1_array=$this->get_tree($result,0,$priv_data);

        for($i=0;$i<count($menu1_array);$i++)
        {
            $menu2_array=$this->get_tree($result,$menu1_array[$i]['id'],$priv_data);
            for($j=0;$j<count($menu2_array);$j++)
            {
                $menu3_array=$this->get_tree($result,$menu2_array[$j]['id'],$priv_data);
                for($x=0;$x<count($menu3_array);$x++)
                {
                    $menu4_array=$this->get_tree($result,$menu3_array[$x]['id'],$priv_data);
                    for($y=0;$y<count($menu4_array);$y++){
                        $menu4_array[$y]['menu5']=$this->get_tree($result,$menu4_array[$y]['id'],$priv_data);
                    }
                    $menu3_array[$x]['menu4']=$menu4_array;
                }
                $menu2_array[$j]['menu3']=$menu3_array;
            }
            $menu1_array[$i]['menu2']=$menu2_array;
        }

        $str = '';
        for($i=0;$i<count($menu1_array);$i++){
            $str.='<li><a tname="menuid[]" tvalue="'.$menu1_array[$i]['id'].'" '.$menu1_array[$i]['checked'].'>'.$menu1_array[$i]['name'].'</a>';
            for($j=0;$j<count($menu1_array[$i]['menu2']);$j++){
                $arr_menu2=$menu1_array[$i]['menu2'];
                $str.='<ul><li><a tname="menuid[]" tvalue="'.$arr_menu2[$j]['id'].'" '.$arr_menu2[$j]['checked'].'>'.$arr_menu2[$j]['name'].'</a>';
                for($x=0;$x<count($arr_menu2[$j]['menu3']);$x++){
                    $arr_menu3=$arr_menu2[$j]['menu3'];
                    $str.='<ul><li><a tname="menuid[]" tvalue="'.$arr_menu3[$x]['id'].'" '.$arr_menu3[$x]['checked'].'>'.$arr_menu3[$x]['name'].'</a>';
                    for($y=0;$y<count($arr_menu3[$x]['menu4']);$y++){
                        $arr_menu4=$arr_menu3[$x]['menu4'];
                        $str.='<ul><li><a tname="menuid[]" tvalue="'.$arr_menu4[$y]['id'].'" '.$arr_menu4[$y]['checked'].'>'.$arr_menu4[$y]['name'].'</a>';
                        for($m=0;$m<count($arr_menu4[$y]['menu5']);$m++){
                            $arr_menu5=$arr_menu4[$y]['menu5'];
                            $str.='<ul><li><a tname="menuid[]" tvalue="'.$arr_menu5[$m]['id'].'" '.$arr_menu5[$m]['checked'].'>'.$arr_menu5[$m]['name'].'</a>';
                            $str.='</li></ul>';
                        }
                        $str.='</li></ul>';

                    }
                    $str.='</li></ul>';
                }
                $str.='</li></ul>';
            }
            $str.='</li>';
        }

        $data['categorys'] = $str;
        $data['roleid'] = $roleid;
        $this->load->view('admin/rbac/authorize',$data);
    }

    public function get_tree($arr,$parentid,$priv_data){
        $tmp_arr=array();
        for($i=0;$i<count($arr);$i++){
            if ($arr[$i]['parentid']==$parentid){
                $arr[$i]['checked']=($this->_is_checked($arr[$i],$priv_data)) ? 'checked="checked"' : '';
                $tmp_arr[]=$arr[$i];
            }
        }
        return $tmp_arr;
    }
    /**
     *  检查指定菜单是否有权限
     * @param array $menu menu表中数组
     * @param int $roleid 需要检查的角色ID
     */
    private function _is_checked($menu,$priv_data) {

        $app=$menu['app'];
        $model=$menu['model'];
        $action=$menu['action'];
        $name=strtolower("$app/$model/$action");
        if($priv_data){
            if (in_array($name, $priv_data)) {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }

    }

    /**
     * 角色授权
     */
    public function authorize_post() {

        if (IS_POST) {

            $roleid = $this->input->post('roleid');
            if(!$roleid){
                $this->error("需要授权的角色不存在！");
            }
            $this->load->model('Admin/authaccess_model','AuthAccess');

            $menuid_arr = $this->input->post('menuid');
            //var_dump($menuid_arr);
            if (is_array($menuid_arr) && count($menuid_arr)>0) {

                $this->AuthAccess->del_authaccess(array('role_id'=>$roleid));

                $this->load->model('Admin/menu_model','menu');
                foreach ($menuid_arr as $menuid) {
                    //根据菜单id获取单条信息
                    $menu=$this->menu->get_menu_one(array('id'=>$menuid));
                    if($menu){
                        $app=$menu['app'];
                        $model=$menu['model'];
                        $action=$menu['action'];
                        $name=strtolower("$app/$model/$action");

                        $arr = array("role_id"=>$roleid,"rule_name"=>$name);

                        //添加权限
                        $this->AuthAccess->add_authaccess($arr);
                    }
                }

                $this->success("rbac_index",'closeCurrent',"/admin/rbac/index");
            }else{
                //当没有数据时，清除当前角色授权

                $delete = $this->AuthAccess->del_authaccess(array('role_id'=>$roleid));

                $this->error("没有接收到数据，执行清除授权成功！");
            }
        }
    }
}