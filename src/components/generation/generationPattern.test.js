import React from 'react';
import {mount} from 'enzyme';
import GenerationPattern from './generationPattern';
import { GenerationPipeStyled, GenerationPipeItemStyled } from './GenerationPipeStyled';
import 'jest-styled-components';

describe('Generation Pattern', () => {

    it('should match snapshot', () => {
        const props = {
            generationmix: [{fuel: 'Fuel1', perc:1}],
            title: 'Test Title'
        }
        const tree =  mount(<GenerationPattern {...props} />)

        expect(tree).toMatchSnapshot();
    })

    it('should have title', () => {
        const props = {
            generationmix: [],
            title: 'Test Title'
        }
        const tree =  mount(<GenerationPattern {...props} />)

        expect(tree.find('h1').text()).toEqual('Test Title');
    })

    it('should have style className', () => {
        const props = {
            generationmix: [{fuel: 'Fuel1', perc:1}],
            title: 'Test Title',
            style: 'hasRainbow'
        }
        const tree =  mount(<GenerationPattern {...props} />)

        expect(tree.find(GenerationPipeItemStyled).hasClass('hasRainbow')).toBeTruthy();
    })

    it('should set pipe width from percentage attribute in generation data', () => {
        const props = {
            generationmix: [{fuel: 'Fuel1', perc:12.5}],
            title: 'Test Title',
            style: 'hasRainbow'
        }
        const tree =  mount(<GenerationPattern {...props} />)

        expect(tree.find(GenerationPipeItemStyled)).toHaveStyleRule('width', '12.5%');
    })

    describe('hasRainbow style', () => {

        it('should set pipe bg color for biomass', () => {
            const props = {
                generationmix: [{fuel: 'biomass', perc:12}],
                title: 'Test Title',
                style: 'hasRainbow'
            }
            const tree =  mount(<GenerationPattern {...props} />)
            expect(tree.find('.hasRainbow')).toHaveStyleRule('background-color', '#9400D3');
        })

        it('should set pipe bg color for coal', () => {
            const props = {
                generationmix: [{fuel: 'coal', perc:12}],
                title: 'Test Title',
                style: 'hasRainbow'
            }
            const tree =  mount(<GenerationPattern {...props} />)
            expect(tree.find('.hasRainbow')).toHaveStyleRule('background-color', '#4B0082');
        })

    })

    it('should set pipe bg color', () => {
        const props = {
            generationmix: [{fuel: 'Fuel1', perc:12.5}],
            title: 'Test Title',
        }
        const tree =  mount(<GenerationPattern {...props} />)

        expect(tree.find(GenerationPipeItemStyled)).toHaveStyleRule('background-color', 'red');
    })

    it('should have generation list item', () => {
        const props = {
            generationmix: [{fuel: 'Fuel1', perc:1},{fuel: 'Fuel2', perc:2}],
            title: 'Test Title'
        }
        const tree =  mount(<GenerationPattern {...props} />)

        expect(tree.find(GenerationPipeStyled).find('li').length).toEqual(2);
    })

})