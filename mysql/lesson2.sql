# SELECT * FROM doctor_patient d_p
# JOIN patient p ON d_p.patient_id = p.id;
#
# SELECT * FROM doctor_patient d_p
# JOIN patient p ON d_p.patient_id = p.id
# JOIN doctor d ON d_p.doctor_id = d.id;
#
#
# SELECT d.name AS docName,
#        d.email AS docMail,
#        p.name AS patName,
#        P.phone AS patPhone
# FROM doctor_patient d_p
# JOIN patient p ON d_p.patient_id = p.id
# JOIN doctor d ON d_p.doctor_id = d.id
#


SELECT COUNT(id) as studCount,
       gender
FROM students
GROUP BY gender;


SELECT s.name,
       s.age,
       l.label,
       l.date,
       l.student_count,
       r.rating
FROM students s
         JOIN ratings r ON s.id = r.student_id
         JOIN lesson l ON r.lesson_id = l.id
WHERE r.rating = 5;



SELECT COUNT(r.id) AS IMolodec,
       l.label,
       l.id
FROM students s
         JOIN ratings r ON s.id = r.student_id
         JOIN lesson l ON r.lesson_id = l.id
WHERE r.rating = 5
GROUP BY l.id;



SELECT CONCAT(name, ' ', age) as concated
FROM students;


SELECT *
FROM students
WHERE age IN (20, 25, 30)
ORDER BY age;

UPDATE students
SET age = 40
WHERE age > 40;


DELETE
FROM students
WHERE age < 10;


SELECT DISTINCT(name)
FROM students;

SELECT DISTINCT(label)
FROM lesson
    RIGHT JOIN ratings r on lesson.id = r.lesson_id
WHERE r.rating = 5;






SELECT * FROM users JOIN depts d on users.dept_id = d.id;

SELECT * FROM users RIGHT JOIN depts d on users.dept_id = d.id;
SELECT * FROM users LEFT JOIN depts d on users.dept_id = d.id;


select *
from users, depts;


select *
from users cross join depts
