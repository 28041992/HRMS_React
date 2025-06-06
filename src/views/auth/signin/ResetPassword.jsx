// import React, { useEffect } from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Swal from 'sweetalert2';

// const ResetPassword = () => {
//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         submit: null
//       }}
//       validationSchema={Yup.object().shape({
//         email: Yup.string().email('Must be a valid email').required('Email is required')
//       })}
//       onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
//       try {
//         const response = await fetch('https://localhost:7011/api/Auth/ForgotPassword', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             email: values.email
//           })
//         });

//         const result = await response.text();
//         if (!response.ok) {
//           throw new Error(result.message || 'Failed to send reset link');
//         }

//         // ✅ Show the message from the API
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: result.message || 'Reset password link sent to your email.'
//         });

//         resetForm();
//       } catch (err) {
//         console.error(err);
//         setErrors({ submit: err.message });
//       } finally {
//         setSubmitting(false);
//       }
//     }}
//     >
//       {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
//         useEffect(() => {
//           if (errors?.submit) {
//             Swal.fire({
//               icon: 'error',
//               title: 'Failed',
//               text: errors.submit
//             });
//           }
//         }, [errors?.submit]);

//         return (
//           <form noValidate onSubmit={handleSubmit}>
//             <div className="form-group mb-3">
//               <input
//                 className="form-control"
//                 name="email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="Email"
//                 value={values.email}
//               />
//               {touched.email && errors.email && (
//                 <small className="text-danger form-text">{errors.email}</small>
//               )}
//             </div>
//             <Row>
//               <Col>
//                 <Button
//                   className="btn-block mb-4"
//                   disabled={isSubmitting}
//                   type="submit"
//                   variant="primary"
//                 >
//                   Reset Password
//                 </Button>
//               </Col>
//             </Row>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default ResetPassword;

import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Swal from 'sweetalert2';

const ResetPassword = () => {
  return (
    <Formik
      initialValues={{ email: '', submit: null }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').required('Email is required')
      })}
      // onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
      //   try {
      //       debugger
      //     const response = await fetch('API.ForgotPassword_API', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ email: values.email })
      //     });

      //     const result = await response.text();

      //     if (!response.ok) {
      //       throw new Error(result?.errors?.[0] || result?.message || 'Failed to send reset link');
      //     }

      //     Swal.fire({
      //       icon: 'success',
      //       title: 'Success',
      //       text: result.message || 'Reset password link sent to your email.'
      //     });
      //     resetForm();
      //   } catch (err) {
      //     console.error(err);
      //     setErrors({ submit: err.message });
      //   } finally {
      //     setSubmitting(false);
      //   }
      // }}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
        try {
          const token = sessionStorage.getItem('Token'); 

          const response = await fetch(API.ForgotPassword_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ email: values.email })
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result?.errors?.[0] || result?.message || 'Failed to send reset link');
          }

          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: result.message || 'Reset password link sent to your email.'
          });

          resetForm();
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
              title: 'Failed',
              text: errors.submit
            });
          }
        }, [errors?.submit]);

        return (
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                value={values.email}
              />
              {touched.email && errors.email && (
                <small className="text-danger form-text">{errors.email}</small>
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
                  Reset Password
                </Button>
              </Col>
            </Row>
          </form>
        );
      }}
    </Formik>
  );
};

export default ResetPassword;
