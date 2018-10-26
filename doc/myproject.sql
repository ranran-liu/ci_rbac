/*
Navicat MySQL Data Transfer

Source Server         : 192.168.13.130-go-本地虚拟机
Source Server Version : 50641
Source Host           : 192.168.13.130:3306
Source Database       : myproject

Target Server Type    : MYSQL
Target Server Version : 50641
File Encoding         : 65001

Date: 2018-10-26 18:34:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tp_auth_access
-- ----------------------------
DROP TABLE IF EXISTS `tp_auth_access`;
CREATE TABLE `tp_auth_access` (
  `role_id` mediumint(8) unsigned NOT NULL COMMENT '角色',
  `rule_name` varchar(255) NOT NULL COMMENT '规则唯一英文标识,全小写',
  KEY `role_id` (`role_id`),
  KEY `rule_name` (`rule_name`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='权限授权表';

-- ----------------------------
-- Records of tp_auth_access
-- ----------------------------
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/edit_post');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/edit');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/delete');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/index');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/roleadd_post');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/roleadd');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/roledelete');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/roleedit_post');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/roleedit');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/authorize_post');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/authorize');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/member');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/rbac/index');
INSERT INTO `tp_auth_access` VALUES ('2', 'user/indexadmin/default3');
INSERT INTO `tp_auth_access` VALUES ('2', 'user/indexadmin/default');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/add');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/add_post');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/ban');
INSERT INTO `tp_auth_access` VALUES ('2', 'admin/user/cancelban');

-- ----------------------------
-- Table structure for tp_auth_rule
-- ----------------------------
DROP TABLE IF EXISTS `tp_auth_rule`;
CREATE TABLE `tp_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '规则id,自增主键',
  `module` varchar(20) NOT NULL COMMENT '规则所属module',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '规则唯一英文标识,全小写',
  `param` varchar(255) DEFAULT NULL COMMENT '额外url参数',
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '规则中文描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否有效(0:无效,1:有效)',
  `condition` varchar(300) NOT NULL DEFAULT '' COMMENT '规则附加条件',
  PRIMARY KEY (`id`),
  KEY `module` (`module`,`status`)
) ENGINE=MyISAM AUTO_INCREMENT=175 DEFAULT CHARSET=utf8 COMMENT='权限规则表';

-- ----------------------------
-- Records of tp_auth_rule
-- ----------------------------
INSERT INTO `tp_auth_rule` VALUES ('1', 'Admin', 'admin/content/default', null, '内容管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('2', 'Api', 'api/guestbookadmin/index', null, '所有留言', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('3', 'Api', 'api/guestbookadmin/delete', null, '删除网站留言', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('4', 'Comment', 'comment/commentadmin/index', null, '评论管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('5', 'Comment', 'comment/commentadmin/delete', null, '删除评论', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('6', 'Comment', 'comment/commentadmin/check', null, '评论审核', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('7', 'Portal', 'portal/adminpost/index', null, '文章管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('8', 'Portal', 'portal/adminpost/listorders', null, '文章排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('9', 'Portal', 'portal/adminpost/top', null, '文章置顶', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('10', 'Portal', 'portal/adminpost/recommend', null, '文章推荐', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('11', 'Portal', 'portal/adminpost/move', null, '批量移动', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('12', 'Portal', 'portal/adminpost/check', null, '文章审核', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('13', 'Portal', 'portal/adminpost/delete', null, '删除文章', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('14', 'Portal', 'portal/adminpost/edit', null, '编辑文章', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('15', 'Portal', 'portal/adminpost/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('16', 'Portal', 'portal/adminpost/add', null, '添加文章', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('17', 'Portal', 'portal/adminpost/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('18', 'Portal', 'portal/adminterm/index', null, '分类管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('19', 'Portal', 'portal/adminterm/listorders', null, '文章分类排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('20', 'Portal', 'portal/adminterm/delete', null, '删除分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('21', 'Portal', 'portal/adminterm/edit', null, '编辑分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('22', 'Portal', 'portal/adminterm/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('23', 'Portal', 'portal/adminterm/add', null, '添加分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('24', 'Portal', 'portal/adminterm/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('25', 'Portal', 'portal/adminpage/index', null, '页面管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('26', 'Portal', 'portal/adminpage/listorders', null, '页面排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('27', 'Portal', 'portal/adminpage/delete', null, '删除页面', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('28', 'Portal', 'portal/adminpage/edit', null, '编辑页面', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('29', 'Portal', 'portal/adminpage/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('30', 'Portal', 'portal/adminpage/add', null, '添加页面', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('31', 'Portal', 'portal/adminpage/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('32', 'Admin', 'admin/recycle/default', null, '回收站', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('33', 'Portal', 'portal/adminpost/recyclebin', null, '文章回收', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('34', 'Portal', 'portal/adminpost/restore', null, '文章还原', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('35', 'Portal', 'portal/adminpost/clean', null, '彻底删除', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('36', 'Portal', 'portal/adminpage/recyclebin', null, '页面回收', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('37', 'Portal', 'portal/adminpage/clean', null, '彻底删除', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('38', 'Portal', 'portal/adminpage/restore', null, '页面还原', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('53', 'Admin', 'admin/slide/default', null, '幻灯片', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('54', 'Admin', 'admin/slide/index', null, '幻灯片管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('55', 'Admin', 'admin/slide/listorders', null, '幻灯片排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('56', 'Admin', 'admin/slide/toggle', null, '幻灯片显示切换', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('57', 'Admin', 'admin/slide/delete', null, '删除幻灯片', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('58', 'Admin', 'admin/slide/edit', null, '编辑幻灯片', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('59', 'Admin', 'admin/slide/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('60', 'Admin', 'admin/slide/add', null, '添加幻灯片', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('61', 'Admin', 'admin/slide/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('62', 'Admin', 'admin/slidecat/index', null, '幻灯片分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('63', 'Admin', 'admin/slidecat/delete', null, '删除分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('64', 'Admin', 'admin/slidecat/edit', null, '编辑分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('65', 'Admin', 'admin/slidecat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('66', 'Admin', 'admin/slidecat/add', null, '添加分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('67', 'Admin', 'admin/slidecat/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('85', 'Admin', 'admin/menu/default', null, '菜单管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('86', 'Admin', 'admin/navcat/default1', null, '前台菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('87', 'Admin', 'admin/nav/index', null, '菜单管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('88', 'Admin', 'admin/nav/listorders', null, '前台导航排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('89', 'Admin', 'admin/nav/delete', null, '删除菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('90', 'Admin', 'admin/nav/edit', null, '编辑菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('91', 'Admin', 'admin/nav/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('92', 'Admin', 'admin/nav/add', null, '添加菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('93', 'Admin', 'admin/nav/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('94', 'Admin', 'admin/navcat/index', null, '菜单分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('95', 'Admin', 'admin/navcat/delete', null, '删除分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('96', 'Admin', 'admin/navcat/edit', null, '编辑分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('97', 'Admin', 'admin/navcat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('98', 'Admin', 'admin/navcat/add', null, '添加分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('99', 'Admin', 'admin/navcat/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('100', 'Admin', 'admin/menu/index', null, '后台菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('101', 'Admin', 'admin/menu/add', null, '添加菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('102', 'Admin', 'admin/menu/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('103', 'Admin', 'admin/menu/listorders', null, '后台菜单排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('104', 'Admin', 'admin/menu/export_menu', null, '菜单备份', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('105', 'Admin', 'admin/menu/edit', null, '编辑菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('106', 'Admin', 'admin/menu/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('107', 'Admin', 'admin/menu/delete', null, '删除菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('108', 'Admin', 'admin/menu/lists', null, '所有菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('109', 'Admin', 'admin/setting/default', null, '设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('110', 'Admin', 'admin/setting/userdefault', null, '个人信息', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('111', 'Admin', 'admin/user/userinfo', null, '修改信息', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('112', 'Admin', 'admin/user/userinfo_post', null, '修改信息提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('113', 'Admin', 'admin/setting/password', null, '修改密码', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('114', 'Admin', 'admin/setting/password_post', null, '提交修改', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('115', 'Admin', 'admin/setting/site', null, '网站信息', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('116', 'Admin', 'admin/setting/site_post', null, '提交修改', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('117', 'Admin', 'admin/route/index', null, '路由列表', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('118', 'Admin', 'admin/route/add', null, '路由添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('119', 'Admin', 'admin/route/add_post', null, '路由添加提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('120', 'Admin', 'admin/route/edit', null, '路由编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('121', 'Admin', 'admin/route/edit_post', null, '路由编辑提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('122', 'Admin', 'admin/route/delete', null, '路由删除', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('123', 'Admin', 'admin/route/ban', null, '路由禁止', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('124', 'Admin', 'admin/route/open', null, '路由启用', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('125', 'Admin', 'admin/route/listorders', null, '路由排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('126', 'Admin', 'admin/mailer/default', null, '邮箱配置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('127', 'Admin', 'admin/mailer/index', null, 'SMTP配置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('128', 'Admin', 'admin/mailer/index_post', null, '提交配置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('129', 'Admin', 'admin/mailer/active', null, '注册邮件模板', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('130', 'Admin', 'admin/mailer/active_post', null, '提交模板', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('131', 'Admin', 'admin/setting/clearcache', null, '清除缓存', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('132', 'User', 'user/indexadmin/default', null, '用户管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('133', 'User', 'user/indexadmin/default1', null, '用户组', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('134', 'User', 'user/indexadmin/index', null, '本站用户', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('135', 'User', 'user/indexadmin/ban', null, '拉黑会员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('136', 'User', 'user/indexadmin/cancelban', null, '启用会员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('137', 'User', 'user/oauthadmin/index', null, '第三方用户', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('138', 'User', 'user/oauthadmin/delete', null, '第三方用户解绑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('139', 'User', 'user/indexadmin/default3', null, '管理组', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('140', 'Admin', 'admin/rbac/index', null, '角色管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('141', 'Admin', 'admin/rbac/member', null, '成员管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('142', 'Admin', 'admin/rbac/authorize', null, '权限设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('143', 'Admin', 'admin/rbac/authorize_post', null, '提交设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('144', 'Admin', 'admin/rbac/roleedit', null, '编辑角色', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('145', 'Admin', 'admin/rbac/roleedit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('146', 'Admin', 'admin/rbac/roledelete', null, '删除角色', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('147', 'Admin', 'admin/rbac/roleadd', null, '添加角色', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('148', 'Admin', 'admin/rbac/roleadd_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('149', 'Admin', 'admin/user/index', null, '管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('150', 'Admin', 'admin/user/delete', null, '删除管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('151', 'Admin', 'admin/user/edit', null, '管理员编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('152', 'Admin', 'admin/user/edit_post', null, '编辑提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('153', 'Admin', 'admin/user/add', null, '管理员添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('154', 'Admin', 'admin/user/add_post', null, '添加提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('156', 'Admin', 'admin/storage/index', null, '文件存储', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('157', 'Admin', 'admin/storage/setting_post', null, '文件存储设置提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('158', 'Admin', 'admin/slide/ban', null, '禁用幻灯片', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('159', 'Admin', 'admin/slide/cancelban', null, '启用幻灯片', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('160', 'Admin', 'admin/user/ban', null, '禁用管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('161', 'Admin', 'admin/user/cancelban', null, '启用管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('162', 'Demo', 'demo/adminindex/index', null, '', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('163', 'Demo', 'demo/adminindex/last', null, '', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('166', 'Admin', 'admin/mailer/test', null, '测试邮件', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('167', 'Admin', 'admin/setting/upload', null, '上传设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('168', 'Admin', 'admin/setting/upload_post', null, '上传设置提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('169', 'Portal', 'portal/adminpost/copy', null, '文章批量复制', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('170', 'Admin', 'admin/menu/backup_menu', null, '备份菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('171', 'Admin', 'admin/menu/export_menu_lang', null, '导出后台菜单多语言包', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('172', 'Admin', 'admin/menu/restore_menu', null, '还原菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('173', 'Admin', 'admin/menu/getactions', null, '导入新菜单', '1', '');

-- ----------------------------
-- Table structure for tp_menu
-- ----------------------------
DROP TABLE IF EXISTS `tp_menu`;
CREATE TABLE `tp_menu` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `parentid` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT '父类id',
  `app` varchar(30) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '应用名称app',
  `model` varchar(30) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '控制器',
  `action` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '操作名称',
  `data` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '额外参数',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '菜单类型  1：权限认证+菜单；0：只作为菜单',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态，1显示，0不显示',
  `name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '菜单名称',
  `icon` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '菜单图标',
  `remark` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '备注',
  `listorder` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT '排序ID',
  `target_type` varchar(20) CHARACTER SET utf8 DEFAULT 'navTab' COMMENT 'navTab,dialog',
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `parentid` (`parentid`),
  KEY `model` (`model`)
) ENGINE=MyISAM AUTO_INCREMENT=192 DEFAULT CHARSET=utf8mb4 COMMENT='后台菜单表';

-- ----------------------------
-- Records of tp_menu
-- ----------------------------
INSERT INTO `tp_menu` VALUES ('1', '0', 'admin', 'content', 'default', '', '0', '1', '内容管理', 'th', '', '30', 'navTab');
INSERT INTO `tp_menu` VALUES ('2', '1', 'api', 'guestbookadmin', 'index', '', '1', '1', '所有留言', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('3', '2', 'api', 'guestbookadmin', 'delete', '', '1', '0', '删除网站留言', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('4', '1', 'comment', 'commentadmin', 'index', '', '1', '1', '评论管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('5', '4', 'comment', 'commentadmin', 'delete', '', '1', '0', '删除评论', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('6', '4', 'comment', 'commentadmin', 'check', '', '1', '0', '评论审核', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('7', '1', 'portal', 'adminpost', 'index', '', '1', '1', '文章管理', '', '', '1', 'navTab');
INSERT INTO `tp_menu` VALUES ('8', '7', 'portal', 'adminpost', 'listorders', '', '1', '0', '文章排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('9', '7', 'portal', 'adminpost', 'top', '', '1', '0', '文章置顶', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('10', '7', 'portal', 'adminpost', 'recommend', '', '1', '0', '文章推荐', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('11', '7', 'portal', 'adminpost', 'move', '', '1', '0', '批量移动', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('12', '7', 'portal', 'adminpost', 'check', '', '1', '0', '文章审核', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('13', '7', 'portal', 'adminpost', 'delete', '', '1', '0', '删除文章', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('14', '7', 'portal', 'adminpost', 'edit', '', '1', '0', '编辑文章', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('15', '14', 'portal', 'adminpost', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('16', '7', 'portal', 'adminpost', 'add', '', '1', '0', '添加文章', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('17', '16', 'portal', 'adminpost', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('18', '1', 'portal', 'adminterm', 'index', '', '0', '1', '分类管理', '', '', '2', 'navTab');
INSERT INTO `tp_menu` VALUES ('19', '18', 'portal', 'adminterm', 'listorders', '', '1', '0', '文章分类排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('20', '18', 'portal', 'adminterm', 'delete', '', '1', '0', '删除分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('21', '18', 'portal', 'adminterm', 'edit', '', '1', '0', '编辑分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('22', '21', 'portal', 'adminterm', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('23', '18', 'portal', 'adminterm', 'add', '', '1', '0', '添加分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('24', '23', 'portal', 'adminterm', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('25', '1', 'portal', 'adminpage', 'index', '', '1', '1', '页面管理', '', '', '3', 'navTab');
INSERT INTO `tp_menu` VALUES ('26', '25', 'portal', 'adminpage', 'listorders', '', '1', '0', '页面排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('27', '25', 'portal', 'adminpage', 'delete', '', '1', '0', '删除页面', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('28', '25', 'portal', 'adminpage', 'edit', '', '1', '0', '编辑页面', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('29', '28', 'portal', 'adminpage', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('30', '25', 'portal', 'adminpage', 'add', '', '1', '0', '添加页面', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('31', '30', 'portal', 'adminpage', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('32', '1', 'admin', 'recycle', 'default', '', '1', '1', '回收站', '', '', '4', 'navTab');
INSERT INTO `tp_menu` VALUES ('33', '32', 'portal', 'adminpost', 'recyclebin', '', '1', '1', '文章回收', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('34', '33', 'portal', 'adminpost', 'restore', '', '1', '0', '文章还原', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('35', '33', 'portal', 'adminpost', 'clean', '', '1', '0', '彻底删除', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('36', '32', 'portal', 'adminpage', 'recyclebin', '', '1', '1', '页面回收', '', '', '1', 'navTab');
INSERT INTO `tp_menu` VALUES ('37', '36', 'portal', 'adminpage', 'clean', '', '1', '0', '彻底删除', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('38', '36', 'portal', 'adminpage', 'restore', '', '1', '0', '页面还原', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('53', '39', 'admin', 'slide', 'default', '', '1', '1', '幻灯片', '', '', '1', 'navTab');
INSERT INTO `tp_menu` VALUES ('54', '53', 'admin', 'slide', 'index', '', '1', '1', '幻灯片管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('55', '54', 'admin', 'slide', 'listorders', '', '1', '0', '幻灯片排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('56', '54', 'admin', 'slide', 'toggle', '', '1', '0', '幻灯片显示切换', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('57', '54', 'admin', 'slide', 'delete', '', '1', '0', '删除幻灯片', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('58', '54', 'admin', 'slide', 'edit', '', '1', '0', '编辑幻灯片', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('59', '58', 'admin', 'slide', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('60', '54', 'admin', 'slide', 'add', '', '1', '0', '添加幻灯片', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('61', '60', 'admin', 'slide', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('62', '53', 'admin', 'slidecat', 'index', '', '1', '1', '幻灯片分类', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('63', '62', 'admin', 'slidecat', 'delete', '', '1', '0', '删除分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('64', '62', 'admin', 'slidecat', 'edit', '', '1', '0', '编辑分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('65', '64', 'admin', 'slidecat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('66', '62', 'admin', 'slidecat', 'add', '', '1', '0', '添加分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('67', '66', 'admin', 'slidecat', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('85', '0', 'admin', 'menu', 'default', '', '1', '1', '菜单管理', 'list', '', '20', 'navTab');
INSERT INTO `tp_menu` VALUES ('86', '85', 'admin', 'navcat', 'default1', '', '1', '1', '前台菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('87', '86', 'admin', 'nav', 'index', '', '1', '1', '菜单管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('88', '87', 'admin', 'nav', 'listorders', '', '1', '0', '前台导航排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('89', '87', 'admin', 'nav', 'delete', '', '1', '0', '删除菜单', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('90', '87', 'admin', 'nav', 'edit', '', '1', '0', '编辑菜单', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('91', '90', 'admin', 'nav', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('92', '87', 'admin', 'nav', 'add', '', '1', '0', '添加菜单', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('93', '92', 'admin', 'nav', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('94', '86', 'admin', 'navcat', 'index', '', '1', '1', '菜单分类', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('95', '94', 'admin', 'navcat', 'delete', '', '1', '0', '删除分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('96', '94', 'admin', 'navcat', 'edit', '', '1', '0', '编辑分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('97', '96', 'admin', 'navcat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('98', '94', 'admin', 'navcat', 'add', '', '1', '0', '添加分类', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('99', '98', 'admin', 'navcat', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('100', '85', 'admin', 'menu', 'index', '', '1', '1', '后台菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('101', '100', 'admin', 'menu', 'add', '', '1', '0', '添加菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('102', '101', 'admin', 'menu', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('103', '100', 'admin', 'menu', 'listorders', '', '1', '0', '后台菜单排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('104', '100', 'admin', 'menu', 'export_menu', '', '1', '0', '菜单备份', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('105', '100', 'admin', 'menu', 'edit', '', '1', '0', '编辑菜单', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('106', '105', 'admin', 'menu', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('107', '100', 'admin', 'menu', 'delete', '', '1', '0', '删除菜单', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('108', '100', 'admin', 'menu', 'lists', '', '1', '0', '所有菜单', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('109', '0', 'admin', 'setting', 'default', '', '0', '1', '设置', 'cogs', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('110', '109', 'admin', 'setting', 'userdefault', '', '0', '1', '个人信息', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('111', '110', 'admin', 'user', 'userinfo', '', '1', '1', '修改信息', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('112', '111', 'admin', 'user', 'userinfo_post', '', '1', '0', '修改信息提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('113', '110', 'admin', 'setting', 'password', '', '1', '1', '修改密码', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('114', '113', 'admin', 'setting', 'password_post', '', '1', '0', '提交修改', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('115', '109', 'admin', 'setting', 'site', '', '1', '1', '网站信息', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('116', '115', 'admin', 'setting', 'site_post', '', '1', '0', '提交修改', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('117', '115', 'admin', 'route', 'index', '', '1', '0', '路由列表', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('118', '115', 'admin', 'route', 'add', '', '1', '0', '路由添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('119', '118', 'admin', 'route', 'add_post', '', '1', '0', '路由添加提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('120', '115', 'admin', 'route', 'edit', '', '1', '0', '路由编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('121', '120', 'admin', 'route', 'edit_post', '', '1', '0', '路由编辑提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('122', '115', 'admin', 'route', 'delete', '', '1', '0', '路由删除', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('123', '115', 'admin', 'route', 'ban', '', '1', '0', '路由禁止', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('124', '115', 'admin', 'route', 'open', '', '1', '0', '路由启用', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('125', '115', 'admin', 'route', 'listorders', '', '1', '0', '路由排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('126', '109', 'admin', 'mailer', 'default', '', '1', '1', '邮箱配置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('127', '126', 'admin', 'mailer', 'index', '', '1', '1', 'SMTP配置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('128', '127', 'admin', 'mailer', 'index_post', '', '1', '0', '提交配置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('129', '126', 'admin', 'mailer', 'active', '', '1', '1', '注册邮件模板', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('130', '129', 'admin', 'mailer', 'active_post', '', '1', '0', '提交模板', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('131', '109', 'admin', 'setting', 'clearcache', '', '1', '1', '清除缓存', '', '', '1', '');
INSERT INTO `tp_menu` VALUES ('132', '0', 'user', 'indexadmin', 'default', '', '1', '1', '用户管理', 'group', '', '10', 'navTab');
INSERT INTO `tp_menu` VALUES ('133', '132', 'user', 'indexadmin', 'default1', '', '1', '1', '用户组', '', '', '0', 'target_typ');
INSERT INTO `tp_menu` VALUES ('134', '133', 'user', 'indexadmin', 'index', '', '1', '1', '本站用户', 'leaf', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('135', '134', 'user', 'indexadmin', 'ban', '', '1', '0', '拉黑会员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('136', '134', 'user', 'indexadmin', 'cancelban', '', '1', '0', '启用会员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('137', '133', 'user', 'oauthadmin', 'index', '', '1', '1', '第三方用户', 'leaf', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('138', '137', 'user', 'oauthadmin', 'delete', '', '1', '0', '第三方用户解绑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('139', '132', 'user', 'indexadmin', 'default3', '', '1', '1', '管理组', '', '', '0', 'tar');
INSERT INTO `tp_menu` VALUES ('140', '139', 'admin', 'rbac', 'index', '', '1', '1', '角色管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('141', '140', 'admin', 'rbac', 'member', '', '1', '0', '成员管理', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('142', '140', 'admin', 'rbac', 'authorize', '', '1', '0', '权限设置', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('143', '142', 'admin', 'rbac', 'authorize_post', '', '1', '0', '提交设置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('144', '140', 'admin', 'rbac', 'roleedit', '', '1', '0', '编辑角色', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('145', '144', 'admin', 'rbac', 'roleedit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('146', '140', 'admin', 'rbac', 'roledelete', '', '1', '1', '删除角色', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('147', '140', 'admin', 'rbac', 'roleadd', '', '1', '1', '添加角色', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('148', '147', 'admin', 'rbac', 'roleadd_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('149', '139', 'admin', 'user', 'index', '', '1', '1', '管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('150', '149', 'admin', 'user', 'delete', '', '1', '0', '删除管理员', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('151', '149', 'admin', 'user', 'edit', '', '1', '0', '管理员编辑', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('152', '151', 'admin', 'user', 'edit_post', '', '1', '0', '编辑提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('153', '149', 'admin', 'user', 'add', '', '1', '0', '管理员添加', '', '', '1000', 'navTab');
INSERT INTO `tp_menu` VALUES ('154', '153', 'admin', 'user', 'add_post', '', '1', '0', '添加提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('156', '109', 'admin', 'storage', 'index', '', '1', '1', '文件存储', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('157', '156', 'admin', 'storage', 'setting_post', '', '1', '0', '文件存储设置提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('158', '54', 'admin', 'slide', 'ban', '', '1', '0', '禁用幻灯片', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('159', '54', 'admin', 'slide', 'cancelban', '', '1', '0', '启用幻灯片', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('160', '149', 'admin', 'user', 'ban', '', '1', '0', '禁用管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('161', '149', 'admin', 'user', 'cancelban', '', '1', '0', '启用管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('166', '127', 'admin', 'mailer', 'test', '', '1', '0', '测试邮件', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('167', '109', 'admin', 'setting', 'upload', '', '1', '1', '上传设置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('168', '167', 'admin', 'setting', 'upload_post', '', '1', '0', '上传设置提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('169', '7', 'portal', 'adminpost', 'copy', '', '1', '0', '文章批量复制', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('174', '100', 'admin', 'menu', 'backup_menu', '', '1', '0', '备份菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('175', '100', 'admin', 'menu', 'export_menu_lang', '', '1', '0', '导出后台菜单多语言包', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('176', '100', 'admin', 'menu', 'restore_menu', '', '1', '0', '还原菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('177', '100', 'admin', 'menu', 'getactions', '', '1', '0', '导入新菜单', '', '', '0', 'navTab');

-- ----------------------------
-- Table structure for tp_role
-- ----------------------------
DROP TABLE IF EXISTS `tp_role`;
CREATE TABLE `tp_role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '角色名称',
  `pid` smallint(6) DEFAULT '0' COMMENT '父角色ID',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '状态',
  `remark` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `listorder` int(3) NOT NULL DEFAULT '0' COMMENT '排序字段',
  PRIMARY KEY (`id`),
  KEY `parentId` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

-- ----------------------------
-- Records of tp_role
-- ----------------------------
INSERT INTO `tp_role` VALUES ('1', '超级管理员', '0', '1', '拥有网站最高管理员权限！', '1329633709', '1329633709', '0');
INSERT INTO `tp_role` VALUES ('2', '普通管理员', '0', '1', '拥有网站部分权限！', '1329633709', '1539050013', '0');
INSERT INTO `tp_role` VALUES ('3', '总监', '0', '1', '管理其他', '1539249768', '1539249768', '0');

-- ----------------------------
-- Table structure for tp_role_user
-- ----------------------------
DROP TABLE IF EXISTS `tp_role_user`;
CREATE TABLE `tp_role_user` (
  `role_id` int(11) unsigned DEFAULT '0' COMMENT '角色 id',
  `user_id` int(11) DEFAULT '0' COMMENT '用户id',
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COMMENT='用户角色对应表';

-- ----------------------------
-- Records of tp_role_user
-- ----------------------------
INSERT INTO `tp_role_user` VALUES ('2', '1');
INSERT INTO `tp_role_user` VALUES ('2', '2');
INSERT INTO `tp_role_user` VALUES ('2', '1');

-- ----------------------------
-- Table structure for tp_users
-- ----------------------------
DROP TABLE IF EXISTS `tp_users`;
CREATE TABLE `tp_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '用户名',
  `user_pass` varchar(64) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '登录密码；sp_password加密',
  `user_nickname` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '用户美名',
  `user_email` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '登录邮箱',
  `avatar` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户头像，相对于upload/avatar目录',
  `sex` smallint(1) DEFAULT '0' COMMENT '性别；0：保密，1：男；2：女',
  `birthday` date DEFAULT '2000-01-01' COMMENT '生日',
  `signature` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '个性签名',
  `last_login_ip` varchar(16) CHARACTER SET utf8 DEFAULT NULL COMMENT '最后登录ip',
  `last_login_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '最后登录时间',
  `create_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '注册时间',
  `user_status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '用户状态 0：禁用； 1：正常 ；2：未验证',
  `user_type` smallint(1) DEFAULT '1' COMMENT '用户类型，1:admin ;2:会员',
  `mobile` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '手机号',
  PRIMARY KEY (`id`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nickname`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ----------------------------
-- Records of tp_users
-- ----------------------------
INSERT INTO `tp_users` VALUES ('1', 'admin', '###4825f2a9af6773a0bad9430514b0e4ae', 'admin', 'admin@admin.com', null, '0', '2000-01-01', null, '192.168.13.1', '2018-10-24 16:57:51', '2018-01-22 01:53:15', '1', '1', '15231069699');
INSERT INTO `tp_users` VALUES ('2', 'zhangsan', '###57ffd37a884e58ff0636cf079ddb47c2', '', 'zhangsan@zhangsan.com', null, '0', '2000-01-01', null, null, '2000-01-01 00:00:00', '2000-01-01 00:00:00', '0', '1', '17600264769');
