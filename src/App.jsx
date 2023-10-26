import "./App.css";
import React from "react";
import ContactTable from "./components/contact-table/contact-table";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div>
        <ContactTable />
      </div>
    </div>
  );
}

export default App;
