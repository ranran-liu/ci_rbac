<div class="pageContent" >
    <div class="tabs" currentIndex="0" eventType="click">
        <div class="tabsHeader">
            <div class="tabsHeaderContent">
                <ul>
                    <li><a href="javascript:;" id="A"><span>网站信息</span></a></li>
                </ul>
            </div>
        </div>
        <form method="post" action="/admin/setting/site_post" class="pageForm required-validate" onsubmit="return validateCallback(this)">
            <div class="tabsContent" style="margin-left:-10px;" layoutH="65">
                <div id="A_box" style="margin-left:20px;height:auto;" class="pageFormContent nowrap">
                    <dl>
                        <dt>网站名称</dt>
                        <dd>
                            <input type="text" name="options[site_name]" value="逍遥的博客"><span class="form-required">*</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>网站域名</dt>
                        <dd>
                            <input type="text" name="options[site_url]" value="http://www.ranranliu.cn"><span class="form-required">*</span>
                        </dd>
                    </dl>
<!--                    <dl>-->
<!--                        <dt>后台地址加密码：</dt>-->
<!--                        <dd>-->
<!--                            <input type="text" name="options[site_admin_url_password]" value="" id="js-site-admin-url-password"><span class="form-required">*</span>-->
<!--                            <label style="color: red;width: auto;">设置加密码后必须通过以下地址访问后台,请劳记此地址，为了安全，您也可以定期更换此加密码!</label>-->
<!--                            <php>$site_admin_url_password =C("SP_SITE_ADMIN_URL_PASSWORD");</php>-->
<!--                            <if condition="!empty($site_admin_url_password)">-->
<!--                                <label style="width: auto;">后台地址：<span id="js-site-admin-url">{:sp_get_host()}__ROOT__?g=admin&upw={:C('SP_SITE_ADMIN_URL_PASSWORD')}</span></label>-->
<!--                            </if>-->
<!--                        </dd>-->
<!--                    </dl>-->
                    <dl>
                        <dt>备案信息:</dt>
                        <dd>
                            <input type="text" name="options[site_icp]" value="">
                        </dd>
                    </dl>
                    <dl>
                        <dt>站长邮箱:</dt>
                        <dd>
                            <input type="text" name="options[site_admin_email]" value="">
                        </dd>
                    </dl>

                    <dl>
                        <dt>统计代码:</dt>
                        <dd>
                            <textarea name="options[site_tongji]" rows="5" cols="57"></textarea>
                        </dd>
                    </dl>
                    <dl>
                        <dt>版权信息:</dt>
                        <dd>
                            <textarea name="options[site_copyright]" rows="5" cols="57"></textarea>
                        </dd>
                    </dl>
                    <dl>
                        <dt>当前版本号:</dt>
                        <dd>
                            <input type="text" name="options[site_version]" value="v1.0">

                        </dd>
                    </dl>
                </div>
            </div>
            <div class="formBar" style="margin-bottom:1px ;">
                <ul>
                    <li><div class="buttonActive"><div class="buttonContent"><button type="submit">提交</button></div></div></li>
                </ul>
            </div>
        </form>
    </div>
</div>