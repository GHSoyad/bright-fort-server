const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const courseID = req.params.id;
    const getCourse = courses.find(course => courseID == course.id);
    res.send(getCourse)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})