<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller
{

    protected $data = array();
    function __construct()
    {
        parent::__construct();
//        var_dump($this->router->fetch_directory());
//        var_dump($this->router->fetch_class());
//        var_dump($this->router->fetch_method());
        //print_r($this->router->fetch_class());//控制器
        //print_r($this->router->fetch_method());//方法名
    }
    //加载模板分配变量
    protected function render($the_view = NULL, $template = 'admin')
    {
        if($template == 'json' || $this->input->is_ajax_request())
        {
            header('Content-Type: application/json');
            echo json_encode($this->data);
        }
        else
        {
            $this->data['the_view_content'] = (is_null($the_view)) ? '' : $this->load->view($the_view,$this->data, TRUE);;
            $this->load->view('templates/'.$template.'_view', $this->data);
        }
    }

    //api接口返回数据格式
    public function jsonencode($code,$status,$msg,$arr=''){
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin:*');
        $json_array['info']=$code;
        $json_array['status']=$status;
        $json_array['msg']=$msg;
        $json_array['data']=$arr;
        $jsonstr=json_encode($json_array,JSON_UNESCAPED_UNICODE);
        echo $jsonstr;exit;
    }
    /**
     * 检查签名
     * @param array $data //数组
     * @param string $type //类型
     */
    public function checkBaseSig()
    {
        $uid = $this->input->post_get("uid");
        $sign = $this->input->post_get("sign");
        $timestamp = $this->input->post_get("timestamp");
        if(!checkBaseSig($sign,$uid,$timestamp)){
            $this->outputs(false,"签名错误");
        }
    }

    /**
     * 统一输出
     * @param array $data //数组
     * @param string $type //类型
     */
    public function outputs($status,$data,$type="json")
    {
        header('Access-Control-Allow-Origin:*');
        $data = array("status"=>$status,"data"=>$data);
        switch($type)
        {
            case "json":
                $result = json_encode($data);
                break;
            case "xml":
            default:
                $result = arrayToXML($data);
                break;
        }
       
        echo $result;
        exit();
    }


    public function error($message='操作失败') {
        //$this->dispatchJump($message,0,$jumpUrl,$ajax);
        header("Content-type:text/html;charset=utf-8");
        echo '{"statusCode":"300","message":"'.$message.'"}';
        exit;
    }

    public function success($navTabId='',$callbackType='',$forwardUrl='')
    {
        header("Content-type:text/html;charset=utf-8");
        echo '{"statusCode":"200","message":"操作成功","navTabId":"'.$navTabId.'","rel":"","callbackType":"'.$callbackType.'","forwardUrl":"'.$forwardUrl.'"}';
        exit;
    }
}


class AdminBaseController extends MY_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->project_db = $this->load->database("bar", true);
        $this->load->library('session');
        $userInfo=$this->session->userdata('userInfo');
        if($userInfo){
            if(isset($userInfo['appid'])){
                //检查权限
                if(!$this->check_access($userInfo['phone'])){
                    $this->ajax_return(['message'=>'您没有访问权限！']);
                }
            }else{
                //redirect('admin/bind/app_list');
                redirect('admin/bind/index');
            }
        }else{
            if($this->input->is_ajax_request()){
                $this->ajax_return(['status_code'=>300,'message'=>'您还没有登录！','url'=>'admin/login/login']);
            }else{
                redirect('admin/login/login','refresh');
            }

        }
    }
    //检查权限
    public function check_access($phone){
        //检查权限
        $sql='select * from tp_wxadmin where phone=?';
        $query=$this->project_db->query($sql,$phone);
        $wxadmin = $query->row_array();
        //print_r($wxadmin);
        if($wxadmin['is_admin']==1){//主管理员  全部权限
            return true;
        }
        //return true;
        $m=$this->uri->segment(1);
        $c = $this->router->fetch_class();
        $a = $this->router->fetch_method();
        $name=strtolower($m."/".$c."/".$a);
//        echo $name;
//        echo '<br>';
//        echo $m;
//        echo '<br>';
//        echo $c;
//        echo '<br>';
//        echo $a;exit;
        if($wxadmin['is_admin']==0){//副管理员  部分权限
            $sql='select * from tp_func where status=1 and menu_type=2 and info= ? ';
            $result=$this->project_db->query($sql,array($name))->row_array();
            if(!$result){
                return false;
            }
            return sp_auth_check($phone,$result['id']);
            //print_r($result);
        }
    }

    protected function render($the_view = NULL, $template = 'admin')
    {
        parent::render($the_view, $template);
    }

    /**
     * 消息提示
     * @param type $message
     * @param type $jumpUrl
     * @param type $ajax
     */
    public function success($navTabId='',$callbackType='',$forwardUrl='')
    {
        header("Content-type:text/html;charset=utf-8");
        echo '{"statusCode":"200","message":"操作成功","navTabId":"'.$navTabId.'","rel":"","callbackType":"'.$callbackType.'","forwardUrl":"'.$forwardUrl.'"}';
        exit;
    }
}


class ApiController extends MY_Controller
{
    function __construct()
    {
        parent::__construct();
    }

}

class HomeBaseController extends MY_Controller {
    function __construct()
    {
        parent::__construct();
    }
}
