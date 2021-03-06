<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/4
 * Time: 16:20
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Menu_model extends MY_Model
{
    const MENU_TABLE = 'tp_menu';
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->userInfo=$this->session->userdata('userInfo');
        $this->project_db = $this->load->database('myproject',true);
    }
    /**
     * 菜单树状结构集合
     */
    public function menu_json() {
        $data = $this->get_tree(0);
        //print_r($data);exit;
        if($data == false){
            return array();
        }else{
            return $data;
        }

    }
    //取得树形结构的菜单
    public function get_tree($myid, $parent = "", $Level = 1) {
        $data = $this->admin_menu($myid);
        $Level++;
        if (is_array($data)) {
            $ret = [];
            foreach ($data as $a) {
                $id = $a['id'];
                $name = strtolower($a['app']);
                $model = strtolower($a['model']);
                $action = $a['action'];
                //附带参数
                $params = "";
                if ($a['data']) {
                    $params = "?" . htmlspecialchars_decode($a['data']);
                }
                $array = array(
                    "icon" => $a['icon'],
                    "id" => $id . $name,
                    "name" => $a['name'],
                    "parent" => $parent,
                    "url" => rtrim(site_url(),'/')."/{$name}/{$model}/{$action}{$params}",
                    'target_type'=>empty($a['target_type'])?'navTab':$a['target_type'],
                    'rel'=>"{$model}_{$action}"
                );



                $ret[$id . $name] = $array;
                $child = $this->get_tree($a['id'], $id, $Level);
                //由于后台管理界面只支持三层，超出的不层级的不显示
                if ($child && $Level <= 3) {
                    $ret[$id . $name]['items'] = $child;
                }

            }
            return $ret;
        }

        return false;
    }
    /**
     * 按父ID查找菜单子项
     * @param integer $parentid   父菜单ID
     */
    public function admin_menu($parentid, $with_self = false) {
        //父节点ID
        $parentid = (int) $parentid;

        $result = $this->project_db->where(array('parentid' => $parentid, 'status' => 1))->order_by('listorder','ASC')->order_by('id','ASC')->get(self::MENU_TABLE)->result_array();

        if ($with_self) {
            $result2[] = $this->project_db->where(array('id' => $parentid))->get(self::MENU_TABLE)->row_array();
            $result = array_merge($result2, $result);
        }
        //权限检查
        if (sp_get_current_admin_id() == 1) {
            //如果是超级管理员 直接通过
            return $result;
        }
        $array = array();
        foreach ($result as $v) {

            //方法
            $action = $v['action'];

            //public开头的通过
            if (preg_match('/^public_/', $action)) {
                $array[] = $v;
            } else {

                if (preg_match('/^ajax_([a-z]+)_/', $action, $_match)){

                    $action = $_match[1];
                }
                $rule_name=strtolower($v['app']."/".$v['model']."/".$action);
                if ( sp_auth_check(sp_get_current_admin_id(),$rule_name)){
                    $array[] = $v;
                }

            }
        }
        return $array;
    }
    //检测同样的应用/控制器/方法是否存在
    public function checkAction($data){
        //检查是否重复添加
        $find = $this->db->select('id')->where($data)->from(self::MENU_TABLE)->get()->row_array();
        if ($find) {
            return false;
        }
        return true;
    }
    public function checkActionUpdate($data) {
        //检查是否重复添加
        $id=$data['id'];
        unset($data['id']);
        $find = $this->db->select('id')->where($data)->from(self::MENU_TABLE)->get()->row_array();
        if (isset($find['id']) && $find['id']!=$id) {
            return false;
        }
        return true;
    }
    //添加数据
    public function add($arr){

        $res = $this->db->insert(self::MENU_TABLE,$arr);
        if($res){
            return $this->db->insert_id();
        }else{
            return FALSE;
        }
    }
    //编辑数据
    public function save($arr){
        $this->db->update(self::MENU_TABLE,$arr,array('id'=>$arr['id']));
        if ($this->db->affected_rows()!==false){
            return TRUE;
        }else{
            return FALSE;
        }
    }

    public  function menu_list(){

        $list = $this->project_db->get(self::MENU_TABLE)->result_array();

        return $list;
    }

    public function get_menu_one($where){

        $res = $this->project_db->where($where)->get(self::MENU_TABLE)->row_array();

        return $res;
    }
}