const pool = require('../config/connection')

class Model {
    static readEmployeeByName(name = '', cb) {
        const text = `select * from employees
        where name ilike '%${name}%'`
        pool.query(text, (err, res) => {
            if (err) {
                cb(err.stack)
            } else {
                cb(null, res.rows)
            }
        })
    }

    static readProjectAbove1Billion(cb) {
        const text = `select * from projects p 
        where price > 1000000000`
        pool.query(text, (err, res) => {
            if(err) {
                cb(err.stack)
            } else {
                cb(null, res.rows)
            }
        })
    }

    static readNumEmployeeInProjectFeature(cb) {
        const text = `select pf.name, pf.priority, count(pf.name) as people_working_on from project_features pf 
        inner join project_feature_employees pfe 
        on pfe.project_feature_id = pf.id
        group by pf.name, pf.priority`
        pool.query(text, (err, res) => {
            if (err) {
                cb(err.stack)
            } else {
                cb(null, res.rows)
            }
        })
    }

    static readEmployeeSort(column, sort, cb) {
        if (sort !== 'asc' && sort !== 'desc') {
            cb('error argument sort is wront, please input "asc" or "desc"')
        } else {
            const text = `select * from employees
            order by ${column} ${sort}`
            pool.query(text, (err, res) => {
                if (err) {
                    cb(err.stack)
                } else {
                    cb(null, res.rows)
                }
            })
        }
    }
}

module.exports = Model