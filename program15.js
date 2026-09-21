const express = require("express");

const app = express();

app.use(express.json());

let students = [];

// Add Student
app.post("/students", (req, res) => {
    students.push(req.body);
    res.send("Student added successfully");
});

// View Students
app.get("/students", (req, res) => {
    res.json(students);
});

// Update Student
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < students.length) {
        students[id] = req.body;
        res.send("Student updated successfully");
    } else {
        res.status(404).send("Student not found");
    }
});

// Delete Student
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < students.length) {
        students.splice(id, 1);
        res.send("Student deleted successfully");
    } else {
        res.status(404).send("Student not found");
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
