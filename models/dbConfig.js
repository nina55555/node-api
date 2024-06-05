const mongoose = require('mongoose');

mongoose.connect(
    /*"mongodb://localhost:27017/node-api",*/
    /*localhost ou 127.0.0.1: pas bon pour afficher ds navigateur
    */

    "mongodb+srv://Nina:didine555*25@cluster-itv.jmhusmd.mongodb.net/cluster-itv",
    

    
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Mongodb connecté avec grâce");
        else console.log("erreur de connection:"+err);
    }
)

