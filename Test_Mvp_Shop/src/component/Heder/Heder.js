import React from 'react';
import logo from './../../image/Logo.png'
import './Heder.css';
import { Link } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import {  Container, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
export default class Heder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  menu = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <div className='menuBlock'>
        <Container>

          <Toolbar>
            <IconButton edge='start' onClick={this.menu}
              color='inherit' arial-laabel='menu'>
            <MenuIcon /> 
            </IconButton>

            <img src={logo} className='logo' alt="Apple"/>
          </Toolbar>
        </Container>
        {this.state.flag ? <div className='menu'>
          <MenuItem ><Link className='reaction' to="/list">List</Link></MenuItem>
          <MenuItem><Link className='reaction' to="/addPost">Add  product</Link></MenuItem>

        </div> : null}
      </div>

    );
  }
}






