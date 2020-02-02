import React from 'react';
import { mount } from 'enzyme';
import Loaders from './loaders';

describe('Loaders component', () => {
  describe('Can show or hide', () => {
    it('should display loader when isLoading true', () => {
      const element = mount(<Loaders isLoading />);

      expect(element.find('.loading').length).toEqual(1);
    });

    it('should not display loader when isLoading false', () => {
      const element = mount(<Loaders isLoading={false} />);

      expect(element.find('.loading').length).toEqual(0);
    });
  });

  describe('Error block', () => {
    it('should display when it has error', () => {
      const element = mount(<Loaders error={{ status: 404 }} />);

      expect(element.find('.error').find('p').text()).toEqual('Something went wrong. Status :404');
    });

    it('should not display when it has error', () => {
      const element = mount(<Loaders />);

      expect(element.find('.error').length).toEqual(0);
    });
  });

  describe('No data label', () => {
    it('should display no data label when no records', () => {
      const element = mount(<Loaders
        noDataLabel="No record."
        hasData={false}
        isLoading={false}
        error={false}
      />);

      expect(element.find('.no-records').find('p').text()).toEqual('No record.');
    });

    it('should not display no data label when there is records', () => {
      const element = mount(<Loaders
        noDataLabel="No record."
        hasData
        isLoading={false}
        error={false}
      />);

      expect(element.find('.no-records').length).toEqual(0);
    });
  });
});
