import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

function NotificationToast() {
  const notify = () =>
    toast.success("Wow so easy!", { position: "top-center" });

  return (
    <>
      <Navbar />
      <div>
        <h1>
          Hello Welcome to my Website!!!!!!!!
          <FcLike />
          <FcLikePlaceholder />
        </h1>
        <button
          className="btn btn-outline-danger btn-lg m-5 auto px-5 "
          onClick={notify}
        >
          Login
          <FcLikePlaceholder className="ms-2" />
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default NotificationToast;
