-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 11:31 PM
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
(1, 1, 'Diamond Ring', 'Discover the epitome of timeless elegance with our exquisite diamond ring. This sparkling jewel stands as a symbol of sophistication, meticulously crafted with precision in 18K white gold. Whether for a special occasion or to elevate your everyday ensemble, this radiant piece exudes unmatched beauty and grace. Adorn yourself with its brilliance and make a statement that transcends time.', 1500.00, 'https://www.distinctivegem.com/cdn/shop/products/01r_4a60e4ae-e3b7-4a80-9932-a32d2321bdee_1400x.jpg?v=1525448090', 10, 'Gold', '2024-03-20'),
(2, 1, 'Delicate Ring ', 'Discover understated elegance with our silver ring. Sleek and versatile, crafted with precision in sterling silver. A classic piece for any occasion, adding a touch of effortless style to your look.', 200.00, 'https://boldiful.com/cdn/shop/products/Garden_Flower_925_Silver_Ring_3_grande.jpg?v=1591791209', 20, 'Silver', '2024-03-21'),
(3, 2, 'Diamond Earrings', '\"Discover understated beauty with our silver earrings. Crafted with finesse in sterling silver, these earrings exude timeless elegance. Versatile and captivating, they effortlessly elevate any look with a touch of refined glamour.\"', 550.00, 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbad20188/images/hi-res/501163SILAAA09.jpg?sw=640&sh=640', 8, 'Silver', '2024-03-22'),
(4, 2, 'Hoop Earrings ', 'Adorn yourself with timeless elegance wearing our gold earrings. Crafted with precision in gleaming 18K gold, these earrings exude sophistication and charm. Versatile and chic, they effortlessly elevate any look with their radiant allure.', 450.00, 'https://m.media-amazon.com/images/I/61Z+6YdoveL._AC_UY1000_.jpg', 12, 'Gold', '2024-03-23'),
(5, 3, 'Diamond Necklace', 'Experience elegance redefined with our diamond necklace. Crafted to perfection in 18K white gold, it showcases a dazzling array of brilliant-cut diamonds, exuding unmatched allure and sophistication. Elevate any look with this radiant piece, a timeless symbol of refined beauty and grace', 1200.00, 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw36a31bfc/RGN469_RGN469_GN8550_Hero_1.jpg?sw=800&sh=800', 5, 'Silver', '2024-03-24'),
(6, 3, 'Gold Necklace ', 'Adorn yourself in timeless elegance with our gold necklace. Crafted with meticulous detail in gleaming 18K gold, it\is a symbol of sophistication and style. Versatile and captivating, it adds a touch of luxury to any look, making every moment shine.', 400.00, 'https://i.pinimg.com/736x/2c/34/aa/2c34aa71aeb79a46249fd0cd00ae9169.jpg', 7, 'Gold', '2024-03-25'),
(7, 4, 'Diamond Bracelet', 'Embrace timeless elegance with our diamond bracelet in sterling silver. Each shimmering diamond exudes sophistication, delicately set in a sleek silver band. Versatile and refined, it/s the perfect accessory for adding a touch of sparkle to any outfit.', 300.00, 'https://howard.ca/cdn/shop/files/bracelet_c314f97c-18cf-43fe-8c21-b7959457c6a3.jpg?v=1696443528', 6, 'Silver', '2024-03-26'),
(8, 4, 'Gold Bracelet', 'Exuding timeless elegance, this piece is meticulously crafted to perfection. Made of exquisite 18K gold, it\'s a radiant accessory that effortlessly elevates any look, making it a must-have for those who appreciate refined style.', 650.00, 'https://a.1stdibscdn.com/van-cleef-arpels-limited-edition-vintage-alhambra-diamond-lapis-gold-bracelet-for-sale/1121189/j_105780121602805872455/10578012_master.jpg?width=768', 14, 'Gold', '2024-03-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `categoryID` (`categoryID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
