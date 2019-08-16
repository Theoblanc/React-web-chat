import React from 'react';
import styled from 'styled-components';
import Message from "./Message";
import { CreateRoomForm } from '../CreateMessage/MessageInput';

const Wrap = styled.div`
  flex: 1 1 100%;
  padding :1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.038);
  margin: 0;
  display: flex;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: 500px;
`

const MessageWrap = styled.ul`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column-reverse;
  li:last-child{
    margin:0;
  }
`


export default () => (
  <Wrap>
    <MessageWrap>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>


    </MessageWrap>

  </Wrap>
);