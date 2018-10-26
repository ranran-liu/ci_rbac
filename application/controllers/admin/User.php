<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 18:26
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends AdminBaseController{


    const USER_TABLE = 'tp_users';
    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->db = $this->load->database("myproject", true);
        $this->load->model('Admin/user_model');
        $this->load->library('form_validation');
        $this->page = $this->input->post_get('pageNum')?$this->input->post_get('pageNum'):1;
        $this->pagesize = $this->input->post_get('numPerPage')?$this->input->post_get('numPerPage'):20;
    }

    public function index(){
        $user_login = $this->input->post_get('user_login');
        $user_email = trim($this->input->post_get('user_email'));
        $where = array();
        if($user_login){
            $where['user_login'] = $user_login;
        }

        if($user_email){
            $where['user_email'] = $user_email;
        }
        $count = $this->project_db->like($where)->from('tp_users')->count_all_results();
        $offset = ($this->page-1)*$this->pagesize;
        $users = $this->project_db->like($where)->from('tp_users')->limit($this->pagesize,$offset)->get()->result_array();
        $data['totalCount'] = $count;
        $data['users'] = $users;
        $data['pageNum'] = $this->page;
        $data['numPerPage'] = $this->pagesize;
        $data['user_login'] =  $user_login;
        $data['user_email'] =  $user_email;
        $this->load->view('admin/user/index',$data);
    }
    //用户添加
    public function add(){
        $this->load->model('Admin/role_model');
        $list = $this->role_model->get_active_roles_list();
        $data['roles'] = $list;
        $this->load->view('admin/user/add',$data);
    }


    //执行添加
    public function add_post(){
        if(IS_POST){
            $role_ids = $this->input->post('role_id');
            if(!empty($role_ids) && is_array($role_ids)){
                $this->form_validation->set_rules(
                    'user_login',
                    'Username',
                    'trim|required|is_unique['.self::USER_TABLE.'.user_login]',
                    array(
                        'required' => '请输入用户名',
                        'is_unique' => '该用户名已存在'
                    )
                );
                $this->form_validation->set_rules(
                    'user_pass',
                    'Password',
                    'trim|required|sp_password',
                    array(
                        'required' => '请输入密码',
                    )
                );
                $this->form_validation->set_rules(
                    'mobile',
                    'Mobile',
                    'trim|required|is_mobile|is_unique['.self::USER_TABLE.'.mobile]',
                    array(
                        'required' => '请输入手机号',
                        'is_mobile' =>'请输入合法的手机号',
                        'is_unique' => '该手机号已存在'

                    )
                );
                $this->form_validation->set_rules(
                    'user_email',
                    'Email',
                    'trim|required|valid_email|is_unique['.self::USER_TABLE.'.user_email]',
                    array(
                        'required' => '请输入邮箱',
                        'valid_email' =>'请输入合法的邮箱',
                        'is_unique' => '该邮箱已存在'

                    )
                );
                if($this->form_validation->run() == FALSE){

                    $this->error(validation_one_errors());

                }else{
                    $posts=$this->input->post(array('user_login','user_pass','user_email','mobile'));
                    //执行添加
                    $userid = $this->user_model->add($posts);

                    if($userid){
                        $this->load->model('Admin/roleuser_model');
                        foreach ($role_ids as $role_id){
                            if(sp_get_current_admin_id() != 1 && $role_id == 1){
                                $this->error("为了网站的安全，非网站创建者不可创建超级管理员！");
                            }
                            $arr = array("role_id"=>$role_id,"user_id"=>$userid);
                            $this->roleuser_model->add($arr);
                        }
                        $this->success("user_index",'closeCurrent',"/admin/user/index");
                    }else{
                        $this->error('添加失败！');
                    }
                }

            }else{
                $this->error("请为此用户指定角色！");
            }

        }
    }
    //编辑页面
    public function edit(){
        $id = $this->input->get('id');

        $this->load->model('Admin/role_model');
        $list = $this->role_model->get_active_roles_list();
        $data['roles'] = $list;

        $this->load->model('Admin/roleuser_model');
        $role_ids = $this->roleuser_model->get_roleids(array("user_id"=>$id));
        $data['role_ids'] = $role_ids;

        $user=$this->user_model->get_one(array("id"=>$id));
        $data['user'] = $user;

        $this->load->view('admin/user/edit',$data);
    }
    //编辑检测字段唯一
    public function field_check($str,$fields)
    {
        list($field,$id)=explode(',',$fields);
        //这里处理逻辑
        $info=$this->db->select($field)
            ->where($field,$str)
            ->where('id !=',$id)
            ->get(self::USER_TABLE)
            ->row_array();
        if (!empty($info)){
            return FALSE;
        }else{
            return TRUE;
        }
    }
    //执行修改
    public function edit_post(){
        if (IS_POST) {
            $role_ids = $this->input->post('role_id');
            $id=$this->input->post('id');
            if(!empty($role_ids) && is_array($role_ids)){
                $this->form_validation->set_rules(
                    'user_login',
                    'Username',
                    'trim|required|callback_field_check[user_login,'.$id.']',
                    array(
                        'required' => '请输入用户名',
                        'field_check' => '该用户名已存在'
                    )
                );
                $this->form_validation->set_rules(
                    'mobile',
                    'Mobile',
                    'trim|required|is_mobile|callback_field_check[mobile,'.$id.']',
                    array(
                        'required' => '请输入手机号',
                        'is_mobile' =>'请输入合法的手机号',
                        'field_check' => '该手机号已存在'

                    )
                );
                $this->form_validation->set_rules(
                    'user_email',
                    'Email',
                    'trim|required|valid_email|callback_field_check[user_email,'.$id.']',
                    array(
                        'required' => '请输入邮箱',
                        'valid_email' =>'请输入合法的邮箱',
                        'field_check' => '该邮箱已存在'

                    )
                );
                //$res = $this->user_model->form_validate('update');
                if($this->form_validation->run() == FALSE){

                    $this->error(validation_one_errors());

                }else{
                    $posts=$this->input->post(array('user_login','user_email','mobile'));
                    //执行添加
                    $userid = $this->user_model->save($posts,$id);

                    if($userid){
                        $this->load->model('Admin/roleuser_model');
                        foreach ($role_ids as $role_id){
                            if(sp_get_current_admin_id() != 1 && $role_id == 1){
                                $this->error("为了网站的安全，非网站创建者不可创建超级管理员！");
                            }
                            $arr = array("role_id"=>$role_id,"user_id"=>$userid);
                            $this->roleuser_model->add($arr);
                        }
                        $this->success("user_index",'closeCurrent',"/admin/user/index");
                    }else{
                        $this->error('修改失败！');
                    }
                }
            }else{
                $this->error("请为此用户指定角色！");
            }

        }
    }
    // 管理员删除
    public function delete(){
        $id = $this->input->get('id');
        if($id==1){
            $this->error("最高管理员不能删除！");
        }
        if ($this->user_model->delete(array("id"=>$id))!==false) {
            $this->load->model('Admin/roleuser_model');
            $this->roleuser_model->delete(array("user_id"=>$id));
            $this->success("user_index");
        } else {
            $this->error("删除失败！");
        }
    }

    // 停用管理员
    public function ban(){
        $id = $this->input->get('id');
        if (!empty($id)) {
            $result = $this->user_model->update_status(0,$id);
            if ($result!==false) {
                $this->success("user_index");
            } else {
                $this->error('管理员停用失败！');
            }
        } else {
            $this->error('数据传入失败！');
        }
    }
    // 启用管理员
    public function cancelban(){
        $id = $this->input->get('id');
        if (!empty($id)) {
            $result = $this->users_model->update_status(1,$id);
            if ($result!==false) {
                $this->success("user_index");
            } else {
                $this->error('管理员启用失败！');
            }
        } else {
            $this->error('数据传入失败！');
        }
    }
}
