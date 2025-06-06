// import React, { useState, useEffect } from 'react';
//   import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

// const FormsElements = () => {
//   return (
//     <React.Fragment>
//       <Row>
//         <Col sm={12}>
//           <Card>
//             <Card.Header>
//               <Card.Title as="h5">Employee Details</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <Row>
//                 <Col md={6}>
//                   <Form>
//                     <Form.Group className="mb-3" controlId="formBasicFirstName">
//                       <Form.Label>First Name</Form.Label>
//                       <Form.Control type="firstName" placeholder="Enter firstName" />
//                       <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       <Form.Label>Email address</Form.Label>
//                       <Form.Control type="email" placeholder="Enter email" />
//                       <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                       <Form.Label>Password</Form.Label>
//                       <Form.Control type="password" placeholder="Password" />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicChecbox">
//                       <Form.Check type="checkbox" label="Check me out" />
//                     </Form.Group>
//                     <Button variant="primary">Submit</Button>
//                   </Form>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                     <Form.Label>Text</Form.Label>
//                     <Form.Control type="email" placeholder="Text" />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
//                     <Form.Label>Example select</Form.Label>
//                     <Form.Control as="select">
//                       <option>1</option>
//                       <option>2</option>
//                       <option>3</option>
//                       <option>4</option>
//                       <option>5</option>
//                     </Form.Control>
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Example textarea</Form.Label>
//                     <Form.Control as="textarea" rows="3" />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };
// const FormsElements = () => {
//    return (
//     <React.Fragment>
//       <Card>
//         <Card.Header as="h5">Add Employee</Card.Header>
//         <Card.Body>
//           <Form>
//             <Row className="mb-3">
//               <Col md={4}>
//                 <Form.Group controlId="formBasicText1">
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter FirstName" />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="formBasicText2">
//                   <Form.Label>Middle Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter MiddleName" />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Last Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter LastName" />
//                 </Form.Group>
//               </Col>
//               </Row>
//                <Row className="mb-3">
//                <Col md={4}>
//                  <Form.Group controlId="formBasicTextarea">
//                   <Form.Label>Address 1</Form.Label>
//                   <Form.Control as="textarea" rows={3} placeholder="Enter Address" />
//                 </Form.Group>
//               </Col>
//                <Col md={4}>
//                 <Form.Group controlId="formBasicTextarea">
//                   <Form.Label>Address 2</Form.Label>
//                   <Form.Control as="textarea" rows={3} placeholder="Enter Address 2" />
//                 </Form.Group>
//               </Col>
//                <Col md={4}>
//                  <Form.Group controlId="formBasicTextarea">
//                   <Form.Label>Address 3</Form.Label>
//                   <Form.Control as="textarea" rows={3} placeholder="Enter Address 3" />
//                 </Form.Group>
//               </Col>
//                </Row>
//                <Row className="mb-3">
//                <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>D.O.J</Form.Label>
//                   <Form.Control type="date"  />
//                 </Form.Group>
//               </Col>
//                <Col md={4}>
//               <Form.Group controlId="formBasicSelect">
//                   <Form.Label>Select Department</Form.Label>
//                   <Form.Control as="select">
//                     <option value="">Choose...</option>
//                     <option value="hr">Human Resources</option>
//                     <option value="it">Information Technology</option>
//                     <option value="finance">Finance</option>
//                     <option value="marketing">Marketing</option>
//                   </Form.Control>
//                 </Form.Group>
//               </Col>
//                <Col md={4}>
//               <Form.Group controlId="formBasicSelect">
//                   <Form.Label>Select Designation</Form.Label>
//                   <Form.Control as="select">
//                     <option value="">Choose...</option>
//                     <option value="hr">Human Resources</option>
//                     <option value="it">Information Technology</option>
//                     <option value="finance">Finance</option>
//                     <option value="marketing">Marketing</option>
//                   </Form.Control>
//                 </Form.Group>
//               </Col>
//                </Row>
//                <Row className="mb-3">
//               <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Email Id</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter Email" />
//                 </Form.Group>
//               </Col>
//                <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Mobile Number</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter MobileNo" />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Alternet Mobile No</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter Alternet MobileNo" />
//                 </Form.Group>
//               </Col>
//                </Row>
//                <Row className="mb-3">
//                <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Aadhar No</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter Aadhar" />
//                 </Form.Group>
//               </Col>
//                 <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>UAN No.</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter UAN" />
//                 </Form.Group>
//               </Col>
//                  <Col md={4}>
//               <Form.Group controlId="formBasicSelect">
//                   <Form.Label>Blood Group</Form.Label>
//                   <Form.Control as="select">
//                      <option value="1">A-</option>
//                      <option value="2">A+</option>
//                      <option value="3">B-</option>
//                      <option value="4">B+</option>
//                      <option value="5">O-</option>
//                      <option value="6">O+</option>
//                      <option value="7">AB-</option>
//                      <option value="8">AB+</option>
//                   </Form.Control>
//                 </Form.Group>
//               </Col>
//                </Row>
//                <Row className="mb-3">
//                  <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>DOB</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter DOB" />
//                 </Form.Group>
//               </Col>
//                 <Col md={4}>
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Pan No</Form.Label>
//                   <Form.Control type="text"  placeholder="Enter PAN" />
//                 </Form.Group>
//               </Col>
//                <Col md={4} className="form-check ">
//                 <Form.Group controlId="formBasicText3">
//                   <Form.Label>Pan No</Form.Label>
//                   <Form.Control type="checkbox" className="form-check-input"  id="customCheck1" defaultChecked={true}/>
//                 </Form.Group>
//               </Col>
//             </Row>
//           </Form>
//         </Card.Body>
//         <Card.Footer>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Card.Footer>
//       </Card>
//     </React.Fragment>
//   );
// };
// export default FormsElements;
// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, Form, Button } from 'react-bootstrap';

