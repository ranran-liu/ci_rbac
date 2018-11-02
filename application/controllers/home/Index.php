<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends HomeBaseController {

    function __construct()
    {
        parent::__construct();
    }

    public function index(){
        $this->load->view('home/index.html');
    }
    public function test(){
        echo $_SERVER['REQUEST_TIME'].'<br>';
        echo time();
    }
}