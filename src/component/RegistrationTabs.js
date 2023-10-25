import React, { useState } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import StudentRegistration from './Register';
import CollegeRegistration from './RegisterClg';
import './RegistrationTabs.css'; // Import your custom CSS file

function RegistrationTabs() {
  const [activeTab, setActiveTab] = useState('student');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='space'>
      <div className="container space registration-tabs-container">
        <Nav
          variant="pills"
          activeKey={activeTab}
          onSelect={handleTabChange}
          className="center"
        >
          <NavItem>
            <Nav.Link eventKey="student" className={activeTab === 'student' ? 'active-link' : ''}>Student Registration</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="college" className={activeTab === 'college' ? 'active-link' : ''}>College Registration</Nav.Link>
          </NavItem>
        </Nav>

        {activeTab === 'student' && (
          <StudentRegistration />
        )}

        {activeTab === 'college' && (
          <CollegeRegistration />
        )}
      </div>
    </div>
  );
}

export default RegistrationTabs;
