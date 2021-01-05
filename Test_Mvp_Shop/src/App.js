
import './App.css';
import Heder from './component/Heder/Heder'
import AddPost from './component/List/AddPost/AddPost';
import List from './component/List/List';
import AdminList from './component/List/AminList'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readData } from './store/action/actionProduct'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render() {
    if(this.props.product[0]==='n'){
      this.props.readData()
    }
  return (
    <Router>
      <div className="App">
        <div>
        <Heder />
        </div>
        <Switch>
        <Route path="/list">
        <List />
          </Route>
          <Route path="/addPost">
          <AddPost />
          </Route>

        </Switch>
          <AdminList />
         
      </div>
    </Router>
  );
}}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ readData: readData  }, dispatch)
}
function mapStateToProps(state) {
  return {
      product: state.active.posts,
     
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(App);

