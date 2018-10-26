<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 14:18
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Menu extends AdminBaseController{

    const MENU_TABLE = 'tp_menu';
    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->db = $this->load->database("myproject", true);
        $this->load->model('Admin/menu_model','menu');
    }

    public function index(){
        $result = $this->db->select('*')->from(self::MENU_TABLE)->order_by('listorder ASC','id ASC')->get()->result_array();
        //print_r($result);exit;
        $this->load->library('tree');
        $this->tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
        $this->tree->nbsp = '&nbsp;&nbsp;&nbsp;';

        $newmenus=array();
        foreach ($result as $m){
            $newmenus[$m['id']]=$m;

        }
        foreach ($result as $n=> $r) {
            $id = $r['id'];
            $result[$n]['level'] = $this->_get_level($id, $newmenus);
            $result[$n]['parentid_node'] = ($r['parentid']) ? ' class="child-of-node-' . $r['parentid'] . '"' : '';
            $result[$n]['str_manage'] = "<a href='/admin/menu/add?parentid=$id' target='dialog' height='680' width='800'>".'添加子菜单'."</a> | <a href='/admin/menu/edit?id=$id' target='dialog' height='680' width='800'>".'编辑'."</a> | <a href='admin/menu/delete?id=$id' target='ajaxTodo' title='确认要删除吗？'>".'删除'."</a> ";
            $result[$n]['status'] = $r['status'] ? '显示' : '隐藏';
            $result[$n]['app']=strtolower($r['app']."/".$r['model']."/".$r['action']);

        }

        $this->tree->init($result);

        $str="<tr target='ids' rel='\$id'>
        		<td><input type='checkbox' name='ids' value='\$id'></td>
				<td><input name='listorders[\$id]' type='text' size='3' value='\$listorder'></td>
				<td>\$id</td>
				<td>\$app</td>
				<td class='div_lift'>\$spacer\$name</td>
				<td>\$status</td>
				<td>\$str_manage</td>				
			</tr>";
        $categorys = $this->tree->get_tree(0, $str);
        $data['categorys'] =  $categorys;
        $this->load->view('admin/menu/index',$data);
    }
    /**
     * 获取菜单深度
     * @param $id
     * @param $array
     * @param $i
     */
    protected function _get_level($id, $array = array(), $i = 0) {

        if ($array[$id]['parentid']==0 || empty($array[$array[$id]['parentid']]) || $array[$id]['parentid']==$id){
            return  $i;
        }else{
            $i++;
            return $this->_get_level($array[$id]['parentid'],$array,$i);
        }

    }

    /**
     *  添加页
     */
    public function add() {
        $this->load->library('tree');
        $parentid = $this->input->get('parentid')?$this->input->get('parentid'):0;
        $result = $this->db->select('*')->order_by("listorder ASC")->from(self::MENU_TABLE)->get()->result_array();
        foreach ($result as $r) {
            $r['selected'] = $r['id'] == $parentid ? 'selected' : '';
            $array[] = $r;
        }
        $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $this->tree->init($array);
        $select_categorys = $this->tree->get_tree(0, $str);
        $data["select_categorys"] = $select_categorys;
        $this->load->view('admin/menu/add',$data);
    }
    /**
     *  编辑页
     */
    public function edit() {
        $this->load->library('tree');
        $id = $this->input->get('id');
        $rs = $this->db->select('*')->where('id',$id)->from(self::MENU_TABLE)->get()->row_array();
        $result = $this->db->select('*')->order_by("listorder ASC")->from(self::MENU_TABLE)->get()->result_array();
        foreach ($result as $r) {
            $r['selected'] = $r['id'] == $rs['parentid'] ? 'selected' : '';
            $array[] = $r;
        }
        $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $this->tree->init($array);
        $select_categorys = $this->tree->get_tree(0, $str);
        $data["data"] = $rs;
        $data["select_categorys"] = $select_categorys;
        $this->load->view('admin/menu/edit',$data);
    }
}