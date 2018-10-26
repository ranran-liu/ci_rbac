<div class="pageContent">

    <form method="post" action="/admin/menu/add_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="55">
            <dl>
                <dt>上级:</dt>
                <dd>
                    <select name="parentid" id="parents">
                        <option value="0">作为一级菜单</option>
                        <?php echo $select_categorys ?>
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>名称:</dt>
                <dd>
                    <input type="text" name="name" value="" >
                </dd>
            </dl>

            <dl>
                <dt>应用:</dt>
                <dd>
                    <input type="text" name="app" value="" >
                </dd>
            </dl>
            <dl>
                <dt>控制器:</dt>
                <dd>
                    <input type="text" name="model" value="" >
                </dd>
            </dl>
            <dl>
                <dt>方法:</dt>
                <dd>
                    <input type="text" name="action" value="" >
                </dd>
            </dl>
            <dl>
                <dt>参数:</dt>
                <dd>
                    <input type="text" name="data" value="">
                    <label>例:id=3&amp;p=3</label>
                </dd>
            </dl>
<!--            <dl>-->
<!--                <dt>图标:</dt>-->
<!--                <dd>-->
<!--                    <input type="text" name="icon" value="">-->
<!--                    <label  style="width: auto;"><a href="http://www.thinkcmf.com/font/icons" target="_blank">选择图标</a> 不带前缀fa-，如fa-user => user</label>-->
<!---->
<!--                </dd>-->
<!--            </dl>-->
            <dl>
                <dt>备注:</dt>
                <dd>
                    <textarea name="remark" rows="5" cols="57" style="width: 500px;"></textarea>

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
                <dt>打开类型:</dt>
                <dd>
                    <select name="target_type">
                        <option value="navTab">Tab标签</option>
                        <option value="dialog">对话框</option>
                        <option value="ajaxTodo">ajaxTodo</option>
                        <option value="target_typ">二级为空，有三级</option>
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>类型:</dt>
                <dd>
                    <select name="type">
                        <option value="1">权限认证+菜单</option>
                        <option value="0">只作为菜单</option>
                    </select>
                    <label  style="width: auto;">注意：“权限认证+菜单”表示加入后台权限管理，纯碎是菜单项请不要选择此项。</label>

                </dd>
            </dl>
            <dl>
                <dt>排序:</dt>
                <dd>
                    <input type="text" name='listorder' value='0' class="digits textInput">
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
