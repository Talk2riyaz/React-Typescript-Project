import React, { useState } from "react";
import "./App.css";
import List from './components/List'
import AddToList from './components/AddToList'


 
export interface Istate {
  people: {
    name: string,
    age: number,
    profile: string
  }[]
}

const App = () => {

  const [people, setPeople] = useState<Istate["people"] >([
    {
      name: "Riyaz Qureshi",
      age: 21,
      profile: "JavaScript developer"
    }
  ]);

  return (
  <div className="side">
    People invited to my Party
    <br/> <br/>
    <List people={people}/>
    <br/>
    <AddToList people={people} setPeople={setPeople}  />
  </div>
  );
};

export default App;






