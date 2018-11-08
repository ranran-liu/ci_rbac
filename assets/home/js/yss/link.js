layui.use(["form", "layer"], function() {
    var i = layui.form
        , n = layui.layer
        , t = layui.jquery;
    t(".apply-link").click(function() {
        var r = t(this).children(".aplayer-list-index").text()
            , u = t("#articleid").val()
            , i = '<form class="layui-form layui-form-pane" id="linkform" style="padding:20px;text-align: center;">';
        i += '<div class="layui-form-item">';
        i += '<label class="layui-form-label">名称<\/label>';
        i += '<div class="layui-input-block">';
        i += '<input type="text" name="WebName" autocomplete="off" class="layui-input" lay-verify="required" maxLength=50>';
        i += "<\/div>";
        i += "<\/div>";
        i += '<div class="layui-form-item">';
        i += '<label class="layui-form-label">图标<\/label>';
        i += '<div class="layui-input-block">';
        i += '<input type="text" name="Icon" autocomplete="off" class="layui-input" lay-verify="required" maxLength=100>';
        i += "<\/div>";
        i += "<\/div>";
        i += '<div class="layui-form-item">';
        i += '<label class="layui-form-label">域名<\/label>';
        i += '<div class="layui-input-block">';
        i += '<input type="text" name="Url" autocomplete="off" class="layui-input" lay-verify="required" maxLength=100 value="http://">';
        i += "<\/div>";
        i += "<\/div>";
        i += '<div class="layui-form-item">';
        i += '<label class="layui-form-label">描述<\/label>';
        i += '<div class="layui-input-block">';
        i += '<input type="text" name="Remark" autocomplete="off" class="layui-input" lay-verify="required" maxLength=100>';
        i += "<\/div>";
        i += "<\/div>";
        i += ' <button class="layui-btn" lay-submit lay-filter="applylink">立即提交<\/button>';
        i += "<\/form>";
        n.open({
            type: 1,
            title: "友链申请",
            offset: "auto",
            area: "90%",
            id: "layerlink",
            content: i
        })
    });
    i.on("submit(applylink)", function() {
        return t.ajax({
            type: "post",
            url: "/home/link/applylinks",
            data: t("#linkform").serialize(),
            success: function(t) {
                t.success ? (n.msg(t.message, {
                        icon: 6
                    }),
                        setTimeout(function() {
                            n.closeAll()
                        }, 1e3)) : t.message != undefined ? n.msg(t.message, {
                            icon: 5
                        }) : n.msg("程序异常", {
                            icon: 5
                        })
            },
            error: function() {
                n.msg("请求异常", {
                    icon: 2
                })
            }
        }),
            !1
    })
})
