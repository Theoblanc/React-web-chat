import React from 'react';
import styled from 'styled-components';

const WrapHeader = styled.div`
  border: 1px solid #e0e0e0;
  z-index: 1;
  flex: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 4.8rem;

`

const Text = styled.div`
    margin-left: 1rem;
`

const Img = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.38rem;
  background: #e0e0e0;
`


const UserName = styled.h3`
   color: rgba(0, 0, 0, 0.38);
   &:empty {
    display: block;
    background: #f2f2f2;
    width: 10rem;
    height: 1rem;
    animation: pulse 1s infinite;
    color:red;
   }
`

const Email = styled.h5`
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0.2rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.38);
  &:empty{
    display: block;
    background: #f2f2f2;
    height: 0.5rem;
    animation: pulse 1s infinite;
    width: 6rem;
    line-height: 100%;
    margin-top: 0.38rem;
  }
`





export const UserHeader = ({ username, email, avatar }) => (
    <WrapHeader>
        <Img src={avatar} alt={username} />
        <Text>
            <UserName>{username}</UserName>
            <Email>{email}</Email>
        </Text>
    </WrapHeader>


);

export default UserHeader;