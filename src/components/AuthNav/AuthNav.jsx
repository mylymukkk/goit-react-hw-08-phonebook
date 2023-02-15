import { NavLink } from 'react-router-dom';
import css from 'common/navLink.module.css';

export const AuthNav = () => {
  const activeStyle = {
    color: '#1976d2',
  };

  return (
    <nav className={css.nav}>
      <NavLink
        to="/register"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Log In
      </NavLink>
    </nav>
  );
};
