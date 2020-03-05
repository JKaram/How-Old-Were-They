import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width:100px;
    width: 100%;
    
    margin: 0 auto;
    
    border: 1px solid rgb(0, 0, 0);
`

export default function ActorProfile({ name, img }) {
    return (
        <Wrapper>
            <p>{name}</p>
            <img src={img} alt={name} height='100' width="auto" />
        </Wrapper>
    )
}