// const FormsElements = () => {
//   const [departments, setDepartments] = useState([]);
//   const [designations, setDesignations] = useState([]);
//   const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
//   const [loadingDept, setLoadingDept] = useState(true);
//   const [loadingDesig, setLoadingDesig] = useState(false);
//   const [errorDept, setErrorDept] = useState(null);
//   const [errorDesig, setErrorDesig] = useState(null);

//   // Fetch departments on load
//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const response = await fetch('https://localhost:7011/api/Department/dropdown');
//         if (!response.ok) throw new Error('Failed to load departments');
//         const data = await response.json();
//         setDepartments(data);
//       } catch (error) {
//         setErrorDept(error.message);
//       } finally {
//         setLoadingDept(false);
//       }
//     };
//     fetchDepartments();
//   }, []);

//   // Fetch designations when department is selected
//   useEffect(() => {
//     if (!selectedDepartmentId) return;

//     const fetchDesignations = async () => {
//       setLoadingDesig(true);
//       try {
//         const response = await fetch(`https://localhost:7011/api/Department/${selectedDepartmentId}/designations`);
//         if (!response.ok) throw new Error('Failed to load designations');
//         const data = await response.json();
//         setDesignations(data);
//       } catch (error) {
//         setErrorDesig(error.message);
//       } finally {
//         setLoadingDesig(false);
//       }
//     };
//     fetchDesignations();
//   }, [selectedDepartmentId]);

//   return (
//     <React.Fragment>
//       <Card>
//         <Card.Header as="h5">Add Employee</Card.Header>
//         <Card.Body>
//           <Form>
//             {/* First Row: Name Fields */}
//             <div className="mb-3 row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>First Name</label>
//                   <input type="text" className="form-control" placeholder="Enter FirstName" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Middle Name</label>
//                   <input type="text" className="form-control" placeholder="Enter MiddleName" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Last Name</label>
//                   <input type="text" className="form-control" placeholder="Enter LastName" />
//                 </div>
//               </div>
//             </div>

