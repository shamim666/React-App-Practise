
// if you want to check the functionality of this code PLease copy this code and pate into App.js file 
// other wise it will not work .


import logo from './logo.svg';
import './App.css';

function App() {

const products = [
  {name:'mobile' , price:10000},
  {name:'watch' ,  price:90000},
  {name:'camera' , price:80000},
  {name:'laptop' , price:70000},
  {name:'AC' , price:60000}
]

  return (
    <div className="App">
      
     { products.map(product => {return <Product name={product.name} price={product.price}></Product>}) } 
      
    </div>

);
}


function Product (props) {
const productStyle = {
  border: '3px solid black',
  borderRadius: '10px',
  width: '300px'
}
  return (
<div className="product" style={productStyle}>
  <h2 style={{color:'tomato'}}>Name:{props.name}</h2>
  <p>Price:{props.price}</p>
</div>

  );
}

export default App;