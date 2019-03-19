const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const fs = require('fs');
var router = express.Router();

const password = "testpassword"
const email = "test@email.com"

function login() {
    router.get('/', function (req, res) {
        res.json({
            success: true
          });
    })

    router.post('/:email/:password', function (req, res) {
        const email = req.params.email;
        const password = req.params.password
        let obj = {} //สร้าง object เปล่าๆรอ
        fs.readFile("mockdb.json", 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                obj = JSON.parse(data)
                if (obj.email == email) { // check ว่า email ที่ผู้ใช้กรอกมาใหม่ ตรงกับที่เราเก็บข้อมูลไว้หรือไม่
                    bcrypt.compare(password, obj.hash, function (err, result) {
                        if (result) {
                            //ถ้า result == true รหัสผ่านตรง
                            res.send('200')
                            //TODO: เก็บข้อมูลผู้ใช้ไว้บน session
                        }
                        else {
                            //ถ้า result == false รหัสผ่านไม่ตรง
                            res.send('400')
                        }
                    })
                }
                else {
                    res.send('400::wrong-email')
                }
            }
        })
    })

    return router;
}

module.exports = login;