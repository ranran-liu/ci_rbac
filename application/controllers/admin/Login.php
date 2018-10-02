<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 18:26
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MY_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
    }

    //后台登陆界面
    public function login() {
        if($this->session->userdata('userInfo')){//已经登录
            redirect('admin/index/index', 'refresh');
        }else{
            $this->load->view('admin/login/login');
        }
    }
    //后台退出登录
    public function logout(){
        $this->session->unset_userdata(array('userInfo'));
        redirect('admin/login/login','refresh');
    }

    //执行登录
    public function dologin(){
        echo 123;
    }
}