import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';
import {setPizzas} from './redux/actions/pizzas';
import {useDispatch} from 'react-redux';



function App() {
  const dispatch = useDispatch();


  React.useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then( ({data}) =>{ 
      dispatch(setPizzas(data.pizzas));
  });
});
return(
  <div className="wrapper">
  <Header/>
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart}  />
       
      </div>
    </div>
)
}


export default App;



// const mapStateToProps = (state) =>{
//   return{
//     items: state.pizzas.items,
//     filters:state.filters
//   }
// }


// const mapDispatchToProps = {
//     setPizzas,    
//   }


// export default connect(mapStateToProps, mapDispatchToProps)(App);
