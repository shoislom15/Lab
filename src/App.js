import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlusSquare, BsTrash } from "react-icons/bs";
import { FiMinusSquare } from "react-icons/fi";
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
      img: "https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg",
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
      isChoosen: false,
    },
    {
      name: "Chakra",
      text: "@chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5",
      img: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      isChoosen: false,
    },
    {
      name: "Font Awesome",
      text: "--save @fortawesome/fontawesome-svg-core@next --save @fortawesome/free-solid-svg-icons@next --save @fortawesome/free-regular-svg-icons@next ",
      img: "https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png",
      isChoosen: false,
    },
    {
      name: "React Icons",
      text: "react-icons --save",
      img: "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
      isChoosen: false,
    },
    {
      name: "Tailwind css",
      text: "install -D tailwindcss postcss autoprefixer npx tailwindcss init",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      isChoosen: false,
    },
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
    t.forEach((e) => {
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
  };

  return (
    <>
      <div className="container-fluid px-lg-5 px-1 py-3">
        <div className="row">
          {npm.map((e, i) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 px-3 py-1">
                  <button
                    onClick={() => {
                      setN(i);
                    }}
                    key={e.toString()}
                    className="btn w-100 bg-blue text-dark fw-bold d-flex rounded-15 h-100 d-flex align-items-center p-2"
                  >
                    <div
                      className="img w-22 me-3 bg-white"
                      style={e.bg && { backgroundColor: `${e.bg}` }}
                    >
                      <img className="img-fluid" src={e.img} alt="" />
                    </div>
                    <div className="d-flex w-75 align-items-center justify-content-between">
                      <span className="fs-6 m-0 text-white">{e.name}</span>
                      <div className="div fs-4 me-2 text-white">
                        {!e.isChoosen ? <BsPlusSquare /> : <FiMinusSquare />}
                      </div>
                    </div>
                  </button>
                </div>
              </>
            );
          })}
          <div className="row copy w-100 d-flex align-items-center justify-content-center p-0">
            <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 box d-flex align-items-center m-0 p-3 px-4">
              <button
                className="btn fw-bold rounded-circle trash bg-white"
                onClick={() => {
                  setAll();
                }}
              >
                ALL
              </button>
              <button
                className="w-100 btn fw-bold bg-g mx-3 p-3"
                onClick={() => {
                  clipboard();
                }}
              >
                Copy
              </button>
              <button
                className="btn fs-5 rounded-circle trash bg-white"
                onClick={() => {
                  setNpm(lib);
                }}
              >
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
