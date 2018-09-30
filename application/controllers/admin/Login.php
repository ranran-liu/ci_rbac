<?php
/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/9/29
 * Time: 18:26
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MY_Controller {

    function __construct()
    {
        parent::__construct();
        $this->project_db = $this->load->database("myproject", true);
    }
}