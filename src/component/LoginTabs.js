import React, { useState } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Student from './Login';
import College from './Loginclg';
import './RegistrationTabs.css'; // Import your custom CSS file

function LoginTabs() {
  const [activeTab, setActiveTab] = useState('student');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='space' >
      <div className="container space registration-tabs-container">
        <Nav
          variant="pills"
          activeKey={activeTab}
          onSelect={handleTabChange}
          className="center"
        >
          <NavItem>
            <Nav.Link eventKey="student" className={activeTab === 'student' ? 'active-link' : ''}>Student Login</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="college" className={activeTab === 'college' ? 'active-link' : ''}>College Login</Nav.Link>
          </NavItem>
        </Nav>

        {activeTab === 'student' && (
          <Student />
        )}

        {activeTab === 'college' && (
          <College/>
        )}
      </div>
    </div>
  );
}

export default LoginTabs;
