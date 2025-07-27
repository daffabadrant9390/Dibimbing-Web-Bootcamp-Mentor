/**
 * Returning Data from Promise Fetch API
 * - Fetch data from a public API using the Fetch API
 * - Use async/await to handle the asynchronous operation
 * - Return the data in JSON format
 *
 * NOTE:
 * 1. Use the JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts/{{numbers}})
 * 2. Create the fetch function to get the posts data with Async/Await and tryCatch
 *    to handle errors from the fetch operation
 * 3. Since we have specific users number on the fetch URL, make sure the function has
 *   a parameter to accept the user number
 */

const fetchSpecificPostWithAsyncAwait = async (postId = 1) => {
  try {
    //* Call API
    const responseData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await responseData.json();

    //* Pengecekan data kosong agar tidak error
    if (Object.keys(data).length === 0) {
      return {
        status: 'SUCCESS',
        message: 'No data found for the given post ID',
        data: null,
      };
    } else {
      return {
        status: 'SUCCESS',
        message: 'Post fetched successfully',
        data,
      };
    }
  } catch (error) {
    return {
      status: 'ERROR',
      message: 'Error Fetching Post',
      error: error.message,
    };
  }
};

fetchSpecificPostWithAsyncAwait(8).then((result) => {
  console.log(result);
});
