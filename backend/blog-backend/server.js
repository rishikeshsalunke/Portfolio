const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())


let blogs = [
  { id: 1, title: "My Fisrst Blog", content: "Hello world" },
  { id: 2, title: "My second Blog", content: "Hello again" }
];



app.get('/api/blogs', (req, res) => {
  res.json(blogs);
})



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})