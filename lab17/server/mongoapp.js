const mongoose = require('mongoose')
const Education = require('./models/educationSchema')

const dbURL = 'mongodb://localhost:27017/My_DB'
async function fetchEducationRecords() {
    try {
        await mongoose.connect(dbURL)
        console.log('connected to mongodb successfully')

        const educationRecords = await Education.find({})

        if (educationRecords.length === 0) {
            console.log('no records found')
        }

        else {
            console.log('education records found:', educationRecords)
        }
    }
    catch (error){
        console.log(error)
    }
}


async function insertEducationRecords() {
    try {
        await mongoose.connect(dbURL)
        console.log('connected to mongodb for insertion')
        await newEducation.save()
        console.log('education record saved successfully')

        await fetchEducationRecords()
    }
    catch (err) {
        console.log('error inserting record:', err)
    }
}

fetchEducationRecords()