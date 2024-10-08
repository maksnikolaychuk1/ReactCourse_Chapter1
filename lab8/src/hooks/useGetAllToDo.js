import {useState } from "react";



const useGetAllToDo = () => {

  
  const [data, setData] = useState([]);
  



  return {
    data,
    setData,
  };
};

export default useGetAllToDo;
