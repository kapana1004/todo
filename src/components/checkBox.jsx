import React, { useEffect } from "react";
import path from "../images/path.png";
import cross from "../images/icon-cross.svg";

const CheckBox = ({
  todoItem,
  todoList,
  setTodoList,
  filteredList,
  setFilteredList,
  setItems,
  dark,
  setDark,
}) => {
  // const [completed, setCompleted] = useState(false)

  const handlingClick = (id) => {
    // setCompleted(!completed)

    const newList = [...todoList];

    const changedArray = newList.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    setTodoList(changedArray);
  };

  useEffect(() => {
    const actItemsLength = [...filteredList].filter(
      (todo) => !todo.status
    ).length;
    setItems(actItemsLength);
    console.log(filteredList);
  }, [filteredList, setItems]);

  const handleDelete = (todoItemId) => {
    const restoredList = filteredList.filter((todoItem) => {
      return todoItemId !== todoItem.id;
      // setFilteredList(restoredList);
      // setTodoList(restoredList);
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
      } relative  pl-[24px] border-b-[0.5px] h-[52px] text-xs pt-[20px] w-[100%] flex flex-row rounded-[5px]  xl:h-[64px] `}
    >
      <div
        className={` border border-gray-600 cursor-pointer mr-[12px] w-[20px] h-[20px] ${
          todoItem.status
            ? "bg-gradient-to-br from-blue-500 to-pink-500"
            : "bg-transfarent"
        }  rounded-[50px] flex justify-center items-center`}
        onClick={() => handlingClick(todoItem.id)}
      >
        {todoItem.status && <img src={path} alt="path" />}
      </div>
      <span
        className={` pt-[3px] ${
          dark ? "text-[#C8CBE7]" : "text-slate-700"
        } xl:text-[18px]`}
      >
        {" "}
        {todoItem.name}{" "}
      </span>

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
