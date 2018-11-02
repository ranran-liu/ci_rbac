<div class="pageContent">
	
	<form method="post" action="/admin/nav/add_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
		<div class="pageFormContent nowrap" layoutH="55">
	
			<dl>
				<dt>菜单分类:</dt>
				<dd>				
					<select name="cid" id="navcid_select">
                        <?php foreach($navcats as $vo){ ?>
                            <?php $navcid_selected=$navcid==$vo['navcid']?"selected":""; ?>
                            <option value="<?php echo $vo['navcid']; ?>" <?php echo $navcid_selected;?> ><?php echo $vo['name']; ?></option>
                        <?php } ?>
					</select>
				</dd>
			</dl>
			<dl>
				<dt>父级:</dt>
				<dd>				
					<select name="parentid" id="nav_tree">
                        <option value="0">/</option>
                        <?php echo $nav_trees;?>
                    </select>
				</dd>
			</dl>
			
			<dl>
				<dt>标签:</dt>
				<dd>				
					<input type="text" name="label" value="" class="required">
				</dd>
			</dl>
			<dl>
				<dt>链接:</dt>
				<dd>
                    <input type="text" name="href"  value="">
				</dd>
			</dl>
			<dl>
				<dt>打开方式:</dt>
				<dd>				
					<select name="target">
                        <option value="">默认</option>
                        <option value="_blank">新窗口打开</option>
                    </select>
				</dd>
			</dl>
			<dl>
				<dt>图标:</dt>
				<dd>				
					<input type="text" name="icon" value="">
				</dd>
			</dl>
			<dl>
				<dt>状态:</dt>
				<dd>				
					<select name="status">
                        <option value="1">显示</option>
                        <option value="0">隐藏</option>
                    </select>
				</dd>
			</dl>
            <dl>
                <dt>排序:</dt>
                <dd>
                    <input type="text" name="listorder" value="0">
                </dd>
            </dl>
			
			
		</div>
		<div class="formBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent"><button type="submit">保存</button></div></div></li>
				<li><div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div></li>
			</ul>
		</div>
	</form>
	
</div>
<script>
		$(function() {

			$("#navcid_select").change(function() {
                var value = $(this).val()
                $.ajax({
                    url:'/admin/nav/get_nav_list',
                    type:'post',
                    data:{
                        cid:value
                    },
                    dataType:'json',
                    success:function (data) {
                        //console.log(data)
                        if(data.status==1){
                            var option = "<option value='0'>/</option>"+data.data;
                            $('#nav_tree').html(option)
                        }else{
                            console.log(data.msg)
                        }
                    }
                })
                //console.log(value)
			});
		});
	</script>