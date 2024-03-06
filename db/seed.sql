USE employeedb;

INSERT INTO department(name)
VALUES ("Engineering"), ("Management"), ("HR");

INSERT INTO role(title, salary, department_id)
VALUES ("Engineer", 80000, 1), ("Manager", 60000, 2), ("HR Rep", 20000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Lucy", "Liu", 2, null), ("Henry", "Peavler", 1, 1),  ("Rob", "K", 3, 1);