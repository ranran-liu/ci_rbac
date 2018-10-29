/*
Navicat MySQL Data Transfer

Source Server         : 192.168.13.130-go-本地虚拟机
Source Server Version : 50641
Source Host           : 192.168.13.130:3306
Source Database       : myproject

Target Server Type    : MYSQL
Target Server Version : 50641
File Encoding         : 65001

Date: 2018-10-29 12:20:00
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
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COMMENT='权限规则表';

-- ----------------------------
-- Records of tp_auth_rule
-- ----------------------------
INSERT INTO `tp_auth_rule` VALUES ('42', 'admin', 'admin/menu/default', null, '菜单管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('43', 'admin', 'admin/navcat/default1', null, '前台菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('44', 'admin', 'admin/nav/index', null, '菜单管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('45', 'admin', 'admin/nav/listorders', null, '前台导航排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('46', 'admin', 'admin/nav/delete', null, '删除菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('47', 'admin', 'admin/nav/edit', null, '编辑菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('48', 'admin', 'admin/nav/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('49', 'admin', 'admin/nav/add', null, '添加菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('50', 'admin', 'admin/nav/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('51', 'admin', 'admin/navcat/index', null, '菜单分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('52', 'admin', 'admin/navcat/delete', null, '删除分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('53', 'admin', 'admin/navcat/edit', null, '编辑分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('54', 'admin', 'admin/navcat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('55', 'admin', 'admin/navcat/add', null, '添加分类', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('56', 'admin', 'admin/navcat/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('57', 'admin', 'admin/menu/index', null, '后台菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('58', 'admin', 'admin/menu/add', null, '添加菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('59', 'admin', 'admin/menu/add_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('60', 'admin', 'admin/menu/listorders', null, '后台菜单排序', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('61', 'admin', 'admin/menu/edit', null, '编辑菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('62', 'admin', 'admin/menu/edit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('63', 'admin', 'admin/menu/delete', null, '删除菜单', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('1', 'admin', 'admin/setting/default', null, '设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('2', 'admin', 'admin/setting/userdefault', null, '个人信息', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('3', 'admin', 'admin/user/userinfo', null, '修改信息', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('4', 'admin', 'admin/user/userinfo_post', null, '修改信息提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('5', 'admin', 'admin/setting/password', null, '修改密码', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('6', 'admin', 'admin/setting/password_post', null, '提交修改', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('7', 'admin', 'admin/mailer/default', null, '邮箱配置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('8', 'admin', 'admin/mailer/index', null, 'SMTP配置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('9', 'admin', 'admin/mailer/index_post', null, '提交配置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('11', 'admin', 'admin/mailer/active', null, '注册邮件模板', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('12', 'admin', 'admin/mailer/active_post', null, '提交模板', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('35', 'user', 'user/indexadmin/default', null, '用户管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('36', 'user', 'user/indexadmin/default1', null, '用户组', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('37', 'admin', 'user/indexadmin/index', null, '本站用户', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('38', 'admin', 'user/indexadmin/ban', null, '拉黑会员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('39', 'admin', 'user/indexadmin/cancelban', null, '启用会员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('40', 'admin', 'user/oauthadmin/index', null, '第三方用户', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('41', 'admin', 'user/oauthadmin/delete', null, '第三方用户解绑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('13', 'user', 'user/indexadmin/default3', null, '管理组', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('14', 'admin', 'admin/rbac/index', null, '角色管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('15', 'admin', 'admin/rbac/member', null, '成员管理', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('16', 'admin', 'admin/rbac/authorize', null, '权限设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('17', 'admin', 'admin/rbac/authorize_post', null, '提交设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('18', 'admin', 'admin/rbac/roleedit', null, '编辑角色', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('19', 'admin', 'admin/rbac/roleedit_post', null, '提交编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('20', 'admin', 'admin/rbac/roledelete', null, '删除角色', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('21', 'admin', 'admin/rbac/roleadd', null, '添加角色', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('22', 'admin', 'admin/rbac/roleadd_post', null, '提交添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('23', 'admin', 'admin/user/index', null, '管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('24', 'admin', 'admin/user/delete', null, '删除管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('25', 'admin', 'admin/user/edit', null, '管理员编辑', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('26', 'admin', 'admin/user/edit_post', null, '编辑提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('27', 'admin', 'admin/user/add', null, '管理员添加', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('28', 'admin', 'admin/user/add_post', null, '添加提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('31', 'admin', 'admin/storage/index', null, '文件存储', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('32', 'admin', 'admin/storage/setting_post', null, '文件存储设置提交', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('29', 'admin', 'admin/user/ban', null, '禁用管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('30', 'admin', 'admin/user/cancelban', null, '启用管理员', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('10', 'admin', 'admin/mailer/test', null, '测试邮件', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('33', 'admin', 'admin/setting/upload', null, '上传设置', '1', '');
INSERT INTO `tp_auth_rule` VALUES ('34', 'admin', 'admin/setting/upload_post', null, '上传设置提交', '1', '');

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
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COMMENT='后台菜单表';

-- ----------------------------
-- Records of tp_menu
-- ----------------------------
INSERT INTO `tp_menu` VALUES ('42', '0', 'admin', 'menu', 'default', '', '1', '1', '菜单管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('43', '42', 'admin', 'navcat', 'default1', '', '1', '0', '前台菜单', '', '', '0', 'target_typ');
INSERT INTO `tp_menu` VALUES ('44', '43', 'admin', 'nav', 'index', '', '1', '1', '菜单管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('45', '44', 'admin', 'nav', 'listorders', '', '1', '0', '前台导航排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('46', '44', 'admin', 'nav', 'delete', '', '1', '0', '删除菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('47', '44', 'admin', 'nav', 'edit', '', '1', '0', '编辑菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('48', '47', 'admin', 'nav', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('49', '44', 'admin', 'nav', 'add', '', '1', '0', '添加菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('50', '49', 'admin', 'nav', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('51', '42', 'admin', 'navcat', 'index', '', '1', '0', '菜单分类', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('52', '51', 'admin', 'navcat', 'delete', '', '1', '0', '删除分类', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('53', '51', 'admin', 'navcat', 'edit', '', '1', '0', '编辑分类', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('54', '53', 'admin', 'navcat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('55', '51', 'admin', 'navcat', 'add', '', '1', '0', '添加分类', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('56', '55', 'admin', 'navcat', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('57', '42', 'admin', 'menu', 'index', '', '1', '1', '后台菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('58', '57', 'admin', 'menu', 'add', '', '1', '0', '添加菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('59', '58', 'admin', 'menu', 'add_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('60', '57', 'admin', 'menu', 'listorders', '', '1', '0', '后台菜单排序', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('61', '57', 'admin', 'menu', 'edit', '', '1', '0', '编辑菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('62', '61', 'admin', 'menu', 'edit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('63', '57', 'admin', 'menu', 'delete', '', '1', '0', '删除菜单', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('1', '0', 'admin', 'setting', 'default', '', '0', '1', '设置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('2', '1', 'admin', 'setting', 'userdefault', '', '1', '0', '个人信息', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('3', '2', 'admin', 'user', 'userinfo', '', '1', '1', '修改信息', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('4', '3', 'admin', 'user', 'userinfo_post', '', '1', '0', '修改信息提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('5', '2', 'admin', 'setting', 'password', '', '1', '1', '修改密码', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('6', '5', 'admin', 'setting', 'password_post', '', '1', '0', '提交修改', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('7', '1', 'admin', 'mailer', 'default', '', '1', '1', '邮箱配置', '', '', '0', 'target_typ');
INSERT INTO `tp_menu` VALUES ('8', '7', 'admin', 'mailer', 'index', '', '1', '1', 'SMTP配置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('9', '8', 'admin', 'mailer', 'index_post', '', '1', '0', '提交配置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('11', '7', 'admin', 'mailer', 'active', '', '1', '1', '注册邮件模板', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('12', '11', 'admin', 'mailer', 'active_post', '', '1', '0', '提交模板', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('35', '0', 'user', 'indexadmin', 'default', '', '1', '0', '用户管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('36', '35', 'user', 'indexadmin', 'default1', '', '1', '1', '用户组', '', '', '0', 'target_typ');
INSERT INTO `tp_menu` VALUES ('37', '36', 'user', 'indexadmin', 'index', '', '1', '1', '本站用户', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('38', '37', 'user', 'indexadmin', 'ban', '', '1', '0', '拉黑会员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('39', '37', 'user', 'indexadmin', 'cancelban', '', '1', '0', '启用会员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('40', '36', 'user', 'oauthadmin', 'index', '', '1', '1', '第三方用户', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('41', '40', 'user', 'oauthadmin', 'delete', '', '1', '0', '第三方用户解绑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('13', '1', 'user', 'indexadmin', 'default3', '', '1', '1', '管理组', '', '', '0', 'target_typ');
INSERT INTO `tp_menu` VALUES ('14', '13', 'admin', 'rbac', 'index', '', '1', '1', '角色管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('15', '14', 'admin', 'rbac', 'member', '', '1', '0', '成员管理', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('16', '14', 'admin', 'rbac', 'authorize', '', '1', '0', '权限设置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('17', '16', 'admin', 'rbac', 'authorize_post', '', '1', '0', '提交设置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('18', '14', 'admin', 'rbac', 'roleedit', '', '1', '0', '编辑角色', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('19', '18', 'admin', 'rbac', 'roleedit_post', '', '1', '0', '提交编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('20', '14', 'admin', 'rbac', 'roledelete', '', '1', '1', '删除角色', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('21', '14', 'admin', 'rbac', 'roleadd', '', '1', '1', '添加角色', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('22', '21', 'admin', 'rbac', 'roleadd_post', '', '1', '0', '提交添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('23', '13', 'admin', 'user', 'index', '', '1', '1', '管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('24', '23', 'admin', 'user', 'delete', '', '1', '0', '删除管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('25', '23', 'admin', 'user', 'edit', '', '1', '0', '管理员编辑', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('26', '25', 'admin', 'user', 'edit_post', '', '1', '0', '编辑提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('27', '23', 'admin', 'user', 'add', '', '1', '0', '管理员添加', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('28', '27', 'admin', 'user', 'add_post', '', '1', '0', '添加提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('31', '1', 'admin', 'storage', 'index', '', '1', '0', '文件存储', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('32', '31', 'admin', 'storage', 'setting_post', '', '1', '0', '文件存储设置提交', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('29', '23', 'admin', 'user', 'ban', '', '1', '0', '禁用管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('30', '23', 'admin', 'user', 'cancelban', '', '1', '0', '启用管理员', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('10', '8', 'admin', 'mailer', 'test', '', '1', '0', '测试邮件', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('33', '1', 'admin', 'setting', 'upload', '', '1', '0', '上传设置', '', '', '0', 'navTab');
INSERT INTO `tp_menu` VALUES ('34', '33', 'admin', 'setting', 'upload_post', '', '1', '0', '上传设置提交', '', '', '0', 'navTab');

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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

-- ----------------------------
-- Records of tp_role
-- ----------------------------
INSERT INTO `tp_role` VALUES ('1', '超级管理员', '0', '1', '拥有网站最高管理员权限！', '1329633709', '1329633709', '0');

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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ----------------------------
-- Records of tp_users
-- ----------------------------
INSERT INTO `tp_users` VALUES ('1', 'admin', '###4825f2a9af6773a0bad9430514b0e4ae', 'admin', 'admin@admin.com', null, '0', '2000-01-01', null, '192.168.13.1', '2018-10-29 09:30:32', '2018-01-22 01:53:15', '1', '1', '15231069699');
