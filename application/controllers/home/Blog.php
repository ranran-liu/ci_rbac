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
        $this->data['title'] = '博客';
    }

    public function index(){
        //$this->load->view('home/blog');
        $this->render('home/blog','home');
    }

    public function read(){
        $id = $this->input->post_get('id');
        echo $id;exit;
        $this->render('home/read','home');
    }

}