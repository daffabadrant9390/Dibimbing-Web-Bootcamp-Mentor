/**
 * Returning Data from Promise Fetch API
 * - Fetch data from a public API using the Fetch API
 * - Use async/await to handle the asynchronous operation
 * - Return the data in JSON format
 * 
 * NOTE:
 * 1. Use the JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts)
 * 2. Create the fetch function to get the posts data with Promise (with then/catch)
 */
const fetchPostsWithPromise = () => {
  return new Promise(function(resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        resolve({
          status: "SUCCESS",
          message: "Posts fetched successfully",
          data
        })
      })
      .catch(error => {
        reject({
          status: "ERROR",
          message: "Error fetching posts",
          error: error.message
        })
      })
  })
}

fetchPostsWithPromise()
  .then(result => {
    const dataResult = result.data;
    const finalResult = {
      ...result,
      data: dataResult.slice(0, 3)
    };
    console.log(finalResult);
  })
  .catch(error => {
    console.error(error);
  });