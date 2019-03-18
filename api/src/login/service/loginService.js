const fs = require('fs');
const bcrypt = require('bcrypt');

exports.PostLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let obj = {} //สร้าง object เปล่าๆรอ
    fs.readFile("mockUser.json", 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data)
            if (obj.email == email) {
                if (bcrypt.compareSync(password, obj.hash)) {
                    //ถ้า result == true รหัสผ่านตรง
                    res.status('200').json({
                        success: true,
                        email: true,
                        password: true,
                    })
                }
                else {
                    //ถ้า result == false รหัสผ่านไม่ตรง
                    res.status('400').json({
                        success: false,
                        email: true,
                        password: false,
                    })
                }
            }
            else {
                res.status('400').json({
                    success: false,
                    email: false,
                    password: false
                })
            }
        }
    })
}