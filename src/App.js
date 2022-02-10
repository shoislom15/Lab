import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [npm, setNpm] = useState("npm i ");

  const lib = [
    {
      name: "MUI",
      text: "@mui/material @emotion/react @emotion/styled"
    },
    {
      name: "Bootstrap",
      text: "bootstrap",
    },
    {
      name: "React Bootstrap",
      text: "react-bootstrap",
    },
    {
      name: "Styled Components",
      text: "styled-components",
    },
    {
      name: "React Router Dom",
      text: "react-router-dom"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {lib.map((e) => {
            return <>
              <div className="col-lg-3 col-md-4 col-sm-6 p-4">
                <button onClick={() => {
                  setNpm(`${npm} ${e.text}`);
                }} className="btn w-100 bg-primary">{e.name}</button>
              </div>
            </>
          })}
          <div className="col-12">
            <button className="w-100 btn btn-danger" onClick={() => {
              navigator.clipboard.writeText(npm);
            }}>Copy</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
