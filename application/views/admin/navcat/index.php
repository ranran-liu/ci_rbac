<div class="pageHeader">

</div>
<div class="pageContent">
    <div class="panelBar">
        <ul class="toolBar">
            <li><a class="add" href="/admin/navcat/add" target="dialog" height="380" width="750"><span>添加</span></a></li>
        </ul>
    </div>
    <table class="table" width="100%" layoutH="86">
        <thead>

        <tr>
            <th width="10">ID</th>
            <th width="80">名称</th>
            <th width="80">描述</th>
            <th width="60">主菜单</th>
            <th width="40">操作</th>
        </tr>

        </thead>
        <tbody>
        <?php foreach($navcats as $vo){ ?>
            <tr>
                <td><?php echo $vo['navcid']; ?></td>
                <td><?php echo $vo['name']; ?></td>
                <td><?php echo $vo['remark']; ?></td>
                <td><?php echo $vo['active']?"是":"否"; ?></td>
                <td>
                    <a href="/admin/navcat/edit?id=<?php echo $vo['navcid'];?>" target="dialog" height="380" width="750">编辑</a>|
                    <a href="/admin/navcat/delete?id=<?php echo $vo['navcid'];?>" target="ajaxTodo" title="确定删除吗？">删除</a>
                </td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
    <div class="panelBar">

        <div class="pagination" targetType="navTab" totalCount="200" numPerPage="1000" pageNumShown="10" currentPage="1"></div>

    </div>
</div>
