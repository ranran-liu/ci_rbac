<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Redisservice{

    private $CI;
    public $redis;
    private $connect_flag=false;

    public function __construct()
    {
        $this->CI =& get_instance();
        $this->redis = new Redis();
    }

    public function connects()
    {
        $result = $this->redis->connect($this->CI->config->item('redis_host'), $this->CI->config->item('redis_port'), $this->CI->config->item('redis_timeout'));
        if($result && $this->CI->config->item('redis_auth'))
        {
            $result = $this->redis->auth($this->CI->config->item('redis_auth'));
        }
        if($result) $this->connect_flag = true;
        return $result?$this->redis:false;
    }


    public function __destruct()
    {
        if($this->connect_flag) $this->redis->close();
    }
}