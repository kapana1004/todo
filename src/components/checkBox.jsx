import React, { useState, useEffect } from "react";
import path from "../images/path.png";
import cross from "../images/icon-cross.svg";

const CheckBox = ({
  todoItem,
  todoList,
  setTodoList,
  filteredList,
  setFilteredList,
  setItems,
}) => {
  // const [completed, setCompleted] = useState(false)

  const handlingClick = (id) => {
    // setCompleted(!completed)

    const newList = [...filteredList];
    console.log(newList);
    const changedArray = newList.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    setFilteredList(changedArray);
  };

  useEffect(() => {
    const actItemsLength = [...filteredList].filter(
      (todo) => !todo.status
    ).length;
    setItems(actItemsLength);
    console.log(filteredList);
  }, [filteredList]);

  const handleDelete = (todoItemId) => {
    const restoredList = filteredList.filter((todoItem) => {
      return todoItemId !== todoItem.id;
      setFilteredList(restoredList);
      setTodoList(restoredList);
    });

    const newList = filteredList.filter((todoItem) => {
      return todoItemId !== todoItem.id;
    });

    setTodoList(newList);
    setFilteredList(restoredList);
  };

  return (
    <li
      className={` ${
        todoItem.status && "line-through"
      } relative  pl-[24px] border-y-[1px] h-[52px] text-xs pt-[12px] text-slate-700 w-[100%] flex flex-row rounded-[5px]`}
    >
      <div
        className={` border border-gray-600 cursor-pointer mr-[12px] w-[20px] h-[20px] ${
          todoItem.status
            ? "bg-gradient-to-br from-blue-500 to-pink-500"
            : "bg-white"
        }  rounded-[50px] flex justify-center items-center`}
        onClick={() => handlingClick(todoItem.id)}
      >
        <img src={path} alt="path" />
      </div>
      {todoItem.name}

      <img
        className=" cursor-pointer w-[12px] h-[12px] absolute top-[28%] right-[5%]"
        src={cross}
        alt="cross"
        onClick={() => handleDelete(todoItem.id)}
      />
    </li>
  );
};

export default CheckBox;

//don`t work checkbox on new addded task
