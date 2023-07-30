import { styled } from "styled-components";

export const Form = styled('form')`
     input{
        border: none;
        border-radius: 0.2rem;
        padding: 0.8rem;
        width: 100%;
    }

    .input-group {
        margin-top: 0.8rem;
    }

    .input-group .help {
        opacity: 0.4;
    }

    .input-group.actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .input-group.actions .button,
    .input-group.actions button {
        width: 48%;

    }
    button {
        width: 100%;
        height: 50px;

        border: none;

        color: white;
        background: #49AA26;

        padding: 0;

        border-radius: 0.25rem;

        cursor: pointer;
    }
    button:hover{
        background-color: #3DD705;;
    }
    .button.cancel {
        color: #E92929;
        border: 2px #E92929 solid;
        border-radius: 0.25rem;

        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0.6;
    }

    .button.cancel:hover {
        opacity: 1;
    }

`