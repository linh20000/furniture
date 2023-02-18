-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2023 at 07:08 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furniture`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `seo_title` varchar(255) NOT NULL,
  `seo_description` varchar(255) NOT NULL,
  `seo_keyword` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `seo_title` varchar(255) NOT NULL,
  `seo_description` varchar(255) NOT NULL,
  `seo_keyword` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `parent_id`, `status`, `seo_title`, `seo_description`, `seo_keyword`, `created_at`, `updated_at`) VALUES
(1, 'Bàn', 0, '1', 'Bàn', 'Bàn', 'Bàn', '2023-02-16 18:59:14', '2023-02-16 19:24:54'),
(2, 'Sofa và Ghế', 0, '1', 'Sofa và Ghế', 'Sofa và Ghế', 'Sofa và Ghế', '2023-02-16 19:16:55', '2023-02-16 19:25:01'),
(3, 'Sofa', 2, '1', 'Sofa', 'Sofa', 'Sofa', '2023-02-16 19:26:43', '2023-02-16 19:26:43'),
(4, 'Sofa góc', 2, '1', 'Sofa góc', 'Sofa góc', 'Sofa góc', '2023-02-16 19:26:59', '2023-02-16 19:26:59'),
(5, 'Bàn phòng ăn', 1, '1', 'Bàn phòng ăn', 'Bàn phòng ăn', 'Bàn phòng ăn', '2023-02-16 19:27:16', '2023-02-16 19:27:16');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `interiors`
--

CREATE TABLE `interiors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `seo_title` varchar(255) NOT NULL,
  `seo_description` varchar(255) NOT NULL,
  `seo_keyword` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `interiors`
--

INSERT INTO `interiors` (`id`, `name`, `parent_id`, `status`, `seo_title`, `seo_description`, `seo_keyword`, `created_at`, `updated_at`) VALUES
(1, 'Nội thất phong ngủ', '0', '1', 'Nội thất phong ngủ', 'Nội thất phong ngủ', 'Nội thất phong ngủ', '2023-02-17 03:57:52', '2023-02-17 03:57:52'),
(2, 'Sofa bộ', '1', '1', 'Sofa bộ', 'Sofa bộ', 'Sofa bộ', '2023-02-17 04:03:27', '2023-02-17 04:03:27'),
(3, 'Nội thất phòng khách', '0', '1', 'Nội thất phòng khách', 'Nội thất phòng khách', 'Nội thất phòng khách', '2023-02-17 04:06:46', '2023-02-17 04:06:46'),
(4, 'Nội thất phòng bếp', '0', '1', 'Nội thất phòng bếp', 'Nội thất phòng bếp', 'Nội thất phòng bếp', '2023-02-17 04:07:06', '2023-02-17 04:07:06'),
(5, 'Nội thất thông minh', '0', '1', 'Nội thất thông minh', 'Nội thất thông minh', 'Nội thất thông minh', '2023-02-17 04:07:22', '2023-02-17 04:07:22'),
(6, 'Giường đẹp', '1', '1', 'Giường đẹp', 'Giường đẹp', 'Giường đẹp', '2023-02-17 04:07:45', '2023-02-17 04:07:45'),
(7, 'Ghế phòng ngủ', '1', '1', 'Ghế phòng ngủ', 'Ghế phòng ngủ', 'Ghế phòng ngủ', '2023-02-17 04:08:08', '2023-02-17 04:08:08'),
(8, 'Chăn ga gối đệm', '1', '1', 'Chăn ga gối đệm', 'Chăn ga gối đệm', 'Chăn ga gối đệm', '2023-02-17 04:08:28', '2023-02-17 04:08:28'),
(9, 'Bàn thông minh', '5', '1', 'Bàn thông minh', 'Bàn thông minh', 'Bàn thông minh', '2023-02-17 04:09:08', '2023-02-17 04:09:08'),
(10, 'Ghế thông minh', '5', '1', 'Ghế thông minh', 'Ghế thông minh', 'Ghế thông minh', '2023-02-17 04:09:20', '2023-02-17 04:09:20'),
(11, 'Bộ bàn ghế ăn', '4', '1', 'Bộ bàn ghế ăn', 'Bộ bàn ghế ăn', 'Bộ bàn ghế ăn', '2023-02-17 04:09:37', '2023-02-17 04:09:37'),
(12, 'Khăn trải bàn ăn', '4', '1', 'Khăn trải bàn ăn', 'Khăn trải bàn ăn', 'Khăn trải bàn ăn', '2023-02-17 04:09:56', '2023-02-17 04:09:56'),
(13, 'Bàn trà - Kệ tivi', '3', '1', 'Bàn trà - Kệ tivi', 'Bàn trà - Kệ tivi', 'Bàn trà - Kệ tivi', '2023-02-17 04:10:30', '2023-02-17 04:17:02');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_17_083319_create_category_table', 1),
(6, '2023_02_17_093203_create_mini_category_table', 2),
(7, '2023_02_17_104607_create_interior_table', 3),
(8, '2023_02_17_112118_create_banners_table', 4),
(9, '2023_02_17_132412_create_category_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `mini_categories`
--

CREATE TABLE `mini_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `seo_title` varchar(255) NOT NULL,
  `seo_description` varchar(255) NOT NULL,
  `seo_keyword` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mini_categories`
--

INSERT INTO `mini_categories` (`id`, `name`, `parent_id`, `status`, `seo_title`, `seo_description`, `seo_keyword`, `created_at`, `updated_at`) VALUES
(1, 'Sofa da', '2', '1', 'Sofa da', 'Sofa da', 'Sofa da', '2023-02-17 02:48:49', '2023-02-17 02:48:49'),
(2, 'Bàn trang điểm', '1', '1', 'Bàn trang điểm', 'Bàn trang điểm', 'Bàn trang điểm', '2023-02-17 02:49:39', '2023-02-17 02:49:39');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@ommanisoft.com', NULL, '$2y$10$Nw5WXHO4lFroWGSnx7xOfup8NzrOm9HtsaatobN.2MiQ22o6HGv6q', 'admin', NULL, '2023-02-17 01:51:36', '2023-02-17 01:51:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `interiors`
--
ALTER TABLE `interiors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mini_categories`
--
ALTER TABLE `mini_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `parent_id` (`parent_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `interiors`
--
ALTER TABLE `interiors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `mini_categories`
--
ALTER TABLE `mini_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
