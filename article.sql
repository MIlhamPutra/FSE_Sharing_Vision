/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : localhost:3306
 Source Schema         : article

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 10/06/2021 21:28:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `category` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `updated_date` timestamp NULL DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (7, 'Disaster Recovery for Kubernetes', 'Kubernetes is the fastest growing open-source project in history but Kubernetes was not designed with stateful applications like databases in mind. For enterprise applications, these systems have non-negotiable business requirements like high availability, data security, disaster recovery, strict performance SLAs and hybrid/multi-cloud operations. As a result, the adoption of Kubernetes for mission-critical enterprise applications is limited unless these requirements can be met.', 'Deployment', '2021-06-10 01:49:48', '2021-06-10 01:52:27', 'Publish');
INSERT INTO `posts` VALUES (8, 'Apa itu Ruby on Rails?', 'Ruby on Rails, disebut juga Rails, adalah sebuah kerangka kerja aplikasi web sumber terbuka yang berjalan via bahasa pemrograman Ruby. Ia merupakan kerangka kerja full-stack: memampukan pembuatan laman dan aplikasi yang mengumpulkan informasi dari server web, berkomunikasi dengan atau memanggil sebuah kueri dari server web, dan mengolah templat dari sumber.', 'Framework', '2021-06-10 02:27:15', '2021-06-10 10:36:33', 'Draft');
INSERT INTO `posts` VALUES (10, 'Memahami Prinsip Polimorfisme dalam OOP', 'Polimorfisme (bahasa inggris polymorphism) adalah sebuah prinsip dalam biologi di mana oraganisme atau spesias dapat memiliki banyak bentuk atau tahapan (stages). Polimorfisme dalam OOP adalah sebuah prinsip di mana class dapat memiliki banyak “bentuk” method yang berbeda-beda meskipun namanya sama.', 'OOP Java', '2021-06-10 02:55:24', '2021-06-10 14:20:13', 'Trash');
INSERT INTO `posts` VALUES (11, 'Daftar Kode Warna Pada HTML & CSS', 'Hexadesimal tersusun dari kombinasi huruf dan angka dengan diawali dengan tanda ‘#’. Sedangkan RGB terdiri dari 3 bagian angka yang terpisah oleh tanda koma. Kode warna pada HTML menggunakan HTML triplets. Setiap dua digit kode melambangkan warna-warna red (merah), green (hijau), blue (biru) atau #RRGGBB.', 'Frontend', '2021-06-10 07:45:59', '2021-06-10 14:25:46', 'Publish');
INSERT INTO `posts` VALUES (12, 'Echo Framework pada Golang', 'Echo adalah framework bahasa golang untuk pengembangan aplikasi web. Framework ini cukup terkenal di komunitas. Echo merupakan framework besar, didalamnya terdapat banyak sekali dependensi.\n\nSalah satu dependensi yang ada didalamnya adalah router, dan pada bab ini kita akan mempelajarinya.\n\nDari banyak routing library yang sudah penulis gunakan, hampir kesemuanya mempunyai kemiripan dalam hal penggunaannya, cukup panggil fungsi/method yang dipilih (biasanya namanya sama dengan HTTP Method), lalu sisipkan rute pada parameter pertama dan handler pada parameter kedua', 'Bahasa Pemograman', '2021-06-10 10:46:14', '2021-06-10 13:56:04', 'Draft');

SET FOREIGN_KEY_CHECKS = 1;
