-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 06, 2022 at 05:08 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prodavnica`
--

-- --------------------------------------------------------

--
-- Table structure for table `Basket`
--

CREATE TABLE `Basket` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `ID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`ID`, `Name`) VALUES
(1, 'Napitak'),
(2, 'Žestoko piće'),
(3, 'Slaniši'),
(4, 'Slatkiši'),
(5, 'Hemijski proizvodi'),
(6, 'Tehnika'),
(7, 'Mlečni proizvodi'),
(8, 'Voće'),
(9, 'Povrće'),
(10, 'Zamrznuti proizvodi'),
(11, 'Mesni proizvodi'),
(12, 'Pekara'),
(13, 'Igračke');

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `Price` float NOT NULL,
  `TimeOfOrder` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `ID` int(11) NOT NULL,
  `Name` varchar(512) NOT NULL,
  `ProviderID` int(11) NOT NULL,
  `CategoryID` int(11) NOT NULL,
  `Price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ID`, `Name`, `ProviderID`, `CategoryID`, `Price`) VALUES
(1, 'Hleb', 1, 12, 65),
(3, 'Orbit Žvake', 2, 4, 65),
(4, 'CocaCola 1l', 4, 1, 80),
(5, 'Fanta 1l', 3, 1, 89),
(6, 'Jogurt Imlek', 1, 7, 110),
(7, 'Grčki jogurt 1.5l', 3, 7, 120),
(8, 'Jogurt Subotička mlekara 1.5l', 1, 7, 125);

-- --------------------------------------------------------

--
-- Table structure for table `Provider`
--

CREATE TABLE `Provider` (
  `ID` int(11) NOT NULL,
  `Name` varchar(512) NOT NULL,
  `Country` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Provider`
--

INSERT INTO `Provider` (`ID`, `Name`, `Country`) VALUES
(1, 'Distribucija DOO', 'Srbija'),
(2, 'Kruton Distribuiton', 'Francuska'),
(3, 'Mario Distribuare', 'Italia'),
(4, 'Madrid Trading', 'Španija');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `ID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Surname` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `Password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Basket`
--
ALTER TABLE `Basket`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_(Basket)UserID_(User)ID` (`UserID`),
  ADD KEY `fk_(Basket)ProductID_(Products)ID` (`ProductID`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_(Orders)ProductID_(Products)ID` (`ProductID`),
  ADD KEY `fk_(Orders)UserID_(Users)ID` (`UserID`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_(Products)CategoryID_(Category)ID` (`CategoryID`),
  ADD KEY `fk_(Products)ProviderID_(Provider)ID` (`ProviderID`);

--
-- Indexes for table `Provider`
--
ALTER TABLE `Provider`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Basket`
--
ALTER TABLE `Basket`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Provider`
--
ALTER TABLE `Provider`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Basket`
--
ALTER TABLE `Basket`
  ADD CONSTRAINT `fk_(Basket)ProductID_(Products)ID` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ID`),
  ADD CONSTRAINT `fk_(Basket)UserID_(User)ID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`);

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `fk_(Orders)ProductID_(Products)ID` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ID`),
  ADD CONSTRAINT `fk_(Orders)UserID_(Users)ID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`);

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `fk_(Products)CategoryID_(Category)ID` FOREIGN KEY (`CategoryID`) REFERENCES `Category` (`ID`),
  ADD CONSTRAINT `fk_(Products)ProviderID_(Provider)ID` FOREIGN KEY (`ProviderID`) REFERENCES `Provider` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
