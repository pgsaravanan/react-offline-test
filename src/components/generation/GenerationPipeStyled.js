import styled from 'styled-components';

export const GenerationStyled = styled.div`
    font-family: Arial;
`;

export const GenerationPotStyled = styled.ul`
    font-family: "Arial";
    font-size: 14px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    li{
        span {
            color: black;
            text-transform: Capitalize;
        }
        padding: 5px 0;
        width: 20%;
        display: flex;
        .generation-fuel{
            display: inline-block;
            min-width: 80px;
        }
        .generation-pot{
            display: flex;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            background-color: green;
            align-items: center;
            .nested {
                margin: 0 auto;
            }
        }
    }
`

export const GenerationPipeStyled = styled.ul`
    font-family: "Arial";
    font-size: 14px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 98%;
    
    li{
        span {
            color: black;
            text-transform: Capitalize;
        }
        padding: 5px 0;
        display: flex;
        .generation-fuel{
            display: inline-block;
            min-width: 80px;
        }
    }
`

const getBgColorForFuel = {
    biomass: '#9400D3',
    coal: '#4B0082',	
    imports:'#0000FF',
    gas:'#00FF00',
    nuclear:'#FFFF00',
    other:'#FF7F00',
    hydro:'pink',
    solar:'green',
    wind:'orange'
}

export const GenerationPipeItemStyled = styled.span`
    color: white;
    display: inline-block;
    background-color: red;
    transition: all ease 5s;
    width: 0%;
    padding: ${ ({perc}) => perc === 0 ? '0px': '5px'};
    width: ${ ({perc}) => `${perc}%`};
    border-radius: 4px;
    margin: 0 5px;
    &.hasRainbow{
        font-size: 100px;
        background-color: ${ ({fuel}) => {
            console.log(fuel);
            console.log(getBgColorForFuel[fuel])
            return fuel ? getBgColorForFuel[fuel] : 'red'
        }}
    }

`