import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div `
   padding: 8rem 0;
   background:#576071;
   font-size: 3.125rem;
   width: 100%;
`
const RemoveMe = (props) => {
    return (
        <Wrapper>
    
        {props.children}
        </Wrapper>
    );
}

export default RemoveMe