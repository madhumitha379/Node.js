app.js
const express = require(&quot;express&quot;);
const app = express();
// Middleware to read JSON data
app.use(express.json());
// Import route modules

const studentRoutes =
require(&quot;./routes/studentRoutes&quot;);
const userRoutes =
require(&quot;./routes/userRoutes&quot;);

// Use modular routes
app.use(&quot;/students&quot;, studentRoutes);
app.use(&quot;/users&quot;, userRoutes);
// Home route
app.get(&quot;/&quot;, (req, res) =&gt; {
res.send(&quot;Express Modular Routing
Application&quot;);
});
// Start server
const PORT = 3000;
app.listen(PORT, () =&gt; {
console.log(`Server running at
http://localhost:${PORT}`);
});

new file
routes/studentRoutes.js
const express = require(&quot;express&quot;);
const router = express.Router();
// GET all students
router.get( (req, res) =&gt; {

res.json([
{ id: 1, name: &quot;Smith&quot;, department:
&quot;IT&quot; },
{ id: 2, name: &quot;John&quot;, department:
&quot;CSE&quot; },
{ id: 3, name: &quot;David&quot;, department:
&quot;ECE&quot; }
]);
});
// GET student by ID
router.get(&quot;/:id&quot;, (req, res) =&gt; {
const id = req.params.id;
res.send(`Details of student with ID:
${id}`);
});
// POST a new student
router.post(&quot;/&quot;, (req, res) =&gt; {
const student = req.body;
res.json({

message: &quot;Student added successfully&quot;,
student: student
});
});

// DELETE student
router.delete(&quot;/:id&quot;, (req, res) =&gt; {
const id = req.params.id;

res.send(`Student with ID ${id} deleted
successfully`);
});

module.exports = router;


new file
  routes/userRoutes.js
const express = require(&quot;express&quot;);

const router = express.Router();

// GET all users
router.get(&quot;/&quot;, (req, res) =&gt; {
res.json([
{ id: 1, name: &quot;Alice&quot; },
{ id: 2, name: &quot;Bob&quot; }
]);
});

// GET user by ID
router.get(&quot;/:id&quot;, (req, res) =&gt; {

const id = req.params.id;

res.send(`Details of user with ID: ${id}`);
});

// POST a new user
router.post(&quot;/&quot;, (req, res) =&gt; {
const user = req.body;

res.json({
message: &quot;User added successfully&quot;,
user: user
});
});

module.exports = router;
