import React from 'react'



function ContactVariables({contacts, onRandomContact, onSortByName, onSortByPopularity}) {


    const handleOnSort = ({ contacts }) => onSortByName();

  return (
    <div>
        <button onClick={() =>onRandomContact(contacts)}> Random Contact</button>
         <button onClick={handleOnSort}>Short by name</button>
         <button onClick={() => onSortByPopularity(contacts)}>Short by Popularity</button>
    </div>
  )
}

ContactVariables.defaultProps = {
    onRandomContact: () => {},
    onSortByName: () => {},
    onSortByPopularity: () => {},
  }

export default ContactVariables