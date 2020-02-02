import React from 'react';
import { mount } from 'enzyme';
import Carousel from './carousel';
import 'jest-styled-components';

const data = {
  hits: [
    { id: 1, webformatURL: 'xyz' },
    { id: 2, webformatURL: 'xyz1' },
    { id: 3, webformatURL: 'xyz2' }
  ]
};

describe('Carousel', () => {
  it('should match snapshot', () => {
    const tree = mount(<Carousel data={data} />);
    expect(tree).toMatchSnapshot();
  });

  it('should contain datain carousel in list format', () => {
    const tree = mount(<Carousel data={data} />);

    expect(tree.find('.carousel-container').find('li').length).toEqual(3);
  });

  it('should set the container width based on number of items in carousel', () => {
    const tree = mount(<Carousel data={data} />);

    expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('width', '1350px');
  });

  it('should set the container style margin-left  as -0px by default', () => {
    const tree = mount(<Carousel data={data} />);

    expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('margin-left', '-0px');
  });

  describe('On Next click', () => {
    it('should update margin-left property to move next slide', () => {
      const tree = mount(<Carousel data={data} />);

      tree.find('.carousel-button-wrapper').find('.next').simulate('click');

      expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('margin-left', '-470px');
    });

    it('should update margin-left property to move next slide and click next button 2 times', () => {
      const tree = mount(<Carousel data={data} />);

      tree.find('.carousel-button-wrapper').find('.next').simulate('click');

      tree.find('.carousel-button-wrapper').find('.next').simulate('click');

      expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('margin-left', '-980px');
    });
  });

  describe('On Previous click', () => {
    it('should update margin-left property to move previous slide', () => {
      const tree = mount(<Carousel data={data} />);
      tree.find('.carousel-button-wrapper').find('.next').simulate('click');
      tree.find('.carousel-button-wrapper').find('.next').simulate('click');
      tree.find('.carousel-button-wrapper').find('.next').simulate('click');

      tree.find('.carousel-button-wrapper').find('.prev').simulate('click');

      expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('margin-left', '-980px');

      tree.find('.carousel-button-wrapper').find('.prev').simulate('click');

      expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('margin-left', '-470px');

      tree.find('.carousel-button-wrapper').find('.prev').simulate('click');

      expect(tree.find('.carousel-container').find('ul')).toHaveStyleRule('margin-left', '-0px');
    });
  });
});
