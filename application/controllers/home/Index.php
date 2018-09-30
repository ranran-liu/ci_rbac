<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends HomeBaseController {

    function __construct()
    {
        parent::__construct();
    }

    public function index(){
        echo '前端页面';
    }
    public function test(){
        echo $_SERVER['REQUEST_TIME'].'<br>';
        echo time();
    }
}