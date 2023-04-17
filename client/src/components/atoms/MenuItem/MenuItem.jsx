import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
  background-color: rgb(49, 47, 47);
  width: 100%;
  border: none;
  color: rgb(187, 183, 183);
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  line-height: 50px;

  &:hover {
    color:white;
    background-color: rgb(27, 25, 25);
  }
`;

export const MenuItem = ({label}) => {
  return (
    <Li>{label}</Li>
  )
}
