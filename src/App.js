import React from 'react';
import logo from './assets/img/logo.svg';

import Layout from './layout/Layout';


export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Layout/>
      </div>
    );
  }
}