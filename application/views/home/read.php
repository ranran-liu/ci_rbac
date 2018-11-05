<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit">
    <title>文章阅读</title>
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="layui/css/layui.css" />
    <link rel="stylesheet" href="css/master.css" />
    <link rel="stylesheet" href="css/gloable.css" />
    <link rel="stylesheet" href="css/nprogress.css" />
     <link rel="stylesheet" href="css/blog.css" />
</head>
<body>
    <div class="header">
    </div>
    <header class="gird-header">
        <div class="header-fixed">
            <div class="header-inner">
                <a href="javascript:void(0)" class="header-logo" id="logo">Mr.Yss</a>
                <nav class="nav" id="nav">
                    <ul>
                        <li><a href="#">首页</a></li>
                        <li><a href="#">博客</a></li>
                        <li><a href="#">留言</a></li>
                        <li><a href="#">友链</a></li>
                        <li><a href="#">关于</a></li>
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
    <div class="doc-container" id="doc-container">
        <div class="container-fixed">
            <div class="col-content" style="width:100%">
                <div class="inner">
                    <article class="article-list">
                        <input type="hidden" value="@Model.BlogTypeID" id="blogtypeid" />
                        <section class="article-item">
                            <aside class="title" style="line-height:1.5;">
                                <h4>使用码云和VS托管本地代码</h4>
                                <p class="fc-grey fs-14">
                                    <small>
                                        作者：<a href="javascript:void(0)" target="_blank" class="fc-link">燕十三</a>
                                    </small>
                                    <small class="ml10">围观群众：<i class="readcount">37</i></small>
                                    <small class="ml10">更新于 <label>2018-05-22:17:30:24</label> </small>
                                </p>
                            </aside>
                            <div class="time mt10" style="padding-bottom:0;">
                                <span class="day">22</span>
                                <span class="month fs-18">5<small class="fs-14">月</small></span>
                                <span class="year fs-18">2018</span>
                            </div>
                            <div class="content artiledetail" style="border-bottom: 1px solid #e1e2e0; padding-bottom: 20px;">
                                内容自定义
                                <div class="copyright mt20">
                                    <p class="f-toe fc-black">
                                        非特殊说明，本文版权归 燕十三 所有，转载请注明出处.
                                    </p>
                                    <p class="f-toe">
                                        本文标题：
                                        <a href="javascript:void(0)" class="r-title">使用码云和VS托管本地代码</a>
                                    </p>
                                    <p class="f-toe">
                                        本文网址：
                                        <a href="#">https://www.yanshisan.cn/Blog/Read/7</a>
                                    </p>
                                </div>
                                <div id="aplayer" style="margin:5px 0"></div>
                                <h6>延伸阅读</h6>
                                <ol class="b-relation"></ol>
                            </div>
                            <div class="bdsharebuttonbox share" data-tag="share_1">
                                <ul>
                                    <li class="f-praise"><span><a class="s-praise"></a></span></li>
                                    <li class="f-weinxi"><a class="s-weinxi" data-cmd="weixin"></a></li>
                                    <li class="f-sina"><a class="s-sina" data-cmd="tsina"></a></li>
                                    <li class="f-qq" href="#"><i class="fa fa-qq"></i></li>
                                    <li class="f-qzone"><a class="s-qzone" data-cmd="qzone"></a></li>
                                </ul>
                            </div>
                            <div class="f-cb"></div>
                            <div class="mt20 f-fwn fs-24 fc-grey comment" style="border-top: 1px solid #e1e2e0; padding-top: 20px;">
                            </div>
                            <fieldset class="layui-elem-field layui-field-title">
                                <legend>发表评论</legend>
                                <div class="layui-field-box">
                                    <div class="leavemessage" style="text-align:initial">
                                        <form class="layui-form blog-editor" action="">
                                            <input type="hidden" name="articleid" id="articleid" value="@Model.ID">
                                            <div class="layui-form-item">
                                                <textarea name="editorContent" lay-verify="content" id="remarkEditor" placeholder="请输入内容" class="layui-textarea layui-hide"></textarea>
                                            </div>
                                            <div class="layui-form-item">
                                                <button class="layui-btn" lay-submit="formLeaveMessage" lay-filter="formLeaveMessage">提交留言</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </fieldset>
                            <ul class="blog-comment" id="blog-comment"></ul>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <footer class="grid-footer">
        <div class="footer-fixed">
            <div class="copyright">
                <div class="info">
                    <div class="contact">
                        <a href="javascript:void(0)" class="github" target="_blank"><i class="fa fa-github"></i></a>
                        <a href="#" class="qq" target="_blank" ><i class="fa fa-qq"></i></a>
                        <a href="#" class="email" target="_blank" ><i class="fa fa-envelope"></i></a>
                        <a href="javascript:void(0)" class="weixin"><i class="fa fa-weixin"></i></a>
                    </div>
                    <p class="mt05">
                        Copyright &copy; 2018-2018 燕十三 All Rights Reserved V.3.1.3 蜀ICP备18008600号
                    </p>
                </div>
            </div>
        </div>
    </footer>
    <script src="layui/layui.js"></script>
    <script src="js/yss/gloable.js"></script>
    <script src="js/plugins/nprogress.js"></script>
    <script src="js/pagecomment.js"></script>
    <script>NProgress.start();</script>
    <script> 
        window.onload = function () {
            NProgress.done();
        };
    </script>
</body>
</html>
