const notificationSchema = require('../model/notificationModel')

exports.updateStatusById = (req, res) => {
    async function checkStatus() {
        const id = req.params.id
        const status_obj = await notificationSchema.find({ "mechanic_id": id })

        if (status_obj[0] && req.body.request_status != null) {
            const result = await notificationSchema.updateMany({ "mechanic_id": id }, {
                $set: {
                    request_status: req.body.request_status,
                    customer_name: req.body.customer_name,
                    customer_phone: req.body.customer_phone,
                }
            }, { new: true })
            res.status(201).json({
                success:true
            })
        } else {
            return res.status(400).json({
                success:false
            })
        }
    }
    checkStatus()

}

