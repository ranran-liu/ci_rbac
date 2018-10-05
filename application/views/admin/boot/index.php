<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>
	后台管理
</title>

<link href="/assets/dwz/themes/default/style.css" rel="stylesheet" type="text/css" media="screen"/>
<link href="/assets/dwz/themes/css/core.css" rel="stylesheet" type="text/css" media="screen"/>
<link href="/assets/dwz/themes/css/print.css" rel="stylesheet" type="text/css" media="print"/>
<link href="/assets/dwz/uploadify/css/uploadify.css" rel="stylesheet" type="text/css" media="screen"/>
<!--[if IE]>
<!--<link href="/assets/dwz/themes/css/ieHack.css" rel="stylesheet" type="text/css" media="screen"/>
<![endif]-->

<!--[if lt IE 9]><!--<script src="/assets/dwz/js/speedup.js" type="text/javascript"></script><script src="/assets/dwz/js/jquery-1.11.3.min.js" type="text/javascript"></script><![endif]-->
<!--[if gte IE 9]><!--><script src="/assets/dwz/js/jquery-2.1.4.min.js" type="text/javascript"></script><!--<![endif]-->

<script src="/assets/dwz/js/jquery.cookie.js" type="text/javascript"></script>
<script src="/assets/dwz/js/jquery.validate.js" type="text/javascript"></script>
<!--<script src="js/jquery.bgiframe.js" type="text/javascript"></script>-->
<script src="/assets/dwz/xheditor/xheditor-1.2.2.min.js" type="text/javascript"></script>
<script src="/assets/dwz/xheditor/xheditor_lang/zh-cn.js" type="text/javascript"></script>
<script src="/assets/dwz/uploadify/scripts/jquery.uploadify.js" type="text/javascript"></script>

<script type="text/javascript" src="/assets/dwz/chart/echarts.min.js"></script>
<script src="/assets/dwz/js/dwz.core.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.util.date.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.validate.method.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.barDrag.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.drag.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.tree.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.accordion.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.ui.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.theme.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.switchEnv.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.alertMsg.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.contextmenu.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.navTab.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.tab.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.resize.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.dialog.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.dialogDrag.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.sortDrag.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.cssTable.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.stable.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.taskBar.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.ajax.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.pagination.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.database.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.datepicker.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.effects.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.panel.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.checkbox.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.history.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.combox.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.file.js" type="text/javascript"></script>
<script src="/assets/dwz/js/dwz.print.js" type="text/javascript"></script>

<!-- 可以用dwz.min.js替换前面全部dwz.*.js (注意：替换时下面dwz.regional.zh.js还需要引入)
<script src="bin/dwz.min.js" type="text/javascript"></script>
-->
<script src="/assets/dwz/js/dwz.regional.zh.js" type="text/javascript"></script>

<script type="text/javascript">
$(function(){
	DWZ.init("/assets/dwz/dwz.frag.xml", {
		loginUrl:"login_dialog.html", loginTitle:"登录",	// 弹出登录对话框
//		loginUrl:"login.html",	// 跳到登录页面
		statusCode:{ok:200, error:300, timeout:301}, //【可选】
		pageInfo:{pageNum:"pageNum", numPerPage:"numPerPage", orderField:"orderField", orderDirection:"orderDirection"}, //【可选】
		keys: {statusCode:"statusCode", message:"message"}, //【可选】
		ui:{hideMode:'offsets'}, //【可选】hideMode:navTab组件切换的隐藏方式，支持的值有’display’，’offsets’负数偏移位置的值，默认值为’display’
		debug:false,	// 调试模式 【true|false】
		callback:function(){
			initEnv();
			$("#themeList").theme({themeBase:"/assets/dwz/themes"}); // themeBase 相对于index页面的主题base路径
		}
	});
});

</script>

</head>

