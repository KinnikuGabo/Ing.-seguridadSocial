const mongoose = require('mongoose')
const url_bd = "mongodb://localhost:27017/global69"

mongoose.connect(url_bd)
.then(() => {
    console.log("si jala")
})
.catch((error) => {
    console.log("no jala ptm")
})

const esquema = new mongoose.Schema({
    name: {
        type:String
    },
    apepat: {
        type:String
    },
    apemat: {
        type:String
    },
    numerotel: {
        type:Number
    }
})


const modelo = new mongoose.model('tabla de alumnos', esquema)
const modelop = new mongoose.model('tabla de maestros', esquema)

modelo.create({
    name:"ana",
    apepat:"salazar"
    apemat:"montiel"
    numerotel:4545121
})
