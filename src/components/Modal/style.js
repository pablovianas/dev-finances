import { styled } from "styled-components";

export const ModalOverlay = styled('div')`
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    visibility: hidden;

    z-index: 999;

    &.active{
        opacity: 1;
        visibility: visible;
    }

    .modal{
        background: #F0F2F5;
        padding: 2.4rem;
        position: relative;
        z-index: 1;
    }


    #form {
        max-width: 500px;
    }

    #form h2 {
        margin-top: 0;
    }

    

    

`