import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from 'common/navLink.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const activeStyle = {
    color: '#1976d2',
  };

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
