<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 18:24
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Rbac extends AdminBaseController{

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database("myproject", true);
        $this->page = $this->input->post_get('pageNum')?$this->input->post_get('pageNum'):1;
        $this->pagesize = $this->input->post_get('numPerPage')?$this->input->post_get('numPerPage'):20;
        $this->load->model('Admin/role_model');
    }

    // 角色管理列表
    public function index() {
        $count = $this->project_db->from('tp_role')->count_all_results();
        $offset = ($this->page-1)*$this->pagesize;
        $list = $this->project_db->from('tp_role')->order_by("listorder","DESC")->limit($this->pagesize,$offset)->get()->result_array();
        $data['totalCount'] = $count;
        $data['pageNum'] = $this->page;
        $data['numPerPage'] = $this->pagesize;
        $data['roles'] = $list;
        $this->load->view('/admin/rbac/index',$data);
    }
    // 添加角色
    public function roleadd() {

        $this->load->view('/admin/rbac/roleadd');
    }
    // 添加角色提交
    public function roleadd_post() {

        if (IS_POST) {

            $res = $this->role_model->form_validate();

            if($res == FALSE){

                $this->error(validation_one_errors());

            }else{
                //执行添加
                $this->project_db->insert();


            }
        }


    }
}