<body>
	<div id="layout">
		<div id="header">
			<div class="headerNav">
				<a class="logo" href="http://j-ui.com">标志</a>
				<ul class="nav">
					<li><a href="changepwd.html" target="dialog" rel="changepwd" width="600">设置</a></li>
					<li><a href="/admin/login/logout">退出</a></li>
				</ul>
				<ul class="themeList" id="themeList">
					<li theme="default"><div class="selected">蓝色</div></li>
					<li theme="green"><div>绿色</div></li>
					<li theme="purple"><div>紫色</div></li>
					<li theme="silver"><div>银色</div></li>
					<li theme="azure"><div>天蓝</div></li>
				</ul>
			</div>

			<!-- navMenu -->

		</div>

		<div id="leftside">
			<div id="sidebar_s">
				<div class="collapse">
					<div class="toggleCollapse"><div></div></div>
				</div>
			</div>
            <div id="sidebar">
                <div class="toggleCollapse"><h2>主菜单</h2><div>收缩</div></div>

                <div class="accordion" fillSpace="sidebar">

                    <?php $submenus=$SUBMENU_CONFIG;?>
                    <?php function getsubmenu($submenus){?>
                    <?php foreach($submenus as $menu){ ?>
                    <div class="accordionHeader">
                        <h2><span>Folder</span>
                            <?php 
                                //$menu_name=L($menu['lang']);
                                //$menu_name=$menu['lang']==$menu_name?$menu['name']:$menu_name;
                                $menu_name=$menu['name'];
                            ?>
                            <?php echo $menu_name;?>
                        </h2>
                    </div>
                    <?php if(!empty($menu['items'])){?>
                    <div class="accordionContent">
                        <ul class="tree treeFolder">
                            <?php getsubmenu1($menu['items'])?>
                        </ul>
                    </div>
                    <?php }?>

                    <?php }?>
                    <?php }?>




                    <?php function getsubmenu1($submenus){?>
                    <?php foreach($submenus as $menu){?>
                    <?php 
                        //$menu_name=L($menu['lang']);
                        //$menu_name=$menu['lang']==$menu_name?$menu['name']:$menu_name;
                        $menu_name=$menu['name'];
                        if ($menu['target_type']=='dialog'){
                        $dialog_wh='width=800 height=500';
                        }
                        $dialog_wh='';
                        if ($menu['target_type']=='external'){
                        $dialog_wh='external="true"';
                        $menu['target_type']='navtab';
                        }
                    ?>
                    <li>
                        <a href="<?php echo $menu['url']; ?>" target="<?php echo $menu['target_type']; ?>" rel="<?php echo $menu['rel']; ?>" <?php $dialog_wh; ?> ><?php echo $menu_name;?></a>
                        <?php if(!empty($menu['items'])){?>
                        <?php getsubmenu2($menu['items'])?>
                        <?php }?>
                    </li>
                    <?php }?>
                    <?php }?>


                    <?php function getsubmenu2($submenus){?>
                    <?php foreach($submenus as $menu){?>
                    <?php 
                        //$menu_name=L($menu['lang']);
                        //$menu_name=$menu['lang']==$menu_name?$menu['name']:$menu_name;
                        $menu_name=$menu['name'];
                        if ($menu['target_type']=='dialog'){
                        $dialog_wh='width=800 height=500';
                        }
                        if ($menu['target_type']=='external'){
                        $dialog_wh='external="true"';
                        $menu['target_type']='navtab';
                        }
                    ?>
                    <ul>
                        <li><a href="<?php echo $menu['url']; ?>" target="<?php echo $menu['target_type']; ?>" rel="<?php echo $menu['rel']; ?>" <?php $dialog_wh; ?> ><?php echo $menu_name;?></a></li>
                    </ul>

                    <?php }?>
                    <?php }?>

                    <?php getsubmenu($submenus);?>
                </div>
            </div>
		</div>
		<div id="container">
			<div id="navTab" class="tabsPage">
				<div class="tabsPageHeader">
					<div class="tabsPageHeaderContent"><!-- 显示左右控制时添加 class="tabsPageHeaderMargin" -->
						<ul class="navTab-tab">
							<li tabid="main" class="main"><a href="javascript:;"><span><span class="home_icon">我的主页</span></span></a></li>
						</ul>
					</div>
					<div class="tabsLeft">left</div><!-- 禁用只需要添加一个样式 class="tabsLeft tabsLeftDisabled" -->
					<div class="tabsRight">right</div><!-- 禁用只需要添加一个样式 class="tabsRight tabsRightDisabled" -->
					<div class="tabsMore">more</div>
				</div>
				<ul class="tabsMoreList">
					<li><a href="javascript:;">我的主页</a></li>
				</ul>
                <div class="navTab-panel tabsPageContent layoutBox">
                    <div class="page unitBox">
                        <div class="pageFormContent" layoutH="80" style="margin-right:10px;">
                            <div style="float:left;height:350px;width:500px;margin-right:3%;" id="container1">
                            </div>
                            <div style="float:left;height:350px;width:500px;margin-right:3%;" id="container2">
                            </div>
                            <div style="float:left;height:350px;width:500px;margin-right:3%;" id="container3">
                            </div>

                            <div style="float:left;height:350px;width:500px;margin-right:3%;margin-top:30px;" id="container4">
                            </div>
                            <div style="float:left;height:350px;width:500px;margin-right:3%;margin-top:30px;" id="container5"></div>
                            <div style="float:left;height:350px;width:500px;margin-top:20px;" id="container6"></div>
                        </div>
                    </div>
                </div>
			</div>
		</div>

	</div>

	<div id="footer">Copyright &copy; 2018 逍遥浪子 京ICP备15053290号-2</div>

