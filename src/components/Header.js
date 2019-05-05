import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Todos Redux</h1>
    <NavLink className="button--link" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink className="button--link" to="/create" activeClassName="is-active">Create Todo</NavLink>
    <NavLink className="button--link" to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
