const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        console.log("Connected");
        const schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                match: /.+@.+\..+/
            }
        });
        const Model = mongoose.model("Test", schema);
        const data = new Model({
            name: "Madhumitha",
            email: "sk@gmail.com"
        });
        await data.save();
        console.log("Data saved successfully");
        await mongoose.disconnect();
        console.log("Disconnected");

    } catch (err) {
        console.log("Error:", err.message);
    }
}

main();
