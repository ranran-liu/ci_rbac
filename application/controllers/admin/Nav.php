<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/1
 * Time: 16:07
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Nav extends AdminBaseController
{
    const NAVCAT_TABLE = 'tp_nav';
    function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database("myproject", true);
    }

    /**
     *  显示
     */
    public function index() {
        $cid=$this->input->post_get('cid')?$this->input->post_get('cid'):0;

        if(!empty($cid)){
            $result = $this->db->where(array('cid'=>$cid))->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        }
        else
        {
            $result = $this->db->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        }
        $this->load->model('Admin/navcat_model');
        $cats=$this->navcat_model->select();

        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;&nbsp;&nbsp;';
        $array = [];
        foreach ($result as $r) {
            $id  = $r['id'];
            $_cid = $r['cid'];
            $parentid = $r['parentid'];
            $r['str_manage'] = "<a href='/admin/nav/add?parentid=$id&cid=$_cid' target='dialog' height='350' width='766'>".'添加子菜单'."</a> |
					<a href='/admin/nav/edit?id=$id&parentid=$parentid&cid=$_cid' target='dialog' height='350' width='766'>".'编辑'."</a> |
				    <a href='/admin/nav/delete?id=$id' target='ajaxTodo' title='确定要删除吗？'>".'删除'."</a>";

            $r['status'] = $r['status'] ? '显示' : '隐藏';
            if ($cats[0]['navcid']==$r['cid']){
                $r['navname']=$cats[0]['name'];
            }
            else {
                $r['navname']=$cats[1]['name'];
            }
            $array[] = $r;
        }
        $this->tree->init($array);
        $str = "<tr>
				<td><input  type='text' size='3' value='\$listorder' class='input input-order nav_order' data-id='\$id' onblur='navorder(this)'></td>
				<td>\$id</td>
				<td>\$navname</td>
				<td class='div_lift'>\$spacer\$label</td>
				<td >\$href</td>
			    <td>\$status</td>
				<td>\$str_manage</td>
			</tr>";
        $categorys = $this->tree->get_tree(0, $str);
        $data["categorys"] = $categorys;
        $data["navcats"] = $cats;
        $data["navcid"] = $cid;
        $this->load->view('admin/nav/index',$data);
    }
    // 获取某个菜单分类下的所有菜单项
    public function get_nav_list(){
        $cid = $this->input->post_get('cid');
        if(!$cid){
            $this->jsonencode('Err',-1,'缺少参数');
        }
        $result = $this->db->where(array('cid'=>$cid))->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;│ ', '&nbsp;├─ ', '&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;';
        $this->tree->init($result);
        $str="<option value='\$id'>\$spacer\$label</option>";
        $nav_trees = $this->tree->get_tree(0, $str);
        $this->jsonencode('OK',1,'success',$nav_trees);

    }

    /**
     *  添加
     */
    public function add() {
        $cid=$this->input->post_get('cid')?intval($this->input->post_get('cid')):0;
        $this->load->model('Admin/navcat_model');
        if(empty($cid)){
            $navcat=$this->navcat_model->find();
            $cid=$navcat['navcid'];
        }
        $result = $this->db->where(array('cid'=>$cid))->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;│ ', '&nbsp;├─ ', '&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;';
        $parentid=$this->input->get('parentid')?$this->input->get('parentid'):0;
        $array = [];
        foreach ($result as $r) {
            //$r['str_manage'] = '<a href="' . U("Menu/add", array("parentid" => $r['id'], "menuid" => $this->input->get("menuid"))) . '">添加子菜单</a> | <a href="' . U("Menu/edit", array("id" => $r['id'], "menuid" => I("get.menuid"))) . '">修改</a> | <a class="js-ajax-delete" href="' . U("Menu/delete", array("id" => $r['id'], "menuid" => I("get.menuid"))) . '">删除</a> ';
            $r['status'] = $r['status'] ? "显示" : "隐藏";
            $r['selected'] = $r['id']==$parentid?"selected":"";
            $array[] = $r;
        }

        $this->tree->init($array);
        $str="<option value='\$id' \$selected>\$spacer\$label</option>";
        $nav_trees = $this->tree->get_tree(0, $str);
        $data["nav_trees"] = $nav_trees;


        $cats=$this->navcat_model->select();
        $data["navcats"] = $cats;

        //$navs= $this->_select();

//        foreach ($navs as $key=>$navdata){
//            $this->tree->init($navdata['items']);
//            $tpl="<option value='\$rule' >\$spacer\$label</option>";
//            $navs_html = $this->tree->get_tree(0, $tpl);
//            $navs[$key]['html']=$navs_html;
//        }
//
//        $data['navs'] = $navs;

        $data["navcid"] = $cid;
        $this->load->view('admin/nav/add',$data);
    }

    /**
     *  执行添加
     */
    public function add_post() {
        if (IS_POST) {
            $data=array_map('trim',$this->input->post(NULL,TRUE));
            $this->db->insert(self::NAVCAT_TABLE,$data);
            $id=$this->db->insert_id();
            if($id){
                $parentid = $data['parentid'];
                if(empty($parentid)){
                    $data['path']="0-$id";
                }else{
                    $parent=$this->db->where(array('id'=>$parentid))->get(self::NAVCAT_TABLE)->row_array();
                    $data['path']=$parent['path']."-$id";
                }

                $this->db->update(self::NAVCAT_TABLE,$data,array('id'=>$id));
                $this->success('nav_index','closeCurrent',"/admin/nav/index");
            }else{
                $this->error("添加失败！");
            }
        }
    }
    /**
     *  编辑
     */
    public function edit() {
        $cid=$this->input->post_get('cid')?intval($this->input->post_get('cid')):0;
        $id=$this->input->post_get('id')?$this->input->post_get('id'):0;
        $result = $this->db->where("cid=$cid and id!=$id")->order_by("listorder ASC")->get(self::NAVCAT_TABLE)->result_array();
        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;│ ', '&nbsp;├─ ', '&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        $parentid= $this->input->post_get('parentid')?$this->input->post_get('parentid'):0;
        $array=[];
        foreach ($result as $r) {
            //$r['str_manage'] = '<a href="' . U("Menu/add", array("parentid" => $r['id'], "menuid" => I("get.menuid"))) . '">添加子菜单</a> | <a href="' . U("Menu/edit", array("id" => $r['id'], "menuid" => I("get.menuid"))) . '">修改</a> | <a class="js-ajax-delete" href="' . U("Menu/delete", array("id" => $r['id'], "menuid" => I("get.menuid"))) . '">删除</a> ';
            $r['status'] = $r['status'] ? "显示" : "隐藏";
            $r['selected'] = $r['id']==$parentid?"selected":"";
            $array[] = $r;
        }

        $this->tree->init($array);
        $str="<option value='\$id' \$selected>\$spacer\$label</option>";
        $nav_trees = $this->tree->get_tree(0, $str);
        $data["nav_trees"] = $nav_trees;

        $this->load->model('Admin/navcat_model');
        $cats=$this->navcat_model->select();
        $data["navcats"] = $cats;

        $nav=$this->db->where(array('id'=>$id))->get(self::NAVCAT_TABLE)->row_array();

        $data['nav']=$nav;


//        $navs= $this->_select();
//
//        foreach ($navs as $key=>$navdata){
//            $this->tree->init($navdata['items']);
//            $tpl="<option value='\$rule' >\$spacer\$label</option>";
//            $navs_html = $this->tree->get_tree(0, $tpl);
//            $navs[$key]['html']=$navs_html;
//        }

//        $this->assign('navs', $navs);

        $data["navcid"] = $cid;
        $this->load->view('admin/nav/edit',$data);
    }
    /**
     *  执行编辑
     */
    public function edit_post() {

        if (IS_POST) {
            $data=array_map('trim',$this->input->post(NULL,TRUE));
            $parentid=empty($data['parentid'])?"0":$data['parentid'];
            if(empty($parentid)){
                $data['path']="0-".$data['id'];
            }else{
                $parent=$this->db->where(array('id'=>$parentid))->get(self::NAVCAT_TABLE)->row_array();

                $data['path']=$parent['path']."-".$data['id'];
            }

            $this->db->update(self::NAVCAT_TABLE,$data,array('id'=>$data['id']));

            $this->success('nav_index','closeCurrent',"/admin/nav/index");

        }
    }

    /**
     *  删除
     */
    public function delete() {
        $id = $this->input->get('id')?$this->input->get('id'):0;
        $count = $this->db->where(array("parentid" => $id))->from(self::NAVCAT_TABLE)->count_all_results();
        if ($count > 0) {
            $this->error("该菜单下还有子菜单，无法删除！");
        }
        $this->db->delete(self::NAVCAT_TABLE,array('id'=>$id));
        if ($this->db->affected_rows()!==false) {
            $this->success('nav_index');
        } else {
            $this->error("删除失败！");
        }
    }

    /**
     * 排序
     */
    public function listorder() {
        $id=$this->input->post_get('id');
        if(!$id){
            $this->error('缺少参数');
        }
        $listorder = $this->input->post_get('listorder')?$this->input->post_get('listorder'):0;
        $this->db->update(self::NAVCAT_TABLE,array('listorder'=>$listorder),array('id'=>$id));
        if($this->db->affected_rows()!==false){
            //$this->jsonencode('OK',1,'排序成功');
            $this->success("nav_index");
        }else{
            $this->error('排序失败');
        }
    }

}