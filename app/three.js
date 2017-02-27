import React from 'react';
import styled from 'styled-components';
import NavLink from './../component/nav/NavLink';

const H2 = styled.h2`
  color: #eee
`;

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements[0].value
    const path = `/Three/${name}`
    this.context.router.push(path)
  },

  render(){
    return (
      <div>
        <h2>hi i am three</h2>
          <ul>
            <NavLink to="/Three/haha">haha</NavLink><br></br>
            <NavLink to="/Three/heihei">heihei</NavLink><br></br>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="name"/>{' '}
                  <button type="submit">Go</button>
              </form>
          </ul>
           {this.props.children}
      </div>
    )
  }
})
