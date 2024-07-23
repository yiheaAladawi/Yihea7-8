
//       1         //
const express = require("express")
const app = express()
//       2        //
const port = process.env.PORT || 3000

//        3       //

const path = require("path")
const x =  path.join(__dirname , '../public')

app.use(express.static(x))



// app.get( "/",(req , res)=>{
//     res.send("Home Page ======")
// } )
app.get( "/prices",(req , res)=>{
    res.send("Prices Page ======")
} )
app.get( "/about",(req , res)=>{
    res.send("About Page ======")
} )
app.get( "/team",(req , res)=>{
    res.send("Team Page ======")
} )
app.get( "/contcat",(req , res)=>{
    res.send("Contcat Page ======")
} )

app.get( "/page1",(req , res)=>{
    res.send("<h2>Yihea Aladawi</h2> <button> OK </button>")
} )
app.get( "/page2",(req , res)=>{
    res.send({
        name : "yihea" ,
        City : "Amman",
        Country : "Jordan"
    })
} )
app.get( "/page3",(req , res)=>{
    res.send({
        name : "Islam" ,
        City : "Mansora",
        Country : "Egypt"
    })
} )

//       4     //


// //////////////////////////////////////////////////////////////////////

app.set('view engine', 'hbs'); // *********

const viewsDir = path.join(__dirname , "../temp1/views")
app.set("views" , viewsDir)

// /////////////////////////////////////

const hbs = require('hbs')

const partialePath = path.join(__dirname , "../temp1/partials")

hbs.registerPartials(partialePath)

// /////////////////////////////////////


app.get( '/' , (req , res)=>{
    res.render('index' ,{
        title : "Home",
        desc : "This Is Home Page"
    })
})

app.get( '/service' , (req , res)=>{
    res.render('service' ,{
        title : "Service",
        name : "Yihea Aladawi",
        city :'Amman',
        age:"27",
        img1 : "imges/ad.png"
    })
})


/////////////////////////////////////////////////////////////////////////


app.listen( port , ()=>{
    console.log("Page is Listen in port 3000")
})