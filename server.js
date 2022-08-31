// Import and require mysql2
import inquirer from 'inquirer'
import { createConnection } from "mysql2";
import 'console.table'
import * as dotenv from 'dotenv'
dotenv.config()

// Main menu questions
const questions = [
	{
		type: "list",
		name: "choice",
		message: "What would you like to do?",
		choices: ["View All Employees", "Remove Employee", "Quit"],
	},
]

// Connect to database
const db = createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: process.env.password,
    database: "company",
  }
)

// TODO: Add function to show all departments
const showDepartments = () => {}
// TODO: Add function to show all roles
const showRoles = () => {}
// Show employees query
const showEmployees = () => {
	db.promise().query("SELECT * FROM employees;")
			.then(([rows, fields]) => {
				console.table(rows);
				showOptions();
			})
		}

// TODO: Add function to add department
const addDepartment = () => {}
// TODO: Add function to add role
const addRole = () => {}
// TODO: Add function to add employee
const addEmployee = () => {}
// TODO: Add function to update employee role
const updateRole = () => {}
// Delete Employee from db
const deleteEmployee = () => {
  db.query("SELECT * FROM employee", function (err, results) {
    const choices = results.map(({ id, first_name, last_name }) => {
      return {
        name: `${first_name} ${last_name}`,
        value: id,
      };
    });

    inquirer.prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee would you like to remove?",
          choices: choices,
        },
      ])
      .then(({ employeeId }) => {
        db.query(
          `DELETE FROM employee WHERE id = ?`,
          employeeId,
          (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
            showOptions();
          }
        );
      });
  });
}

// Show options && initial questions
const showOptions = () => {
  inquirer.prompt(questions)
    .then(({ choice }) => {
			switch ( choice ) {
        case "View All Employees":
          showEmployees();
          break;
        case "Remove Employee":
          deleteEmployee();
          break;
        case "Quit":
          process.exit();
      }
    });
}

showOptions()