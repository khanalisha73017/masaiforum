import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditPost } from "../redux/postRedux/action";

export const Edit = ({ editPro, closeModal }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: editPro.title,
    media: editPro.media,

    category: editPro.category,

    content: editPro.content,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, editPro._id, token, "edit");
    dispatch(EditPost(editPro._id, formData, token, closeModal));
  };

  return (
    <div>
      <form class="p-8 w-96">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Post Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Product Name"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Media
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={formData.media}
            placeholder="Product Image URL"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, media: e.target.value };
              })
            }
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text-area"
            placeholder="Add a content..."
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, content: e.target.value };
              })
            }
          />
          <p class="text-red-500 text-xs italic">Please add a Content.</p>
        </div>
        <div class="mb-4">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select a category"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  category: e.target.value,
                };
              })
            }
          >
            <option value="Development">Development</option>
            <option value="Design">Design</option>

            <option value="Innovation">Innovation</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <button class="btn" type="submit" onClick={handleSubmit}>
          Add Post
        </button>
      </form>
    </div>
  );
};
