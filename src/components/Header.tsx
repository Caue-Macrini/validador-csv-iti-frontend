import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header-govbr">
      <div className="header-container">
        <div className="logo-section">
          <span className="govbr-logo">GOV.BR</span>
        </div>
        <div className="title-section">
          <h1>Validador de CSV - ICP-Brasil</h1>
          <p>Autoridade Certificadora</p>
        </div>
        <div className="user-section">
          <span>Usuário</span>
        </div>
      </div>
    </header>
  );
};
