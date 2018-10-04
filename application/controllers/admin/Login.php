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
        $result = $this->project_db->where($where)->get('tp_users')->row_array();
        if(!empty($result) && $result['user_type']==1){
            if(!sp_compare_password($password,$result['user_pass'])){
                $this->error('密码不正确');
            }
            $sql = 'SELECT
                        `role_id`
                    FROM
                        tp_role_user AS a
                    INNER JOIN tp_role AS b ON a.role_id = b.id
                    WHERE
                        a.`user_id` = ?
                    AND b.`status` = 1';
            $groups = $this->project_db->query($sql,array($result['id']))->result_array();
            if( $result["id"]!=1 && ( empty($groups) || empty($result['user_status']) ) ){
                $this->error('该用户已禁用');
            }
            //登入成功页面跳转
            $userInfo = array(
                'ADMIN_ID' => $result["id"],
                'user_login' => $result["user_login"],
                'user_nickname' => $result["user_nickname"],
                'user_email' => $result["user_email"],
            );
            $this->session->set_userdata('userInfo',$userInfo);
            $result['last_login_ip']=get_client_ip(0,true);
            $result['last_login_time']=date("Y-m-d H:i:s");
            $this->project_db->update('tp_users',$result,array('id'=>$result['id']));
            $this->success('1234',"/admin/index/index");
        }else{
            $this->error('用户不存在');
        }

    }

    public function test(){
        echo sp_password("admin");

    }
}