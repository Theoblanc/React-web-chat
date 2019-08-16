import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1;
  padding: 1rem;
  height: 4.8rem;
  vertical-align: center;
  text-align: center;

`

const Room = styled.div`
  width:90%;

`
const RoomTitle = styled.h1`
  font-size: 1.38rem;
  color: rgba(0, 0, 0, 0.62);
  line-height: 170%;
`; 

const Button = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 100px;
  height: 40px;

`



export const RoomHeader = ({ rooms, username, id }) => (
    <Wrap>
        <Room>
            <RoomTitle>
             {rooms[0].roomName}
            </RoomTitle>
        </Room>
        <Button>{rooms.length}명</Button>

    </Wrap>



);

export default RoomHeader;