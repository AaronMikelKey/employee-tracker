// Import and require mysql2
import inquirer from 'inquirer'
import { createConnection } from "mysql2";
import 'console.table'
import * as dotenv from 'dotenv'
dotenv.config()

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

// Delete Employee from db
function deleteEmployee() {
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

// TODO: Add function to add department

// TODO: Add function to add role

// TODO: Add function to add employee

// TODO: Add function to update employee role

// Show employees query
const showEmployees = () => {
	db.promise().query("SELECT * FROM employees;")
			.then(([rows, fields]) => {
				console.table(rows);
				showOptions();
			})
		}

// Main menu questions
const questions = [
	{
		type: "list",
		name: "choice",
		message: "What would you like to do?",
		choices: ["View All Employees", "Remove Employee", "Quit"],
	},
]

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