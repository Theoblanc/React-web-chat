import React from 'react';
import styled from 'styled-components';
import RoomList from './RoomList';

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
            <RoomList />
        </GridRooms>
        <Chat>
        </Chat>
    </WrapHeader>
);