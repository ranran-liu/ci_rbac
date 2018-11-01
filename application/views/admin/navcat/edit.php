<div class="pageContent">

    <form method="post" action="/admin/navcat/edit_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="55">

            <dl>
                <dt>分类名称:</dt>
                <dd>
                    <input type="hidden" name="navcid" value="<?php echo $navcat['navcid']?>">
                    <input type="text" name="name" value="<?php echo $navcat['name']?>">
                </dd>
            </dl>
            <dl>
                <dt>描述:</dt>
                <dd>
                    <textarea name="remark" rows="5" cols="57"><?php echo $navcat['remark']?></textarea>
                </dd>
            </dl>

            <dl>
                <dt>主菜单:</dt>
                <dd>
                    <?php $mainmenu_checked=$navcat['active']?"checked":""; ?>
                    <input type="checkbox" name="active" value="1" <?php echo $mainmenu_checked; ?> >
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
