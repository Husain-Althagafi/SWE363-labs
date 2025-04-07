const express = require('express')
const CourseModel = require('./models/courses')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/api/courses', (req, res) =>{
    try{
        const courses = CourseModel.getAllCourses()
        res.json(courses)
    }
    catch (error) {
        res.status(500).json({message: 'Error fetching courses'})
    }
})

app.get('/api/courses/:id', (req, res) =>{
    try{
        const course = CourseModel.getCourseById(req.params.id)
        if (course){
            res.json(course)
        }
        else{
            res.json('There is no course for this id')
        }
    }
    catch(error){
        res.status(500).json({message:"error fetching course"})
    }
})





server.listen(port, () => {
    console.log('Server running at http://localhost:3000/')
})