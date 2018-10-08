<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends AdminBaseController {

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
    }

    public function index()
    {
        $this->load->model('Admin/menu_model','menu');
        $list=$this->menu->menu_json();
        $data['SUBMENU_CONFIG'] = $list;
        $this->load->view('admin/boot/index',$data);
    }


}
