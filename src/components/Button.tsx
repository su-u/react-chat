import * as React from "react";
import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1;
    text-decoration: none;
    transition: opacity 0.3s;
    cursor: pointer;
    margin-left: 0.5rem;
    background-color: #FFF;
`;

const ButtonComponent = ({...props}: any) => <Button {...props} />;

export default ButtonComponent;