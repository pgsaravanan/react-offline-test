const error = {
  ok: false,
  status: 404,
};

const success = {
  ok: true,
  json: () => Promise.resolve([
    {
      id: 0,
      name: 'TestName'
    }
  ])
};

export function mockFetch(hasError) {
  return Promise.resolve(hasError ? error : success);
}
