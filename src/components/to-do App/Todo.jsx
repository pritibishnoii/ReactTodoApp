import React from "react";
import "./todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcLike } from "react-icons/fc";
import todo from "./images/todo.svg";
import { BiPlus } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit } from "react-icons/fa";
import Navbar from "../Navbar.jsx";

const getLocalItems = () => {
  let list = localStorage.getItem("data");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

function Todo() {
  const [inputData, setInputData] = useState("");
  const [itemData, setItem] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEdiItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      // not add empty data
      toast.warn("Pleace Add Item......!", { position: "top-center" });
    } else if (inputData && !toggleSubmit) {
      setItem(
        itemData.map((elm) => {
          if (elm.id === isEdiItem) {
            return { ...elm, name: inputData };
          }
          return elm;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setInputData(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      // setItem([...itemData, inputData]);
      setItem([...itemData, allInputData]);
      setInputData("");
    }
  };
  const deleteItem = (index) => {
    console.log(index);
    const UpdateData = itemData.filter((currentelm) => {
      // console.log(el);
      return index !== currentelm.id;
    });
    setItem(UpdateData);
  };
  const removeAllData = () => {
    setItem([]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(itemData));
  }, [itemData]);

  const udpdateItem = (idx) => {
    let editItem = itemData.find((elm) => {
      return elm.id === idx;
    });
    console.log(editItem);
    setToggleSubmit(false);
    setInputData(editItem.name);
    setIsEditItem(idx);
  };

  return (
    <>
      <Navbar />
      <div className="main-body">
        <div className="main">
          <div className="constainer">
            <figure>
              <img className="my-img" src={todo} alt="notes " />
            </figure>
            <figcaption className="text mb-3">
              <FcLike />
              add your list here
              <FcLike />
            </figcaption>

            <div className="add-item">
              <input
                type="text"
                placeholder="✍️ Add Items..."
                id="additems"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              {toggleSubmit ? (
                <BiPlus className="plus" title="Add-item" onClick={addItem} />
              ) : (
                <FaEdit className="plus" title="Add-item" onClick={addItem} />
              )}
            </div>
            {/* showing data  */}
            <div className="show-item">
              {itemData.map((elm) => {
                return (
                  <div className="item" key={elm.id}>
                    <h3>{elm.name}</h3>
                    <FaEdit
                      className="edit"
                      onClick={() => udpdateItem(elm.id)}
                    />
                    <BsTrashFill
                      className="trash"
                      onClick={() => deleteItem(elm.id)}
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="btn btn-danger px-5 py-2"
              onClick={removeAllData}
            >
              Clear All
              <BsTrashFill className="ms-3" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Todo;
