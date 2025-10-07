const mongoose = require("mongoose");
const User = require("./models/user");
require("dotenv").config();
// const frank =User.create({
//   full_name: 'Issam',
//   email: 'Issam@gmail.com', password: 'Issam123'
// });

// const all = User.find();
mongoose
  .connect(process.env.MONGO_URI);
  run()
async function run() {
   try {
     const users = await User.find({ full_name: 'Issam'  });
     console.log(users);
     
   } catch (error) {
    console.log(error);
    
   }
 }