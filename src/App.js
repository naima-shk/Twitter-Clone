import React,{Component} from 'react';
import PageWrapper from './Component/PageWrapper';
import Home from './Component/Pages/Home';
import {BrowserRouter as Router,Route,Link}  from 'react-router-dom';
class  App extends Component {
  render(){
  return (
    <PageWrapper>
      <Router>
        <Route
        path="/home"
        Component={Home}
        />
      </Router>
      <Home/>
      </PageWrapper>
  );
}
  }

export default App;
