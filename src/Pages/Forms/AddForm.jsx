import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function AddForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({});

  const dataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div style={{ backgroundColor: "#9a616d" }}>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{}}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Add Item</h2>
            <form onSubmit={formSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Brand Name"
                size="lg"
                id="form1"
                type="text"
                name="brand"
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Product Name"
                size="lg"
                id="form2"
                type="text"
                name="title"
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Product Price"
                size="lg"
                id="form3"
                type="text"
                name="price"
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Stock in Hand"
                size="lg"
                id="form4"
                type="text"
                name="stock"
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Rating"
                size="lg"
                id="form5"
                type="text"
                name="rating"
                onChange={dataChange}
              />
              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Confirm all details"
                />
              </div>
              <MDBBtn
                className="mb-4 w-100 gradient-custom-4"
                size="lg"
                type="submit"
                style={{ backgroundColor: "#9a616d" }}
              >
                Submit
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default AddForm;
