// import React, { useEffect, useState } from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import axios from 'axios';
// import DataTable from 'datatables.net-react';
// import DT from 'datatables.net-dt';
// import 'datatables.net-select-dt';
// import 'datatables.net-responsive-dt';
// import "datatables.net-dt/css/dataTables.dataTables.min.css";
// import { Link } from 'react-router-dom';
// // Attach the DataTables plugin
// DataTable.use(DT);

// const EmployeeListElements = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('https://localhost:7011/api/Employee/GetAllEmployees');
//         debugger
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employee data:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const columns = [
//     { title: 'Sr No', data: null, render: (data, type, row, meta) => meta.row + 1 },
//     { title: 'Emp Code', data: 'fldEmpCode' },
//     { title: 'Employee Name', data: null, render: row => `${row.fldEmpFName}` },
//     { title: 'Department', data: null, render: row => `${row.str_Designationname}` },
//     { title: 'Designation', data: null, render: row => `${row.str_departmentname}`  },
//     { title: 'Mobile No', data: null, render: row => `${row.fldMobileNo}` },
//     { title: 'Blood Group', data: null, render: row => `${row.str_BloodGroup}`},
//     { title: 'Address', data: 'fldAdd1' },
//     { title: 'D.O.B', data: 'fldDOB' },
//     { title: 'D.O.J', data: 'fldDOJ' },
//     { title: 'Email ID', data: 'fldEmailId' },
//     { title: 'Pan No', data: 'fldPanNo' },
//     { title: 'Status', data: 'status' },
//     { title: 'Adhar No', data: 'fldAdharno' },
//     { title: 'UAN No', data: 'fldUANNo' },
//     {
//       title: 'View',
//       data: null,
//       render: () => '<button class="btn btn-info btn-sm">View</button>',
//       orderable: false,
//     },
//     // {
//     //   title: 'Edit',
//     //   data: null,
//     //   render: () => '<button class="btn btn-warning btn-sm">Edit</button>',
//     //   orderable: false,
//     // },
//     {
//       title: 'Edit',
//       data: null,
//       render: (data, type, row) => `<a href="/admin/Employee/EditEmployeeEdit/${row.fldEmpId}" class="btn btn-warning btn-sm">Edit</a>`,
//       orderable: false,
//     },

//     {
//       title: 'Delete',
//       data: null,
//       render: () => '<button class="btn btn-danger btn-sm">Delete</button>',
//       orderable: false,
//     },
//   ];
//   return (
//   <Row className="g-3">
//     <Col xs={12}>
//       <Card className="shadow-sm">
//       <Card.Header className="d-flex justify-content-between align-items-center">
//         <Card.Title as="h5" className="mb-0">Employee List</Card.Title>
//         <Link to="/admin/Employees" className="btn btn-info">Add Employee</Link>
//       </Card.Header>

//         <Card.Body className="table-responsive">
//           <DataTable
//             data={employees}
//             columns={columns}
//             className="table table-striped table-bordered nowrap w-100"
//             responsive
//             pagination
//             highlightOnHover
//             pointerOnHover
//           />
//         </Card.Body>
//       </Card>
//     </Col>
//   </Row>
// );
// };

// export default EmployeeListElements;

import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import $ from 'jquery';
import * as API from '../Common/APIUrl';

DataTable.use(DT);

const EmployeeListElements = () => {
const [employees, setEmployees] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedEmployee, setSelectedEmployee] = useState(null);
const [departments, setDepartments] = useState([]);
const [designations, setDesignations] = useState([]);
const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
const [selectedDesignationId, setSelectedDesignationId] = useState('');
const [loadingDept, setLoadingDept] = useState(true);
const [loadingDesig, setLoadingDesig] = useState(false);
const [errorDept, setErrorDept] = useState(null);
const [errorDesig, setErrorDesig] = useState(null);


  const [formData, setFormData] = useState({
    fldEmpFName: '',
    fldEmpMName: '',
    fldEmpLName: '',
    fldAdd1: '',
    fldAdd2: '',
    fldAdd3: '',
    fldDOJ: '',
    fldEmailId: '',
    fldMobileNo: '',
    fldAltermobileNo: '',
    fldAdharno: '',
    fldUANNo: '',
    fldBloodGroup: '',
    fldDOB: '',
    fldPanNo: '',
    fldActive: true,
    fldCompCode: 1
  });
  

useEffect(() => {
    const fetchDepartments = async () => {
      try {
       const response = await fetch(`${API.GetDepartmentList_API}`);
        if (!response.ok) throw new Error('Failed to load departments');
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        setErrorDept(error.message);
      } finally {
        setLoadingDept(false);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (!selectedDepartmentId) return;

    const fetchDesignations = async () => {
      setLoadingDesig(true);
      try {
        const response = await fetch(API.GetDesignationsByDepartmentId_API(selectedDepartmentId));
        if (!response.ok) throw new Error('Failed to load designations');
        const data = await response.json();
        setDesignations(data);
      } catch (error) {
        setErrorDesig(error.message);
      } finally {
        setLoadingDesig(false);
      }
    };
    fetchDesignations();
  }, [selectedDepartmentId]);

  useEffect(() => {
    axios.get('https://localhost:7011/api/Employee/GetAllEmployees')
      .then(res => {
        setEmployees(res.data);
      })
      .catch(err => {
        console.error('Error loading employees:', err);
      });
  }, []);

  useEffect(() => {

  $('#TblEmployee tbody').on('click', '.delete-btn', function () {
    const row = $('#TblEmployees').DataTable().row($(this).closest('tr')).data();
    const empId = row.fldEmpId; 
    setSelectedEmployee(row);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`API.DeleteEmployee_API(empId)`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire('Deleted!', 'Record has been deleted.', 'success');
              table.row($(this).parents('tr')).remove().draw(); 
            } else {
              Swal.fire('Error!', 'Failed to delete record.', 'error');
            }
          })
          .catch(() => Swal.fire('Error!', 'Server error.', 'error'));
      }
    });
  });
  return () => {
    $('#TblEmployee tbody').off('click', '.delete-btn');
  };
}, []);
  
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setSelectedDepartmentId(employee.fldDepartment);
    setSelectedDesignationId(employee.fldDesignation); 
    setFormData({
    fldEmpId: employee.fldEmpId || '',
    fldEmpCode: employee.fldEmpCode || '',
    fldEmpFName: employee.fldEmpFName || '',
    fldEmpMName: employee.fldEmpMName || '',
    fldEmpLName: employee.fldEmpLName || '',
    fldAdd1: employee.fldAdd1 || '',
    fldAdd2: employee.fldAdd2 || '',
    fldAdd3: employee.fldAdd3 || '',
    fldDOJ: employee.fldDOJ || '',
    fldDepartment: employee.fldDepartment || '',
    fldDesignation: employee.fldDesignation || '',
    fldEmailId: employee.fldEmailId || '',
    fldMobileNo: employee.fldMobileNo || '',
    fldAltermobileNo: employee.fldAltermobileNo || '',
    fldAdharno: employee.fldAdharno || '',
    fldUANNo: employee.fldUANNo || '',
    fldBloodGroup: employee.fldBloodGroup || '',
    fldDOB: employee.fldDOB || '',
    fldPanNo: employee.fldPanNo || '',
    fldActive: employee.fldActive || '',
  });
    setShowModal(true);
  };

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};


  const columns = [
    { title: 'Sr No', data: null, render: (data, type, row, meta) => meta.row + 1 },
    { title: 'Emp Code', data: 'fldEmpCode' },
    { title: 'Employee Name', data: null, render: row => `${row.fldEmpFName}` },
    { title: 'Department', data: null, render: row => `${row.str_Designationname}` },
    { title: 'Designation', data: null, render: row => `${row.str_departmentname}`  },
    { title: 'Mobile No', data: null, render: row => `${row.fldMobileNo}` },
    { title: 'Blood Group', data: null, render: row => `${row.str_BloodGroup}`},
    { title: 'Address', data: 'fldAdd1' },
    { title: 'D.O.B', data: 'fldDOB' },
    { title: 'D.O.J', data: 'fldDOJ' },
    { title: 'Email ID', data: 'fldEmailId' },
    { title: 'Pan No', data: 'fldPanNo' },
    { title: 'Status', data: 'status' },
    { title: 'Adhar No', data: 'fldAdharno' },
    { title: 'UAN No', data: 'fldUANNo' },
    { title: 'DepartmentId', data: 'fldDepartment',visible: false },
    { title: 'DesignationID', data: 'fldDesignation',visible: false },
    { title: 'Bloodgroup', data: 'fldBloodGroup',visible: false },
    {
      title: 'Edit',
      data: null,
      render: (data, type, row) => 
        `<button class="btn btn-warning btn-sm edit-btn" data-id="${row.fldEmpId}">Edit</button>`,
      orderable: false,
    },
    {
      title: 'Delete',
      data: 'empid',
      render: (data) => `<button class="btn btn-danger btn-sm delete-btn" data-id="${data}">Delete</button>`,
      orderable: false,
    },
  ];

  useEffect(() => {
    const table = document.querySelector('.dataTable');

    const handleTableClick = (event) => {
      if (event.target.classList.contains('edit-btn')) {
        const empId = event.target.getAttribute('data-id');
        const employee = employees.find(emp => emp.fldEmpId.toString() === empId);
        if (employee) {
          handleEditClick(employee);
        }
      }
    };
    if (table) {
      table.addEventListener('click', handleTableClick);
    }
    return () => {
      if (table) {
        table.removeEventListener('click', handleTableClick);
      }
    };
  }, [employees]);



    const handleSubmit = async (e) => {
    e.preventDefault();
  
    const {
      fldEmpFName, fldEmpMName, fldEmpLName,
      fldMobileNo, fldAdd1, fldPanNo, fldEmailId,
      fldDOB, fldDOJ, fldAltermobileNo
    } = formData;
  
    const errors = [];
  
    // Required Fields
    if (!fldEmpFName) errors.push("First Name is required.");
    if (!fldEmpMName) errors.push("Middle Name is required.");
    if (!fldEmpLName) errors.push("Last Name is required.");
    if (!fldMobileNo) errors.push("Mobile number is required.");
    if (!fldAdd1) errors.push("Address 1 is required.");
    if (!fldPanNo) errors.push("PAN No is required.");
    if (!fldEmailId) errors.push("Email ID is required.");
    if (!fldDOB) errors.push("Date of Birth is required.");
    if (!fldDOJ) errors.push("Date of Joining is required.");
    if (!selectedDepartmentId) errors.push("Department is required.");
    if (!selectedDesignationId) errors.push("Designation is required.");
  
    // Length & Format Validations
    if (fldEmpFName && fldEmpFName.length > 50) errors.push("First Name cannot be longer than 50 characters.");
    if (fldEmpMName && fldEmpMName.length > 50) errors.push("Middle Name cannot be longer than 50 characters.");
    if (fldEmpLName && fldEmpLName.length > 50) errors.push("Last Name cannot be longer than 50 characters.");
    if (fldAdd1 && fldAdd1.length > 100) errors.push("Address 1 cannot be longer than 30 characters.");
    if (fldPanNo && fldPanNo.length > 10) errors.push("PAN No cannot be longer than 10 characters.");
    if (fldEmailId && fldEmailId.length > 50) errors.push("Email ID cannot be longer than 50 characters.");
  
    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fldEmailId && !emailRegex.test(fldEmailId)) {
      errors.push("Invalid Email Address.");
    }
  
    // Mobile No validations
    if (fldMobileNo && !/^[6-9]\d{9}$/.test(fldMobileNo)) {
      errors.push("Mobile number must start with 6-9 and be 10 digits.");
    }
  
    if (fldAltermobileNo && !/^[5-9]\d{9}$/.test(fldAltermobileNo)) {
      errors.push("Alternate mobile number must start with 5-9 and be 10 digits.");
    }
  
    if (errors.length > 0) {
      Swal.fire({ icon: 'error', title: 'Validation Errors', html: `<ul style="text-align:left">${errors.map(e => `<li>${e}</li>`).join('')}</ul>` });
      return;
    }
  
    // Prepare payload
    const payload = {
      ...formData,
      fldDepartment: parseInt(selectedDepartmentId),
      fldDesignation: parseInt(selectedDesignationId)
    };
  
    // try {
    //   debugger
    //   const response = await fetch('API.EditEmployee_API', {
    //     method: 'POST',
    //      headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${sessionStorage.getItem('Token')}`, 
    //     'fld_UserId': sessionStorage.getItem('fld_UserId'),      
    //     'fld_Username': sessionStorage.getItem('fld_Username')
    //   },
    //   body: JSON.stringify(payload)
    //   });
    //   const result = await response.json();
  
    //   if (response.ok) {
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Success',
    //     text: result.message || 'Employee updated successfully.',
    //   }).then(() => {
    //     window.location.href = '/admin/EmployeesList'; 
    //   });
    //   setFormData({}); 
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     html: result.errors?.join('<br>') || result.message,
    //   });
    // }
    // } catch (error) {
    //   Swal.fire({ icon: 'error', title: 'Network Error', text: 'Failed to add employee.' });
    // }
    try {
      debugger;
      const response = await fetch(API.EditEmployee_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('Token')}`,
          'fld_UserId': sessionStorage.getItem('fld_UserId'),
          'fld_Username': sessionStorage.getItem('fld_Username')
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: result.message || 'Employee updated successfully.',
        }).then(() => {
          window.location.href = '/admin/EmployeesList';
        });

        setFormData({});
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          html: result.errors?.join('<br>') || result.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Failed to update employee.',
      });
    }
    };

    
  return (
    <>
      <Row className="g-3">
        <Col xs={12}>
          <Card className="shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h5" className="mb-0">Employee List</Card.Title>
              <Link to="/admin/Employees" className="btn btn-info">Add Employee</Link>
            </Card.Header>

            <Card.Body className="table-responsive">
              <DataTable
                id='TblEmployee'
                data={employees}
                columns={columns}
                className="table table-striped table-bordered nowrap w-100"
                responsive
                pagination
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" backdrop="static">
  <Modal.Header closeButton>
    <Modal.Title> Edit Employee — {formData.fldEmpCode}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
      <Form onSubmit={handleSubmit}>
               <div className="mb-3 row">
                 {['fldEmpFName', 'fldEmpMName', 'fldEmpLName'].map((field, idx) => (
                   <div className="col-md-4" key={field}>
                     <div className="form-group">
                       <label>{['First Name', 'Middle Name', 'Last Name'][idx]}</label>
                       <input type="text" className="form-control"  name={field} value={formData[field]}  onChange={handleChange}
                         placeholder={['Enter First Name', 'Enter Middle Name', 'Enter Last Name'][idx]} />
                     </div>
                   </div>
                 ))}
               </div>
              <div className="mb-3 row">
              {['fldAdd1', 'fldAdd2', 'fldAdd3'].map((field, idx) => (
                <div className="col-md-4" key={field}>
                  <div className="form-group">
                    <label>{['Address 1', 'Address 2', 'Address 3'][idx]}</label>
                    <textarea className="form-control" name={field} rows={2} value={formData[field]} onChange={handleChange}
                      placeholder={['Enter Address 1', 'Enter Address 2', 'Enter Address 3'][idx]} ></textarea>
                  </div>
                </div>
              ))}
            </div>
                <div className="mb-3 row">
                  <div className="col-md-4">
                    <label>D.O.J</label>
                    <input type="date" className="form-control" name="fldDOJ" value={formData.fldDOJ ? formData.fldDOJ.split('T')[0] : ''} onChange={handleChange} />
                  </div>
                  <div className="col-md-4">
                    <Form.Group>
                      <Form.Label>Department</Form.Label>
                      <Form.Select value={selectedDepartmentId} onChange={(e) => setSelectedDepartmentId(e.target.value)}>
                        <option value="">--Select--</option>
                        {loadingDept ? <option disabled>Loading...</option> : errorDept ? <option disabled>{errorDept}</option> :
                          departments.map(dept => (
                            <option key={dept.fldDepartmentID} value={dept.fldDepartmentID}> {dept.fldDepartmentName}  </option>
                          ))}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group>
                      <Form.Label>Designation</Form.Label>
                      <Form.Select value={selectedDesignationId} onChange={(e) => setSelectedDesignationId(e.target.value)}>
                        <option value="">--Select--</option>
                        {loadingDesig ? <option disabled>Loading...</option> : errorDesig ? <option disabled>{errorDesig}</option> :
                          designations.map(desig => (
                            <option key={desig.fldDesignationID} value={desig.fldDesignationID}> {desig.fldDesignationName} </option>
                          ))}
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
               <div className="mb-3 row">
                {[
                  { name: 'fldEmailId', label: 'Email Id', type: 'email', placeholder: 'Enter Email' },
                  { name: 'fldMobileNo', label: 'Mobile Number', type: 'text', placeholder: 'Enter Mobile No' },
                  { name: 'fldAltermobileNo', label: 'Alternate Mobile No', type: 'text', placeholder: 'Enter Alternate Mobile No' }
                ].map((field, idx) => (
                  <div className="col-md-4" key={field.name}>
                    <div className="form-group">
                      <label>{field.label}</label>
                      <input type={field.type} className="form-control" name={field.name} value={formData[field.name]} onChange={handleChange}
                        placeholder={field.placeholder} />
                    </div>
                  </div>
                ))}
              </div>
               <div className="mb-3 row">
                  {[
                    { name: 'fldAdharno', label: 'Aadhar No', placeholder: 'Enter Aadhar No' },
                    { name: 'fldUANNo', label: 'UAN No', placeholder: 'Enter UAN No' }
                  ].map((field) => (
                    <div className="col-md-4" key={field.name}>
                      <div className="form-group">
                        <label>{field.label}</label>
                        <input  type="text" className="form-control" name={field.name} value={formData[field.name]} onChange={handleChange}
                          placeholder={field.placeholder}  />
                      </div>
                    </div>
                  ))}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Blood Group</label>
                      <select className="form-control" name="fldBloodGroup" value={formData.fldBloodGroup} onChange={handleChange}>
                        <option value="0">--Select--</option>
                        <option value="1">A-</option>
                        <option value="2">A+</option>
                        <option value="3">B-</option>
                        <option value="4">B+</option>
                        <option value="5">O-</option>
                        <option value="6">O+</option>
                        <option value="7">AB-</option>
                        <option value="8">AB+</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-4">
                    <label>DOB</label>
                    <input type="date" className="form-control" name="fldDOB" value={formData.fldDOB ? formData.fldDOB.split('T')[0] : ''}  onChange={handleChange} />
                  </div>

                  <div className="col-md-4">
                    <label>PAN No</label>
                     <input type="text" className="form-control" name="fldPanNo" value={formData.fldPanNo}  onChange={handleChange} placeholder="Enter PAN No" />
                  </div>
                  <div className="col-md-4 d-flex align-items-center">
                     <Form.Check type="checkbox" label="Is Active" name="fldActive" checked={formData.fldActive} onChange={handleChange}   />
                  </div>
                </div>
                <Modal.Footer>
                  <Button variant="btn btn-danger" type="button">Clear</Button>
                   <Button type="submit" variant="primary">Update Employee</Button>
                </Modal.Footer>
      </Form>
  </Modal.Body>
</Modal>
    </>
  );
};
export default EmployeeListElements;
