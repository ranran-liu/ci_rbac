<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/28
 * Time: 19:35
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Mailer extends AdminBaseController{

    function __construct()
    {
        parent::__construct();
        $this->load->config('mailer',TRUE);
    }
    /**
     * SMTP配置
     */
    public function index(){

        $this->load->view('admin/mailer/index');
    }
    /**
     * SMTP配置处理
     */
    public function index_post() {

        $this->load->config('mailer');
        $post = array_map('trim', $this->input->post(NULL,TRUE));

        if(in_array('', $post) && !empty($post['smtpsecure'])) {
            $this->error("不能留空！");
        }

        $config['mail_sender']        = $post['sender']; //发件人
        $config['mail_address']       = $post['address']; //邮箱地址
        $config['mail_smtp_server']   = $post['smtp_server']; //SMTP服务器
        $config['mail_secure']        = $post['smtp_secure']; //连接方式
        $config['mail_smtp_port']     = $post['smtp_port']; //SMTP服务器端口
        $config['mail_loginname']     = $post['loginname']; //发件箱帐号
        $config['mail_password']      = $post['password']; //发件箱密码

        $result = sp_set_config($config,'mailer');
        if($result){
            $this->success("mailer_index","closeCurrent","/admin/mailer/index");
        }else{
            $this->error("保存失败！");
        }

    }
}