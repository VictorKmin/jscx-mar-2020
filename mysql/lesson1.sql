SELECT * FROM students;

SELECT * FROM students WHERE age = 15;

SELECT * FROM students WHERE name = 'romAn';

SELECT * FROM students WHERE name LIKE '%n';

SELECT * FROM students WHERE name LIKE '%a%';

SELECT * FROM students WHERE name LIKE '__a%';

SELECT * FROM students WHERE LENGTH(name) = 4;

SELECT * FROM students WHERE gender LIKE 'm%' ORDER BY age;

SELECT * FROM students WHERE gender = 'male' ORDER BY age;

SELECT * FROM students ORDER BY age LIMIT 3;

SELECT * FROM students ORDER BY age DESC LIMIT 1;

SELECT * FROM students ORDER BY age DESC LIMIT 1 OFFSET 3;
SELECT * FROM students ORDER BY age DESC;

SELECT * FROM students LIMIT 2 OFFSET 4;

SELECT * FROM students WHERE age != 18;
SELECT * FROM students WHERE age > 18;

SELECT * FROM students WHERE age > 18 AND name LIKE 'o%';

SELECT * FROM students WHERE age < 18 OR name LIKE 'o%';

SELECT * FROM students WHERE age BETWEEN 20 AND 30;

SELECT * FROM students WHERE age BETWEEN 20 AND 30 OR name LIKE 'o%';


# AGGREGATE FUNCTIONS
SELECT MAX(age) FROM students;

SELECT MIN(age) FROM students;

SELECT MAX(age), MIN(age) FROM students;

SELECT AVG(age) FROM students;

SELECT COUNT(name) FROM students;

SELECT COUNT(id) FROM students WHERE age > 35;

SELECT AVG(rating) AS avgScore,
       COUNT(rating) AS gradeCount
FROM ratings
WHERE student_id = 5;

SELECT SUM(age) AS ageSum FROM students;


SELECT * FROM students WHERE name IS NULL;

UPDATE students SET name = NULL WHERE id = 1;

UPDATE students SET age = 20 WHERE age > 40;



