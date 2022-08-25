INSERT INTO departments (name)
VALUES
	('Sales'),
	('Engineering'),
	('Finance'),
	('Legal'),
	('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES 
	("Sales Lead", 100000, 1),
	("Salesperson", 80000, 1),
	("Electrical Engineer", 80000, 2),
	("Mechanical Engineer", 80000, 2),
	("Project Engineer", 100000, 2),
	("Software Engineer", 120000, 2),
	("Account Manager", 160000, 3),
	("Accountant", 120000, 3),
	("Lawyer", 190000, 4),
	("Legal Team Lead", 250000, 4);

INSERT INTO employees (first_name, last_name, role_id, department_id)
VALUES 
	("Alfred", "Corbett", 1, 1),
("Alyx", "Hahn", 2, 1),
("Lynda", "Franklin", 3, 2),
("Michele", "Molloy", 4, 2),
("Jameson", "Sparks", 5, 2),
("Adam", "Wilcox", 6, 2),
("Hettie", "Cooper", 7, 3),
("Alan", "Beard", 8, 3),
("Lilith", "Pike", 9, 4),
("Shania", "Quinn", 10, 4),
("Sophie", "Pace", 9, 4);