import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';
import css from 'common/formPages.module.css';

const Register = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.mainTitle}>Registration</h1>
      <RegisterForm />
      <p className={css.text}>
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </div>
  );
};

export default Register;
