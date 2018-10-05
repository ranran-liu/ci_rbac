<form id="pagerForm" method="post" action="/admin/user/index">
    <input type="hidden" name="user_login" value="">
    <input type="hidden" name="user_email" value="" />
    <input type="hidden" name="pageNum" value="" />
    <input type="hidden" name="numPerPage" value="20" />
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
    <table class="table" width="100%" layoutH="122">
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
                <td>{$vo.id}</td>
                <td><if condition="$vo['user_url']"><a href="{$vo.user_url}" target="_blank" title="{$vo.signature}">{$vo.user_login}</a><else />{$vo.user_login}</if></td>
                <td>{$vo.last_login_ip}</td>
                <td>

                </td>
                <td>{$vo.user_email}</td>
                <td>{$vo.mobile}</td>
                <td>{$user_statuses[$vo['user_status']]}</td>
                <td>

                </td>
            </tr>
       <?php } ?>
    </table>
    <div class="panelBar">
        <div class="pages">
            <span>显示</span>
            <select class="combox" name="numPerPage" onchange="navTabPageBreak({numPerPage:this.value})">
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
            <span>条，共{$totalCount}条</span>
        </div>

        <div class="pagination" targetType="navTab" totalCount="{$totalCount}" numPerPage="20" pageNumShown="10" currentPage="{$currentPage}"></div>

    </div>
</div>
