import React from 'react';
import styled from 'styled-components';
import { themesDefinition } from '../../../styles/themeConstants';

export const NavStyled = styled.nav`
        overflow: hidden;

        button {
            margin: 5px 5px 5px auto;
        }

        a {
            float: left;
            display: block;
            background-color: #ddd;
            color: black;
            text-align: center;
            padding: 8px 16px;
            text-decoration: none;
            font-size: 15px;
            border-radius: 4px;
            margin: 10px 10px;
            position: relative;
            top: 12px
        }

        a:hover {
            background-color: #ddd;
            color: black;
        }

        a.active {
            background-color: ${({ theme }) => themesDefinition[theme].navLinkActiveColor};
            color: white;
            cursor: default;
        }

        transition: background-color 0.5s ease;
        background-color: ${({ theme }) => themesDefinition[theme].navBgColor}
`;
