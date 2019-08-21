import React from 'react';
import styled from 'styled-components';
import { CreateRoomForm } from './RoomInput';
import { CreateMessageForm } from "../CreateMessage/MessageInput"


const WrapHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

`

const GridRooms = styled.div`
  grid-column: 1 / 2;

`

const Chat = styled.div`
  grid-column: 2 / 5;

`


export default () => (
    <WrapHeader>
        <GridRooms>
            <CreateRoomForm/>
        </GridRooms>
        <Chat>
            <CreateMessageForm />
        </Chat>
    </WrapHeader>
);