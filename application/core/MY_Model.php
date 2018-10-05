<?php

class MY_Model extends CI_Model
{
   public function __construct()
   {
       parent::__construct();
   }

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

}