import "./Create.scss";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function Create({ isEdit, name, email, number, id }) {
  const navigate = useNavigate();
  const [isEdit3, setIsEdit3] = useState(isEdit);
  const [userName, setUserName] = useState(isEdit3 ? name : "");
  const [userEmail, setUserEmail] = useState(isEdit3 ? email : "");
  const [userNumber, setUserNumber] = useState(isEdit3 ? number : "");
  const [isReq, setIsReq] = useState(false);

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setUserNumber(+e.target.value);
  };

  const addData = () => {
    axios.post("https://64aed2f2c85640541d4dc55b.mockapi.io/product", {
      name: userName,
      email: userEmail,
      number: userNumber,
    });
    setIsReq(false);
    navigate("/");
    setUserName("");
    setUserEmail("");
    setUserNumber("");
  };

  const updateData = () => {
    axios.put(`https://64aed2f2c85640541d4dc55b.mockapi.io/product/${id}`, {
      name: userName,
      email: userEmail,
      number: +userNumber,
    });
    setIsEdit3(false);
    setIsReq(false);
    navigate("/");
    setUserName("");
    setUserEmail("");
    setUserNumber("");
  };

  useEffect(() => {}, []);

  return (
    <Container fluid className="create">
      <Row className="row">
        <h1>
          <u>Enter User Details</u>
        </h1>
        <Col className="col">
          <input
            className={isReq ? "red" : ""}
            required="required"
            type="text"
            placeholder={isReq ? "username is required !" : "username"}
            value={userName}
            onChange={handleName}
          />
          <input
            required="required"
            className={isReq ? "red" : ""}
            type="email"
            placeholder={isReq ? "email is required !" : "email"}
            value={userEmail}
            onChange={handleEmail}
          />
          <input
            required="required"
            className={isReq ? "red" : ""}
            type="number"
            placeholder={isReq ? "contact no. is required !" : "contact no."}
            value={userNumber}
            onChange={handleNumber}
          />
          {isEdit3 ? (
            <Button
              onClick={() =>
                userName && userEmail && userNumber > 0
                  ? updateData()
                  : setIsReq(true)
              }
              variant="warning"
            >
              Update{" "}
            </Button>
          ) : (
            <Button
              onClick={() =>
                userName && userEmail && userNumber > 0
                  ? addData()
                  : setIsReq(true)
              }
              variant="success"
            >
              Submit{" "}
            </Button>
          )}
        </Col>
      </Row>
      <Button
        onClick={() => {
          setIsEdit3(false);
          setIsReq(false);
          navigate("/");
          setUserName("");
          setUserEmail("");
          setUserNumber("");
        }}
        variant="primary"
      >
        Display
      </Button>{" "}
    </Container>
  );
}

export default Create;
