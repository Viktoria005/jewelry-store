-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2024 at 12:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jewelry_store_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartID` bigint(20) NOT NULL,
  `userID` bigint(20) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cartID`, `userID`, `createdAt`, `updatedAt`) VALUES
(1, 18, '2024-03-15 15:21:37', '2024-03-15 15:21:37'),
(2, 22, '2024-03-22 14:31:14', '2024-03-22 14:31:14'),
(3, 23, '2024-03-27 19:25:17', '2024-03-27 19:25:17'),
(4, 24, '2024-04-06 20:15:31', '2024-04-06 20:15:31');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `cartItemID` bigint(20) NOT NULL,
  `cartID` bigint(20) DEFAULT NULL,
  `productID` bigint(20) DEFAULT NULL,
  `productQuantity` int(11) DEFAULT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` bigint(20) NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Rings'),
(2, 'Earrings'),
(3, 'Necklaces'),
(4, 'Bracelets');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` bigint(20) NOT NULL,
  `userID` bigint(20) NOT NULL,
  `productIDs` text NOT NULL,
  `quantities` text NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT current_timestamp(),
  `phoneNumber` char(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  `paymentMethod` varchar(255) NOT NULL,
  `currentStatus` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `userID`, `productIDs`, `quantities`, `firstName`, `lastName`, `orderDate`, `phoneNumber`, `address`, `totalPrice`, `paymentMethod`, `currentStatus`) VALUES
