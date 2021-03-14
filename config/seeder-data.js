const fs = require('fs')
const pool = require('./connection.js')

const dataEmployees = fs.readFileSync('./databases/employee-seed.csv','utf8').split('\n')
const dataSalaries = fs.readFileSync('./databases/salary-seed.csv','utf8').split('\n')
const dataProjects = fs.readFileSync('./databases/project-seed.csv','utf8').split('\n')
const dataProjectFeatures = fs.readFileSync('./databases/project-feature-seed.csv','utf8').split('\n')
const dataProjectFeatureEmployees = fs.readFileSync('./databases/project-feature-employee-seed.csv','utf8').split('\n')

pool.connect((err, client) => {
    if (err) {
        console.log(err.stack);
    } else {    
        dataEmployees.forEach(employee => {
            employee = employee.split(',')
            const text = `insert into employees ("name", "address", "phone", "username", "password") values($1, $2, $3, $4, $5) returning *`
            const value = [ employee[0], employee[1], +employee[2], employee[3], employee[4] ]
            client.query(text, value, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log(`success insert data employee: `, res.rows[0]);
                }
            })
        })

        dataSalaries.forEach(salary => {
            salary = salary.split(',')
            const text = `insert into salaries ("salary", "bonus", "role", "employee_id") values ($1, $2, $3, $4) returning *`
            const value = [ +salary[0], +salary[1], salary[2], +salary[3] ]
            client.query(text, value, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log(`success insert data salary: `, res.rows[0]);
                }
            })
        })

        dataProjects.forEach(project => {
            project = project.split(',')
            const text = `insert into projects ("name", "deadline_date", "price") values ($1, $2, $3) returning *`
            const value = [ project[0], project[1], +project[2] ]
            client.query(text, value, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log(`success insert data project: `, res.rows[0]);
                }
            })
        })

        dataProjectFeatures.forEach(projectFeature => {
            projectFeature = projectFeature.split(',')
            const text = `insert into project_features ("name", "status", "priority", "project_id") values ($1, $2, $3, $4) returning *`
            const value = [ projectFeature[0], projectFeature[1], projectFeature[2], +projectFeature[3] ]
            client.query(text, value, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log(`success insert data project feature: `, res.rows[0]);
                }
            })
        })

        dataProjectFeatureEmployees.forEach(projectFeatureEmployee => {
            projectFeatureEmployee = projectFeatureEmployee.split(',')
            const text = `insert into project_feature_employees ("project_feature_id", "employee_id") values ($1, $2) returning *`
            const value = [ +projectFeatureEmployee[0], +projectFeatureEmployee[1] ]
            client.query(text, value, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log(`success insert data project feature employee: `, res.rows[0]);
                }
            })
        })
    }
})