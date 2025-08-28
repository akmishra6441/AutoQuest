import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("AutoQuest Backend is running 🚀");
});

// Example API endpoint
app.get("/api/quests", (req, res) => {
  res.json([
    { id: 1, title: "Complete Dashboard UI", status: "In Progress" },
    { id: 2, title: "Integrate Backend API", status: "Pending" },
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
