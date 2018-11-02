<div class="pageHeader">
	<form onsubmit="return navTabSearch(this);" action="/admin/nav/index" method="post">
	<div class="searchBar">
		<table class="searchContent">
			<tr>
				<td>
					分类：
					<select name="cid" style="width: 120px;" id="select_cid">
						<option value='0'>全部</option>
						<?php foreach($navcats as $vo){ ?>
							<option value='<?php echo $vo['navcid']; ?>' >├─ <?php echo $vo['name']; ?></option>
						<?php } ?>
					</select>
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
			<li><a class="add" href="/admin/nav/add?cid=<?php echo $navcid; ?>" target="dialog" height="580" width="800"><span>添加</span></a></li>
			
		</ul>
	</div>
	<form method="post" id="pageForm" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
	<table class="table" width="100%" layoutH="110">
		<thead>
			<tr>
				<th width="50" onclick="javascript:do_submit('/admin/nav/listorders');">排序</th>
				<th width="50">ID</th>
				<th width="150">分类</th>
				<th>菜单名称</th>
				<th>链接地址</th>
				<th width="80">状态</th>
				<th width="180">操作</th>
			</tr>
		</thead>
		<tbody>
			
			<?php echo $categorys; ?>
		
		</tbody>	
	</table>
	</form>
	<div class="panelBar">

		<div class="pagination" targetType="navTab" totalCount="200" numPerPage="1000" pageNumShown="10" currentPage="1"></div>

	</div>
</div>
<script>

    $('#select_cid').val("<?php echo $navcid; ?>")

    function do_submit(action_url){
        $("#pageForm").attr('action',action_url).submit();
    }
</script>