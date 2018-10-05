<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/5
 * Time: 17:34
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Iauth {
    //默认配置
    protected $_config = array();
    private $CI;
    public function __construct()
    {
        $this->CI =& get_instance();
        $this->project_db = $this->CI->load->database('myproject',true);
    }
    /**
     * 检查权限
     * @param name string|array  需要验证的规则列表,支持逗号分隔的权限规则或索引数组
     * @param uid  int           认证用户的id
     * @param relation string    如果为 'or' 表示满足任一条规则即通过验证;如果为 'and'则表示需满足所有规则才能通过验证
     * @return boolean           通过验证返回true;失败返回false
     */
    public function check($uid,$name,$relation='or') {
        if(empty($uid)){
            return false;
        }
        if($uid==1){
            return true;
        }
        if (is_string($name)) {
            $name = strtolower($name);
            if (strpos($name, ',') !== false) {
                $name = explode(',', $name);
            } else {
                $name = array($name);
            }
        }
        $list = array(); //保存验证通过的规则名

        $sql = 'SELECT
                    `role_id`
                FROM
                    tp_role_user AS a
                INNER JOIN tp_role AS b ON a.role_id = b.id
                WHERE
                    a.`user_id` = ?
                AND b.`status` = 1';

        $groups = $this->project_db->query($sql,array($uid))->result_array();
        $groups = array_column($groups,'role_id');
        //var_dump($groups);exit;
        //有超级管理员角色
//        if(in_array(1, $groups)){
//            return true;
//        }

        if(empty($groups)){
            return false;
        }

        //$auth_access_model=M("AuthAccess");

        //$join = '__AUTH_RULE__ as b on a.rule_name =b.name';

        //$rules=$auth_access_model->alias("a")->join($join)->where(array("a.role_id"=>array("in",$groups),"b.name"=>array("in",$name)))->select();
        $sql = 'SELECT
                    *
                FROM
                    tp_auth_access AS a
                INNER JOIN tp_auth_rule AS b ON a.rule_name = b.name
                WHERE
                    a.role_id IN ?
                AND b.name IN ? ';
        $rules = $this->project_db->query($sql,array($groups,$name))->result_array();
        //echo $this->project_db->last_query();exit;
        foreach ($rules as $rule){
            if (!empty($rule['condition'])) { //根据condition进行验证
                $user = $this->getUserInfo($uid);//获取用户信息,一维数组

                $command = preg_replace('/\{(\w*?)\}/', '$user[\'\\1\']', $rule['condition']);
                //dump($command);//debug
                @(eval('$condition=(' . $command . ');'));
                if ($condition) {
                    $list[] = strtolower($rule['name']);
                }
            }else{
                $list[] = strtolower($rule['name']);
            }
        }

        if ($relation == 'or' and !empty($list)) {
            return true;
        }
        $diff = array_diff($name, $list);
        if ($relation == 'and' and empty($diff)) {
            return true;
        }
        return false;
    }

}