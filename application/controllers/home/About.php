<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/5
 * Time: 18:27
 */
class About extends HomeBaseController
{
    function __construct()
    {
        parent::__construct();
        $this->data['title'] = '关于';
    }

    public function index(){

        $this->render('home/about','home');
    }
}