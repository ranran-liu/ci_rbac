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
        $this->project_db = $this->load->database("myproject", true);
        $this->load->library('session');
        $userInfo=$this->session->userdata('userInfo');
        if($userInfo){
            //检查权限
            if(!$this->check_access($userInfo['ADMIN_ID'])){
                $this->error("您没有访问权限！");
            }
        }else{
            if($this->input->is_ajax_request()){
                $this->error("您还没有登录！");
            }else{
                redirect('admin/login/login','refresh');
            }

        }
    }
    private function check_access($uid){
        //如果用户角色是1，则无需判断
        if($uid == 1){
            return true;
        }
        //$m=$this->uri->segment(1);
        $m = trim($this->router->fetch_directory(),'/');
        $c = trim($this->router->fetch_class(),'/');
        $a = trim($this->router->fetch_method(),'/');

        $rule=strtolower($m.$c.$a);

        $no_need_check_rules=array("adminindexindex");

        if( !in_array($rule,$no_need_check_rules) ){
            $name = strtolower($m.'/'.$c.'/'.$a);
            return sp_auth_check($uid,$name);
        }else{
            return true;
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
