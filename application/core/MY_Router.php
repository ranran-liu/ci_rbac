<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 17:41
 */
class MY_Router extends CI_Router {

    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Set default controller
     *
     * @return	void
     */
    protected function _set_default_controller()
    {
        if (empty($this->default_controller))
        {
            show_error('Unable to determine what should be displayed. A default route has not been specified in the routing file.');
        }

        // Is the method being specified?
//		if (sscanf($this->default_controller, '%[^/]/%s', $class, $method) !== 2)
//		{
//			$method = 'index';
//		}
        //判断是否出现二级文件夹
        $index = strripos($this->default_controller, '/');
        if ($index == false) {
            //如果没有直接取默认值即可
            $class = $this->default_controller;
        } else {
            //如果有
            //将默认添加的“文件夹/控制器”进行分割
            //目录的字符串
            $this->directory = substr($this->default_controller, 0, $index + 1);
            //类的字符串
            $class = substr($this->default_controller, $index + 1);
        }
        //默认方法
        $method = $this->method;


        if ( ! file_exists(APPPATH.'controllers/'.$this->directory.ucfirst($class).'.php'))
        {
            // This will trigger 404 later
            return;
        }

        $this->set_class($class);
        $this->set_method($method);

        // Assign routed segments, index starting from 1
        $this->uri->rsegments = array(
            1 => $class,
            2 => $method
        );

        log_message('debug', 'No URI present. Default controller set.');
    }
}