</body>
</html>
<script src="/assets/dwz/chart/highcharts.js" type="text/javascript"></script>
<script src="/assets/dwz/chart/highcharts-3d.js" type="text/javascript"></script>
<script src="/assets/dwz/chart/exporting.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        $('#container1').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: '等级订单比例'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Level 1',   45.0],
                    ['Level 2',       26.8],
                    {
                        name: 'Level 3',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Level 4',    8.5],
                    ['Level 5',     6.2],
                    ['Level 6',   0.7]
                ]
            }]
        });
    });



    $(function () {
        $('#container2').highcharts({
            title: {
                text: '注册统计',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });



    $(function () {
        $('#container3').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: '下单统计'
            },
            subtitle: {
                text: 'Irregular time data in Highcharts JS'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'Winter 2007-2008',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: [
                    [Date.UTC(1970,  9, 27), 0   ],
                    [Date.UTC(1970, 10, 10), 0.6 ],
                    [Date.UTC(1970, 10, 18), 0.7 ],
                    [Date.UTC(1970, 11,  2), 0.8 ],
                    [Date.UTC(1970, 11,  9), 0.6 ],
                    [Date.UTC(1970, 11, 16), 0.6 ],
                    [Date.UTC(1970, 11, 28), 0.67],
                    [Date.UTC(1971,  0,  1), 0.81],
                    [Date.UTC(1971,  0,  8), 0.78],
                    [Date.UTC(1971,  0, 12), 0.98],
                    [Date.UTC(1971,  0, 27), 1.84],
                    [Date.UTC(1971,  1, 10), 1.80],
                    [Date.UTC(1971,  1, 18), 1.80],
                    [Date.UTC(1971,  1, 24), 1.92],
                    [Date.UTC(1971,  2,  4), 2.49],
                    [Date.UTC(1971,  2, 11), 2.79],
                    [Date.UTC(1971,  2, 15), 2.73],
                    [Date.UTC(1971,  2, 25), 2.61],
                    [Date.UTC(1971,  3,  2), 2.76],
                    [Date.UTC(1971,  3,  6), 2.82],
                    [Date.UTC(1971,  3, 13), 2.8 ],
                    [Date.UTC(1971,  4,  3), 2.1 ],
                    [Date.UTC(1971,  4, 26), 1.1 ],
                    [Date.UTC(1971,  5,  9), 0.25],
                    [Date.UTC(1971,  5, 12), 0   ]
                ]
            }, {
                name: 'Winter 2008-2009',
                data: [
                    [Date.UTC(1970,  9, 18), 0   ],
                    [Date.UTC(1970,  9, 26), 0.2 ],
                    [Date.UTC(1970, 11,  1), 0.47],
                    [Date.UTC(1970, 11, 11), 0.55],
                    [Date.UTC(1970, 11, 25), 1.38],
                    [Date.UTC(1971,  0,  8), 1.38],
                    [Date.UTC(1971,  0, 15), 1.38],
                    [Date.UTC(1971,  1,  1), 1.38],
                    [Date.UTC(1971,  1,  8), 1.48],
                    [Date.UTC(1971,  1, 21), 1.5 ],
                    [Date.UTC(1971,  2, 12), 1.89],
                    [Date.UTC(1971,  2, 25), 2.0 ],
                    [Date.UTC(1971,  3,  4), 1.94],
                    [Date.UTC(1971,  3,  9), 1.91],
                    [Date.UTC(1971,  3, 13), 1.75],
                    [Date.UTC(1971,  3, 19), 1.6 ],
                    [Date.UTC(1971,  4, 25), 0.6 ],
                    [Date.UTC(1971,  4, 31), 0.35],
                    [Date.UTC(1971,  5,  7), 0   ]
                ]
            }, {
                name: 'Winter 2009-2010',
                data: [
                    [Date.UTC(1970,  9,  9), 0   ],
                    [Date.UTC(1970,  9, 14), 0.15],
                    [Date.UTC(1970, 10, 28), 0.35],
                    [Date.UTC(1970, 11, 12), 0.46],
                    [Date.UTC(1971,  0,  1), 0.59],
                    [Date.UTC(1971,  0, 24), 0.58],
                    [Date.UTC(1971,  1,  1), 0.62],
                    [Date.UTC(1971,  1,  7), 0.65],
                    [Date.UTC(1971,  1, 23), 0.77],
                    [Date.UTC(1971,  2,  8), 0.77],
                    [Date.UTC(1971,  2, 14), 0.79],
                    [Date.UTC(1971,  2, 24), 0.86],
                    [Date.UTC(1971,  3,  4), 0.8 ],
                    [Date.UTC(1971,  3, 18), 0.94],
                    [Date.UTC(1971,  3, 24), 0.9 ],
                    [Date.UTC(1971,  4, 16), 0.39],
                    [Date.UTC(1971,  4, 21), 0   ]
                ]
            }]
        });
    });


    $(function () {
        $('#container4').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2]
            }, {
                name: 'Year 1900',
                data: [133, 156, 947, 408, 6]
            }, {
                name: 'Year 2008',
                data: [973, 914, 4054, 732, 34]
            }]
        });
    });



    $(function () {
        $('#container5').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'World\'s largest cities per 2014'
            },
            subtitle: {
                text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
            },
            series: [{
                name: 'Population',
                data: [
                    ['Shanghai', 23.7],
                    ['Lagos', 16.1],
                    ['Instanbul', 14.2],
                    ['Karachi', 14.0],
                    ['Mumbai', 12.5],
                    ['Moscow', 12.1],
                    ['São Paulo', 11.8],
                    ['Beijing', 11.7],
                    ['Guangzhou', 11.1],
                    ['Delhi', 11.1],
                    ['Shenzhen', 10.5],
                    ['Seoul', 10.4],
                    ['Jakarta', 10.0],
                    ['Kinshasa', 9.3],
                    ['Tianjin', 9.3],
                    ['Tokyo', 9.0],
                    ['Cairo', 8.9],
                    ['Dhaka', 8.9],
                    ['Mexico City', 8.9],
                    ['Lima', 8.9]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    });


    $(function () {
        $(document).ready(function () {
            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });
            $('#container6').highcharts({
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function () {
                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function () {
                                var x = (new Date()).getTime(), // current time
                                        y = Math.random();
                                series.addPoint([x, y], true, true);
                            }, 1000);
                        }
                    }
                },
                title: {
                    text: 'Live random data'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                                Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Random data',
                    data: (function () {
                        // generate an array of random data
                        var data = [],
                                time = (new Date()).getTime(),
                                i;
                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: Math.random()
                            });
                        }
                        return data;
                    }())
                }]
            });
        });
    });

</script>