//             {/* Second Row: Address Fields */}
//             <div className="mb-3 row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Address 1</label>
//                   <textarea className="form-control" rows={3} placeholder="Enter Address"></textarea>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Address 2</label>
//                   <textarea className="form-control" rows={3} placeholder="Enter Address 2"></textarea>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Address 3</label>
//                   <textarea className="form-control" rows={3} placeholder="Enter Address 3"></textarea>
//                 </div>
//               </div>
//             </div>

//             {/* Third Row: Date of Joining & Department Selection */}
//             <div className="mb-3 row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>D.O.J</label>
//                   <input type="date" className="form-control" />
//                 </div>
//               </div>

//               <div className="col-md-4">
//                 <Form.Group controlId="formDeptSelect">
//                   <Form.Label>Select Department</Form.Label>
//                   <Form.Select
//                     value={selectedDepartmentId}
//                     onChange={e => setSelectedDepartmentId(e.target.value)}
//                   >
//                     <option value="">--Select--</option>
//                     {loadingDept ? (
//                       <option disabled>Loading...</option>
//                     ) : errorDept ? (
//                       <option disabled>{errorDept}</option>
//                     ) : (
//                       departments.map(dept => (
//                         <option key={dept.fldDepartmentID} value={dept.fldDepartmentID}>
//                           {dept.fldDepartmentName}
//                         </option>
//                       ))
//                     )}
//                   </Form.Select>
//                 </Form.Group>
//               </div>
//               <div className="col-md-4">
//                 <Form.Group controlId="formDesigSelect">
//                   <Form.Label>Select Designation</Form.Label>
//                   <Form.Select>
//                     <option value="">--Select--</option>
//                     {loadingDesig ? (
//                       <option disabled>Loading...</option>
//                     ) : errorDesig ? (
//                       <option disabled>{errorDesig}</option>
//                     ) : (
//                       designations.map(desig => (
//                         <option key={desig.fldDesignationID} value={desig.fldDesignationID}>
//                           {desig.fldDesignationName}
//                         </option>
//                       ))
//                     )}
//                   </Form.Select>
//                 </Form.Group>
//               </div>
//             </div>
            
//             <div className="mb-3 row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Email Id</label>
//                   <input type="email" className="form-control" placeholder="Enter Email" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input type="text" className="form-control" placeholder="Enter MobileNo" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Alternate Mobile No</label>
//                   <input type="text" className="form-control" placeholder="Enter Alternate MobileNo" />
//                 </div>
//               </div>
//             </div>

//             {/* Fifth Row: Additional Fields */}
//             <div className="mb-3 row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Aadhar No</label>
//                   <input type="text" className="form-control" placeholder="Enter Aadhar" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>UAN No.</label>
//                   <input type="text" className="form-control" placeholder="Enter UAN" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Blood Group</label>
//                   <select className="form-control">
//                      <option value="0" selected>--Select--</option>
//                     <option value="1">A-</option>
//                     <option value="2">A+</option>
//                     <option value="3">B-</option>
//                     <option value="4">B+</option>
//                     <option value="5">O-</option>
//                     <option value="6">O+</option>
//                     <option value="7">AB-</option>
//                     <option value="8">AB+</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Sixth Row: Date of Birth & PAN */}
//             <div className="mb-3 row">
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>DOB</label>
//                   <input type="date" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="form-group">
//                   <label>Pan No</label>
//                   <input type="text" className="form-control" placeholder="Enter PAN" />
//                 </div>
//               </div>
//             <div className="col-md-4 d-flex align-items-center">
//             <div className="form-group form-check">
//               <input type="checkbox" className="form-check-input" id="customCheck1" defaultChecked={true}/>
//               <label className="form-check-label" htmlFor="customCheck1">
//                 Active
//               </label>
//             </div>
//           </div>
//         </div>

