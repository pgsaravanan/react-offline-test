import React from 'react';
import styled from 'styled-components';
import '../../../../styles/variables.scss';

export const CarouselWrapStyled = styled.ul`
    margin: 20px;
    padding: 0;
    display: flex;
    list-style-type: none;
    transition: all 0.5s ease;
    width: ${(props) => `${props.children.length * 450}px`};
    margin-left: ${({ index }) => (index === 1 ? `-${450 + 20}px` : `-${(450 * index) + (index * 40)}px`)};
    @media (min-width: 768px) {
        width: ${(props) => `${props.children.length * 150}px`};
        margin-left: ${({ index }) => (index === 1 ? `-${Number(150) + 20}px` : `-${(Number(150) * index) + (index * 40)}px`)};
    }
  
    li{
        padding: 0 20px;
        transition: all 0.5s ease;
        img {
            height: 300px;
            width: 450px;
            @media screen and (min-width: 768px) {
                width: 150px;
                height: 100px;
            }
        }
        &:nth-child(${({ active }) => active + 1}){
            img{
                border: solid 5px black;
            }
        }
    }
`;
