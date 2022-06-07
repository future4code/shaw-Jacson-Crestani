CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
 "001", 
  "Tony Ramos",
  410000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "002", 
  "Glória Pires",
  200000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  003, 
  "Fernanda Montenegro",
   80000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  001, 
  "Antônio Fagundes",
  600000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  002, 
  "Juliana Paes",
  933337,
  "1979-03-26", 
  "female"
);


      SET SQL_SAFE_UPDATES = 0;
      
  
         SELECT * FROM Actor;
      
      ALTER TABLE Actor ADD Latrel VARCHAR(255);
      
      ALTER TABLE Actor  CHANGE gender gender VARCHAR(255) DEFAULT "NotDirector";
      
 -- a) deleta a coluna de salario
 
 -- b) aceita 6 digitos de generos 
 
 -- c altera para 255 caracteres
    
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
      
      
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = 009;

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = 009;

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = 005;


DELETE FROM Actor WHERE name = "Tony Ramos";
      
-- a) deleta o nome fernanda Montenegro

-- b) delete homem com salario vaoir de 1000000

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 2;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

DELETE FROM Movie WHERE id = "001"
