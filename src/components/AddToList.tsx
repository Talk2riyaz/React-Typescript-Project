import { profile } from "node:console";
import React,{ useState } from "react";
import {Istate as Props} from '../App'


interface IProps {
  people: Props["people"]
  setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
} 



const AddToList: React.FC<IProps> = ({people , setPeople}) => {
  
    const [input, setInput] = useState({
        name: "",
        age: "",
        profile: ""
    })

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>):void => {
       setInput({
           ...input,
           [e.target.name]: e.target.value
       })
  }

  const handleClick = (): void => {
      if(
        !input.name ||
        !input.age ||
        !input.profile 
      ) {
        return
      }
      setPeople ([
        ...people,
        {
          name: input.name,
          age: parseInt(input.age),
          profile: input.profile
        }
      ]) 
  }
  

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />


      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />

      <input
        type="text"
        placeholder="Profile"
        className="AddToList-input"
        value={input.profile}
        onChange={handleChange}
        name="profile"
      />

      <button className="AddToList-btn" onClick={handleClick}>
         Add Your frinds
      </button>
    </div>
  );
};

export default AddToList;
