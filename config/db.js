const mongoose= require("mongoose")
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected succesfully");
  })
  .catch(() => {
    console.log("dtabase not connected");
  });