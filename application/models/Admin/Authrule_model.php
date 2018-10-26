<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/9
 * Time: 17:37
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Authrule_model extends MY_Model
{
    const AUTHRUlE_TABLE = 'tp_auth_rule';
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->db = $this->load->database('myproject',true);
    }

    //添加
    public function  add($arr){

        $res = $this->db->insert(self::AUTHRUlE_TABLE,$arr);
        if($res){
            return $this->db->insert_id();
        }else{
            return FALSE;
        }
    }

    public function getNum($where){
        $count = $this->db->where($where)->from(self::AUTHRUlE_TABLE)->count_all_results();
        return $count;
    }

}