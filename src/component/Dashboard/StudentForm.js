import React, { useState } from "react";
import axios from 'axios';  
// const baseURL = "http://localhost:3001/product/";
// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
function StudentForm() {
  const AllFormData = {  };
  const [Inputdata, getAllData] = useState(AllFormData);
  function GetStudentInfo(e) {
    getAllData({ ...Inputdata, [e.target.name]: e.target.value }); 
  }


  function SubmitDetails(e)
  {
    e.preventDefault();
         
    console.log(Inputdata)
      // axios.get("http://localhost:3001/product/getInfo")
      // .then((res) =>
      //  {   
      //          console.log(res.data.res) 
      //   });
      axios.post(`http://localhost:3001/SaveData`, { Inputdata }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
          .then(res => {
            console.log(res);
            // console.log(res.data);
        })
   
  }

   
  return (
    <>
      <form onSubmit={SubmitDetails}>
        <div className="row">
          <div className="text-center col-sm-12 col-md-12 col-lg-12">
            <h3>Add Student Info</h3>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            <span className="text-start">First Name</span>
            <input
              type="text"
              name="FirstName"
              onChange={GetStudentInfo}
              className="form-control"
            />
          </div>
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            Middle Name
            <input
              type="text"
              onChange={GetStudentInfo}
              name="MiddleName"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            <span className="text-start">Last Name</span>
            <input
              type="text"
              onChange={GetStudentInfo}
              name="LastName"
              class="form-control"
            />
          </div>
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            <span className="text-start">Email</span>
            <input
              type="text"
              onChange={GetStudentInfo}
              name="Email" 
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            <span className="text-start">Phone</span>
            <input type="text" onChange={GetStudentInfo} name="Phone" class="form-control" />
          </div>
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            <span className="text-start">Address</span>
            <input type="text" onChange={GetStudentInfo} name="Address" class="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="text-center col-sm-6 col-md-12 col-lg-6 ">
            <span className="text-start">Age </span>
            <input type="text" onChange={GetStudentInfo} name="Age" class="form-control" />
          </div>
          <div className="text-center col-sm-6 col-md-12 col-lg-6 ">
            <span cclassNamelass="text-start">Dob</span>
            <input type="text" onChange={GetStudentInfo} name="DOB" class="form-control" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="text-center col-sm-12 col-md-12 col-lg-6 ">
            {/* <span class="text-start">Age </span> */}
            <button type="submit" className="btn btn-info"> Submit </button>
            {/* <input type="text" onChange={GetStudentInfo} name="Age" class="form-control" /> */}
          </div>
          
        </div>
      </form>
    </>
  );
}

export default StudentForm;
