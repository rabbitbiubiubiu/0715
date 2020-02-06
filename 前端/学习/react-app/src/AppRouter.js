import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import A from './A';
import B from './B';
import Home from './Home';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header></Header>
    <hr></hr>
    <Router>
      {/* 点击切换到哪一个组件 */}
      <Link to='/'>Home</Link>
      <Link to='/A'>A</Link>
      <Link to='/B'>B</Link>
      {/* 模糊匹配 */}
      {/* <Route path='/' component={Home}></Route>
      <Route path='/A' component={A}></Route>
      <Route path='/B' component={B}></Route>  */}

      {/* 严格匹配 */}
      {/* <Route exact path='/' component={Home}></Route>
      <Route path='/A' component={A}></Route>
      <Route path='/B' component={B}></Route> */}

      {/* 仅渲染与当前位置匹配的第一个子元素*/}
      <Switch>
        {/* path='/' 可匹配度较高 switch  放于最后一行 防止A B无法匹配 */}
        <Route path='/A' component={A}></Route>
        <Route path='/B' component={B}></Route> 
        <Route path='/' component={Home}></Route>
      </Switch>
    </Router>
    <hr></hr>
    <Footer></Footer>
    </div>
  );
}

export default App;
