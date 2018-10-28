<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/28
 * Time: 19:35
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Mailer extends AdminBaseController{

    function __construct()
    {
        parent::__construct();
        $this->load->config('mailer',true);
    }
    /**
     * SMTP配置
     */
    public function index(){

        $this->load->view('admin/mailer/index');
    }
}