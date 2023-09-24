import css from './Form.module.css';

export const Form = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
        Number
        <input
          type="tel"
          name="number"
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
};
