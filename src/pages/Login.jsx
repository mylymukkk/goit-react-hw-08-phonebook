import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';
import css from 'common/formPages.module.css';

const Login = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.mainTitle}>Log In</h1>
      <LoginForm />
      <p className={css.text}>
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
