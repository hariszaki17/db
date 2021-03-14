const pool = require('./connection.js')

const queryDropProjectFeatureEmployees = `DROP TABLE IF EXISTS project_feature_employees CASCADE;`;     
const queryDropProjectFeatures = `DROP TABLE IF EXISTS project_features CASCADE;`; 
const queryDropSalaries = `DROP TABLE IF EXISTS salaries CASCADE;`;  
const queryDropProjects = `DROP TABLE IF EXISTS projects CASCADE;`;  
const queryDropEmployees = `DROP TABLE IF EXISTS employees CASCADE;`;  

const queryEmployees = `
    CREATE TABLE IF NOT EXISTS employees (
        "id" serial PRIMARY KEY,
        "name" VARCHAR(50) NOT NULL,
        "address" VARCHAR(100) NOT NULL,
        "phone" VARCHAR(50) NOT NULL,
        "username" varchar(50) NOT NULL,
        "password" varchar(100) NOT NULL
    );
`

const queryProjects = `
    CREATE TABLE IF NOT EXISTS projects (
        "id" serial PRIMARY KEY,
        "name" VARCHAR(50) NOT NULL,
        "deadline_date" DATE NOT NULL,
        "price" BIGINT DEFAULT 0 NOT NULL
    );`

const querySalaries = `
    CREATE TABLE IF NOT EXISTS salaries (
        "id" serial PRIMARY KEY,
        "salary" BIGINT NOT NULL,
        "bonus" BIGINT NOT NULL,
        "role" VARCHAR(50) NOT NULL,
        "employee_id" integer REFERENCES employees(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`
const queryProjectFeatures = `
    CREATE TABLE IF NOT EXISTS project_features (
        "id" serial PRIMARY KEY,
        "name" VARCHAR(50) NOT NULL,
        "status" VARCHAR(50) NOT NULL,
        "priority" VARCHAR(50) NOT NULL,
        "project_id" INTEGER REFERENCES projects(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`

const queryProjectFeatureEmployees = `
    CREATE TABLE IF NOT EXISTS project_feature_employees (
        "id" serial PRIMARY KEY,
        "project_feature_id" INTEGER REFERENCES  project_features(id) ON DELETE CASCADE ON UPDATE CASCADE,
        "employee_id" INTEGER REFERENCES employees(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`
pool.query(queryDropProjectFeatureEmployees, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        pool.query(queryDropProjectFeatures, (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                pool.query(queryDropSalaries, (err, res) => {
                    if (err) {
                        console.log(err.stack);
                    } else {
                        pool.query(queryDropProjects, (err, res) => {
                            if (err) {
                                console.log(err.stack);
                            } else {
                                pool.query(queryDropEmployees, (err, res) => {
                                    if (err) {
                                        console.log(err.stack);
                                    } else {
                                        pool.query(queryEmployees, (err, res) => {
                                            if (err) {
                                                console.log(err.stack);
                                            } else {
                                                pool.query(queryProjects, (err, res) => {
                                                    if (err) {
                                                        console.log(err.stack);
                                                    } else {
                                                        pool.query(querySalaries, (err, res) => {
                                                            if (err) {
                                                                console.log(err.stack);
                                                            } else {
                                                                pool.query(queryProjectFeatures, (err, res) => {
                                                                    if (err) {
                                                                        console.log(err.stack);
                                                                    } else {
                                                                        pool.query(queryProjectFeatureEmployees, (err, res) => {
                                                                            if (err) {
                                                                                console.log(err.stack);
                                                                            } else {
                                                                                console.log('Success setup db');
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})