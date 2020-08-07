import React from 'react';
import { Link } from 'react-router-dom';

import backSource from '../../assets/images/icons/back.svg';
import logoSource from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={backSource} alt='Voltar' />
        </Link>
        <img src={logoSource} alt='Proffy' />
      </div>
      <div className='header-content'>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
