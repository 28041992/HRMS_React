import React, { useEffect } from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const JWTLogin = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const response = await fetch('https://localhost:7011/api/Auth/Login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              fid_Email: values.email,
              fld_Password: values.password
            })
          });
debugger
          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.message || 'Login failed');
          }

          sessionStorage.setItem('Token', result.data.token);
          sessionStorage.setItem('fld_UserId', result.data.fld_UserId);
          sessionStorage.setItem('fld_Username', result.data.fld_Username);
          sessionStorage.setItem('fid_Email', result.data.fid_Email);
          sessionStorage.setItem('fId_UserType', result.data.fId_UserType);
          sessionStorage.setItem('fldEmpCode', result.data.fldEmpCode);

          navigate('/dashboard');
        } catch (err) {
          console.error(err);
          setErrors({ submit: err.message });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
        // Show Swal alert on login error
        useEffect(() => {
          if (errors?.submit) {
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: errors.submit,
            });
          }
        }, [errors?.submit]);

        return (
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                label="Email Address"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email} placeholder='Email Address'
              />
              {touched.email && errors.email && (
                <small className="text-danger form-text">{errors.email}</small>
              )}
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password" placeholder='Password'
                value={values.password}
              />
              {touched.password && errors.password && (
                <small className="text-danger form-text">{errors.password}</small>
              )}
            </div>

            <div className="custom-control custom-checkbox text-start mb-4 mt-2">
              <input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">
                Save credentials.
              </label>
            </div>
            {/* 
            {errors.submit && (
              <Col sm={12}>
                <Alert>{errors.submit}</Alert>
              </Col>
            )} */}
            <Row>
              <Col mt={2}>
                <Button
                  className="btn-block mb-4"
                  color="primary"
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="primary"
                >
                  Login
                </Button>
              </Col>
            </Row>
          </form>
        );
      }}
    </Formik>
  );
};

export default JWTLogin;
