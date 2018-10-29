<?php
/*
 *
 *   自定义的共函数
 *
 */



// 创建token  加密
function genToken($str){
    $str = encrypt($str,'E',tokenkey);
    return $str;
}

// 验证token  解密
function checkToken($str,$userid){
    $key='token'.$userid;
    $CI = &get_instance();
    $CI->load->library('redisservice');
    $redis=$CI->redisservice->connects();
    $redis_str=$redis->get($key);
    $str = str_replace("^", "+",  $str);
    if ($redis_str!=$str || empty($redis_str)){
        $arr['status']='Err';
        return $arr;
    }
    $str=encrypt($str,'D',tokenkey);
    $arr=@explode(',', $str);
    if ($arr[0]==$userid && $userid){
        $arr['status']='OK';

    }
    else
    {
        $arr['status']='Err';
    }
    return $arr;
}
// 加密/解密方法 $string：需要加密解密的字符串；$operation：判断是加密还是解密，E表示加密，D表示解密；$key：密匙
function encrypt($string,$operation,$key=''){
    $key=md5($key);
    $key_length=strlen($key);
    $string=$operation=='D'?base64_decode($string):substr(md5($string.$key),0,8).$string;
    $string_length=strlen($string);
    $rndkey=$box=array();
    $result='';
    for($i=0;$i<=255;$i++){
        $rndkey[$i]=ord($key[$i%$key_length]);
        $box[$i]=$i;
    }
    for($j=$i=0;$i<256;$i++){
        $j=($j+$box[$i]+$rndkey[$i])%256;
        $tmp=$box[$i];
        $box[$i]=$box[$j];
        $box[$j]=$tmp;
    }
    for($a=$j=$i=0;$i<$string_length;$i++){
        $a=($a+1)%256;
        $j=($j+$box[$a])%256;
        $tmp=$box[$a];
        $box[$a]=$box[$j];
        $box[$j]=$tmp;
        $result.=chr(ord($string[$i])^($box[($box[$a]+$box[$j])%256]));
    }
    if($operation=='D'){
        if(substr($result,0,8)==substr(md5(substr($result,8).$key),0,8)){
            return substr($result,8);
        }else{
            return'';
        }
    }else{
        return str_replace('=','',base64_encode($result));
    }

}




//接收数据
function get_back_data() {
    $xml = file_get_contents("php://input");
    //$this->logs('response.txt',$xml);
    $data = xml2array($xml);
    return $data;
}
function xml2array($xml)
{
    if($xml == '') return '';
    libxml_disable_entity_loader(true);
    $arr = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
    return $arr;
}
function array2xml($arr)
{
    if(!is_array($arr) || count($arr) == 0) return '';

    $xml = "<xml>";
    foreach ($arr as $key=>$val)
    {
        if (is_numeric($val)){
            $xml.="<".$key.">".$val."</".$key.">";
        }else{
            $xml.="<".$key."><![CDATA[".$val."]]></".$key.">";
        }
    }
    $xml.="</xml>";
    return $xml;
}
/**
 * 数据签名
 * @param $data
 * @return string
 */
//生成签名
function set_sign($arr,$secret){
    //去除空值
    $arr = array_filter($arr);
    if(isset($arr['sign'])){
        unset($arr['sign']);
    }
    //按照键名字典排序
    ksort($arr);
    //生成url格式的字符串
    $str = $this->arrToUrl($arr) . '&secret='.$secret;
    return strtoupper(md5($str));
}
function arrToUrl($arr){
    return urldecode(http_build_query($arr));
}
function create_guid(){
    $charid = strtoupper(md5(uniqid(mt_rand(), true)));
    $hyphen = "";//chr(45);// "-"
    $uuid = substr($charid, 0, 8).$hyphen
        .substr($charid, 8, 4).$hyphen
        .substr($charid,12, 4).$hyphen
        .substr($charid,16, 4).$hyphen
        .substr($charid,20,12);

    return $uuid;
}

