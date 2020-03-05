import React from 'react'
import styled from 'styled-components'



export default function ActorProfile({ name, img }) {
    return (
        <>
            <p>{name}</p>
            <img src={img} alt={name} height='100' width="auto" />
        </>
    )
}