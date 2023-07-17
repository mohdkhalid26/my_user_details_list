import { React, useEffect, useState } from "react";
import "./Display.scss";
import { useNavigate } from "react-router";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";

function Display({ editData }) {
  const navigate = useNavigate();
  // const [isEdit, setIsEdit] = useState(true);
  const [data, setData] = useState([]);

  const deleteData = (id) => {
    axios
      .delete(`https://64aed2f2c85640541d4dc55b.mockapi.io/product/${id}`)
      .then(() => getData());
  };

  const getData = () => {
    axios
      .get("https://64aed2f2c85640541d4dc55b.mockapi.io/product")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, [] || [data]);

  // const deleteAllData = () => {};

  return (
    <Container fluid className="display">
      <h1>
        <u>Display</u>
      </h1>
      <Button
        className="createbtn"
        onClick={() => {
          navigate("/create");
        }}
        variant="primary"
      >
        Create
      </Button>{" "}
      <Table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">S.No</th>
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">Number</th>
          </tr>
        </thead>
        {data
          ? data.map((data, index) => {
              return (
                <tbody key={data.id} className="tbody">
                  <tr className="tr">
                    <td className="td">
                      <p>{data.id}</p>
                    </td>
                    <td className="td">
                      <p>{data.name}</p>
                    </td>
                    <td className="td">
                      <p>{data.email}</p>
                    </td>
                    <td className="td">
                      <p>{data.number}</p>
                    </td>

                    <td className="td">
                      <Button
                        onClick={() => {
                          editData(
                            data.id,
                            data.name,
                            data.email,
                            data.number
                            // isEdit
                          );
                          navigate("/create");
                        }}
                        variant="primary"
                      >
                        Edit
                      </Button>{" "}
                    </td>
                    <td className="td">
                      <Button
                        variant="danger"
                        onClick={() => deleteData(data.id)}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
    </Container>
  );
}

export default Display;
