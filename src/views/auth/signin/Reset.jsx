import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import AuthReset from './ResetPassword';

const Reset = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              {/* <div className="mb-4">
                <i className="feather icon-mail auth-icon" />
              </div> */}
              <div className="mb-4">
               <img src="/src\assets\images\user\logo-krayons.svg" alt="Logo" style={{ width: '150px', height: 'auto' }} />
              </div>
              <h3 class="mb-4">Reset Password</h3>
              <AuthReset />
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reset;
