import React, {useState} from 'react'

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [desc, setDesc] = useState('')

    const handleNameChange = (event) => setName(event.target.value)
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handleDescChange = (event) => setDesc(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`form submitted! Name: ${name}, Email: ${email}, Description: ${desc}`)
    }


return (
    <div>
        <h1>Form submission</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type = 'text' value = {name} onChange = {handleNameChange} placeholder = 'enter ur name'required/>
            </div>
            <div>
                <label>Email: </label>
                <input type = 'text' value = {email} onChange = {handleEmailChange} placeholder = 'enter ur email'required/>
            </div>
            <div>
                <label>Description: </label>
                <textarea  value = {desc} onChange = {handleDescChange} placeholder = 'enter a brief description'required/>
            </div>
            <button type = 'submit'>Submit</button>
        </form>
    </div>
)
}
export default Form