import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-solid-svg-icons'



const Li = styled.li`
  background-color: rgb(49, 47, 47);
  width: 100%;
  border: none;
  color: rgb(187, 183, 183);
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  height: 7%;
  line-height: 50px;

  &:hover {
    color:white;
    background-color: rgb(27, 25, 25);
  }
`;

export const MenuItem = ({label, icone}) => {
  return (
    <Li>
      <div className="icon-label">
        {label}
      </div>

    </Li>
  )
}
