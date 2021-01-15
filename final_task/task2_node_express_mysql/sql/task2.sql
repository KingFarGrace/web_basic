/*
Navicat MySQL Data Transfer

Source Server         : nodejs
Source Server Version : 50732
Source Host           : localhost:3306
Source Database       : task2

Target Server Type    : MYSQL
Target Server Version : 50732
File Encoding         : 65001

Date: 2021-01-15 18:09:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `students`
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `clazz` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('00000000001', 'ZHANG', '20', '男', '软件1802');
INSERT INTO `students` VALUES ('00000000003', 'ZHU', '20', '男', '软件1801');
INSERT INTO `students` VALUES ('00000000006', 'WANG', '20', '男', '软件1802');
INSERT INTO `students` VALUES ('00000000010', 'Sun', '18', '女', '计算2003');
INSERT INTO `students` VALUES ('00000000011', 'Qian', '21', '男', '物联1701');
