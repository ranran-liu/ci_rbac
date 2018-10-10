<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/9
 * Time: 17:37
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Authaccess_model extends MY_Model
{
    const AUTHACCESS_TABLE = 'tp_auth_access';
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database('myproject',true);
    }

    //根据角色id获取权限表所有的rule_name

    public function get_rulename_list($role_id){

        $list = $this->project_db->select('rule_name')->where(array('role_id'=>$role_id))->get(self::AUTHACCESS_TABLE)->result_array();

        $list = array_column($list,'rule_name');
        //var_dump($list);exit;
        return $list;

    }

    //清除授权

    public function del_authaccess($where){

        $this->project_db->delete(self::AUTHACCESS_TABLE,$where);
        if($this->project_db->affected_rows()){
            return true;
        }else{
            return false;
        }
    }

    //添加权限

    public function add_authaccess($arr){

        $this->project_db->insert(self::AUTHACCESS_TABLE,$arr);

        if($this->project_db->affected_rows()){
            return true;
        }else{
            return false;
        }
    }
}