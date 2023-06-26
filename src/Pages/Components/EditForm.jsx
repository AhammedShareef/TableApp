import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBCardImage,
} from "mdb-react-ui-kit";

function EditForm({ selectedItem, showForm, onFormSubmit }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(selectedItem);
  }, [selectedItem]);

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
        show={showForm}
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{ display: "flex" }}
      >
        <div>
          <img style={{ height: "50vh" }} src={formData.thumbnail} alt="" />
        </div>
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Edit Item</h2>

            <form style={{ width: "400px" }} onSubmit={formSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Brand Name"
                size="lg"
                id="form1"
                type="text"
                name="brand"
                value={formData.brand}
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Product Name"
                size="lg"
                id="form2"
                type="text"
                name="title"
                value={formData.title}
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Product Price"
                size="lg"
                id="form3"
                type="text"
                name="price"
                value={formData.price}
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Stock in Hand"
                size="lg"
                id="form4"
                type="text"
                name="stock"
                value={formData.stock}
                onChange={dataChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Rating"
                size="lg"
                id="form5"
                type="text"
                name="rating"
                value={formData.rating}
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

export default EditForm;
