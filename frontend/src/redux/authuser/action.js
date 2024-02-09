import axios from "axios";
import {
  POST_CREATEUSER_ERROR,
  POST_CREATEUSER_LOADING,
  POST_CREATEUSER_SUCCESS,
  POST_LOGIN_LOADING,
} from "./actionType";

// export const createUser = (Registereduser) => async (dispatch) => {
//   dispatch({ type: POST_CREATEUSER_LOADING });
//   try {
//     const response = await axios.post(
//       `https://masaiforum-cik8.onrender.com/api/register`,
//       Registereduser,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     // Handle the server response here
//     console.log(response.data, "signUp");
//     dispatch({ type: POST_CREATEUSER_SUCCESS });
//     alert("SignUp successfull");
//   } catch (error) {
//     // console.log(error);
//     dispatch({ type: POST_CREATEUSER_ERROR });
//     alert("some thing wrong");
//   }
// };

export const createUser = (registerUser, navigate) => (dispatch) => {
  dispatch({ type: POST_CREATEUSER_LOADING });
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/register`, registerUser)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_CREATEUSER_SUCCESS });
      navigate("/login");
    })
    .catch((error) => {
      dispatch({ type: POST_CREATEUSER_ERROR });
    });
};
