<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit">
    <title><?php echo $title;?></title>
    <link rel="ICON" href="/logo.png">
    <link rel="stylesheet" href="/assets/home/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/home/layui/css/layui.css" />
    <link rel="stylesheet" href="/assets/home/css/master.css" />
    <link rel="stylesheet" href="/assets/home/css/gloable.css" />
    <link rel="stylesheet" href="/assets/home/css/nprogress.css" />
    <link rel="stylesheet" href="/assets/home/css/blog.css" />
    <link rel="stylesheet" href="/assets/home/css/about.css" />
<!--    <script>-->
<!--        var _hmt = _hmt || [];-->
<!--        (function() {-->
<!--            var hm = document.createElement("script");-->
<!--            hm.src = "https://hm.baidu.com/hm.js?a25ea62ea970ca9a32a7063d6c2de4c7";-->
<!--            var s = document.getElementsByTagName("script")[0];-->
<!--            s.parentNode.insertBefore(hm, s);-->
<!--        })();-->
<!--    </script>-->
</head>
<body>
<div class="header">
</div>
<header class="gird-header">
    <div class="header-fixed">
        <div class="header-inner">
            <a href="/index.html" class="header-logo" id="logo">Mr.Lxy</a>
            <nav class="nav" id="nav">
                <?php $navs = sp_get_menu_index();?>
                <ul>
                    <?php foreach($navs as $k=>$v) { ?>
                        <li><a href="<?php echo $v['href'];?>"><?php echo $v['label']?></a></li>
                    <?php } ?>
                </ul>
            </nav>
            <a href="#" class="blog-user">
                <i class="fa fa-qq"></i>
            </a>
            <a class="phone-menu">
                <i></i>
                <i></i>
                <i></i>
            </a>
        </div>
    </div>
</header>