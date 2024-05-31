/**
 * Fetch logic
 */
const fetchData = async (url: string) => {
  return fetch(url)
    .then((data) => data.json())
    .then((json) => {
      return json;
    });
};

/**
 * Endpoints
 */

//....
