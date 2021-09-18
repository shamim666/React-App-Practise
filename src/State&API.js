// if you want to check the functionality of this code PLease copy this code and pate into App.js file 
// other wise it will not work .


import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
return (
    <div className="App">
     <ExternalUsers></ExternalUsers>
    </div>

);
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))

  },[])

  return(
    <div>
        {users.map(user =>{ return <User name={user.name} email={user.email}></User>} )}
    </div>
  );
}

function User(props){
  const styleUser = {
    border : '3px solid red',
    borderRadius: '20px',
    backgroundColor: 'lightBlue',
    width: '500px' ,
    margin: '20px'
  }
  return (
    <div style={styleUser}>
      <h2>Name:{props.name}</h2>
      <p>Emamil:{props.email}</p>
    </div>
  );
}
export default App;
