import { useState } from 'react'
const Homepage = () => {

    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(30)

    const clickHandler = () => {
        setName('Luigi')
        setAge(40)
    }

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default Homepage