function http_curl($url,$request_type='get',$data='',$strtype=''){
    //1.初始化curl
    $ch = curl_init($url);
    //2.设置curl的参数
//    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    //判断什么方式提交
    if($request_type=='post'){
        curl_setopt($ch, CURLOPT_POST, 1);
        if(is_array($data)){
            $data = http_build_query($data);
        }
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
    if(!empty($strtype) && $strtype == "json"){
        $header = array();
        $header = ['Accept: application/json'];
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    }
    //3.采集
    $output = curl_exec($ch);
    //4.检查是否有错误发生
    if( curl_errno($ch) ){
        return false;
    }
    //5.关闭
    curl_close($ch);
    return $output;
    //var_dump($output);



}

function upload_img($path,$istime='',$size=1024)
{
    $CI = &get_instance();

    if(empty($istime)){
        $pathleavel = date('Y-m-d');
    }else{
        $CI->load->library('session');
        $session = $CI->session->userdata("userinfo");
        $pathleavel = $session['appid'];
    }
    //[10位时间戳]-[4位1000内随机数 不够位补0].[文件扩展名]
    $config['upload_path'] = "./data/" . $path . "/" . $pathleavel;//文件上传目录
    if (!file_exists("./data/" . $path . "/" . $pathleavel)) {
        mkdir("./data/" . $path . "/" . $pathleavel, 0777, true);//原图路径
    }
    $config['allowed_types'] = 'gif|jpg|png|jpeg';//文件类型
    $config['max_size'] = $size;//最大上传大小单位kb
    $config['file_name'] = time() . '-' . str_pad(rand(1, 1000), 4, '0', STR_PAD_LEFT);//生成新的文件名
    $CI->load->library('upload', $config);
    //循环处理上传文件
    foreach ($_FILES as $key => $value) {
        if (!empty($value['name'])) {
            $file_name = time().'-'.str_pad(rand(1,1000),4,'0',STR_PAD_LEFT);//生成新的文件名
            $config['file_name']=$file_name;
            $CI->load->library('upload');
            $CI->upload->initialize($config,true);
            if ($CI->upload->do_upload($key)) {
                //上传成功
                $data=$CI->upload->data();
                $img_arr[]= "/data/" . $path . "/" . $pathleavel."/".$data['file_name'];
            } else {
                header('Access-Control-Allow-Origin:*');
                //上传失败
                $data = array("status"=>false,"data"=>$CI->upload->display_errors());
                echo json_encode($data,true);
                exit;
            }
        }
    }
    return $img_arr;
}



/*
 *   获取字符串长度     一个中文算两个字符   英文算一个
 * */

function getstrlen($str){
    return (strlen($str)+mb_strlen($str,"UTF8"))/2;
}

/**
 * 检查权限
 * @param name string|array  需要验证的规则列表,支持逗号分隔的权限规则或索引数组
 * @param uid  int           认证用户的id
 * @param relation string    如果为 'or' 表示满足任一条规则即通过验证;如果为 'and'则表示需满足所有规则才能通过验证
 * @return boolean           通过验证返回true;失败返回false
 */
function sp_auth_check($uid,$name=null,$relation='or'){
    if(empty($uid)){
        return false;
    }
    $CI  = &get_instance();
    $CI->load->library('iauth');
//    if(empty($name)){
//        $name=strtolower(MODULE_NAME."/".CONTROLLER_NAME."/".ACTION_NAME);
//    }
    return $CI->iauth->check($uid, $name, $relation);
}
function sp_auth_check1($phone,$id){
    $CI = &get_instance();
    $myproject=$CI->load->database('myproject',true);
    //var_dump($bar);exit;
    $sql='select permission from tp_wxadmin where phone=? and status=1 ';
    $query=$myproject->query($sql,array($phone));
    $result=$query->row_array();
    //echo $result['permission'];
    if(!$result){
        return false;
    }
    if($result['is_admin']==1){
        return true;
    }
    $permission=explode(',',$result['permission']);
    //print_r($permission);
    if(in_array($id,$permission)){
        return true;
    }else{
        return false;
    }
}

/**
 * 获取客户端IP地址
 * @param integer $type 返回类型 0 返回IP地址 1 返回IPV4地址数字
 * @return mixed
 */
function get_client_ip($type = 0) {
    $type       =  $type ? 1 : 0;
    static $ip  =   NULL;
    if ($ip !== NULL) return $ip[$type];
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $pos    =   array_search('unknown',$arr);
        if(false !== $pos) unset($arr[$pos]);
        $ip     =   trim($arr[0]);
    }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ip     =   $_SERVER['HTTP_CLIENT_IP'];
    }elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip     =   $_SERVER['REMOTE_ADDR'];
    }
    // IP地址合法验证
    $long = sprintf("%u",ip2long($ip));
    $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
    return $ip[$type];
}
//获取当前毫秒
function msectime() {
    list($msec, $sec) = explode(' ', microtime());
    $msectime =  (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
    return $msectime;
}

//获取用户真实IP
function getIp() {
    if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown"))
        $ip = getenv("HTTP_CLIENT_IP");
    else
        if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown"))
            $ip = getenv("HTTP_X_FORWARDED_FOR");
        else
            if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown"))
                $ip = getenv("REMOTE_ADDR");
            else
                if (isset ($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown"))
                    $ip = $_SERVER['REMOTE_ADDR'];
                else
                    $ip = "unknown";
    return ($ip);
}

/**
* 获得用于数据库当主键的hashid
* 思路：进程id+当前微秒数+IP+随机数
* @TODO 当有多台服务器时，还要再加一个服务器的IP或id
* @return string
*/
function uuid($prefix = "")
{
    $pid = getmypid();//进程id。在同一台机器下高并发时，极易得到相同的毫秒
    //time_nanosleep(0, 1000);//延时1000纳秒=1毫秒。同一进行连续使用本函数时，可能得到相同的毫秒，于是需要这个延时来保证每次得到的毫秒未被使用。
    $timetick = microtime(TRUE)*1000;//微秒
    $ip = getIp();
    $rand = uniqid(mt_rand(), true);
    $str = md5($pid.'+'.$timetick."+".$ip."+".$rand);
    $uuid  = substr($str,0,8) . '-';
    $uuid .= substr($str,8,4) . '-';
    $uuid .= substr($str,12,4) . '-';
    $uuid .= substr($str,16,4) . '-';
    $uuid .= substr($str,20,12);
    return $prefix . $uuid;
}


/**
 * 图像处理
 */

function fullImg($img)
{
    $ci = &get_instance();
    $ci->load->config("custom");
    if(substr($img,0,4)== "http")
    {
        return $img ;
    }else{
        $img = $ci->config->item('static_url').$img;
    }
    return $img;
}

//获取本周第一天和最后一天
function get_start_end_date(){
    $date=new DateTime();
    $date->modify('this week');
    $first_day_of_week=$date->format('Y-m-d');
    $date->modify('this week +6 days');
    $end_day_of_week=$date->format('Y-m-d');
    return array(
        'first_day_of_week'=>$first_day_of_week,
        'end_day_of_week'=>$end_day_of_week
    );
}
/**
 * 获取最近xx天所有日期  默认7天
 */
function get_weeks($time = '', $format='Y-m-d',$num=7){
    $time = $time != '' ? $time : time();
    //组合数据
    $date = [];
    for ($i=1; $i<=$num; $i++){
        $date[$i-1] = date($format ,strtotime( '+' . $i-$num .' days', $time));
    }
    return $date;
}

/*
 *   当前时间戳小于当天中午12点时间戳 返回当天的日期
 *   当前时间戳大于等于当天中午12点时间戳 返回明天的日期
 *
 */
function getDay(){
    $now_unix = time();//当前时间戳
    $day = date("Y-m-d");
    $moon = $day . " 12:00:00";
    $moon_unix = strtotime($moon);//当天中午12点时间戳

    if ($now_unix < $moon_unix) {
        return $day;
    }
    $time = $moon_unix + 3600 * 24;
    return date("Y-m-d",$time);
}


/**
 * 全局获取验证码图片
 * 生成的是个HTML的img标签
 * @param string $imgparam <br>
 * 生成图片样式，可以设置<br>
 * length=4&font_size=20&width=238&height=50&use_curve=1&use_noise=1<br>
 * length:字符长度<br>
 * font_size:字体大小<br>
 * width:生成图片宽度<br>
 * heigh:生成图片高度<br>
 * use_curve:是否画混淆曲线  1:画，0:不画<br>
 * use_noise:是否添加杂点 1:添加，0:不添加<br>
 * @param string $imgattrs<br>
 * img标签原生属性，除src,onclick之外都可以设置<br>
 * 默认值：style="cursor: pointer;" title="点击获取"<br>
 * @return string<br>
 * 原生html的img标签<br>
 * 注，此函数仅生成img标签，应该配合在表单加入name=verify的input标签<br>
 * 如：&lt;input type="text" name="verify"/&gt;<br>
 */
function sp_verifycode_img($imgparam='length=4&font_size=20&width=238&height=50&use_curve=1&use_noise=1',$imgattrs='style="cursor: pointer;" title="点击获取"'){
    $src=rtrim(site_url(),'/')."/api/checkcode/index?".$imgparam;
    $img=<<<hello
<img class="verify_img" src="$src" onclick="this.src='$src&time='+Math.random();" $imgattrs/>
hello;
    return $img;
}

/**
 * 验证码检查，验证完后销毁验证码增加安全性 ,<br>返回true验证码正确，false验证码错误
 * @return boolean <br>true：验证码正确，false：验证码错误
 */
function sp_check_verify_code($verifycode=''){
    $CI = &get_instance();
    $verifycode= empty($verifycode)?$CI->input->post_get('verify'):$verifycode;
    $CI->load->library('verify');
    return $CI->verify->check($verifycode,'');
}
/**
 *
 * @param string $pw 要加密的字符串
 * @param string $salt 加密盐
 * @return string
 */
function sp_password($pw,$authcode=''){
    if(empty($authcode)){
        $authcode = AUTHCODE;
    }
    $result="###".md5(md5($authcode.$pw));
    return $result;
}

/**
 *
 * @param string $password 要比较的密码
 * @param string $password_in_db 数据库保存的已经加密过的密码
 * @return boolean 密码相同，返回true
 */
function sp_compare_password($password,$password_in_db){

    return sp_password($password)==$password_in_db;
}

/**
 * 获取当前登录的管事员id
 * @return int
 */
function sp_get_current_admin_id(){
    $CI = &get_instance();
    $CI->load->library('session');
    $userInfo = $CI->session->userdata('userInfo');
    return $userInfo['ADMIN_ID'];
}

/**
 * 验证手机号是否正确
 * @author honfei
 * @param number $mobile
 */
function isMobile($mobile) {
    if (!is_numeric($mobile)) {
        return false;
    }
    return preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $mobile) ? true : false;
}

//写入更新配置文件
//$config array 配置数组
//$file  文件名
function sp_set_config($config,$file){

    if(!$file){
        return False;
    }
    if(!file_exists(APPPATH."config/".ENVIRONMENT)){
        mkdir(APPPATH."config/".ENVIRONMENT,0777, true);
    }
    $config_file=APPPATH."config/".ENVIRONMENT."/".$file.".php";

    $result = file_put_contents($config_file, "<?php\n \$config= " . var_export($config, true) . ";");
   
    return $result;
}
/**
 * @param $email_user 收件人邮箱地址
 * @param $msg 发送邮件的正文内容
 * @return TRUE:成功  FALSE:失败
 * */
function sp_send_email($email_user,$subject,$msg,$mail_type='html'){
    $ci = & get_instance();
    $ci->load->library("email");
    if(!$ci->email){
        $ci->load->library("email");
    }
    $config = array();
    //邮件发送协议
    $config['protocol'] = 'smtp';

    $config['smtp_crypto'] = $ci->config->item('mailer')['mail_secure']; //SMTP 加密连接方式

    $config['smtp_host'] = $ci->config->item('mailer')['mail_smtp_server'];
    //发件人邮箱地址
    $config['smtp_user'] = $ci->config->item('mailer')['mail_user'];
    //腾讯QQ邮箱开启POP3/SMTP服务或者IMAP/SMTP服务时的授权码
    $config['smtp_pass'] = $ci->config->item('mailer')['mail_password'];
    //发件人名称
    $config['smtp_name'] = $ci->config->item('mailer')['mail_sender'];

    //SMTP 端口
    $config['smtp_port'] = $ci->config->item('mailer')['mail_smtp_port'];
    //邮件类型。html网页或者text纯文本
    $config['mailtype'] = (empty($mail_type)) ? "html" : $mail_type;
    //字符集
    $config['charset'] = 'utf-8';
    //是否验证邮件地址
    $config['validate'] = true;
    //Email 优先级. 1 = 最高. 5 = 最低. 3 = 正常
    $config['priority'] = 3;
    //换行符. (使用 "\r\n" to 以遵守RFC 822).
    $config['crlf'] = "\r\n";
    //换行符. (使用 "\r\n" to 以遵守RFC 822).
    $config['newline'] = "\r\n";
    //初始化参数
    $ci->email->initialize($config);
    //设置：发件人邮箱地址、发件人名称
    $ci->email->from($config['smtp_user'], $config['smtp_name']);
    //设置：收件人邮箱地址
    $ci->email->to($email_user);
    //设置：邮件主题
    $ci->email->subject($subject);
    //发送邮件正文
    $ci->email->message($msg);
    //发送EMAIL. 根据发送结果，成功返回TRUE,失败返回FALSE。
    $res = $ci->email->send();
    log_message('debug', "回调数据--参数接收====".$ci->email->print_debugger()."=====".__CLASS__.__METHOD__."-----LINE--".__LINE__."===time:".date("Y-m-d H:i:s",time()));
    return $res;
}


