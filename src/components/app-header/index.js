import React from 'react';

import './style.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({allPosts, liked}) => {
    return (
        <Header>
            <h1>Lilith Lamber</h1>
            <h2>{allPosts} tweets, {liked} liked</h2>
        </Header>
    );
}

export default AppHeader;