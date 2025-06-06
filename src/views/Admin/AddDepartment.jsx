// import React, { useState } from 'react';
// import { Row, Col, Card, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const FormsElements = () => {
//   const [deptName, setDeptName] = useState('');
//   const [isChecked, setIsChecked] = useState(true);

//   const validateForm = () => {
//     if (!deptName.trim()) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Validation Error',
//         text: 'Department name is required',
//         confirmButtonColor: '#d33'
//       });
//       return false;
//     }
//     return true;
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   try {
//     const token = sessionStorage.getItem('Token');
//     const userId = sessionStorage.getItem('fld_UserId');
//     const username = sessionStorage.getItem('fld_Username');

//     const response = await fetch('https://localhost:7011/api/Department/AddDepartment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//         'fld_UserId': userId,
//         'fld_Username': username
//       },
//       body: JSON.stringify({
//         fldDepartmentName: deptName.trim(),
//         fldActive: isChecked
//       })
//     });
//     const result = await response.json(); 
//     if (response.ok) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: result.message || 'Department added successfully.'
//       }).then(() => {
//         window.location.href = '/admin/Department';
//       });

//       setFormData({ fldDepartmentName: '', fldActive: false });
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         html: result.errors?.join('<br>') || result.message || 'An error occurred.'
//       });
//     }
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Network Error',
//       text: 'Failed to add department. Please try again.'
//     });
//   }
// };
//   const handleClear = () => {
//     setDeptName('');
//     setIsChecked(true);
//   };

//   return (
//     <React.Fragment>
//       <Row>
//         <Col sm={12}>
//           <Card>
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <Card.Title as="h5" className="mb-0">Add Department</Card.Title>
//               <Link to="/admin/Department" className="btn btn-info">Back</Link>
//             </Card.Header>
//             <Card.Body>
//               <Form onSubmit={handleSubmit}>
//                 <Row>
//                   <Col md={4}>
//                     <Form.Group className="mb-3" controlId="deptName">
//                       <Form.Label>Department Name</Form.Label>
//                       <Form.Control
//                         type="text" placeholder="Enter department name" value={deptName} onChange={(e) => setDeptName(e.target.value)}
//                         className="custom-textbox"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={4} className="d-flex align-items-end">
//                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                       <Form.Check
//                         type="checkbox" label="Active"  className="custom-checkbox" checked={isChecked}
//                         onChange={(e) => setIsChecked(e.target.checked)}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Card.Footer className="d-flex gap-2">
//                   <Button type="submit" variant="primary">Save Department</Button>
//                   <Button variant="danger" type="button" onClick={handleClear}>Clear</Button>
//                 </Card.Footer>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default FormsElements;

import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormsElements = () => {
  const [deptName, setDeptName] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const validateForm = () => {
    if (!deptName.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Department name is required',
        confirmButtonColor: '#d33'
      });
      return false;
    }
    return true;
  };

  // const handleSubmit = async (e) => {
    
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   try {
  //     const token = sessionStorage.getItem('Token');
  //     const userId = sessionStorage.getItem('fld_UserId');
  //     const username = sessionStorage.getItem('fld_Username');

  //     const response = await fetch('https://localhost:7011/api/Department/AddDepartment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //         'fld_UserId': userId,
  //         'fld_Username': username
  //       },
  //       body: JSON.stringify({
  //         fldDepartmentName: deptName.trim(),
  //         fldActive: isChecked
  //       })
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Success',
  //         text: result.message || 'Department added successfully.'
  //       });

  //       // Delay redirect so alert can be seen
  //       setTimeout(() => {
  //         window.location.href = '/admin/Department';
  //       }, 1500);

  //       // Reset form
  //       setDeptName('');
  //       setIsChecked(true);
  //     } else {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error',
  //         html: result.errors?.join('<br>') || result.message || 'An error occurred.'
  //       });
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Network Error',
  //       text: 'Failed to add department. Please try again.'
  //     });
  //   }
  // };
   
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const token = sessionStorage.getItem('Token');
  const userId = sessionStorage.getItem('fld_UserId');
  const username = sessionStorage.getItem('fld_Username');

  if (!token) {
    Swal.fire({
      icon: 'error',
      title: 'Authentication Error',
      text: 'Missing token. Please login again.'
    });
    return;
  }

  try {
    const response = await fetch('https://localhost:7011/api/Department/AddDepartment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'fld_UserId': userId,
        'fld_Username': username
      },
      body: JSON.stringify({
        fldDepartmentName: deptName.trim(),
        fldActive: isChecked
      })
    });

    if (response.status === 401) {
      sessionStorage.clear(); 
      Swal.fire({
        icon: 'error',
        title: 'Session Expired',
        text: 'Your session has expired. Please login again.'
      }).then(() => {
        window.location.href = '/login';
      });
      return;
    }

    const result = await response.json();
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: result.message || 'Department added successfully.'
      });
      setTimeout(() => {
        window.location.href = '/admin/Department';
      }, 1500);

      setDeptName('');
      setIsChecked(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        html: result.errors?.join('<br>') || result.message || 'An error occurred.'
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: 'Failed to add department. Please try again.'
    });
  }
};

  const handleClear = () => {
    setDeptName('');
    setIsChecked(true);
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h5" className="mb-0">Add Department</Card.Title>
              <Link to="/admin/Department" className="btn btn-info">Back</Link>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="deptName">
                      <Form.Label>Department Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter department name"
                        value={deptName}
                        onChange={(e) => setDeptName(e.target.value)}
                        className="custom-textbox"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="d-flex align-items-end">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Active"
                        className="custom-checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Card.Footer className="d-flex gap-2">
                  <Button type="submit" variant="primary">Save Department</Button>
                  <Button variant="danger" type="button" onClick={handleClear}>Clear</Button>
                </Card.Footer>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormsElements;