//           </Form>
//         </Card.Body>
//         <Card.Footer>
//           <Button variant="primary" type="submit">Submit</Button>
//         </Card.Footer>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default FormsElements;

// import React, { useState, useEffect } from 'react';
// import { Card, Form, Button } from 'react-bootstrap';
// import Swal from 'sweetalert2';

// const FormsElements = () => {
//   const [departments, setDepartments] = useState([]);
//   const [designations, setDesignations] = useState([]);
//   const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
//   const [selectedDesignationId, setSelectedDesignationId] = useState('');
//   const [loadingDept, setLoadingDept] = useState(true);
//   const [loadingDesig, setLoadingDesig] = useState(false);
//   const [errorDept, setErrorDept] = useState(null);
//   const [errorDesig, setErrorDesig] = useState(null);
//   const [formData, setFormData] = useState({
//     fldEmpFName: '',
//     fldEmpMName: '',
//     fldEmpLName: '',
//     fldAdd1: '',
//     fldAdd2: '',
//     fldAdd3: '',
//     fldDOJ: '',
//     fldEmailId: '',
//     fldMobileNo: '',
//     fldAltermobileNo: '',
//     fldAdharno: '',    
//     fldUANNo: '',      
//     fldBloodGroup: '',
//     fldDOB: '',
//     fldPanNo: '',
//     fldIsActive: true
//   });
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };
//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const response = await fetch('https://localhost:7011/api/Department/dropdown');
//         if (!response.ok) throw new Error('Failed to load departments');
//         const data = await response.json();
//         setDepartments(data);
//       } catch (error) {
//         setErrorDept(error.message);
//       } finally {
//         setLoadingDept(false);
//       }
//     };
//     fetchDepartments();
//   }, []);
//   useEffect(() => {
//     if (!selectedDepartmentId) return;

//     const fetchDesignations = async () => {
//       setLoadingDesig(true);
//       try {
//         const response = await fetch(`https://localhost:7011/api/Department/${selectedDepartmentId}/designations`);
//         if (!response.ok) throw new Error('Failed to load designations');
//         const data = await response.json();
//         setDesignations(data);
//       } catch (error) {
//         setErrorDesig(error.message);
//       } finally {
//         setLoadingDesig(false);
//       }
//     };
//     fetchDesignations();
//   }, [selectedDepartmentId]);

//   // Submit handler
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.fldEmpFName || !formData.fldMobileNo) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Missing Fields',
//       text: 'Please fill in First Name and Mobile Number.',
//     });
//     return;
//   }

//   if (!selectedDepartmentId || !selectedDesignationId) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Missing Fields',
//       text: 'Please select both Department and Designation.',
//     });
//     return;
//   }

//   const payload = {
//     ...formData,
//     fldDepartment: parseInt(selectedDepartmentId),
//     fldDesignation: parseInt(selectedDesignationId),
//   };

//   try {
//     debugger
//     const response = await fetch('https://localhost:7011/api/employee/addemployee', {
//      method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     let data;
//     try {
//       const text = await response.text(); // first get plain text
//       data = text ? JSON.parse(text) : null; // then parse if not empty
//     } catch (error) {
//       console.error("Error parsing JSON response:", error);
//       Swal.fire("Error", "Invalid server response", "error");
//       return;
//     }

//     if (response.ok && data?.statusCode === 200) {
//       Swal.fire("Success", data.message, "success");
//     } else {
//       const errorMsg = data?.message || "Unknown error";
//       Swal.fire("Error", errorMsg, "error");
//     }   

//       } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'Error saving employee: ' + error.message,
//       confirmButtonColor: '#d33',
//     });
//     }
//   };

