const moongose = require("mongoose");

const connectDatabase = ()=>{
    moongose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}


module.exports = connectDatabase