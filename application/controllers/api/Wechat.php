<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Wechat extends MY_Controller{

    function __construct()
    {
        parent::__construct();
        $this->load->config('wechat');
//        $this->load->library('redisservice');
//        $this->redis = $this->redisservice->connects();
//        if(!$this->redis)
//        {
//            exit('REDIS FAIL CONNECT');
//        }
    }
    //微信服务接入时，服务器需授权验证
    public function valid()
    {
        $echoStr = $this->input->get('echostr');
        $signature = $this->input->get('signature');
        $timestamp = $this->input->get('timestamp');
        $nonce = $this->input->get('nonce');
        //valid signature , option
        if($this->checkSignature($signature,$timestamp,$nonce) && $echoStr){
            //第一次介入微信API接口
            echo $echoStr;exit;
        }else{
            $this->responseMsg();
        }
    }
    //参数校验
    private function checkSignature($signature,$timestamp,$nonce)
    {
        // you must define TOKEN by yourself
        $token = $this->config->item('token');
        if (!$token) {
            echo 'TOKEN is not defined!';
        } else {
            $tmpArr = array($token, $timestamp, $nonce);
            // use SORT_STRING rule
            sort($tmpArr, SORT_STRING);
            $tmpStr = implode( $tmpArr );
            $tmpStr = sha1( $tmpStr );

            if( $tmpStr == $signature ){
                return true;
            }else{
                return false;
            }
        }
    }

    private function responseMsg(){

        //1.获取到微信推送过来post数据（xml格式）
        $postArr = $GLOBALS['HTTP_RAW_POST_DATA'];
        //2.处理消息类型，并设置回复类型和内容
        $postObj = simplexml_load_string( $postArr );
        //判断该数据包是否是订阅的事件推送
        if( strtolower( $postObj->MsgType) == 'event'){
            //如果是关注 subscribe 事件
            if( strtolower($postObj->Event == 'subscribe') ){
                //回复用户消息(纯文本格式)
                $toUser   = $postObj->FromUserName;
                $fromUser = $postObj->ToUserName;
                $time     = time();
                $msgType  =  'text';
                $content  = '欢迎关注我们的微信公众账号';
                $template = "<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                        </xml>";
                $info     = sprintf($template, $toUser, $fromUser, $time, $msgType, $content);
                echo $info;

            }
        }
    }



}
