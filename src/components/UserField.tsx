import * as React from "react"
import styled from 'styled-components';

const UserField = styled.div`
    margin: 2rem 0;
`;

const UserFieldComponent  = ({...props}) => <UserField {...props} />;

export default UserFieldComponent;