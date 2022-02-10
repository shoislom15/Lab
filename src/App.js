import './App.css';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlusSquare, BsTrash } from 'react-icons/bs';
import { FiMinusSquare } from 'react-icons/fi';
function App() {


  const lib = [
    {
      name: "MUI",
      text: "@mui/material @emotion/react @emotion/styled",
      img: "https://mui.com/static/logo.png",
      isChoosen: false,
    },
    {
      name: "Bootstrap",
      text: "bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
      isChoosen: false,
    },
    {
      name: "React Bootstrap",
      text: "react-bootstrap",
      img: 'https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg',
      isChoosen: false,
    },
    {
      name: "Styled Components",
      text: "styled-components",
      img: "https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png",
      isChoosen: false,
    },
    {
      name: "React Router Dom",
      text: "react-router-dom",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--bvQtwOo5--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://reacttraining.com/images/blog/reach-react-router-future.png",
      bg: '#1D1D1D',
      isChoosen: false,
    },
    {
      name: "Chakra",
      text: "@chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5",
      img: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      className: "p-0",
      isChoosen: false,
    }
  ];

  const [npm, setNpm] = useState(lib);

  const setN = (i) => {
    let t = [...npm];
    t[i].isChoosen = !t[i].isChoosen;
    setNpm([...t]);
    console.log(npm);
  };

  const setAll = (i) => {
    let t = [...npm];
    t.forEach(e => {
      e.isChoosen = true;
    });
    setNpm([...t]);
  };

  const clipboard = () => {
    let copy = "npm i";

    for (let i = 0; i < npm.length; i++) {
      if (npm[i].isChoosen) {
        copy = copy + " " + npm[i].text;
      }
    }
    navigator.clipboard.writeText(copy);
  }

  return (
    <>
      <div className="container-fluid px-lg-5 px-1 py-3">
        <div className="row">
          {npm.map((e, i) => {
            return <>
              <div className="col-lg-3 col-md-4 col-6 px-3 py-1">
                <button onClick={() => {
                  setN(i);
                }} key={e.toString()} className="btn w-100 bg-blue text-dark fw-bold d-flex p-2 rounded-15 h-100 d-flex align-items-center">
                  <div className="img w-22 me-3 bg-white" style={e.bg && { backgroundColor: `${e.bg}` }}>
                    <img className="img-fluid" src={e.img} alt="" />
                  </div>
                  <div className="d-flex w-75 align-items-center justify-content-between">
                    <span className="m-0 text-white fs-6">{e.name}</span>
                    <div className="div text-white fs-4 me-2">
                      {!e.isChoosen ? <BsPlusSquare /> : <FiMinusSquare />}
                    </div>
                  </div>
                </button>
              </div>
            </>
          })}
          <div className="row copy w-100 d-flex align-items-center justify-content-center p-0">
            <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 box p-3 m-0 px-4 d-flex align-items-center">
              <button className="btn bg-white fw-bold rounded-circle trash" onClick={() => { setAll() }}>ALL</button>
              <button className="w-100 btn fw-bold bg-g p-3 mx-3" onClick={() => {
                clipboard();
              }}>Copy</button>
              <button className="btn bg-white fs-5 rounded-circle trash" onClick={() => { setNpm(lib) }}>
                <BsTrash />
              </button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
