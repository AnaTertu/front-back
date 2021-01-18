DROP DATABASE IF EXISTS anaeletro;
CREATE DATABASE IF NOT EXISTS anaeletro;

USE anaeletro;

 SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
    START TRANSACTION;
    SET time_zone = "+00:00";
    
CREATE TABLE anaeletro.people(
    idpeople INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nameC VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    phones INT(14) NOT NULL,
    posts VARCHAR(200),
    dates TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    passwords INT(8) NOT NULL
) comment = 'Clientes da loja anaeletro.';

CREATE TABLE anaeletro.orders(
    idOrder INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    namesC VARCHAR(45) NOT NULL,
    phonesC INT(14) NOT NULL,
    addressC VARCHAR(150),
    descriptionProducts VARCHAR(150),
	pricesEnd DECIMAL(8,2),
    amount INT
    ) comment = 'Produtos anunciados na loja anaeletro';

CREATE TABLE anaeletro.categories (
    id_category INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    categories VARCHAR(60) NOT NULL
);

CREATE TABLE anaeletro.products(
	idproducts INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_category INT NOT NULL,
    category VARCHAR(60) NOT NULL,
    descriptionProducts VARCHAR(150) NOT NULL,
    prices DECIMAL(8,2) NOT NULL,
    pricesEnd DECIMAL(8,2) NOT NULL,
    imageProducts VARCHAR(255) NOT NULL
    ) comment = 'Produtos anúnciados na loja anaeletro.';

ALTER TABLE anaeletro.products ADD CONSTRAINT FOREIGN KEY (id_category) REFERENCES anaeletro.categories (id_category);

ALTER TABLE anaeletro.products ADD CONSTRAINT FOREIGN KEY (pricesEnd) REFERENCES anaeletro.order (pricesEnd);

DROP VIEW IF EXISTS `anaeletro`.`new_view` ;
USE `anaeletro`;
CREATE 
     OR REPLACE ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `anaeletro`.`total` AS
    SELECT 
        COUNT(0) AS `total_people`
    FROM
        `anaeletro`.`people`;


INSERT INTO anaeletro.categories VALUES (1,'Geladeiras'); 
INSERT INTO anaeletro.categories VALUES (2, 'Fogões'); 
INSERT INTO anaeletro.categories VALUES (3, 'Microondas'); 
INSERT INTO anaeletro.categories VALUES (4, 'Lava Louças'); 
INSERT INTO anaeletro.categories VALUES (5, 'Lava Roupas');
    
 INSERT INTO anaeletro.products (id_category, category, descriptionProducts, prices, pricesEnd, imageProducts) 
VALUES 
  (1, 'geladeira','geladeira frost free brastemp side inverse 540 litros', 6389.00, 5019.00, 'imag/geladeira_brastemp.jpg'),
  (1, 'geladeira', 'geladeira frost free brastemp branca 375 litros', 2068.60, 1910.90, 'imag/refrigerador_brastemp.PNG'),
  (1, 'geladeira', 'geladeira frost free consul prata 340 litros', 2199.90, 2069.00, 'imag/refrigerador_consul.PNG'),
  (2, 'fogao', 'fogão 4 bocas consul inox com mesa de vidro', 1150.50, 1129.00, 'imag/fogao_consul.jpg'),
  (2, 'fogao', 'fogão de piso 4 bocas atlas monaco com acendimento automático', 609.00, 519.70, 'imag/fogao_monaco.jpeg'),
  (3, 'microondas', 'microondas consul 32 litros inox 220v', 580.00, 409.88, 'imag/microndas_consul.PNG'),
  (3, 'microondas', 'microondas 25 litros espelhado philco 220', 508.70, 464.53, 'imag/microondas_philco.PNG'),
  (3, 'microondas', 'forno de microondas electroluz 20l branco 110v', 459.90, 436.05, 'imag/microondas_electroluz.jpeg'),
  (4, 'lavalouca', 'lava-louça electrolux inox com 10 serviços, 6 programas de lavagens', 3599.00, 2799.90, 'imag/lava_loucas_electroux.jpg'),
  (4, 'lavalouca', 'lava-louças compacta 8 serviços branca 127v brastemp', 1970.50, 1730.61, 'imag/lava_loucas_brastemp.jpg'),
  (5, 'lavaroupa', 'lavadadora de roupas brastemp 11kg com turbo performace branca', 1699.00, 1214.10, 'imag/lavadora_brastemp.jpg'),
  (5, 'lavaroupa', 'lavadora philco inverter 12kg', 2399.90, 2179.90, 'imag/lavadora_philco.jpeg');

INSERT INTO anaeletro.people (nameC, email, phones, posts, passwords) VALUES('Ana Tertuliano', 'ana@gmail', '5511941969894', "Olá, mundo!", 12345678);
INSERT INTO anaeletro.people (nameC, email, phones, posts, passwords) VALUES('Elnatan', 'elnatan@gmail.com','551195293527', 'Ótimos produtos.', 123);
INSERT INTO anaeletro.people (nameC, email, phones, posts, passwords) VALUES('Thamirez', 'thami@gmail.com','5511958011441', 'Parabéns pela loja', 456);
INSERT INTO anaeletro.people (nameC, email, phones, posts, passwords) VALUES('Diego', 'diego@gmail.com', '5511998369001', 'Chegamos aqui', 789);

INSERT INTO anaeletro.orders (namesC,  phonesC, addressC, descriptionProducts, pricesEnd, amount) VALUES('Ana Tertuliano', '5511941969894', "Rua A, 11 -SP", "microondas 25 litros espelhado philco 220", 464.53, 3);
INSERT INTO anaeletro.orders (namesC,  phonesC, addressC, descriptionProducts, pricesEnd, amount) VALUES('Arnaldo', '551198459845', "Rua B, 13 -SP", "microondas 25 litros espelhado philco 220", 464.53, 1);

SELECT * FROM anaeletro.people;
CREATE VIEW `total` AS
SELECT count(*) as total_people FROM anaeletro.people;

-- SELECT * FROM products JOIN categories ON products.id_category = categories.id_category;

-- SELECT * FROM products JOIN orders ON orders.pricesEnd = products.pricesEnd;

-- CREATE VIEW `produtos` AS
-- SELECT * FROM products JOIN categories ON products.id_category = categories.id_category;

-- CREATE VIEW `prices` AS
-- SELECT * FROM products JOIN orders ON orders.pricesEnd = products.pricesEnd;
