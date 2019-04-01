<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/19
 * Time: 22:54
 */
class Viper extends AdminBaseController
{
    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->db = $this->load->database("myproject", true);
        $this->page = $this->input->post_get('pageNum')?$this->input->post_get('pageNum'):1;
        $this->pagesize = $this->input->post_get('numPerPage')?$this->input->post_get('numPerPage'):20;
    }
    //用户列表
    public function index(){
        $this->load->view('admin/viper/index');
    }
}