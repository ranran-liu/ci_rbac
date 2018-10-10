<div style=" float:left; display:block; margin:10px; overflow:auto; width:500px; height:520px; overflow:auto; border:solid 1px #CCC; line-height:21px; background:#FFF;">
    <form method="post" id="authorize_form" action="/admin/rbac/authorize_post" class="pageForm required-validate" onsubmit="return validateCallback(this,dialogAjaxDone)">
        <ul class="tree treeFolder treeCheck expand">

            <?php echo $categorys; ?>

        </ul>
        <input type="hidden" name="roleid" value="<?php echo $roleid;?>" />
    </form>

</div>
<div class="formBar">
    <ul>
        <li><div class="buttonActive"><div class="buttonContent"><button type="button" onclick="javascript:dosubmit();">保存</button></div></div></li>
        <li><div class="button"><div class="buttonContent"><button type="button" class="close">关闭</button></div></div></li>
    </ul>
</div>
<script>
    function dosubmit(){
        $("#authorize_form").submit();
    }
</script>