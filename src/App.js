import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';
import {setPizzas, setPizzas as setPizzasAction} from './redux/actions/pizzas';
import {connect} from 'react-redux';





// import { ReactComponent } from '*.svg';


// function App() {
// React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then( ({data}) =>{
//         setPizzas(data.pizzas);
//     })
// },[]);

// console.log(pizzas);



//   return ;
// }

class App extends React.Component{
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then( ({data}) =>{ 
      this.props.setPizzas(data.pizzas);
    })
  }

  render(){
    
    return (

      <div className="wrapper">
  <Header/>
      <div className="content">
        <Route path='/' render={()=> <Home items={this.props.items}/>} exact />
        <Route path='/cart' component={Cart}  />
       
      </div>
    </div>
    );
  }

}

const mapStateToProps = (state) =>{
  return{
    items: state.pizzas.items
  }
}


const mapDispatchToProps = {
    setPizzas,    
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
