<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 18:26
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends AdminBaseController{

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
        $this->load->model('Admin/user_model');
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
                $res = $this->user_model->form_validate();
                //$res = $this->user_model->insert($this->input->post(),'tp_users');
                if($res == FALSE){

                    $this->error(validation_one_errors());

                }else{
                    $posts=$this->input->post();
                    //执行添加
                    $return = $this->user_model->add($posts);

                    if($return){
                        $this->load->model('Admin/roleuser_model');
                        foreach ($role_ids as $role_id){
                            if(sp_get_current_admin_id() != 1 && $role_id == 1){
                                $this->error("为了网站的安全，非网站创建者不可创建超级管理员！");
                            }
                            $arr = array("role_id"=>$role_id,"user_id"=>$return);
                            $this->roleuser_model->add($arr);
                        }
                        $this->success("rbac_index",'closeCurrent',"/admin/rbac/index");
                    }else{
                        $this->error('添加失败！');
                    }
                }

            }else{
                $this->error("请为此用户指定角色！");
            }

        }
    }
}