//   return (
//     <Card>
//       <Card.Header as="h5">Add Employee</Card.Header>
//       <Card.Body>
//         <Form onSubmit={handleSubmit}>
//         <div className="mb-3 row">
//            {['fldEmpFName', 'fldEmpMName', 'fldEmpLName'].map((field, idx) => (
//              <div className="col-md-4" key={field}>
//                <div className="form-group">
//                  <label>{['First Name', 'Middle Name', 'Last Name'][idx]}</label>
//                  <input type="text" className="form-control"  name={field} value={formData[field]}  onChange={handleChange}
//                    placeholder={['Enter First Name', 'Enter Middle Name', 'Enter Last Name'][idx]} />
//                </div>
//              </div>
//            ))}
//          </div>
//         <div className="mb-3 row">
//         {['fldAdd1', 'fldAdd2', 'fldAdd3'].map((field, idx) => (
//           <div className="col-md-4" key={field}>
//             <div className="form-group">
//               <label>{['Address 1', 'Address 2', 'Address 3'][idx]}</label>
//               <textarea className="form-control" name={field} rows={2} value={formData[field]} onChange={handleChange}
//                 placeholder={['Enter Address 1', 'Enter Address 2', 'Enter Address 3'][idx]} ></textarea>
//             </div>
//           </div>
//         ))}
//       </div>
//           <div className="mb-3 row">
//             <div className="col-md-4">
//               <label>D.O.J</label>
//               <input type="date" className="form-control" name="fldDOJ" value={formData.fldDOJ} onChange={handleChange} />
//             </div>
//             <div className="col-md-4">
//               <Form.Group>
//                 <Form.Label>Department</Form.Label>
//                 <Form.Select value={selectedDepartmentId} onChange={(e) => setSelectedDepartmentId(e.target.value)}>
//                   <option value="">--Select--</option>
//                   {loadingDept ? <option disabled>Loading...</option> : errorDept ? <option disabled>{errorDept}</option> :
//                     departments.map(dept => (
//                       <option key={dept.fldDepartmentID} value={dept.fldDepartmentID}> {dept.fldDepartmentName}  </option>
//                     ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div className="col-md-4">
//               <Form.Group>
//                 <Form.Label>Designation</Form.Label>
//                 <Form.Select value={selectedDesignationId} onChange={(e) => setSelectedDesignationId(e.target.value)}>
//                   <option value="">--Select--</option>
//                   {loadingDesig ? <option disabled>Loading...</option> : errorDesig ? <option disabled>{errorDesig}</option> :
//                     designations.map(desig => (
//                       <option key={desig.fldDesignationID} value={desig.fldDesignationID}> {desig.fldDesignationName} </option>
//                     ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//           </div>
//          <div className="mb-3 row">
//           {[
//             { name: 'fldEmailId', label: 'Email Id', type: 'email', placeholder: 'Enter Email' },
//             { name: 'fldMobileNo', label: 'Mobile Number', type: 'text', placeholder: 'Enter Mobile No' },
//             { name: 'fldAltermobileNo', label: 'Alternate Mobile No', type: 'text', placeholder: 'Enter Alternate Mobile No' }
//           ].map((field, idx) => (
//             <div className="col-md-4" key={field.name}>
//               <div className="form-group">
//                 <label>{field.label}</label>
//                 <input type={field.type} className="form-control" name={field.name} value={formData[field.name]} onChange={handleChange}
//                   placeholder={field.placeholder} />
//               </div>
//             </div>
//           ))}
//         </div>
//          <div className="mb-3 row">
//             {[
//               { name: 'fldAdharno', label: 'Aadhar No', placeholder: 'Enter Aadhar No' },
//               { name: 'fldUANNo', label: 'UAN No', placeholder: 'Enter UAN No' }
//             ].map((field) => (
//               <div className="col-md-4" key={field.name}>
//                 <div className="form-group">
//                   <label>{field.label}</label>
//                   <input  type="text" className="form-control" name={field.name} value={formData[field.name]} onChange={handleChange}
//                     placeholder={field.placeholder}  />
//                 </div>
//               </div>
//             ))}
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Blood Group</label>
//                 <select className="form-control" name="fldBloodGroup" value={formData.fldBloodGroup} onChange={handleChange}>
//                   <option value="0">--Select--</option>
//                   <option value="1">A-</option>
//                   <option value="2">A+</option>
//                   <option value="3">B-</option>
//                   <option value="4">B+</option>
//                   <option value="5">O-</option>
//                   <option value="6">O+</option>
//                   <option value="7">AB-</option>
//                   <option value="8">AB+</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="mb-3 row">
//             <div className="col-md-4">
//               <label>DOB</label>
//               <input type="date" className="form-control" name="fldDOB" value={formData.fldDOB}  onChange={handleChange} />
//             </div>
//             <div className="col-md-4">
//               <label>PAN No</label>
//                <input type="text" className="form-control" name="fldPanNo" value={formData.fldPanNo}  onChange={handleChange} placeholder="Enter PAN No" />
//             </div>
//             <div className="col-md-4 d-flex align-items-center">
//                <Form.Check type="checkbox" label="Is Active" name="fldIsActive" checked={formData.fldIsActive} onChange={handleChange}   />
//             </div>
//           </div>
//           <Card.Footer>
//            <Button type="submit" variant="primary">Save Employee</Button>
//             <Button variant="btn btn-danger" type="button">Clear</Button>
//           </Card.Footer>
//         </Form>
//       </Card.Body>
//     </Card>
//   );
// };
// export default FormsElements;



