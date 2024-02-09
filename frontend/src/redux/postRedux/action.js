import axios from "axios";
import {
  ADDFAIL,
  ADDLOADING,
  ADDSUCESS,
  POSTFAIL,
  POSTLOADING,
  POSTSUCESS,
} from "./actionType";

export const getPost = (token) => async (dispatch) => {
  try {
    dispatch({ type: POSTLOADING });
    let res = await axios.get(`http://localhost:8080/api/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data, "action");
    dispatch({ type: POSTSUCESS, payload: res.data.post });
  } catch (error) {
    console.log(error);
    dispatch({ type: POSTFAIL });
  }
};

//Delete Product

// export const deleteProduct = (id) => async (dispatch) => {
//     try {
//       dispatch({ type: DELETELOADING });
//       let res = await axios.delete(
//         `${process.env.REACT_APP_API_URL}/api/products/${id}`
//       );

//       dispatch({ type: DELETESUCESS, payload: id });
//     } catch (err) {
//       console.log(err);
//       dispatch({ type: DELETEFAIL });
//     }
//   };

// add post
export const addPost = (formData,token) => async (dispatch) => {
  try {
    dispatch({ type: ADDLOADING });
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/posts`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    dispatch({ type: ADDSUCESS, payload: res.data.post });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADDFAIL });
  }
};

// export const EditProduct = (id, formData, closeModal) => async (dispatch) => {
//     try {
//       dispatch({ type: EDITLOADING });
//       let res = await axios.patch(
//         `${process.env.REACT_APP_API_URL}/api/products/${id}`,
//         formData
//       );
//       dispatch({ type: EDITSUCESS, payload: res.data.singleProduct });
//       closeModal();
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: EDITFAIL });
//       closeModal();
//     }
//   };
