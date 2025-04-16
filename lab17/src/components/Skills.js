import React, {useState} from 'react'

function Skills(props){
    const {SkillsCategory, SkillsSet} = props

    return <div className = 'mt-4'>
        <h2 className = 'text-secondary'>Skills</h2>
        <h3>{SkillsCategory}</h3>
        <ul>
            {SkillsSet.map((skill, index) => (
                <li key = {index}>
                    <strong>{skill}</strong>
                </li>
            ))}
        </ul>
    </div>
}

export default Skills