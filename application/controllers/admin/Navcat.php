<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/1
 * Time: 14:43
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Navcat extends AdminBaseController
{
    const NAVCAT_TABLE = 'tp_nav_cat';
    function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database("myproject", true);
    }
    /**
     *  显示
     */
    public function index() {

        $cats=$this->db->select("*")->from(self::NAVCAT_TABLE)->get()->result_array();
        $data['navcats']=$cats;
        $this->load->view('admin/navcat/index',$data);
    }

    /**
     *  添加
     */
    public function add() {
        $this->load->view('admin/navcat/add');
    }

    /**
     *  添加保存
     */
    public function add_post() {
        if (IS_POST) {
            $posts = array_map('trim', $this->input->post(NULL,TRUE));
            if(empty($posts['active'])){
                $posts['active']=0;
            }else{
                $this->db->update(self::NAVCAT_TABLE,array("active"=>0),array("active"=>1));
            }
            if(empty($posts['name'])){
                $this->error('请输入名称');
            }
            $this->db->insert(self::NAVCAT_TABLE,$posts);
            if ($this->db->affected_rows()!==false) {
                $this->success('navcat_index','closeCurrent',"/admin/navcat/index");
            } else {
                $this->error("添加失败！");
            }
        }
    }

    /**
     * 编辑
     */
    public function edit(){

        $id= $this->input->get('id');
        if(!$id){
            $this->error('缺少参数');
        }
        $navcat=$this->db->where(array('navcid'=>$id))->from(self::NAVCAT_TABLE)->get()->row_array();
        $data['navcat']=$navcat;
        $this->load->view('admin/navcat/edit',$data);
    }

    /**
     * 编辑
     */
    public function edit_post(){
        if (IS_POST) {
            $posts = array_map('trim', $this->input->post(NULL,TRUE));
            if(empty($posts['active'])){
                $posts['active']=0;
            }else{
                $this->db->update(self::NAVCAT_TABLE,array("active"=>0),array("active"=>1));
            }
            if(empty($posts['name'])){
                $this->error('请输入名称');
            }
            $this->db->update(self::NAVCAT_TABLE,$posts,array('navcid'=>$posts['navcid']));
            if ($this->db->affected_rows()!==false) {
                $this->success('navcat_index','closeCurrent',"/admin/navcat/index");
            } else {
                $this->error("修改失败！");
            }
        }
    }

    public function delete(){
        $id= $this->input->get('id');
        if(!$id){
            $this->error('缺少参数');
        }
        $this->db->delete(self::NAVCAT_TABLE,array('navcid'=>$id));
        if ($this->db->affected_rows()!==false) {
            $this->load->model('Admin/nav_model','nav');
            $this->nav->delete(array('cid'=>$id));
            $this->success('navcat_index');
        } else {
            $this->error("删除失败！");
        }
    }
}