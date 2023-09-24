import { useState } from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClick }) => {
  const [search, setSearch] = useState('');
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} />
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteButton}
              onClick={() => onClick(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
