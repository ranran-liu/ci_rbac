<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/1
 * Time: 16:01
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Navcat_model extends MY_Model
{
    const NAV_TABLE = 'tp_nav_cat';
    public function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database('myproject',true);
    }

    public function select(){
        return $this->db->select("*")->from(self::NAV_TABLE)->get()->result_array();
    }

    public function find(){
        return $this->db->select("*")->from(self::NAV_TABLE)->get()->row_array();
    }
}