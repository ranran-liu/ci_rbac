<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/2
 * Time: 15:16
 */
class Blog extends HomeBaseController
{
    function __construct()
    {
        parent::__construct();
    }

    public function index(){
        $this->load->view('home/blog.html');
    }

}