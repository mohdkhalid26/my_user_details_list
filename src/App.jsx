import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Create from "./pages/create/Create";
import Display from "./pages/display/Display";
import React, { useEffect, useState } from "react";

function App() {
  const [isEdit2, setIsEdit2] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const [id, setId] = useState(null);

  const editData = (id, name, email, number) => {
    setUserName(name);
    setUserEmail(email);
    setUserNumber(number);
    setIsEdit2(true);
    setId(id);
  };

  useEffect(() => {
    setIsEdit2(false);
  }, [editData]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Display editData={editData} />} />
          <Route
            exact
            path="/create"
            element={
              <Create
                isEdit={isEdit2}
                id={id}
                name={userName}
                email={userEmail}
                number={userNumber}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
