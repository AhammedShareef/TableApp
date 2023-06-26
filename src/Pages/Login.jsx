import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import HomePage from "./HomePage";
import AlertPage from "./Components/AlertPage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [alert, setalert] = useState("");
  const [severity, setseverity] = useState("");
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [Login, setLogin] = useState(false);
  const navigate = useNavigate();
  const inputChange = (item) => {
    setinput({ ...input, [item.target.name]: item.target.value });
  };
  const HomePageLogin = () => {
    axios
      .post("https://textile.torcdeveloper.com/api/v1/login", input)
      .then((res) => {
        setalert("Login Successful");
        setseverity("success");
      })
      .then((res) => {
        setTimeout(() => {
          setLogin(true);
        }, 2000);
      })
      .catch((err) => {
        setLogin(false);
        setalert("Wrong Password or Email");
        setseverity("error");
      });
  };
  if (Login) {
    return <HomePage />;
  }
  // {
  //   Login === true ? <HomePage /> : alert("Wrong");
  // }
  return (
    <div>
      <AlertPage severity={severity} alert={alert} />
      <MDBContainer className="my-5">
        <MDBCard style={{ height: "650px" }}>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                style={{ height: "650px" }}
                src="https://fscl01.fonpit.de/userfiles/7687254/image/iPhone_12_Mini/NextPit_iPhone_12_Mini_screen-w1400h1400.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon fas icon="cubes fa-3x " />
                  <span className="h1 fw-bold mb-0">
                    <h1 style={{ color: "#9A616D", paddingLeft: "190px" }}>
                      MobileHub
                    </h1>
                  </span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px", textAlign: "center" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  name="email"
                  value={input.email}
                  onChange={inputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="password"
                  value={input.password}
                  onChange={inputChange}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  style={{ backgroundColor: "#9A616D" }}
                  onClick={HomePageLogin}
                >
                  Login
                </MDBBtn>
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Login;
