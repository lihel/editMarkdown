/**
 * Created by lmy on 17-11-12.
 */

const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');


router.post('/delUser', (req, res) => {
    db.query(editSQL.delete, req.body.id, function (err) {
        if (err) return res.status(500).json({tip: err.message});
        res.json({tip: "success"});
    });
});

module.exports = router;