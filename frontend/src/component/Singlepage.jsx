import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Model } from "./Model";
import { Edit } from "./Edit";
import { deletePost } from "../redux/postRedux/action";
import { useDispatch } from "react-redux";

export const Singlepage = () => {
  const [editPro, setEditPro] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState({});
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id, "cc");

  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (editPro) => {
    console.log(editPro, "ok");
    setEditPro(() => editPro);
    OpenModal();
  };

  const fetchData = async () => {
    // console.log(token,"fuc")
    try {
      let res = await axios.get(
        // `${process.env.REACT_APP_API_URL}/api/posts/${id}`,
        `${process.env.REACT_APP_API_URL}/api/posts/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // let data = res.data;
      console.log(res.data.post);
      setPostId(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  function handleDeletePost(id) {
    console.log(id, "delete");
    dispatch(deletePost(id, token));
    navigate("/feed");
  }

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(postId);

  return (
    <div className="flex justify-center items-center h-screen bg">
      <div className="max-w-sm style={{ backgroundColor: 'rgba(38, 45, 52)' }} text-left  ">
        <a
          href="#"
          className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {postId.category}
        </a>

        <a href="#">
          <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-white dark:text-white ">
            {postId.title}
          </h5>
        </a>
        <a href="#">
          <img class="card-img" src={postId.media} alt="" />
        </a>
        <div className="p-5">
          <p class="mb-3 font-normal text-white dark:text-white">
            {postId.content}
          </p>
        </div>
        <div className="flex">
          <div className="edit-btn flex justify-center ">
            <button className="" onClick={(el) => handleEdit(postId)}>
              Edit
            </button>
          </div>
          <div className="dlt-btn flex justify-center ">
            <button className="" onClick={() => handleDeletePost(postId._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <Model isOpen={isModalOpen} onClose={closeModal}>
        <Edit closeModal={closeModal} editPro={editPro} />
      </Model>
    </div>
  );
};
