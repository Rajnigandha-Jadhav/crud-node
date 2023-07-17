const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://rajnigandha-jadhav:yNWRixS07q9jSgmB@cluster0.zp2awfe.mongodb.net/node-CRUD"
  )
  
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.log(err))
   
  app.use('/', route)
  
  app.listen( 4000, function(){
      console.log('Express app running on port ' + (4000))
  })