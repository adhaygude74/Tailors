import React, { useEffect, useState } from "react";
import CustomerTable from "./CustomerTable";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Cards() {
  let [show, showModal] = useState(false);
  useEffect(() => {
    console.log("Load");
  });
  function handleClose() {
    showModal(false);
  }
  let AllFormData = {};
  const [Inputdata, getAllData] = useState(AllFormData);
  function getInpVal(e) {
    getAllData({ ...Inputdata, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <strong>Name</strong>
                <input
                  onChange={getInpVal}
                  name="customername"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <strong>Phone No</strong>
                <input
                  onChange={getInpVal}
                  name="phoneNO"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <strong>Villege</strong>
                <input
                  onChange={getInpVal}
                  name="villege"
                  className="form-control"
                ></input>
              </div>
              <div className="col-6">
                <strong>Age</strong>
                <input
                  onChange={getInpVal}
                  name="age"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <strong>Gender</strong>
                <select
                  onChange={getInpVal}
                  name="Gender"
                  className="form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="card">
        <div className="card-header">
          <button
            className="btn btn-info"
            onClick={function () {
              console.log(show);
              showModal(true);
            }}
          >
            add customer
          </button>
        </div>
        <div className="card-body mt-4">
          {show}
          <CustomerTable></CustomerTable>
        </div>
      </div>
    </div>
  );
}
export default Cards;
