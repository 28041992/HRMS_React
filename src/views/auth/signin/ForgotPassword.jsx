import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [initialEmail, setInitialEmail] = useState('');
  const [token, setToken] = useState('');

  // Extract token and email from query params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    const tokenParam = searchParams.get('token');
    debugger
    if (emailParam && tokenParam) {
      setInitialEmail(emailParam);
      setToken(tokenParam);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid URL',
        text: 'Missing token or email in URL.',
      });
      navigate('/Login');
    }
  }, [location.search, navigate]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: initialEmail,
        NewPassword: '',
        Token: token,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        NewPassword: Yup.string().max(255).required('New Password is required')
      })}
      // onSubmit={async (values, { setSubmitting, setErrors }) => {
      //   try {
      //       debugger
      //     const response = await fetch('API.ResetPassword_API', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({
      //         Email: values.email,
      //         NewPassword: values.NewPassword,
      //         Token: values.Token
      //       })
      //     });

      //     const result = await response.json();

      //     if (!response.ok) {
      //       throw new Error(result.message || 'Password reset failed');
      //     }

      //     Swal.fire({
      //       icon: 'success',
      //       title: 'Password Changed',
      //       text: 'Your password has been reset successfully.',
      //       confirmButtonText: 'Login'
      //     }).then(() => {
      //       navigate('/Login');
      //     });
      //   } catch (err) {
      //     console.error(err);
      //     setErrors({ submit: err.message });
      //   } finally {
      //     setSubmitting(false);
      //   }
      // }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const token = sessionStorage.getItem('Token'); 
          const response = await fetch(API.ResetPassword_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              Email: values.email,
              NewPassword: values.NewPassword,
              Token: values.Token
            })
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.message || 'Password reset failed');
          }

          Swal.fire({
            icon: 'success',
            title: 'Password Changed',
            text: 'Your password has been reset successfully.',
            confirmButtonText: 'Login'
          }).then(() => {
            navigate('/Login');
          });
        } catch (err) {
          console.error(err);
          setErrors({ submit: err.message });
        } finally {
          setSubmitting(false);
        }
      }}

    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
        useEffect(() => {
          if (errors?.submit) {
            Swal.fire({
              icon: 'error',
              title: 'Reset Failed',
              text: errors.submit,
            });
          }
        }, [errors?.submit]);

        return (
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                name="email"
                type="email"
                value={values.email}
                disabled
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                name="NewPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                placeholder="New Password"
                value={values.NewPassword}
              />
              {touched.NewPassword && errors.NewPassword && (
                <small className="text-danger form-text">{errors.NewPassword}</small>
              )}
            </div>
            <Row>
              <Col>
                <Button
                  className="btn-block mb-4"
                  disabled={isSubmitting}
                  type="submit"
                  variant="primary"
                >
                  Change Password
                </Button>
              </Col>
            </Row>
          </form>
        );
      }}
    </Formik>
  );
};

export default ForgotPassword;
