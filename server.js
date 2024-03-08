const connection = require("./connection")
const inquirer = require("inquirer")


function startApp() {
    inquirer.prompt([
      {
        name: "prompt",
        type: "list",
        message: "What action do you want?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Update employee roles",
          "Exit"
        ]
      }])
      .then(function (response) {
        switch (response.prompt) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add a new department":
            addDepartment();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          case "Update employee roles":
            employeeUpdate();
            break;
          case "Exit":
            connection.end();
            break;
        }
      });
  };

// query database for all info on each table
  function viewDepartments(){
    connection.query("SELECT * FROM department", (err, res) =>{
        if(err) throw err;
        console.table(res)
        startApp()
    } )
  }

  function viewRoles(){
    connection.query("SELECT * FROM role", (err, res) =>{
        if(err) throw err;
        console.table(res)
        startApp()
    } )
  }

  function viewEmployees(){
    connection.query("SELECT * FROM employee", (err, res) =>{
        if(err) throw err;
        console.table(res)
        startApp()
    } )
  }


function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message:"Please enter the name of the new department."
        }
    ]).then(function(answer){
        connection.query("INSERT INTO department SET ?", {
            name: answer.departmentName
        })
        console.log("Department added.")
        startApp()
    })
}
  
// add role function
function addRole() {
    inquirer.prompt([
        {
          name: "title",
          type: "input", 
          message: "what is Department ID?"  
        },
        {
          name: "salary",
          type: "number",
          message: "What is the salary of this position?"
        },
        {
          name: "departmentId",
          type: "rawlist",
          message: "Select a department for this role"
        },
    ])
}

//add employee function
function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the new emplyee's first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the new emplyee's last name?"
        },
        {
            name: "roleId",
            type: "rawlist",
            message: "Select a role for the employee"
        },
        {
            name: "managerId",
            type: "rawlist",
            message: "What is your managers roll?"
        },
    ])
}
  
// update employee function
  startApp()