<div class="pageContent">
    <form method="post" action="/admin/mailer/test" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="55">
            <dl>
                <dt>收件箱</dt>
                <dd>
                    <input type="text" name="email" value="" id="email" class="required"/>
                </dd>
            </dl>
            <dl>
                <dt>标题</dt>
                <dd>
                    <input type="text" name="subject" value="" id="subject" class="inputtext required"/>
                </dd>
            </dl>
            <dl>
                <dt>内容</dt>
                <dd>
                    <textarea name="content" rows="5" cols="15" id="content" class="inputtext required" style="height: 100px; width: 300px;"></textarea>
                </dd>
            </dl>
        </div>

        <div class="formBar">
            <ul>
                <li><div class="buttonActive"><div class="buttonContent"><button type="submit">发送</button></div></div></li>
                <li><div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div></li>
            </ul>
        </div>
    </form>
</div>




