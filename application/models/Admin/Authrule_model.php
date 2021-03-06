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
    //更新
    public function save($where,$arr){
        $this->db->update(self::AUTHRUlE_TABLE,$arr,$where);
        if ($this->db->affected_rows()!==false){
            return TRUE;
        }else{
            return FALSE;
        }
    }
    public function getNum($where){
        $count = $this->db->where($where)->from(self::AUTHRUlE_TABLE)->count_all_results();
        return $count;
    }

    //删除
    public function delete($where){
        $this->db->delete(self::AUTHRUlE_TABLE,$where);
        if($this->db->affected_rows()){
            return TRUE;
        }else{
            return FALSE;
        }
    }

}