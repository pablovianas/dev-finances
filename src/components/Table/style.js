import { styled } from "styled-components";

export const Table = styled('table')`
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #9696B3;

    thead th{
        background: white;
        font-weight: normal;
        padding: 14px 28px 14px 28px;
    }
    tbody, tbody tr{
        text-align: center;
    }

    tbody td{
        background: white;
        padding: 1rem 2rem;
    }
    tbody td img{
        cursor: pointer;
    }
    td.inflow{
        color: green;
    }
    td.outflow{
        color: red;
    }

`