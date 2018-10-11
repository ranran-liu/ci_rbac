<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/11
 * Time: 17:33
 */
defined('BASEPATH') OR exit('No direct script access allowed');
class User_model extends MY_Model
{
    const USER_TABLE = 'tp_users';

    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database('myproject',true);
        $this->load->library('form_validation');
    }

    public function form_validate(){
        $config = array(
            array(
                'field' => 'user_login',
                'label' => 'Username',
                'rules' => 'trim|required|is_unique[tp_users.user_login]',
                'errors' => array(
                    'required' => '请输入用户名',
                    'is_unique' => '该用户名已存在'
                ),
            ),
            array(
                'field' => 'user_pass',
                'label' => 'Password',
                'rules' => 'trim|required',
                'errors' => array(
                    'required' => '请输入密码',
                ),

            ),
            array(
                'field' => 'user_email',
                'label' => 'Email',
                'rules' => 'trim|required|valid_email',
                'errors' => array(
                    'required' => '请输入邮箱',
                    'valid_email' =>'请输入合法的邮箱'
                ),
            )
        );
        $this->form_validation->set_rules($config);

        return $this->form_validation->run();

    }

    public function add($arr){

        $res = $this->project_db->insert(self::USER_TABLE,$arr);

        return $res;
    }


}