let app = require("./app");
debugger
require("dotenv").config();
  
app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log("App listening to port " + process.env.PORT)
})