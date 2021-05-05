import React from 'react'
import { Istate as Iprops} from '../App'


const List: React.FC<Iprops> = ({people}) => {
   
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                  <div className="List-header">
                      
                      <h3>{person.name}</h3>
                  </div>
                      <p>{person.age} Years old</p>
                      <p>{person.profile}</p>
                </li>
            )
        })
    }

    return (
       <div>
         {renderList()}
       </div> 
    )
}

export default List;



