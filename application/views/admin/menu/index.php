<div class="pageContent">
    <div class="panelBar">
        <ul class="toolBar">
            <li><a class="add" href="/admin/menu/add" target="dialog" height="650" width="800"><span>添加</span></a></li>
<!--            <li class="line">line</li>-->
<!--            <li class=""><a class="icon" href="#" target="_blank"><span>导入新菜单</span></a></li>-->
        </ul>
    </div>
    <form method="post" id="pageForm_menu" action="/admin/menu/listorders" class="pageForm required-validate" onsubmit="return validateCallback(this)">
        <table class="table" width="100%" layoutH="70">
            <thead>
            <tr>
                <th width="30"><input type="checkbox" class="checkboxCtrl" group="ids">全选</th>

                <th width="30"><a href="javascript:listorders();" class="gridCol" style="text-decoration:underline;" title="点击排序,数字越小排序越靠前">排序</a></th>
                <th width="30">ID</th>
                <th width="100">应用</th>
                <th width="150">菜单名称</th>
                <th width="100">状态</th>
                <th width="80" align="center">操作</th>
            </tr>
            </thead>
            <tbody>
                <?php echo $categorys;?>
            </tbody>
        </table>
    </form>
    <div class="panelBar">

        <div class="pagination" targetType="navTab" totalCount="200" numPerPage="1000" pageNumShown="10" currentPage="1"></div>

    </div>
</div>
<script>
    function listorders(){
        $("#pageForm_menu").submit();
    }
</script>