const mongoose = require(&#39;mongoose&#39;);

const studentSchema = new
mongoose.Schema({
name: {
type: String,
required: true
},
age: {
type: Number,
min: 18
},
department: String,
email: {
type: String,
unique: true
}
});

const Student = mongoose.model(&quot;Student&quot;,
studentSchema);
console.log(&quot;Student Model Created&quot;);
module.exports = Student;
