<div class="pageContent">
    <form method="post" action="/admin/user/edit_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="97">
            <dl>
                <dt>用户名</dt>
                <dd>
                    <input type="text" name="user_login" value="<?php echo $user['user_login'];?>">
                </dd>
            </dl>
            <dl>
                <dt>手机号</dt>
                <dd>
                    <input type="text" name="mobile" value="<?php echo $user['mobile'];?>">
                </dd>
            </dl>
            <dl>
                <dt>邮箱</dt>
                <dd>
                    <input type="text" name="user_email" value="<?php echo $user['user_email'];?>">
                </dd>
            </dl>
            <dl>
                <dt>角色</dt>
                <dd  style="width:520px;">
                    <?php foreach($roles as $vo){ ?>
                        <label class="checkbox inline">
                            <?php $role_id_checked=in_array($vo['id'],$role_ids)?"checked":""; ?>
                            <input value="<?php echo $vo['id']; ?>" type="checkbox" name="role_id[]" <?php echo $role_id_checked; ?> <?php if(sp_get_current_admin_id()!=1 && $vo['id']==1){ ?>disabled="true" <?php }?> ><?php echo $vo['name']; ?>
                        </label>
                    <?php }?>
                </dd>
            </dl>

        </div>
        <div class="formBar">
            <input type="hidden" name="id" value="<?php echo $user['id'];?>" />
            <ul>
                <li><div class="buttonActive"><div class="buttonContent"><button type="submit">保存</button></div></div></li>
                <li><div class="button"><div class="buttonContent"><button type="button" class="close">关闭</button></div></div></li>
            </ul>
        </div>
    </form>
</div>
