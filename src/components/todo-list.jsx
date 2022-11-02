import { buildQueries } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Moonimg from "../images/icon-moon.svg";
import path from "../images/path.png";
import CheckBox from "./checkBox";

const todoItems = [
  {
    name: "Complete online JavaScript course",
    id: 1,
    status: false,
  },
  {
    name: "Jog around the park 3x",
    id: 2,
    status: false,
  },
  {
    name: "10 minutes meditation",
    id: 3,
    status: false,
  },
  {
    name: "Read for 1 hour",
    id: 4,
    status: false,
  },

  {
    name: "Pick up groceries",
    id: 5,
    status: false,
  },

  {
    name: "Complete Todo App on Frontend Mentor",
    id: 6,
    status: false,
  },
];

const Todo = (props) => {
  const [todoList, setTodoList] = useState(todoItems);

  const [filteredList, setFilteredList] = useState(todoItems);

  const [category, setCategory] = useState("all");

  const [inputValue, setInputValue] = useState("");

  const [newId, setNewId] = useState(7);

  const [items, setItems] = useState(6);

  const handleClear = () => {
    const clearList = [...todoList];
    console.log("hello");
    const filterClear = clearList.filter((todoItem) => {
      return !todoItem.status;
    });

    setFilteredList(filterClear);
  };

  const changeHandling = (event) => {
    if (event.key === "Enter") {
      // const lastID = todoList[todoList.length - 1]?.id || 0;
      const newTask = {
        name: event.target.value,
        id: newId,
        status: false,
      };
      setNewId(newId + 1);
      const newTodoItems = [...filteredList, newTask];

      setFilteredList(newTodoItems);

      setInputValue("");
    }
  };

  const handlingActive = () => {
    const copiedTodoList = [...todoList];

    const activeArray = copiedTodoList.filter((todo) => {
      return todo.status === false;
    });

    setCategory("active");

    setFilteredList(activeArray);
  };

  const handleFilter = () => {
    setFilteredList(todoList);

    setCategory("all");
  };

  const handleComplete = () => {
    const copiedTodoList = [...todoList];

    const activeArray = copiedTodoList.filter((todo) => {
      return todo.status === true;
    });

    setFilteredList(activeArray);
    setCategory("completed");
  };

  return (
    <>
      <div className=" justify-center items-center w-[375px]">
        <div className=" items-center w-[350px]">
          <div className="flex justify-between flex-row pt-[50px] items-center">
            <span className=" text-3xl ml-[24px]  text-white "> T O D O </span>

            <img className=" w-[20px] h-[20px] " src={Moonimg} alt="moon" />
          </div>

          <div className=" mt-[20px] flex flex-row ml-[1.5rem] w-[327px] bg-white rounded-[5px]">
            <div className=" border border-gray-600 ml-[20px] mt-[14px] w-[20px] h-[20px] bg-white rounded-[50px] flex justify-center items-center">
              {" "}
              <img src={path} />{" "}
            </div>

            <input
              type="text"
              value={inputValue}
              onKeyDown={changeHandling}
              onChange={(event) => setInputValue(event.target.value)}
              className=" outline-none w-[270px] ml-[20px] resize-none  h-[48px]   placeholder:text-xs text-[13px] rounded-[5px]"
              placeholder="Create a new todo…"
            ></input>
          </div>
        </div>
        <div>
          <ul className=" w-[327px] ml-[24px] bg-white mt-[20px]  rounded-[5px]">
            {filteredList.map((todoItem, index) => {
              return (
                <CheckBox
                  setFilteredList={setFilteredList}
                  filteredList={filteredList}
                  todoItem={todoItem}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  setItems={setItems}
                  key={index}
                />
              );
            })}

            <div className=" rounded-[5px] w-[327px] h-[50px] flex justify-between p-[20px] items-center">
              <span className="  text-xs text-gray-400">
                {items} items left
              </span>
              <span
                className=" cursor-pointer text-xs text-gray-400"
                onClick={handleClear}
              >
                Clear Completed
              </span>
            </div>
          </ul>

          <div className=" rounded-[5px] w-[327px] h-[48px]  flex justify-around items-center mt-[20px] ml-[25px] bg-white ">
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "all" ? "text-blue-600" : "text-gray-700"
              }`}
              onClick={handleFilter}
            >
              All
            </span>
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "active" ? "text-blue-600" : "text-gray-700"
              }`}
              onClick={handlingActive}
            >
              Active
            </span>
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "completed" ? "text-blue-600" : "text-gray-700"
              }`}
              onClick={handleComplete}
            >
              Completed
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
