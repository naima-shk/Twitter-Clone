import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link}  from 'react-router-dom';
import PageWrapper from './Component/PageWrapper';

//Pages
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';

class  App extends Component {
  render(){
  return (
      <Router>
      <PageWrapper>
      <Route
        exact={true}
        path="/"
        Component={Home}
        />
         <Route
          path="/about"
          Component={About}
         />
        <Route 
          path="a"
          render={()=> {
           return(
             <h1>Hello nimi </h1>
             );
           }
          }
         />
        </PageWrapper>
        </Router>
  );
}
  }

export default App;
