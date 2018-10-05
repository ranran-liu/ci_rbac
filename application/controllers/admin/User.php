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
        $data['page'] = $this->page;
        $data['users'] = $this->pagesize;
        $this->load->view('admin/user/index',$data);
    }
}
