/**
 * Created by lmy on 17-11-12.
 */

const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');


router.get('/edit', (req, res) => {
    db.query(editSQL.getMyAllTitle, (err, result) => {
        if (err) {
            return err;
        }
        res.send(result);
    });

});

module.exports = router;