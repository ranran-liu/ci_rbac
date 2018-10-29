<div class="pageContent">
    <form method="post" action="/admin/mailer/index_post" class="pageForm required-validate" onsubmit="return validateCallback(this)">
        <div class="pageFormContent nowrap" layoutH="55">
            <dl>
                <dt>发件人:</dt>
                <dd>
                    <input type="text" name="sender" value="<?php echo $this->config->item('mailer')['mail_sender'];?>" class="required"/>
                </dd>
            </dl>
            <dl>
                <dt>SMTP服务器:</dt>
                <dd>
                    <input type="text" name="smtp_server" value="<?php echo $this->config->item('mailer')['mail_smtp_server'];?>" class="required"/>
                </dd>
            </dl>
            <dl>
                <dt>连接方式:</dt>
                <dd>
                    <select name="smtp_secure" id="js-smtpsecure">
                        <option value="">默认</option>
                        <option value="ssl">ssl</option>
                        <option value="tls">tls</option>
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>SMTP服务器端口:</dt>
                <dd>
                    <input type="text" name="smtp_port" value="<?php echo $this->config->item('mailer')['mail_smtp_port'];?>" placeholder="默认为25" class="required"/>
                </dd>
            </dl>
            <dl>
                <dt>发件箱账号:</dt>
                <dd>
                    <input type="text" name="smtp_user" value="<?php echo $this->config->item('mailer')['mail_user'];?>"  class="required"/>
                </dd>
            </dl>
            <dl>
                <dt>发件箱密码:</dt>
                <dd>
                    <input type="password" name="password" value="<?php echo $this->config->item('mailer')['mail_password'];?>" class="required" />
                </dd>
            </dl>
        </div>
        <div class="formBar">
            <ul>
                <li><div class="buttonActive"><div class="buttonContent"><button type="submit">提交</button></div></div></li>
                <li><div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div></li>
            </ul>
        </div>
    </form>

</div>
<script>
    $(function(){
        $('#js-smtpsecure').val("<?php echo $this->config->item('mailer')['mail_secure'];?>");
    });
</script>
