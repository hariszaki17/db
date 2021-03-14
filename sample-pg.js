const pool = require('./config/connection')

pool.connect((err, client) => {
    if (err) {
        console.log(err.stack);
    } else {
        const text = `insert into employees ("name", "address", "phone", "username", "password") VALUES ($1, $2, $3, $4, $5) RETURNING *;`
        const value = [ 'joko', 'intan 6', 98987676732, 'joko123', '123456' ]
        client.query(text, value, (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log(res.rows[0]);
            }
        })
    }
})