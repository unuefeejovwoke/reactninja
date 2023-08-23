import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('Ejoks');
    const [age, setAge] = useState(24)

    const handleClick = () =>{
        setName('Unuefe');
        setAge(71)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;