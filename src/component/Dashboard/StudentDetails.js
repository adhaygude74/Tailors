import axios from "axios";
import React, { useEffect, useState } from "react";
import "./StudentDetails.css";
const StudentDetails = () => {
  const [StudentDetails, GetStudentDetails] = useState("");

  
  useEffect(() => {
    axios.get("http://localhost:3002/product/getInfo").then((response) => {
      GetStudentDetails(response.data.res);
    });
  }, []);
  return (
    <main id="main" class="main">
      {/* <!-- End Page Title --> */}
      <section class="section">
        <div class="card">
          <div class="card-header">
            <strong>StudentDetails</strong>
          </div>
          <div class="card-body">
            <table className="table table-bordered">
              <thead className="text-white">
                <tr>
                  <th>#</th>
                  <th>Student_Name</th>
                  <th>Father_Name</th>
                  <th>Gender</th>
                  <th>Phone_No </th>
                  <th>DOB</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>action</th>
                </tr>
              </thead>
              {StudentDetails.length > 0 
              ? StudentDetails.map((val, index) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{++index}</td>
                          <td> {val.firstName}  {val.lastName} </td>
                          <td> {val.fatherName} </td>
                          <td> {val.gender}</td>
                          <td> {val.phoneNo}</td>
                          <td> {val.dob}</td>
                          <td> {val.age}</td>
                          <td> {val.address}</td>
                          <td> {val.email}</td>
                          <td> <button className="btn btn-sm btn-info">edit</button>
                          <button className="btn btn-sm btn-danger">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                : "Loading......"}
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentDetails;
