import React, { useEffect, useState } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/postRedux/action";
import { Model } from "./Model";

import { Addpost } from "./Addpost";
import { Link } from "react-router-dom";

export const Displaycards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [editPos, setEditPos] = useState("");
  const token = localStorage.getItem("token");
  console.log(token);
  const dispatch = useDispatch();
  const post = useSelector((store) => store.postRedux.post);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(post, "AA");

  useEffect(() => {
    // getPost(dispatch);
    dispatch(getPost(token));
  }, []);

  return (
    <div className="main-display-cards">
      <div className="btn-div">
        <button className="btn" onClick={openModal}>
          Create Post
        </button>
      </div>

      {post.map((el) => (
        <div key={el._Id}>
          <div class="flex justify-center mb-4">
            <a className="flex flex-col items-center cards bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Link to={`/feed/${el._id}`}>
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={el.media}
                  alt=""
                  className="img"
                />
              </Link>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.title}
                </h5>
                <span></span>
              </div>
            </a>
          </div>
        </div>
      ))}

      <Model isOpen={isModalOpen} onClose={closeModal}>
        <Addpost closeModal={closeModal} />
      </Model>
    </div>
  );
};
