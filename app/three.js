import React from 'react';
import styled from 'styled-components';
import NavLink from './../component/NavLink';

const H2 = styled.h2`
  color: #eee
`;

export default React.createClass({
  render(){
    return (
      <div>
        <h2>hi i am three</h2>
          <ul>
            <NavLink to="/Three/haha">haha</NavLink><br></br>
            <NavLink to="/Three/heihei">heihei</NavLink>
          </ul>
      </div>
    )
  }
})
