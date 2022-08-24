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
	("Account Manager", 160000),
	("Accountant", 120000),
	("Lawyer", 190000),
	("Legal Team Lead", 250000);

INSERT INTO employees (first_name, last_name)
VALUES 
	("Alfred", "Corbett"),
("Alyx", "Hahn"),
("Lynda", "Franklin"),
("Michele", "Molloy"),
("Jameson", "Sparks"),
("Adam", "Wilcox"),
("Hettie", "Cooper"),
("Alan", "Beard"),
("Lilith", "Pike"),
("Shania", "Quinn"),
("Sophie", "Pace");