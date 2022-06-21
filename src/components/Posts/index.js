import React from "react";

function Posts({
  currentPosts,
  posts,
  loading,
  sortByFirstName,
  sortByUserName,
}) {
  if (loading === true) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-[50px] mr-[50px]">
      <table className="table-auto w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="leading-[60px] text-2xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>
              <button onClick={() => sortByFirstName(posts)} className="w-full">
                Full Name
              </button>
            </th>
            <th>
              <button onClick={() => sortByUserName(posts)} className="w-full">
                Username
              </button>
            </th>
            <th>Thumbnail Icon</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr
              key={post.login.uuid}
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <td className="w-[20%] leading-[60px]">
                <p className="ml-[10px]">
                  {post.name.title +
                    " " +
                    post.name.first +
                    " " +
                    post.name.last}
                </p>
              </td>
              <td className="text-center leading-[60px]">
                {post.login.username}
              </td>
              <td className="">
                <img
                  className="m-auto w-[60px] leading-[60px]"
                  src={post.picture.thumbnail}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
