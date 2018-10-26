<div class="pageContent">

    <form method="post" action="/admin/menu/edit_post" class="pageForm required-validate" onsubmit="return validateCallback(this, dialogAjaxDone);">
        <div class="pageFormContent nowrap" layoutH="55">
            <input type="hidden" name="id" value="<?php echo $data['id'];?>" />
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
                    <input type="text" name="name" class="required" value="<?php echo $data['name'];?>">
                </dd>
            </dl>

            <dl>
                <dt>应用:</dt>
                <dd>
                    <input type="text" name="app" value="<?php echo $data['app'];?>" class="required">
                </dd>
            </dl>
            <dl>
                <dt>控制器:</dt>
                <dd>
                    <input type="text" name="model" value="<?php echo $data['model'];?>" class="required">
                </dd>
            </dl>
            <dl>
                <dt>方法:</dt>
                <dd>
                    <input type="text" name="action" value="<?php echo $data['action'];?>" class="required">
                </dd>
            </dl>
            <dl>
                <dt>参数:</dt>
                <dd>
                    <input type="text" name="data" value="<?php echo $data['data'];?>">
                    <label>例:id=3&amp;p=3</label>
                </dd>
            </dl>
<!--            <dl>-->
<!--                <dt>图标:</dt>-->
<!--                <dd>-->
<!--                    <input type="text" name="icon" value="{$data.icon}">-->
<!--                    <label  style="width: auto;"><a href="http://www.thinkcmf.com/font/icons" target="_blank">选择图标</a> 不带前缀fa-，如fa-user => user</label>-->
<!---->
<!--                </dd>-->
<!--            </dl>-->
            <dl>
                <dt>备注:</dt>
                <dd>
                    <textarea name="remark" rows="5" cols="57" style="width: 500px;"><?php echo $data['remark'];?></textarea>

                </dd>
            </dl>
            <dl>
                <dt>状态:</dt>
                <dd>
                    <select name="status">
                        <option value="1">显示</option>
                        <?php $status_selected=empty($data['status'])?"selected":""; ?>
                        <option value="0" {$status_selected}>隐藏</option>
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>打开类型:</dt>
                <dd>
                    <select name="target_type">
                        <option value="navTab">Tab标签</option>
                        <?php $target_selected=$data['target_type']=="dialog"?"selected":""; ?>
                        <option value="dialog" {$target_selected}>对话框</option>
                        <?php $target_selected=$data['target_type']=="ajaxTodo"?"selected":""; ?>
                        <option value="ajaxTodo" {$target_selected}>ajaxTodo</option>
                        <?php $target_selected=$data['target_type']=="target_typ"?"selected":""; ?>
                        <option value="target_typ" {$target_selected}>二级为空，有三级</option>
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>类型:</dt>
                <dd>
                    <select name="type">
                        <option value="1">权限认证+菜单</option>
                        <?php $type_selected=empty($data['type'])?"selected":""; ?>
                        <option value="0" {$type_selected}>只作为菜单</option>
                    </select>
                    <label  style="width: auto;">注意：“权限认证+菜单”表示加入后台权限管理，纯碎是菜单项请不要选择此项。</label>

                </dd>
            </dl>
            <dl>
                <dt>排序:</dt>
                <dd>
                    <input type="text" name='listorder' value='<?php echo $data['listorder']; ?>' class="digits textInput">
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
