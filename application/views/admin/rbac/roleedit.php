<div class="pageContent">
    <form method="post" action="/admin/rbac/roleedit_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="97">
            <dl>
                <dt>角色名称</dt>
                <dd>
                    <input type="text" name="name" value="<?php echo $data['name'];?>" id="rolename"/>
                </dd>
            </dl>
            <dl>
                <dt>角色描述</dt>
                <dd>
                    <textarea name="remark" rows="2" cols="20" id="remark" class="inputtext" style="height: 100px; width: 500px;"><?php echo $data['remark'];?></textarea>
                </dd>
            </dl>
            <dl>
                <dt>状态</dt>
                <dd>
                    <?php $active_true_checked=($data['status']==1)?"checked":""; ?>
                    <label class="radio inline" for="active_true">
                        <input type="radio" name="status" value="1" <?php echo $active_true_checked ?> id="active_true"/>开启
                    </label>
                    <?php $active_false_checked=($data['status']==0)?"checked":""; ?>
                    <label class="radio inline" for="active_false">
                        <input type="radio" name="status" value="0" <?php echo $active_false_checked ?> id="active_false">禁用
                    </label>
                </dd>
            </dl>

        </div>

        <div class="formBar">
            <input type="hidden" name="id" value="<?php echo $data['id'];?>"/>
            <ul>
                <li><div class="buttonActive"><div class="buttonContent"><button type="submit">保存</button></div></div></li>
                <li><div class="button"><div class="buttonContent"><button type="button" class="close">返回</button></div></div></li>
            </ul>
        </div>
    </form>
</div>
