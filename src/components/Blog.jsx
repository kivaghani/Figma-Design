import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://3.7.81.243:3253/api/blog");
        const data = await response.json();
        if (data.success) {
          setBlogPosts(data.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const viewAllLink = () => {
    window.location.href = "/blogs";
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={post.image_url}
                alt={post.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-500 transition-colors duration-300">
                  {post.name}
                </h3>
                <p className="text-gray-700 mt-2">{post.short_description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-500">By {post.writer_name}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={viewAllLink}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
