DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
 item_id INTEGER NOT NULL,
 product_name VARCHAR (100) NOT NULL,
 department_name VARCHAR (100) NOT NULL,
 price DECIMAL (10,2),
 stock_quantity INTEGER,
 PRIMARY KEY (item_id)
 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (01, "loafers", "shoes", 75, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (02, "jacket", "clothing", 150, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (03, "watch", "jewelry", 250, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (04, "computer", "electronics", 500, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (05, "book", "books", 5, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (06, "dog food", "pet supplies", 10, 2000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (07, "frozen pizzas", "food", 5, 2500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (08, "gardening hose", "outdoor", 15, 125);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (09, "engine oil", "automotive", 7, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "rolling pin", "culinary supplies", 12, 450);


-- SELECT * FROM top5000;
