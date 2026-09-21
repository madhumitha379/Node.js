const mongoose = require("mongoose");
async function main() {
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
    try {
        await data.save();
        console.log("Data saved successfully");
    } catch (err) {
        console.log(err.message);
    }

    await mongoose.disconnect();
}

main().catch(console.error);
