import { styled } from "styled-components";

export const Cards = styled('div')`
    background: white;
    padding: 21px 28px 21px 28px;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    color: #363F5F;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        text-transform: capitalize;
    }

    p{
        font-size: 30px;
        margin-top: 14px;     
    }
    &:last-child{
        background: #49AA26;
        color: white;
    }
  
`