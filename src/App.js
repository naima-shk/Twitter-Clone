import React,{Component} from 'react';
import PageWrapper from './Component/PageWrapper';
import Home from './Component/Pages/Home';
import {BrowserRouter as Router,Route,Link}  from 'react-router-dom';
class  App extends Component {
  render(){
  return (
    <Router>
    <PageWrapper>
      <Route
        path="/"
        Component={Home}
        />
      </PageWrapper>
      </Router>
  );
}
  }

export default App;
