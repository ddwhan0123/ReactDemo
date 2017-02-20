import React from 'react';
import styled from 'styled-components';
import { Router, Route, hashHistory , Link } from 'react-router';
// import three from './three';
// import two from './two';
import NavLink from './../component/NavLink';

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;
const H1 = styled.h1`
  background-color: #a1a
`;

export default React.createClass({
  render() {
    return (
      <div>
          {/* <Input placeholder="@mxstbr" type="text" />
          <H1>i am first h1</H1> */}
           <ul role="nav">
             <NavLink to="/Three">Three</NavLink><br></br>
             <NavLink to="/Two">Two</NavLink>
           </ul>
           {this.props.children}
      </div>
    );
  }
})
