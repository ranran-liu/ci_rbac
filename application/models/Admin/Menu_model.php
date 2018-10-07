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
        return $data;
    }
    //取得树形结构的菜单
    public function get_tree($myid, $parent = "", $Level = 1) {
        $data = $this->admin_menu($myid);
        $Level++;
        if (is_array($data)) {
            $ret = NULL;
            foreach ($data as $a) {
                $id = $a['id'];
                $name = ucwords($a['app']);
                $model = ucwords($a['model']);
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
                    'lang'=> strtoupper($name.'_'.$model.'_'.$action),
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

        $result = $this->project_db->where(array('parentid' => $parentid, 'status' => 1))->order_by('listorder','ASC')->get('tp_menu')->result_array();

        if ($with_self) {
            $result2[] = $this->project_db->where(array('id' => $parentid))->get('tp_menu')->row_array();
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
}