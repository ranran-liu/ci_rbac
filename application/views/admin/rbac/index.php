<form id="pagerForm" method="post" action="/admin/rbac/index">
    <input type="hidden" name="pageNum" value="<?php echo $pageNum; ?>" />
    <input type="hidden" name="numPerPage" value="<?php echo $numPerPage; ?>" />
</form>

<div class="pageContent">
    <div class="panelBar">
        <ul class="toolBar">
            <li><a class="add" href="/admin/rbac/roleadd/" target="dialog" width="800" height="400"><span>角色添加</span></a></li>

        </ul>
    </div>
    <form action="/admin/rbac/listorders" method="post">
        <table class="table" width="100%" layoutH="75">
            <thead>
            <tr>
                <th width="30">ID</th>
                <th align="left">角色名称</th>
                <th align="left">角色描述</th>
                <th width="40" align="left">状态</th>
                <th width="160">操作</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach($roles as $vo) { ?>
            <tr>
                <td><?php echo $vo['id'];?></td>
                <td><?php echo $vo['name'];?></td>
                <td><?php echo $vo['remark'];?></td>
                <td>
                    <?php if($vo['status']==1){ ?>
                        <font color="red">√</font>
                    <?php }else{ ?>
                        <font color="red">╳</font>
                    <?php } ?>
                </td>
                <td>
                    <?php if($vo['id']==1){ ?>
                        <font color="#cccccc">权限设置</font>|
                        <font color="#cccccc">编辑</font> | <font color="#cccccc">删除</font>
                    <?php }else{ ?>

                        <a href="/admin/rbac/authorize?id=<?php echo $vo['id'];?>" target="dialog" height="620">权限设置</a>|
                        <a href="/admin/rbac/roleedit?id=<?php echo $vo['id'];?>" target="dialog" width="800" height="400">编辑</a>|
                        <a class="js-ajax-delete" href="/admin/rbac/roledelete?id=<?php echo $vo['id'];?>" rel="Rbac_index" target="ajaxTodo" title="确定删除吗？">删除</a>
                    <?php } ?>
                </td>
            </tr>
            <?php } ?>
            </tbody>
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
    </form>
</div>
	