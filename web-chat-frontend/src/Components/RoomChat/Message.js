import React from 'react';
import styled from 'styled-components';


const Wrap = styled.li`
  display: flex;
  flex: none;
  font-size: 16px;
  margin-top: 1rem;
  height: 3rem;

`

const ContextWrap = styled.div`

`

const Img = styled.img`
  flex: none;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.38rem;
  margin-right: 1rem;
  
`

const Video = styled.video`
  width: 30rem;
  max-width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  min-width: 0;
`

const Audio = styled.audio`
  width: 30rem;
  max-width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  min-width: 0;
`
const User = styled.div`
  display: flex;
  position: relative;
  font-size: 0.62rem;
  color: #b6b6b6;
  padding-top: 3px;
  flex: 1 1 auto;
  max-height: 100%;


`

const UserName = styled.div`

`

const Time = styled.div`

`

const MessageContext = styled.div`
  padding-top: 0.5rem;
  font-weight: 600;
`

export default () => (

  <Wrap>
    <Img src="https://cdn.allets.com/550/2019/02/20/550_437325_1550648808.webp" />
    <ContextWrap>
      <User>
        <UserName>정태현</UserName>
        &nbsp;
        |
        &nbsp;
  
      <Time>10:10</Time>
      </User>
      <MessageContext>
        안녕하세요
      </MessageContext>
    </ContextWrap>

  </Wrap>

);