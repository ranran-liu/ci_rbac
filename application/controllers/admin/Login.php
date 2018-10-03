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
        $username = $this->input->post_get('username');
        if(!$username){
            $this->error('请输入用户名');
        }
        $password = $this->input->post_get('password');
        if(!$password){
            $this->error('请输入密码');
        }
        $verify = $this->input->post_get('verify');
        if(!$verify){
            $this->error('请输入验证码');
        }
        //检验验证码
        if(!sp_check_verify_code($verify)){
            $this->error('验证码不正确');
        }
        if(strpos($username,"@")>0){//邮箱登陆
            $where['user_email'] = $username;
        }else{
            $where['user_login'] = $username;
        }
        $sql = 'SELECT * FROM tp_users WHERE user_login = ? ';

    }
}