import contactsData from "../../../src/contacts.json"
import { useState } from 'react';
import ContactItem from "../contact-item/Contactitem";
import ContactVariables from "../contact-variables/contact-variables";


export default function ContactTable() {

    const [contacts, setContacts] = useState(contactsData)
    const firstFiveContacts = contacts.slice(0, 5);

    const handleOnDeleteContact = (id) =>{
        setContacts(contacts.filter(contact => contact.id !== id))
    }

    const handleSortByPopularity = () =>{
        const sortedContactsPopularity = [...contacts].sort((t1,t2) => (t1.popularity - t2.popularity))
        setContacts(sortedContactsPopularity); 
    }

    const handleCreateRandomContact= () =>{

        const randomIndex = Math.floor(Math.random() * contactsData.length)
        const randomContact = contactsData[randomIndex]

        setContacts([...contacts, randomContact ])
   }

   const handleSortByName = () => {
    const sortedContacts = [...contacts].sort((t1, t2) => t1.name.localeCompare(t2.name));
    setContacts(sortedContacts);
  };


    return (
        <>
        <h1>Iron Contacts</h1>
        <div>
         <ContactVariables contacts={contacts} onRandomContact={handleCreateRandomContact} onSortByName={handleSortByName}  onSortByPopularity={handleSortByPopularity}/>
        </div>

        <table >
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>won a Oscar</th>
          <th>won a Emmy</th>
          <th>DELETE</th>
        </tr>
        <tbody>
        {firstFiveContacts.map(contact => 
          <ContactItem  key={contact.id} contact={contact} onDeleteContact={handleOnDeleteContact}/>
        )}        
        </tbody>  
    </table>



        </>
    )
}