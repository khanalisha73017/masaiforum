import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/authuser/action";

export const SignUp = () => {
  const userformData = {
    username: "",
    email: "",
    password: "",
  };
  const [Registereduser, setRegisteredUser] = useState(userformData);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    console.log(name, type, value);
    setRegisteredUser((user) => ({ ...user, [name]: value }));
  };

  // const uploadFile = async (type) => {
  //   const Formdata = new FormData();
  //   Formdata.append("file", avatar);
  //   Formdata.append("upload_preset", "preset_image");
  //   Formdata.append("username", username);
  //  Formdata.append("email", email);
  //   Formdata.append("password", password);

  //   try {
  //     let cloudanaryName = "dqnowc28f";
  //     let ResourceType = "image";
  //     let api = `https://api.cloudinary.com/v1_1/${cloudanaryName}/${ResourceType}/upload`;

  //     const res = await axios.post(api, Formdata);
  //     console.log(res);
  //     console.log(res.data);
  //     const { secure_url } = res.data;
  //     console.log(res.data.secure_url, "cc");
  //     return secure_url;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      //upload the image file
      // const UserimageUrl = await uploadFile("image");
      // console.log(UserimageUrl, "aa");

      dispatch(createUser(Registereduser,navigate));
      
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* <div>
                <label
                  htmlFor="avatar"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Profile Picture
                </label>
                <input
                  type="file"
                  name="avatar"
                  // id="profileImage"
                  accept="image/**"
                  onChange={(e) => setAvatar((prev) => e.target.files[0])}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary_green focus:border-primary_green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div> */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Username
                </label>
                <input
                  type="text"
                  value={Registereduser.username}
                  name="username"
                  id="username"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary_green focus:border-primary_green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Iamjohndoe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={Registereduser.email}
                  name="email"
                  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary_green focus:border-primary_green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={Registereduser.password}
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary_green focus:border-primary_green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary_green dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary_green dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary_green hover:underline dark:text-primary_green"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full  focus:ring-primary_green font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary_green hover:underline dark:text-primary_green"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
