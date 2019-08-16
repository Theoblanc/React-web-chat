import React from 'react';
import styled from 'styled-components';
import CreateRoom from "../../Components/CreateRoom/RoomInput"

const Wrap = styled.div`

`
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  height: 500px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.038);
  border-left: 1px solid rgba(0, 0, 0, 0.038);
  border-right: 1px solid rgba(0, 0, 0, 0.038);
`

const Li = styled.li`
  flex: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  list-style: none;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  color: rgba(0, 0, 0, 0.38);


  &:hover{
    background: rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.5);
  }
`

export default () => (
  <Wrap>
    <Ul>
      <Li>
        # genner
        </Li>
      <Li>
        # working
        </Li>
    </Ul>
  </Wrap>
);