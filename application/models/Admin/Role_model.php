<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/8
 * Time: 16:31
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Role_model extends MY_Model
{
    const Role_TABLE = 'tp_role';
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->project_db = $this->load->database('myproject',true);
        $this->load->library('form_validation');
    }

    public function form_validate(){
        $config = array(
            array(
                'field' => 'name',
                'label' => 'Username',
                'rules' => 'trim|required',
                'errors' => array(
                    'required' => '请输入角色名称',
                ),
            ),
        );
        $this->form_validation->set_rules($config);

        return $this->form_validation->run();

    }
    //角色添加
    public function role_insert($arr){
        $arr['create_time']=time();
        $arr['update_time']=time();
        $this->project_db->insert(self::Role_TABLE,$arr);
        if($this->project_db->affected_rows()){
            return true;
        }else{
            return false;
        }
    }

    //角色修改
    public function role_update($arr,$id){
        $arr['update_time']=time();
        $this->project_db->update(self::Role_TABLE,$arr,array('id'=>$id));
        if($this->project_db->affected_rows()!== FALSE){
            return true;
        }else{
            return false;
        }
    }
    //查询单条数据
    public function get_one($id){
        $res = $this->project_db->where(array('id'=>$id))->get(self::Role_TABLE)->row_array();
        return $res;
    }

    //角色删除

    public function role_delete($id){

        $this->project_db->delete(self::Role_TABLE,array('id'=>$id));
        if($this->project_db->affected_rows()){
            return true;
        }else{
            return false;
        }
    }

    //获取已启用的角色列表
    public function get_active_roles_list(){

        $list = $this->project_db->where(array('status'=>1))->order_by('id','DESC')->get(self::Role_TABLE)->result_array();
        return $list;
    }
}