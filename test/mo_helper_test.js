const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });

mongoose.connection
  .once("open", () => console.log("Database Connected"))
  .on("error", (error) => {
    console.log("Error: ", error);
  });
