<form id="pagerForm" method="post" action="/admin/user/index">
    <input type="hidden" name="user_login" value="<?php echo $user_login; ?>">
    <input type="hidden" name="user_email" value="<?php echo $user_email; ?>" />
    <input type="hidden" name="pageNum" value="<?php echo $pageNum; ?>" />
    <input type="hidden" name="numPerPage" value="<?php echo $numPerPage; ?>" />
</form>


<div class="pageHeader">
    <form onsubmit="return navTabSearch(this);" action="/admin/user/index" method="post">
        <div class="searchBar">
            <table class="searchContent">
                <tr>
                    <td>
                        用户名：<input type="text" name="user_login" style="width: 100px;" value="" placeholder="请输入用户名">
                    </td>
                    <td>
                        邮箱：<input type="text" name="user_email" style="width: 100px;" value="" placeholder="请输入邮箱">
                    </td>
                    <td>
                        <div class="subBar">
                            <ul>
                                <li><div class="buttonActive"><div class="buttonContent"><button type="submit">搜索</button></div></div></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>

        </div>
    </form>
</div>
<div class="pageContent">
    <div class="panelBar">
        <ul class="toolBar">
            <li><a class="add" href="/admin/user/add" target="dialog" width="800" height="400"><span>添加</span></a></li>

        </ul>
    </div>
    <table class="table" width="100%" layoutH="112">
        <thead>
        <tr>
            <th width="50">ID</th>
            <th>用户</th>
            <th>最后登录ip</th>
            <th>最后登录时间</th>
            <th>邮箱</th>
            <th>手机号</th>
            <th>状态</th>
            <th width="120">操作</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($users as $vo) { ?>
            <tr>
                <td><?php echo $vo['id']; ?></td>
                <td><?php echo $vo['user_login'];?></td>
                <td><?php echo $vo['last_login_ip'];?></td>
                <td>
                    <?php echo $vo['last_login_time'];?>
                </td>
                <td><?php echo $vo['user_email'];?></td>
                <td><?php echo $vo['mobile'];?></td>
                <td><?php echo $vo['user_status'];?></td>
                <td>
                    <?php if($vo['id']==1 || $vo['id'] == sp_get_current_admin_id()){ ?>
                        <font color="#cccccc">编辑</font> | <font color="#cccccc">删除</font> |
                        <?php if($vo['user_status']==1){ ?>
                            <font color="#cccccc">拉黑</font>
                        <?php }else{ ?>
                            <font color="#cccccc">启用</font>
                        <?php } ?>
                    <?php }else{?>
                        <?php if($vo['user_type']==1){ ?>
                            <a href="/admin/user/edit?id=<?php echo $vo['id'];?>&type=1" target="dialog" width="800" height="400">编辑</a> |
                        <?php }else{ ?>
                            <a href="/admin/user/edit?id=<?php echo $vo['id'];?>&type=2" target="dialog" width="800" height="400">编辑</a> |
                        <?php } ?>
                        <a class="js-ajax-delete" href="/admin/user/delete?id=<?php echo $vo['id'];?>" target="ajaxTodo" rel="User_index" title="确定要删除吗？">删除</a> |
                        <?php if($vo['user_status']==1){ ?>
                            <a href="/admin/user/ban?id=<?php echo $vo['id'];?>" target="ajaxTodo" title="您确定要拉黑此用户吗？">拉黑</a>
                        <?php }else{ ?>
                            <a href="/admin/user/cancelban?id=<?php echo $vo['id'];?>" target="ajaxTodo" title="您确定要启用此用户吗？">启用</a>
                        <?php } ?>
                    <?php } ?>
                </td>
            </tr>
       <?php } ?>
    </table>
    <div class="panelBar">
        <div class="pages">
            <span>显示</span>
            <select class="combox" name="numPerPage" onchange="navTabPageBreak({numPerPage:this.value})">
                <option <?php if($numPerPage==20) { ?> selected <?php } ?> value="20" >20</option>
                <option <?php if($numPerPage==50) { ?> selected <?php } ?> value="50" >50</option>
                <option <?php if($numPerPage==100){ ?> selected <?php } ?> value="100" >100</option>
                <option <?php if($numPerPage==200){ ?> selected <?php } ?> value="200" >200</option>
            </select>
            <span>条，共<?php echo $totalCount; ?>条</span>
        </div>

        <div class="pagination" targetType="navTab" totalCount="<?php echo $totalCount;?>" numPerPage="<?php echo $numPerPage; ?>" pageNumShown="5" currentPage="<?php echo $pageNum;?>"></div>

    </div>
</div>
