<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/1
 * Time: 16:01
 */
defined('BASEPATH') OR exit('No direct script access allowed');
class Nav_model extends MY_Model
{
    const NAV_TABLE = 'tp_nav';
    public function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database('myproject',true);
    }

    public function delete($where){
        $this->db->delete(self::NAV_TABLE,$where);
        if($this->db->affected_rows()){
            return TRUE;
        }else{
            return FALSE;
        }
    }
}