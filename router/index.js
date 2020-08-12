const pool = require('../db/index').pool

module.exports = (App)=> {
    const router = App.Router();
    
    router.get('/users', (err,res)=>{
        const sql = "SELECT * FROM user"
        pool.query(sql,(error,result)=> {
            if(error) return res.status(404).json({error})
            return res.status(200).json({result})

        })
    })
    return router
}