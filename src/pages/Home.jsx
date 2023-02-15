import css from 'pages/Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to <span className={css.accent}>Phonebook</span>!
      </h1>
      <p className={css.text}>
        Press <span className={css.accent}>Contacts</span> to get start!
      </p>
      <p className={css.secondaryText}>
        Don't see CONTACTS? Hurry up to{' '}
        <span className={css.accent}>register</span>!
      </p>
    </div>
  );
};

export default Home;
