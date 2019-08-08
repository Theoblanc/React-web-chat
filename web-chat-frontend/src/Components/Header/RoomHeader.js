import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  flex: 1 1 0;
  z-index: 1;
  padding: 1rem;
  height: 4.8rem;
  justify-content: center;

`

const Room = styled.div`
  display: flex;
  justify-content: center;
  width:70%;
  align-items: center;
  &:not(:last-child) {
    margin-right: auto;
  }
`
const RoomTitle = styled.h1`
  font-size: 1.38rem;
  color: rgba(0, 0, 0, 0.62);

`; 

const Button = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
`



export const RoomHeader = ({ room, username, id }) => (
    <Wrap>
        <Room>
            <RoomTitle>
             {room}
             genner

            </RoomTitle>
        </Room>
        <Button>84명</Button>

    </Wrap>



);

export default RoomHeader;