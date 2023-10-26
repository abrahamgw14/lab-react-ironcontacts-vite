import React from "react"

function ContactItem ({ contact, onDeleteContact }) {
    return (
    
        <tr>
    
            <td><img src={contact.pictureUrl} alt="Contact Picture" /></td>
        
            <td> {contact.name}</td>
        
            <td> {contact.popularity}</td>
        
            <td>{contact.wonOscar ? '🏆' : ' '}</td>
        
            <td> {contact.wonEmmy ? '🏆' : ''}</td>
        
            <td><button  onClick={() => onDeleteContact(contact.id)}>delete</button></td>
    
        </tr>
    
      )
    }
    
export default ContactItem