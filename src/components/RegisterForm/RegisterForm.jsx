import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from 'common/form.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.inputLabel} htmlFor="name">
        Username
      </label>
      <input
        className={css.input}
        id="name"
        type="text"
        name="name"
        required
        placeholder="Jane Contre"
      />
      <label className={css.inputLabel} htmlFor="email">
        Email
      </label>
      <input
        className={css.input}
        id="email"
        type="email"
        name="email"
        required
        placeholder="jane.contre@gmail.com"
      />
      <label className={css.inputLabel} htmlFor="password">
        Password
      </label>
      <input
        className={css.input}
        id="password"
        type="password"
        name="password"
        minLength={7}
        required
        placeholder="*******"
      />
      <button className={css.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};
