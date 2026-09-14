const express = require(&quot;express&quot;);

const app = express();

app.use(express.json());

let students = [];

// Add Student

app.post(&quot;/students&quot;, (req, res) =&gt; {
students.push(req.body);
res.send(&quot;Student added successfully&quot;);
});

// View Students
app.get(&quot;/students&quot;, (req, res) =&gt; {
res.json(students);
});

// Update Student
app.put(&quot;/students/:id&quot;, (req, res) =&gt; {
students[req.params.id] = req.body;
res.send(&quot;Student updated successfully&quot;);
});

// Delete Student
app.delete(&quot;/students/:id&quot;, (req, res) =&gt; {
students.splice(req.params.id, 1);
res.send(&quot;Student deleted successfully&quot;);
});
app.listen(3000, () =&gt; {
console.log(&quot;Server running on port 3000&quot;);

// Start server
