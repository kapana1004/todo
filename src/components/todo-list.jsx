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
      <div className=" justify-center items-center ">
        <div className=" items-center ">
          <div className="flex justify-between flex-row pt-[50px]  items-center xl:w-[540px] xl:pt-[70px] ">
            <span className=" text-3xl   text-white  xl:text-[40px]">
              {" "}
              T O D O{" "}
            </span>

            <img
              className=" w-[20px] h-[20px] cursor-pointer xl:w-[26px] xl:h-[26px] "
              src={props.dark ? Sun : Moonimg}
              alt="moon"
              onClick={themeHandle}
            />
          </div>

          <div
            className={`mt-[20px] flex flex-row  w-[327px] rounded-[5px] ${
              props.dark ? "bg-[#171823]" : "bg-white"
            } xl:w-[540px] xl:mb-[48px] xl:h-[64px] xl:mt-[24px] pt=[8px]`}
          >
            <div className=" border border-gray-600 ml-[24px] mt-[14px] w-[20px] h-[20px] bg-transfarent rounded-[50px] flex justify-center items-center xl:mt-[17px]">
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
              }  bg-transparent outline-none w-[270px] ml-[20px] resize-none  h-[48px]   placeholder:text-[13px] rounded-[5px] xl:placeholder:text-[18px] xl:pt-[8px]`}
              placeholder="Create a new todo…"
            ></input>
          </div>
        </div>
        <div>
          <ul
            className={`  ${
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

            <div className=" rounded-[5px] w-[327px] h-[50px] flex justify-between p-[20px] items-center xl:hidden">
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
            className={`rounded-[5px]  h-[48px]  flex justify-around items-center mt-[20px]  pl-[24px] pr-[80px] ${
              props.dark ? "bg-[#25273D]" : "bg-white"
            } xl:pl-[24px] xl:pr-[24px] xl:h-[50px] xl:mt-[0] `}
          >
            <span className="  hidden text-[14px] text-[#5B5E7E] xl:flex ">
              {items} items left
            </span>
            <span
              className={`text-[14px] ml-[30px] font-sans cursor-pointer ${
                category === "all" ? "text-[#3A7CFD]" : "text-[#5B5E7E]"
              } xl:ml-[66px]`}
              onClick={handleFilter}
            >
              All
            </span>
            <span
              className={`text-[14px] font-sans cursor-pointer  ${
                category === "active" ? "text-[#3A7CFD]" : "text-[#5B5E7E]"
              }`}
              onClick={handlingActive}
            >
              Active
            </span>
            <span
              className={`text-[14px] font-sans cursor-pointer ${
                category === "completed" ? "text-[#3A7CFD]" : "text-[#5B5E7E]"
              } xl:mr-[56px] `}
              onClick={handleComplete}
            >
              Completed
            </span>
            <span
              className=" hidden cursor-pointer text-[14px] text-[#5B5E7E] xl:flex"
              onClick={handleClear}
            >
              Clear Completed
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
