<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 14:18
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Menu extends AdminBaseController{

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
    }

    public function index(){
        $this->load->view('/admin/menu/index');
    }
}