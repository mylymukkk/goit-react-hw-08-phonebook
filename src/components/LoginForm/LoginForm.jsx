import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from 'common/form.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.inputLabel} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className={css.input}
        type="email"
        name="email"
        required
      />
      <label className={css.inputLabel} htmlFor="password">
        Password
      </label>

      <input
        id="password"
        className={css.input}
        type="password"
        name="password"
        required
      />

      <button className={css.formBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
