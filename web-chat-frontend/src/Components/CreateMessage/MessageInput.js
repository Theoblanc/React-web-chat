import React from 'react'
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const Form = styled.form`
    flex: none;
    position: relative;
    display: flex;
    align-items: center;
    border-top: 1px solid #e0e0e0;
    height: 3.6rem;
    display: flex;
    margin-top: auto;
    width: 270px;

    input{
        cursor: pointer;

    }
    

    Form > * {
        margin-right: 0.38rem;
    }

`

const MessageInput = styled(Input)`
    flex: 1 1 100%;
    padding: 1rem;
    border: 0;
    font-size: 1rem;
`

const SendButton = styled(Button)`
    flex: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    
`
export const CreateRoomForm = ({ submit }) => (
    <Form onSubmit={e => {
        e.preventDefault()
        submit({
            name: e.target[0].value,
            private: e.target.elements[2].checked,
        })
        e.target[0].value = ''
    }}
    >
        <MessageInput placeholder="Create a Room" />

        <SendButton type="submit" text="+" />

    </Form>
)