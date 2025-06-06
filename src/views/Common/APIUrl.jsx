export const BASE_URL = "https://localhost:7011/api/";

//for Login controller API
export const Login_api = BASE_URL + "Auth/Login";
export const ForgotPassword_API = BASE_URL + "Auth/LForgotPassword";
export const ResetPassword_API = BASE_URL + "Auth/LResetPassword";

//for Employee controller API 
export const EmployeeList_API = BASE_URL + "Employee/GetAllEmployees";
export const AddEmployee_API = BASE_URL + "Employee/AddEmployee";
export const EditEmployee_API = BASE_URL + "Employee/Edit";
export const Delete_API = BASE_URL + "Employee/Delete";

//for Department controller API 
export const DepartmentList_API = BASE_URL + "Department/GetAllDepartments";
export const AddDepartment_API = BASE_URL + "Department/AddDepartment";
export const GetDepartmentList_API = BASE_URL + "Department/GetDepartmentList";
export const GetDesignationsByDepartmentId_API = (departmentId) => `${BASE_URL}Department/${departmentId}/designations`;
export const EditDepartment_API = `${BASE_URL}Department/Edit`;
export const UpdateDepartment_API = `${BASE_URL}Department/Update`;
export const DeleteDepartment_API = `${BASE_URL}Department/Delete`;

