<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/11/1
 * Time: 16:07
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Nav extends AdminBaseController
{
    const NAVCAT_TABLE = 'tp_nav';
    function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database("myproject", true);
    }

    /**
     *  显示
     */
    public function index() {
        $cid=$this->input->post_get('cid')?$this->input->post_get('cid'):0;
        if(!empty($cid)){
            $result = $this->db->where(array('cid'=>$cid))->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        }
        else
        {
            $result = $this->db->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        }
        $this->load->model('Admin/navcat_model');
        $cats=$this->navcat_model->select();

        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;&nbsp;&nbsp;';
        $array = [];
        foreach ($result as $r) {
            $id  = $r['id'];
            $_cid = $r['cid'];
            $parentid = $r['parentid'];
            $r['str_manage'] = "<a href='/admin/nav/add?parentid=$id&cid=$_cid' target='dialog' height='350' width='766'>".'添加子菜单'."</a> |
					<a href='/admin/nav/edit?id=$id&parentid=$parentid&cid=$_cid' target='dialog' height='350' width='766'>".'编辑'."</a> |
				    <a href='/admin/nav/delete?id=$id' target='ajaxTodo' title='确定要删除吗？'>".'删除'."</a>";

            $r['status'] = $r['status'] ? '显示' : '隐藏';
            if ($cats[0]['navcid']==$r['cid']){
                $r['navname']=$cats[0]['name'];
            }
            else {
                $r['navname']=$cats[1]['name'];
            }
            $array[] = $r;
        }
        $this->tree->init($array);
        $str = "<tr>
				<td><input name='listorders[\$id]' type='text' size='3' value='\$listorder' class='input input-order'></td>
				<td>\$id</td>
				<td>\$navname</td>
				<td >\$spacer\$label</td>
				<td >\$href</td>
			    <td>\$status</td>
				<td>\$str_manage</td>
			</tr>";
        $categorys = $this->tree->get_tree(0, $str);
        $data["categorys"] = $categorys;
        $data["navcats"] = $cats;
        $data["navcid"] = $cid;
        $this->load->view('admin/nav/index',$data);
    }

    /**
     *  添加
     */
    public function add() {
        $cid=$this->input->post_get('cid')?intval($this->input->post_get('cid')):0;
        $result = $this->db->where(array('cid'=>$cid))->order_by("listorder ASC")->from(self::NAVCAT_TABLE)->get()->result_array();
        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;│ ', '&nbsp;├─ ', '&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;';
        $parentid=$this->input->get('parentid')?$this->input->get('parentid'):0;
        $array = [];
        foreach ($result as $r) {
            //$r['str_manage'] = '<a href="' . U("Menu/add", array("parentid" => $r['id'], "menuid" => $this->input->get("menuid"))) . '">添加子菜单</a> | <a href="' . U("Menu/edit", array("id" => $r['id'], "menuid" => I("get.menuid"))) . '">修改</a> | <a class="js-ajax-delete" href="' . U("Menu/delete", array("id" => $r['id'], "menuid" => I("get.menuid"))) . '">删除</a> ';
            $r['status'] = $r['status'] ? "显示" : "隐藏";
            $r['selected'] = $r['id']==$parentid?"selected":"";
            $array[] = $r;
        }

        $this->tree->init($array);
        $str="<option value='\$id' \$selected>\$spacer\$label</option>";
        $nav_trees = $this->tree->get_tree(0, $str);
        $data["nav_trees"] = $nav_trees;

        $this->load->model('Admin/navcat_model');
        $cats=$this->navcat_model->select();
        $data["navcats"] = $cats;

        //$navs= $this->_select();

//        foreach ($navs as $key=>$navdata){
//            $this->tree->init($navdata['items']);
//            $tpl="<option value='\$rule' >\$spacer\$label</option>";
//            $navs_html = $this->tree->get_tree(0, $tpl);
//            $navs[$key]['html']=$navs_html;
//        }
//
//        $data['navs'] = $navs;

        $data["navcid"] = $cid;
        $this->load->view('admin/nav/add',$data);
    }

}