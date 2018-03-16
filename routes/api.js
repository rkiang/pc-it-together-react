const express = require('express');
const router = express();

const pool = require('../modules/pool');

router.get('/users', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.error(err);
            res.status(500).send({ 'error': err });
        } else {
            db.query('SELECT * FROM users', function (err, table) {
                done();
                if (err) {
                    return res.status(400).send({ error: err })
                } else {
                    return res.status(200).send(table.rows)
                }
            })
        }
    })
});

router.post('/new-user', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    pool.connect((err, db, done) => {
        if (err) {
            console.error('error open connection', err);
            return res.status(400).send({ error: err });
        }
        else {
            db.query('INSERT INTO users( username, password ) VALUES ($1, $2)',
                [username, password], (err, table) => {
                    done();
                    if (err) {
                        console.error('error running query', err);
                        return res.status(400).send({ error: err });
                    }
                    else {
                        console.log('Data Inserted: successfully!');
                        res.status(201).send({ message: 'Data Inserted!' })
                    }
                })
        }
    });
    console.log(req.body);
});

module.exports = router;