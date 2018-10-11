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
        $this->project_db = $this->load->database('myproject',true);

    }

    public function add($arr){
        $res=$this->project_db->insert(self::USER_TABLE,$arr);
        return $res;
    }
}