<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/8
 * Time: 16:31
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Role_model extends MY_Model
{
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
                'field' => 'name',
                'label' => 'Username',
                'rules' => 'trim|required',
                'errors' => array(
                    'required' => '请输入角色名称',
                ),
            ),
        );
        $this->form_validation->set_rules($config);

        if ($this->form_validation->run() == FALSE)
        {

            return validation_one_errors();
        }
        else
        {
            return TRUE;
        }
    }
}