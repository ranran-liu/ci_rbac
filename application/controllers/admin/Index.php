<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends MY_Controller{

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
    }

    public function index()
    {
//        $this->load->model('Admin/menu_model','menu');
//        $list=$this->menu->menu_json();
//
//        $this->session->set_userdata(array('admin_menu'=>$list));

        $this->load->view('admin/boot/index');
    }

    public function index1(){
        print_r($this->session->userdata());
    }
    public function test(){
        $this->load->model('admin/menu_model','menu');
        print_r($this->menu->menu_json());
    }

}
