
export const callApi = (url, method = 'GET') => {
  const init = {
    method,
  };
  return fetch(`${url}`, init)
    .then((response) => {
      if (!response.ok) {
        return { error: response };
      }
      return response.json();
    });
};
