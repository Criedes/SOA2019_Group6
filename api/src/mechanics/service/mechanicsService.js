const findMechanicSchema = require('../model/mechanicSchema')
exports.findMechanic = (req,res)=> {
    async function getMechanicAll (){
        const mechanicAll = await findMechanicSchema.find()
        res.status(200).json(mechanicAll)
    }
    getMechanicAll();
}

exports.findMechanicById = (req,res)=>{
    async function getMechanicById(){
        const id = req.params.id
        const mechanic = await findMechanicSchema.find({"_id" : id})
        res.status(200).json(mechanic)
    }
    getMechanicById()
}

exports.findMechanicByShopName = (req,res)=>{
    async function getMechanicByShopName(){
        const shop_name = req.params.shopname
        const mechanic = await findMechanicSchema.find({"garagename" : shop_name})
        res.status(200).json(mechanic)
    }
    getMechanicByShopName()
}

exports.updateStatusById = (req,res)=>{
    async function checkStatus(){
        const id = req.params.id
        const status_obj = await findMechanicSchema.find({"_id" : id}).select({"status":1})
        
        if(status_obj[0].status){
            const result_updated = await findMechanicSchema.update({"_id":id},{
                $set:{
                    status:false
                }
            },{ new : true})
            res.json(result_updated)
        }else{
            const result_updated = await findMechanicSchema.update({"_id":id},{
                $set:{
                    status:true
                }
            },{ new : true})
            res.json(result_updated)
        }
    }
    checkStatus()
    
}

exports.updateCountById = (req,res)=>{
    async function updateCount(){
        const _id = req.params.id
        const result =await findMechanicSchema.findOneAndUpdate({ _id:_id }, { $inc: { number_of_customer: 1 } }, {new: true })
        res.json(result)
    }
    updateCount();
}