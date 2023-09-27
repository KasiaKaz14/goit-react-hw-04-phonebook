import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <div>
      {contacts.length && (
        <ul className={css.list}>
          {contacts.map(contact => (
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
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};
