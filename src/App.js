import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link}  from 'react-router-dom';

//Pages
import PageWrapper from './Component/PageWrapper';
import Home from './Component/Pages/Home';

class  App extends Component {
  render(){
  return (
    <Router>
    <PageWrapper>
      <Route
        path="/"
        Component={Home}
        />
      <Route
        path="/about"
        Component={About}
        />
      </PageWrapper>
      </Router>
  );
}
  }

export default App;
