<div class="pageContent">
	
	<form method="post" action="/admin/nav/edit_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
		<div class="pageFormContent nowrap" layoutH="55">
			<input type="hidden" name="id" value="<?php echo $nav['id'];?> ">
			<dl>
				<dt>菜单分类:</dt>
				<dd>				
					<select name="cid" id="navcid_select">
								<?php foreach ($navcats as $vo) { ?>
								<?php $navcid_selected=$navcid==$vo['navcid']?"selected":""; ?>
								<option value="<?php echo $vo['navcid']; ?>" <?php echo $navcid_selected;?> ><?php echo $vo['name'];?></option>
								<?php } ?>
					</select>
				</dd>
			</dl>
			<dl>
				<dt>父类:</dt>
				<dd>				
					<select name="parentid">
                        <option value="0">/</option>
                        <?php echo $nav_trees;?>
                    </select>
				</dd>
			</dl>
			
			<dl>
				<dt>标签:</dt>
				<dd>				
					<input type="text" name="label" value="<?php echo $nav['label']; ?>" class="required">
				</dd>
			</dl>
			<dl>
				<dt>链接:</dt>
				<dd>	
							
                    <input type="text" name="href"  value="<?php echo $nav['href']; ?>">
							
				</dd>
			</dl>
			<!-- 
			<dl>
				<dt></dt>
				<dd>
						<input type="radio" name="nav" id="selecturl_radio">
							<select name="href" id="selecthref">
								<option value="{:base64_encode('home')}">{:L('HOME')}</option>
								<foreach name="navs" item="vo">
									<optgroup label="{$vo.name}">
									{$vo.html}
									</optgroup>
								</foreach>
							</select>
				</dd>
			
			</dl>
			 -->
			<dl>
				<dt>打开方式:</dt>
				<dd>				
					<select name="target">
                        <option value="" <?php echo $nav['target']==""?"selected":"" ?> >默认</option>
                        <option value="_blank" <?php echo $nav['target']=="_blank"?"selected":"" ?> >新窗口打开</option>
                    </select>
				</dd>
			</dl>
			<dl>
				<dt>图标:</dt>
				<dd>				
					<input type="text" name="icon" value="<?php echo $nav['icon'];?>">
				</dd>
			</dl>
			<dl>
				<dt>状态:</dt>
				<dd>				
					<select name="status">
                        <option value="1">显示</option>
                        <?php $status_selected=empty($nav['status'])?"selected":""; ?>
                        <option value="0" <?php echo $status_selected; ?> >隐藏</option>
                    </select>
					
				</dd>
			</dl>
            <dl>
                <dt>排序:</dt>
                <dd>
                    <input type="text" name="listorder" value="<?php echo $nav['listorder'];?>">

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
