import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import { Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as API from '../Common/APIUrl';
import Swal from 'sweetalert2';

DataTable.use(DT);

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState({});
  useEffect(() => {
    fetchDepartments();
  }, []);
  // const fetchDepartments = async () => {
  //   try {
  //     const response = await axios.get(API.DepartmentList_API);
  //     debugger
  //     setDepartments(response.data);
  //   } catch (error) {
  //     console.error('Error fetching departments:', error);
  //   }
  // };
  const fetchDepartments = async () => {
    debugger
  try {
    const token = sessionStorage.getItem('Token'); 
    const response = await axios.get(API.DepartmentList_API, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setDepartments(response.data);
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

  const handleEditClick = async (fldDepartmentID) => {
   try {
       const response = await axios.get(`${API.EditDepartment_API}/${fldDepartmentID}`);
       setSelectedDepartment(response.data.data.department);
       debugger
       setShowModal(true);
     } catch (error) {
       console.error('Error fetching department:', error);
     }
   };
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedDepartment({});
  };
  const handleChange = (e) => {
    setSelectedDepartment({
      ...selectedDepartment,
      [e.target.name]: e.target.value
    });
  };
  const handleUpdate = async () => {
    try {
      const response = await fetch(API.UpdateDepartment_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('Token')}`,
          'fld_UserId': sessionStorage.getItem('fld_UserId'),
          'fld_Username': sessionStorage.getItem('fld_Username')
        },
        body: JSON.stringify(selectedDepartment)
      });
      const result = await response.json();
      if (response.ok) {
        handleModalClose(); 

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: result.message || 'Department updated successfully.',
        });

        window.location.href = '/admin/Department';
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          html: result.errors?.join('<br>') || result.message || 'Update failed.',
        });
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Failed to update department.',
      });
    }
  };


const handleDeleteClick = async (departmentId) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`${API.DeleteDepartment_API}${departmentId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('Token')}`,
          'fld_UserId': sessionStorage.getItem('fld_UserId'),
          'fld_Username': sessionStorage.getItem('fld_Username'),
        },
      });

      if (response.ok) {
        Swal.fire('Deleted!', 'Department has been deleted.', 'success');
        fetchDepartments(); 
      } else {
        const data = await response.json();
        Swal.fire('Error!', data.message || 'Failed to delete department.', 'error');
      }
    } catch (error) {
      Swal.fire('Error!', 'Network error while deleting department.', 'error');
    }
  }
};


  const columns = [
    {
      title: 'Sr.No',
      data: null,
      render: (data, type, row, meta) => meta.row + 1
    },
    {
      title: 'Department Name',
      data: 'fldDepartmentName'
    },
    {
      title: 'Status',
      data: 'fldActive',
      render: function (data, type, row) {
        return data ? 'Active' : 'Inactive';
      }
    },

    {
      title: 'Actions',
      data: null,
      orderable: false,
      render: (data, type, row) => {
        return `
          <button class='btn btn-sm btn-primary me-2 edit-btn' data-id='${row.fldDepartmentID}'>Edit</button>
          <button class='btn btn-sm btn-danger' data-id='${row.fldDepartmentID}' data-action='delete'>Delete</button>
        `;
      }
    }
  ];
  useEffect(() => {
  const table = document.querySelector('.dataTable');
  if (table) {
    const handleTableClick = (e) => {
      if (e.target.classList.contains('edit-btn')) {
        const id = e.target.getAttribute('data-id');
        handleEditClick(id);
      }
      if (e.target.classList.contains('btn-danger') && e.target.getAttribute('data-action') === 'delete') {
        const id = e.target.getAttribute('data-id');
        handleDeleteClick(id);
      }
    };
    table.addEventListener('click', handleTableClick);

    return () => {
      table.removeEventListener('click', handleTableClick);
    };
  }
}, [departments]);


  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h5" className="mb-0">Department List</Card.Title>
              <Link to="/admin/AddDepartment" className="btn btn-info">Add Department</Link>
            </Card.Header>
            <Card.Body className="table-responsive">
              <DataTable
                data={departments}
                columns={columns}
                className="table table-striped table-bordered nowrap w-100"
                options={{
                  responsive: true,
                  paging: true,
                  searching: true,
                  select: true
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fldDepartmentName">
              <Form.Label>Department Name</Form.Label>
             <Form.Control type="text" name="fldDepartmentName"   value={selectedDepartment.fldDepartmentName || ''} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="fldActive" className="mt-3">
              <Form.Label>Status</Form.Label>
            <Form.Select  name="fldActive" value={selectedDepartment.fldActive === true ? 'Active' : selectedDepartment.fldActive === false ? 'Inactive' : ''}
                onChange={handleChange} >
              <option value="">Select</option>  <option value="Active">Active</option> <option value="Inactive">Inactive</option>
            </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DepartmentTable;
