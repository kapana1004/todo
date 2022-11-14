import React, { useState } from "react";
import Moonimg from "../images/icon-moon.svg";
import Sun from "../images/icon-sun.svg";
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

  const themeHandle = () => {
    props.setDark(!props.dark);
  };

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

            <img
              className=" w-[20px] h-[20px] cursor-pointer "
              src={props.dark ? Sun : Moonimg}
              alt="moon"
              onClick={themeHandle}
            />
          </div>

          <div
            className={`mt-[20px] flex flex-row ml-[1.5rem] w-[327px] rounded-[5px] ${
              props.dark ? "bg-[#171823]" : "bg-white"
            }`}
          >
            <div className=" border border-gray-600 ml-[20px] mt-[14px] w-[20px] h-[20px] bg-transfarent rounded-[50px] flex justify-center items-center">
              {" "}
              {props.dark && <img src={path} alt="path" />}{" "}
            </div>

            <input
              type="text"
              value={inputValue}
              onKeyDown={changeHandling}
              onChange={(event) => setInputValue(event.target.value)}
              className={` ${
                props.dark ? "text-[#C8CBE7]" : "text-[#393A4B]"
              } bg-transparent outline-none w-[270px] ml-[20px] resize-none  h-[48px]   placeholder:text-xs text-[13px] rounded-[5px]`}
              placeholder="Create a new todo…"
            ></input>
          </div>
        </div>
        <div>
          <ul
            className={` w-[327px] ml-[24px] ${
              props.dark ? "bg-[#25273D]" : "bg-white"
            }  mt-[20px]  rounded-[5px] `}
          >
            {filteredList.map((todoItem, index) => {
              return (
                <CheckBox
                  setFilteredList={setFilteredList}
                  filteredList={filteredList}
                  todoItem={todoItem}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  setItems={setItems}
                  dark={props.dark}
                  setDark={props.setDark}
                  key={index}
                />
              );
            })}

            <div className=" rounded-[5px] w-[327px] h-[50px] flex justify-between p-[20px] items-center">
              <span className="  text-xs text-[#5B5E7E]">
                {items} items left
              </span>
              <span
                className=" cursor-pointer text-xs text-[#5B5E7E]"
                onClick={handleClear}
              >
                Clear Completed
              </span>
            </div>
          </ul>

          <div
            className={`rounded-[5px] w-[327px] h-[48px]  flex justify-around items-center mt-[20px] ml-[25px] pl-[80px] pr-[80px] ${
              props.dark ? "bg-[#25273D]" : "bg-white"
            }`}
          >
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "all" ? "text-[#3A7CFD]" : "text-[#5B5E7E]"
              }`}
              onClick={handleFilter}
            >
              All
            </span>
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "active" ? "text-[#3A7CFD]" : "text-[#5B5E7E]"
              }`}
              onClick={handlingActive}
            >
              Active
            </span>
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "completed" ? "text-[#3A7CFD]" : "text-[#5B5E7E]"
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
