import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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

export default class Hello extends React.Component {
  render() {
    return (
      <div>
          <Input placeholder="@mxstbr" type="text" />
          <H1>hi all</H1>
      </div>
    );
  }
}
ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
