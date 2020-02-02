import { callApi } from './api';
import { mockFetch } from './mockFetch';

describe('Api', () => {
  it('returns api response', async () => {
    global.fetch = () => mockFetch(false);

    const actual = await callApi('test');

    const expected = [{ id: 0, name: 'TestName' }];

    expect(actual).toEqual(expected);
  });

  it('returns error response when status is not ok', async () => {
    global.fetch = () => mockFetch(true);

    const actual = await callApi('test');

    const expected = { error: { ok: false, status: 404 } };

    expect(actual).toEqual(expected);
  });
});
