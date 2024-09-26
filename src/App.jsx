import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]); // Добавляем новый контакт в список
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .split(" ")
      .some((word) => word.startsWith(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />
      <ContactForm onSubmit={addContact} /> {/* Добавление новой формы */}
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
