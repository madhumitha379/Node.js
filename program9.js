const mongoose = require(&quot;mongoose&quot;);
async function main() {
await
mongoose.connect(&quot;mongodb://127.0.0.1:2
7017/testdb&quot;);
console.log(&quot;Connected&quot;);

const schema = new
mongoose.Schema({
name: { type: String, required:
true },
email: {
type: String,
match: /.+@.+\..+/
}
});

const Model =
mongoose.model(&quot;Test&quot;, schema);

const data = new Model({
name: &quot;&quot;,
email: &quot;sk@gmail.com&quot;
});

try {
await data.save();

} catch (err) {
console.log(err.message);
}

await mongoose.disconnect();
}

main().catch(console.error);
