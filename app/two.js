import React from 'react';
import styled from 'styled-components';
import NavLink from './../component/nav/NavLink';

const H3= styled.h3`
  background-color: #a11
`;
export default React.createClass({
  render(){
    return (
      <div>
        <NavLink to="/" onlyActiveOnIndex>To First</NavLink><br></br>
        <H3>i am two h3</H3>
      </div>
    );
  }
})
