<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/11
 * Time: 18:08
 */
class Roleuser_model extends MY_Model
{
    const USER_TABLE = 'tp_role_user';

    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->db = $this->load->database('myproject',true);

    }

    public function add($arr){
        $res=$this->db->insert(self::USER_TABLE,$arr);
        return $res;
    }

    public function delete($where){
        $this->db->delete(self::USER_TABLE,$where);
        if($this->db->affected_rows()){
            return TRUE;
        }else{
            return FALSE;
        }
    }

    public function get_roleids($where){
        $list = $this->db->select('role_id')->where($where)->get(self::USER_TABLE)->result_array();
        //echo $this->db->last_query();
        $role_ids = array_column($list,'role_id');
        return $role_ids;
    }
}