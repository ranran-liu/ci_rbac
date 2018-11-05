<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends HomeBaseController {

    function __construct()
    {
        parent::__construct();
    }

    public function index(){
        $data['title'] = '逍遥-首页';
        $this->load->view('home/index',$data);
    }
    public function test(){
        echo $_SERVER['REQUEST_TIME'].'<br>';
        echo time();
    }
}