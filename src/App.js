
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const data = [
    {holder:'shamim' , age: 30},
    {holder:'hasan' , age: 40},
    {holder:'reza' , age: 50}

  ]
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      {data.map(element => <Pointer holder = {element.holder} age={element.age}></Pointer>) }
    </div>
  );
}

const LoadUsers = () => {
  const [users , setUsers] = useState([]) ;
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Users are being Loaded</h2>
      {users.map(user=> <User name={user.name} phone={user.phone}></User>)}
    </div>
  );
};


const User = (props) => {

  const styleUser = { border: '3px solid blue',
                      borderRadius: '10px',
                      backgroundColor: 'lightblue',
                      margin:'20px' ,
                      width: '500px'}
  return(
    <div style={styleUser}>
      <h2>Name:{props.name}</h2>
      <h2>Phone:{props.phone}</h2>
    </div>
  );
}

const Pointer = (props) => {
  const [point , setPoint] = useState(0);

  const handlePointer = () => { 
    return setPoint(point+1)
  }

  return(
    <div>
      <h2>Holder:{props.holder}</h2>
      <h2>Age:{props.age}</h2>
      <p>Point:{point}</p>
      <button onClick={handlePointer}>Pointer</button>
    </div>
  );
}


export default App;


































// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';


// function App() {
//   const datas = [
//     {name:'shamim',age: 30},
//     {name:'hasan', age: 40},
//     {name:'reza',age: 50}
//   ]
// return (
//     <div className="App">
//     {datas.map(data => <Pointer name={data.name} age={data.age}></Pointer>)}
//     </div>


// );
// }

// const Pointer = (props) => {

//   const [point,setPoint] = useState(0);

//   const handlePointer = () => {return setPoint(point + 1)} 

//   const stylePointer = {border:'3px solid blue',
//                         borderRadius: '10px',
//                       backgroundColor:'lightblue',
//                     width: '500px',
//                   margin:'20px'}

// return(

// <div style={stylePointer}>
//   <h2>this is basic componenet and state component together</h2>
//   <h2>Name:{props.name}</h2>
//   <h3>Age:{props.age}</h3>
//   <p style={{color:'tomato' , fontSize:'50px'}}>Point:{point}</p>
//   <button onClick={handlePointer}>Pointer</button>
// </div>

// );
// }

// export default App;