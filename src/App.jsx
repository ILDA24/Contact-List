import "./App.css";
import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContactId from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  //ContactList setSelectedContactId={setSelectedContactId}
  return (
    <>
      {selectedContactId ? (
        <div>SelectedContact</div>
      ) : (
          <ContactList
            setSelectedContactId = {setSelectedContactId}
          />
          )}
    </>
  );
}

("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}")


