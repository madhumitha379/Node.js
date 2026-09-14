const { MongoClient } = require(&quot;mongodb&quot;);
const url = &quot;mongodb://127.0.0.1:27017&quot;;
const client = new MongoClient(url);
async function main() {
try {
// Connect to MongoDB
await client.connect();
console.log(&quot;Connected to MongoDB&quot;);
const db = client.db(&quot;college&quot;);
const students = db.collection(&quot;students&quot;);
// Insert sample records
await students.deleteMany({});
await students.insertMany([
{ name: &quot;Arun&quot;, age: 20, marks: 85, city: &quot;Chennai&quot; },

{ name: &quot;Priya&quot;, age: 22, marks: 92, city: &quot;Madurai&quot; },
{ name: &quot;Kumar&quot;, age: 19, marks: 68, city: &quot;Chennai&quot; },
{ name: &quot;Divya&quot;, age: 21, marks: 75, city: &quot;Coimbatore&quot; },
{ name: &quot;Ravi&quot;, age: 23, marks: 88, city: &quot;Madurai&quot; }
]);
// 1. Marks greater than 80
console.log(&quot;\nStudents with marks &gt; 80:&quot;);
console.log(
await students.find({ marks: { $gt: 80 } }).toArray()
);
// 2. Age greater than or equal to 21
console.log(&quot;\nStudents with age &gt;= 21:&quot;);
console.log(
await students.find({ age: { $gte: 21 } }).toArray()
);
// 3. Marks between 70 and 90
console.log(&quot;\nStudents with marks between 70 and 90:&quot;);
console.log(
await students.find({
marks: { $gte: 70, $lte: 90 }
}).toArray()
);
// 4. Students from Chennai or Madurai
console.log(&quot;\nStudents from Chennai or Madurai:&quot;);
console.log(
await students.find({
city: { $in: [&quot;Chennai&quot;, &quot;Madurai&quot;] }
}).toArray()
);
// 5. Age &gt;= 20 AND marks &gt; 80
console.log(&quot;\nAge &gt;= 20 AND marks &gt; 80:&quot;);
console.log(
await students.find({
$and: [
{ age: { $gte: 20 } },

{ marks: { $gt: 80 } }
]
}).toArray()
);
// 6. City is Chennai OR marks &gt; 90
console.log(&quot;\nChennai OR marks &gt; 90:&quot;);
console.log(
await students.find({
$or: [
{ city: &quot;Chennai&quot; },
{ marks: { $gt: 90 } }
]
}).toArray()
);
} catch (error) {
console.error(&quot;Error:&quot;, error);
} finally {
await client.close();
}
}
main();
