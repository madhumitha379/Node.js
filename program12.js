const express = require(&quot;express&quot;);
const app = express();
app.use(express.json());
// Student data
const students = [
{ id: 1, name:Arun;department:CSE },
{ id: 2, name: &quot;Bala&quot;, department: &quot;IT&quot; },
{ id: 3, name: &quot;Chandru&quot;, department: &quot;ECE&quot; },
{ id: 4, name: &quot;Dinesh&quot;, department: &quot;CSE&quot; },
{ id: 5, name:Ezhil department:IT },
{ id: 6, name: &;Faisal&quot;, department: &quot;ECE&quot; },
{ id: 7, name: &;Gopal&quot;, department: &quot;CSE&quot; },
{ id: 8, name: &;Hari&quot;, department: &quot;IT&quot; },
{ id: 9, name: &;Imran&quot;, department: &quot;ECE&quot; },
{ id: 10, name: Jagan&quot;, department: &quot;CSE&quot; }
];
// Pagination API

app.get(&quot;/students&quot;, (req, res) =&gt; {
// Get page and limit from URL
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 3;
// Calculate starting index
const startIndex = (page - 1) * limit;
// Calculate ending index
const endIndex = page * limit;
// Get records for current page
const result = students.slice(startIndex, endIndex);
// Calculate total pages
const totalPages = Math.ceil(students.length / limit);
res.json({
page: page,
limit: limit,
totalRecords: students.length,
totalPages: totalPages,
students: result
});
});
// Start server
app.listen(3000, () =&gt; {
console.log(&quot;Server running at http://localhost:3000&quot;);
});
