<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/23
 * Time: 16:44
 */
class Setting extends AdminBaseController
{
    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->db = $this->load->database("myproject", true);
    }

    public function site()
    {
        $this->load->view("admin/setting/site");
    }

    public function site_post(){
       $this->success();
    }
}