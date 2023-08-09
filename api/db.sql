CREATE DATABASE IF NOT EXISTS `healthboyz`;

USE `healthboyz`;

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `description` text NOT NULL
);

INSERT INTO `doctors` (`id`, `name`, `img_url`, `description`) VALUES
(1, 'William Johns', '../images/doctor1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas iure adipisci, esse consectetur neque atque quam inventore illo.'),
(2, 'Robert Janowski', '../images/doctor2.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas iure adipisci, esse consectetur neque atque quam inventore illo.'),
(3, 'Richard Smith', '../images/doctor3.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas iure adipisci, esse consectetur neque atque quam inventore illo.'),
(4, 'Thomas George', '../images/doctor4.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas iure adipisci, esse consectetur neque atque quam inventore illo.'),
(5, 'Joseph Nowacki', '../images/doctor5.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas iure adipisci, esse consectetur neque atque quam inventore illo.'),
(6, 'David Greg', '../images/doctor6.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas iure adipisci, esse consectetur neque atque quam inventore illo.');

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `e_mail` varchar(25) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(5) NOT NULL
) 

ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


