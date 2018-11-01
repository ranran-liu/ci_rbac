<div class="pageContent">

    <form method="post" action="/admin/navcat/add_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="55">

            <dl>
                <dt>分类名称:</dt>
                <dd>
                    <input type="text" name="name" class="required">
                </dd>
            </dl>
            <dl>
                <dt>描述:</dt>
                <dd>
                    <textarea name="remark" rows="5" cols="57"></textarea>
                </dd>
            </dl>

            <dl>
                <dt>主菜单:</dt>
                <dd>
                    <input type="checkbox" name="active" value="1" checked>
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
