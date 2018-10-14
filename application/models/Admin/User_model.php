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
        $this->db = $this->load->database('myproject',true);
        $this->load->library('form_validation');
    }

    public function form_validate(){
        $config = array(
            array(
                'field' => 'user_login',
                'label' => 'Username',
                'rules' => 'trim|required|is_unique['.self::USER_TABLE.'.user_login]',
                'errors' => array(
                    'required' => '请输入用户名',
                    'is_unique' => '该用户名已存在'
                ),
            ),
            array(
                'field' => 'user_pass',
                'label' => 'Password',
                'rules' => 'trim|required|sp_password',
                'errors' => array(
                    'required' => '请输入密码',
                ),

            ),
            array(
                'field' => 'user_email',
                'label' => 'Email',
                'rules' => 'trim|required|valid_email|is_unique['.self::USER_TABLE.'.user_email]',
                'errors' => array(
                    'required' => '请输入邮箱',
                    'valid_email' =>'请输入合法的邮箱',
                    'is_unique' => '该邮箱已存在'
                ),
            )
        );
        //$this->form_validation->set_rules('user_login', 'Username', array('required',array('user_login_callable', array($this, 'valid_username'))));
        $rr=$this->form_validation->set_rules($config);
        //var_dump($rr);

        return $this->form_validation->run();

    }


    public function add($arr){

        $res = $this->db->insert(self::USER_TABLE,$arr);

        if($res){
            return $this->db->insert_id();
        }else{
            return false;
        }
    }
    public function save($arr){
        $this->db->update(self::USER_TABLE,$arr);

        if($this->db->affected_rows()!==false){
            return true;
        }else{
            return false;
        }
    }
    public function delete($where){
        $this->db->delete(self::USER_TABLE,$where);
        if($this->db->affected_rows()){
            return TRUE;
        }else{
            return FALSE;
        }
    }

    public function get_one($where){
        $one = $this->db->where($where)->get(self::USER_TABLE)->row_array();
        return $one;
    }


}