(84, 22, '[\"14\",\"3\",\"2\"]', '[\"1\",\"1\",\"3\"]', 'Stamat', 'Stamatev', '2024-04-16 20:05:08', '876354273', 'Sofia', 6780.00, 'Card', 'Cancelled'),
(85, 23, '[\"2\"]', '[\"2\"]', 'Viktoria', 'Kirilova', '2024-04-16 20:06:31', '843654272', 'Varna', 400.00, 'Cash', 'Cancelled'),
(86, 23, '[\"3\"]', '[\"1\"]', 'Viktoria', 'Kirilova', '2024-04-16 20:35:43', '843654272', 'Varna', 550.00, 'Card', 'Accepted'),
(87, 22, '[\"2\"]', '[\"1\"]', 'Stamat', 'Stamatev', '2024-04-16 20:54:52', '876354273', 'Sofia', 200.00, 'Card', 'Cancelled'),
(88, 23, '[\"2\"]', '[\"1\"]', 'Viktoria', 'Kirilova', '2024-04-16 21:17:20', '843654272', 'Varna', 200.00, 'Cash', 'In Proccess'),
(89, 22, '[\"1\"]', '[\"223\"]', 'Stamat', 'Stamatev', '2024-04-17 08:36:34', '876354273', 'Sofia', 334500.00, 'Cash', 'Cancelled'),
(90, 18, '[\"1\",\"3\"]', '[\"2\",\"2\"]', 'Admin', 'Adminov', '2024-04-17 13:34:57', '8329882374', 'sfdsgdfjhdsfb', 4100.00, 'Cash', 'Cancelled');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` bigint(20) NOT NULL,
  `categoryID` bigint(20) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `stockQuantity` int(11) DEFAULT NULL,
  `material` text NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `productName`, `description`, `price`, `imageUrl`, `stockQuantity`, `material`, `createdAt`) VALUES
(1, 1, 'Diamond Ring', 'Discover the epitome of timeless elegance with our exquisite diamond ring. This sparkling jewel stands as a symbol of sophistication, meticulously crafted with precision in 18K white gold. Whether for a special occasion or to elevate your everyday ensemble, this radiant piece exudes unmatched beauty and grace. Adorn yourself with its brilliance and make a statement that transcends time.', 1500.00, 'https://www.distinctivegem.com/cdn/shop/products/01r_4a60e4ae-e3b7-4a80-9932-a32d2321bdee_1400x.jpg?v=1525448090', 622, 'Gold', '2024-03-20'),
(2, 1, 'Delicate Ring ', 'Discover understated elegance with our silver ring. Sleek and versatile, crafted with precision in sterling silver. A classic piece for any occasion, adding a touch of effortless style to your look.', 200.00, 'https://boldiful.com/cdn/shop/products/Garden_Flower_925_Silver_Ring_3_grande.jpg?v=1591791209', 248, 'Silver', '2024-03-21'),
(3, 2, 'Diamond Earrings', '\"Discover understated beauty with our silver earrings. Crafted with finesse in sterling silver, these earrings exude timeless elegance. Versatile and captivating, they effortlessly elevate any look with a touch of refined glamour.\"', 550.00, 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbad20188/images/hi-res/501163SILAAA09.jpg?sw=640&sh=640', 168, 'Silver', '2024-03-22'),
(4, 2, 'Hoop Earrings ', 'Adorn yourself with timeless elegance wearing our gold earrings. Crafted with precision in gleaming 18K gold, these earrings exude sophistication and charm. Versatile and chic, they effortlessly elevate any look with their radiant allure.', 450.00, 'https://m.media-amazon.com/images/I/61Z+6YdoveL._AC_UY1000_.jpg', 120, 'Gold', '2024-03-23'),
(5, 3, 'Diamond Necklace', 'Experience elegance redefined with our diamond necklace. Crafted to perfection in 18K white gold, it showcases a dazzling array of brilliant-cut diamonds, exuding unmatched allure and sophistication. Elevate any look with this radiant piece, a timeless symbol of refined beauty and grace', 1200.00, 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw36a31bfc/RGN469_RGN469_GN8550_Hero_1.jpg?sw=800&sh=800', 156, 'Silver', '2024-03-24'),
(6, 3, 'Gold Necklace ', 'Adorn yourself in timeless elegance with our gold necklace. Crafted with meticulous detail in gleaming 18K gold, it\'s a symbol of sophistication and style. Versatile and captivating, it adds a touch of luxury to any look, making every moment shine.', 400.00, 'https://i.pinimg.com/736x/2c/34/aa/2c34aa71aeb79a46249fd0cd00ae9169.jpg', 165, 'Gold', '2024-03-25'),
(7, 4, 'Diamond Bracelet ', 'Embrace timeless elegance with our diamond bracelet in sterling silver. Each shimmering diamond exudes sophistication, delicately set in a sleek silver band. Versatile and refined, it\'s the perfect accessory for adding a touch of sparkle to any outfit.', 300.00, 'https://howard.ca/cdn/shop/files/bracelet_c314f97c-18cf-43fe-8c21-b7959457c6a3.jpg?v=1696443528', 153, 'Silver', '2024-03-26'),
(8, 4, 'Gold Bracelet', 'Exuding timeless elegance, this piece is meticulously crafted to perfection. Made of exquisite 18K gold, it\'s a radiant accessory that effortlessly elevates any look, making it a must-have for those who appreciate refined style.', 650.00, 'https://a.1stdibscdn.com/van-cleef-arpels-limited-edition-vintage-alhambra-diamond-lapis-gold-bracelet-for-sale/1121189/j_105780121602805872455/10578012_master.jpg?width=768', 139, 'Gold', '2024-03-27'),
(13, 1, 'Ring-gold', 'prusten', 340.00, 'https://t3.ftcdn.net/jpg/05/64/35/80/360_F_564358021_KBRaemBSj9FGjZlupRQsloTJIMo1MATC.jpg', 0, 'Gold', '2024-04-03'),
(14, 1, 'ring silver', 'oshte edin prusten ', 5630.00, 'https://assets.ajio.com/medias/sys_master/root/20230817/AEx6/64dd36b9a9b42d15c9b3fc62/-473Wx593H-466467183-silver-MODEL.jpg', 317, 'Silver', '2024-04-03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` bigint(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `gender` varchar(255) NOT NULL,
  `profileType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `firstName`, `lastName`, `username`, `email`, `pwd`, `dateOfBirth`, `gender`, `profileType`) VALUES
(18, 'Admin', 'Adminov', 'admin', 'vikikirilova182@gmail.com', '$2y$10$V7EeNSh98raBFBp0vyIdmO4MVj0Sdi/O7KJj7Mv3YzkasA56WHVt.', '2024-03-03', 'female', 'admin'),
(22, 'Stamat', 'Stamatev', 'stami123', 'stami123@gmail.com', '$2y$10$pCU1F7LzMpsJvJv0f.nuyeVVcNxCiI6lgcwJA8g09hiFNo9iX5r.e', '2005-05-16', 'male', 'user'),
(23, 'Viktoria', 'Kirilova', 'vikito', 'vikito@gmail.com', '$2y$10$c92rNIE7CND18P2gAyxwe.zIhwYG1ohh9G8jr9Exas1Lt5IYhn316', '2005-12-27', 'female', 'user'),
(24, 'Ivan', 'Ivanov', 'i.ivanov', 'ivan@gmail.com', '$2y$10$7t71yVKVh/8DD5Gasb.nwucUdVQ1EFOXW4HRmWaE7FeHd/maIwXNy', '2005-07-07', 'male', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartID`),
  ADD KEY `fk_cart_user` (`userID`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`cartItemID`),
  ADD KEY `cartID` (`cartID`),
  ADD KEY `fk_cart_items_product` (`productID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `cartItemID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_user` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cartID`) REFERENCES `cart` (`cartID`),
  ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `products` (`productId`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
