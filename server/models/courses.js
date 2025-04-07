const courses = [
    {
        id : 1,
        title : 'React',
        instructor : 'Dr Omar',
        duration : '8 weeks',
        description : 'learn react',
        enrolledStudents : 20
    },
    {
        id : 2,
        title : 'Math',
        instructor : 'Dr Ahmed',
        duration : '8 weeks',
        description : 'learn math',
        enrolledStudents : 30
    },
    {
        id : 3,
        title : 'Science',
        instructor : 'Dr Khalid',
        duration : '8 weeks',
        description : 'learn Science',
        enrolledStudents : 40
    }
]

const CourseModel = {
    getAllCourses: () => {
        return courses
    },
    getCourseById: (id) => {
        return courses.find(course =>course.id === parseInt(id))
    }
}

module.exports = CourseModel