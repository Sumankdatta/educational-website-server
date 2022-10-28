const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/course.json');
const news = require('./data/coursedetails.json')
app.use(cors())
console.log(news)

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/course-categories', (req, res) => {
  res.send(categories)
});