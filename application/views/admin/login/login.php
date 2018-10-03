<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>管理平台</title>
<link href="<?php echo site_url('assets/dwz/themes/css/login.css'); ?>" rel="stylesheet" type="text/css" />

</head>
<!--[if lt IE 9]><!--><script src="<?php echo site_url('assets/dwz/js/speedup.js'); ?>" type="text/javascript"></script><script src="<?php echo site_url('assets/dwz/js/jquery-1.11.3.min.js'); ?>" type="text/javascript"></script><!--<![endif]-->
<!--[if gte IE 9]><!--><script src="<?php echo site_url('assets/dwz/js/jquery-2.1.4.min.js'); ?>" type="text/javascript"></script><!--<![endif]-->
<body>
	<div id="login">
		<div id="login_header">
			<h1 class="login_logo">
				<a href="http://demo.dwzjs.com"><img src="<?php echo site_url('assets/dwz/themes/default/images/login_logo.gif'); ?>" /></a>
			</h1>
			<div class="login_headerContent">
				<div class="navList">
					<ul>
						<li><a href="#">设为首页</a></li>
						<li><a href="http://bbs.dwzjs.com">反馈</a></li>
					</ul>
				</div>
				<h2 class="login_title"><img src="<?php echo site_url('assets/dwz/themes/default/images/login_title.png'); ?>" /></h2>
			</div>
		</div>
		<div id="login_content">
			<div class="loginForm">
                <div style="color:#ff0000;font-size:15px;height:30px;margin-top:-30px;width:180px;margin-left:30px;text-align:center;line-height:30px;" id="err_title"></div>
				<form action="/admin/login/dologin">
					<p>
						<label>用户名：</label>
						<input type="text" name="username" style="width:120px;" size="20" class="login_input" placeholder="请输入用户名" />
					</p>
					<p>
						<label>密码：</label>
						<input type="password" name="password" style="width:120px;" size="20" class="login_input" placeholder="请输入密码" />
					</p>
					<p>
                        <label>验证码：</label>
                        <input class="code" type="text" style="width:120px;" size="5"  id="verify" name="verify" placeholder="请输入验证码" />
                        <div class="verifycode-wrapper">
                        <?php echo sp_verifycode_img('length=4&font_size=20&width=248&height=42&use_noise=1&use_curve=0','style="cursor: pointer;" title="点击获取"') ?>
                        </div>
					</p>
					<div class="login_bar">
                        <input class="sub" type="button" onclick="javascript:ajax_submit();" />
<!--						<input class="sub" type="submit" value=" " />-->
                        <script>
                            $("#verify").keyup(function(event){
                                if(event.keyCode ==13){
                                    ajax_submit();
                                }
                            });

                            function ajax_submit(){
                                var username=$("#username").val();
                                var password=$("#password").val();
                                var verify=$("#verify").val();
                                var URL='/admin/login/dologin';
                                $.post(URL,{username:username,password:password,verify:verify},function(data,status,xhr){
                                    if (data.statusCode==200){
                                        window.location.href="/admin/";
                                    }
                                    else
                                    {
                                        $("#err_title").text(data.message);
                                    }
                                },'json');

                            }
                        </script>
					</div>
				</form>
			</div>
			<div class="login_banner"><img src="<?php echo site_url('assets/dwz/themes/default/images/login_banner.jpg'); ?>" /></div>
			<div class="login_main">
				<ul class="helpList">
					<li><a href="#">下载驱动程序</a></li>
					<li><a href="#">如何安装密钥驱动程序？</a></li>
					<li><a href="#">忘记密码怎么办？</a></li>
					<li><a href="#">为什么登录失败？</a></li>
				</ul>
				<div class="login_inner">
					<p>您可以使用 网易网盘 ，随时存，随地取</p>
					<p>您还可以使用 闪电邮 在桌面随时提醒邮件到达，快速收发邮件。</p>
					<p>在 百宝箱 里您可以查星座，订机票，看小说，学做菜…</p>
				</div>
			</div>
		</div>
		<div id="login_footer">
			Copyright &copy; 2018 www.ranranliu.com Inc. All Rights Reserved.
		</div>
	</div>
</body>
</html>