import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import * as API from '../Common/APIUrl';

const FormsElements = () => {
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
    fldCompCode: 1 // optional: set your default company code here
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // useEffect(() => {
  //   const fetchDepartments = async () => {
  //     try {
  //       const response = await fetch('API.GetDepartmentList_API');
  //       if (!response.ok) throw new Error('Failed to load departments');
  //       const data = await response.json();
  //       setDepartments(data);
  //     } catch (error) {
  //       setErrorDept(error.message);
  //     } finally {
  //       setLoadingDept(false);
  //     }
  //   };
  //   fetchDepartments();
  // }, []);
  useEffect(() => {
  const fetchDepartments = async () => {
    try {
      const token = sessionStorage.getItem('Token');
      const response = await fetch('https://localhost:7011/api/Department/GetAllDepartments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
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

  try {
    debugger
    const response = await fetch('API.AddEmployee_API', {
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
      text: result.message || 'Employee added successfully.',
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
    Swal.fire({ icon: 'error', title: 'Network Error', text: 'Failed to add employee.' });
  }
  };

  const initialFormData = {
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
};

  const handleClear = () => {
  setFormData(initialFormData);
  setSelectedDepartmentId('');
  setSelectedDesignationId('');
};
  return (
       <Card className="shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h5" className="mb-0">Add Employee</Card.Title>
              <Link to="/admin/EmployeesList" className="btn btn-info">Back</Link>
            </Card.Header>
      <Card.Body>
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
              <input type="date" className="form-control" name="fldDOJ" value={formData.fldDOJ} onChange={handleChange} />
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
              <input type="date" className="form-control" name="fldDOB" value={formData.fldDOB}  onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label>PAN No</label>
               <input type="text" className="form-control" name="fldPanNo" value={formData.fldPanNo}  onChange={handleChange} placeholder="Enter PAN No" />
            </div>
            <div className="col-md-4 d-flex align-items-center">
               <Form.Check type="checkbox" label="Is Active" name="fldIsActive" checked={formData.fldIsActive} onChange={handleChange}   />
            </div>
          </div>
          <Card.Footer>
           <Button type="submit" variant="primary">Save Employee</Button>
            <Button variant="btn btn-danger" onClick={handleClear} type="button">Clear</Button>
          </Card.Footer>
        </Form>
      </Card.Body>
       </Card>
  );
};

export default FormsElements;


