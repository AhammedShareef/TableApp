import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import ViewModal from "./Components/ViewModal";
import {
  BsFillEyeFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import EditForm from "./Components/EditForm";
import AddForm from "./Forms/AddForm";
import ConfirmationModal from "./Components/ConfirmationModal";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setItems(res.data.products));
  }, []);

  const nav = useNavigate();

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openForm = (item) => {
    setSelectedItem(item);
    setEditForm(true);
  };

  const deleteItem = (itemId) => {
    setSelectedItem(itemId);
    setConfirmationModal(true);
  };

  const confirmDelete = () => {
    const updatedItems = items.filter((item) => item.id !== selectedItem);
    setItems(updatedItems);
    setAlertMessage("Item deleted successfully");
    setShowAlert(true);
    setConfirmationModal(false);
  };

  const cancelDelete = () => {
    setConfirmationModal(false);
  };

  const FormSubmit = (formData) => {
    const newItem = {
      brand: formData.brand,
      title: formData.title,
      price: formData.price,
      stock: formData.stock,
      rating: formData.rating,
    };

    if (editForm) {
      // edit item
      const updatedItems = items.map((item) =>
        item.id === selectedItem.id ? { ...item, ...newItem } : item
      );
      setItems(updatedItems);
      setAlertMessage("Item edited successfully");
    } else {
      // Add item
      setItems([...items, newItem]);
      setAlertMessage("Item added successfully");
    }

    setShowForm(false);
    setEditForm(false);
    setShowAlert(true);
  };

  const addItemClick = () => {
    setShowForm(true);
  };

  const cancelClick = () => {
    setShowForm(false);
    setEditForm(false);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <ViewModal
        items={items}
        selectedItem={selectedItem}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {editForm && (
        <EditForm
          selectedItem={selectedItem}
          showForm={showForm}
          onFormSubmit={FormSubmit}
        />
      )}
      <div
        style={{ alignContent: "center", paddingLeft: "35%", display: "flex" }}
      >
        {!showForm && (
          <Button onClick={addItemClick} style={{ backgroundColor: "#9A616D" }}>
            Add Item
          </Button>
        )}
        <MDBInputGroup style={{ width: "40%", paddingLeft: "10%" }}>
          <MDBInput
            onChange={(e) => setSearch(e.target.value)}
            label="Search"
          />
          <MDBBtn style={{ backgroundColor: "#9A616D" }} rippleColor="dark">
            <MDBIcon icon="search" />
          </MDBBtn>
        </MDBInputGroup>
      </div>
      {showForm ? (
        <AddForm onFormSubmit={FormSubmit} />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stocks</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              if (
                search &&
                (!item.brand ||
                  !item.brand.toLowerCase().includes(search.toLowerCase()))
              ) {
                return null;
              }
              return (
                <tr key={item.id}>
                  <td>{item.brand}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>{item.rating}</td>
                  <td>
                    <Button
                      style={{ backgroundColor: "#0A4D68" }}
                      onClick={() => openModal(item)}
                    >
                      <BsFillEyeFill style={{ width: "10px" }} />
                    </Button>{" "}
                  </td>
                  <td>
                    <Button
                      style={{ backgroundColor: "#A9907E" }}
                      onClick={() => openForm(item)}
                    >
                      <BsFillPencilFill />
                    </Button>{" "}
                  </td>
                  <td>
                    <Button
                      style={{ backgroundColor: "#B31312" }}
                      onClick={() => deleteItem(item.id)}
                    >
                      <BsFillTrashFill />
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <ConfirmationModal
        show={confirmationModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default HomePage;
