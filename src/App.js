import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlusSquare, BsTrash } from "react-icons/bs";
import { FiMinusSquare } from "react-icons/fi";
import reactSpring from "../src/img/reactSpring.png";

function App() {
  const lib = [
    {
      name: "MUI",
      text: "@mui/material @emotion/react @emotion/styled",
      img: "https://mui.com/static/logo.png",
      isChoosen: false,
    },
    {
      name: "MUI | Icons",
      text: "@mui/icons-material",
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
    {
      name: "Chart Js",
      text: "chart.js",
      img: "https://www.chartjs.org/docs/latest/favicon.ico",
      isChoosen: false,
    },
    {
      name: "Chart Js 2.0",
      text: "--save chart.js react-chartjs-2",
      img: "https://raw.githubusercontent.com/reactchartjs/react-chartjs-2/HEAD/website/static/img/logo.svg",
      isChoosen: false,
    },
    {
      name: "APEXCHARTS",
      text: "--save react-apexcharts apexcharts",
      img: "https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg",
      className: "pb-2",
      isChoosen: false,
    },
    {
      name: "Ant Design",
      text: "antd",
      img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      className: "",
      isChoosen: false,
    },
    {
      name: "Ant Design | Icons",
      text: "--save @ant-design/icons",
      img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      className: "",
      isChoosen: false,
    },
    {
      name: "Ant Design | Charts",
      text: "@ant-design/charts --save",
      img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      className: "",
      isChoosen: false,
    },
    {
      name: "Redux",
      text: "redux react-redux",
      img: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      className: "",
      isChoosen: false,
    },
    {
      name: "Firebase",
      text: "firebase",
      img: "http://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
      className: "p-1",
      isChoosen: false,
    },
    {
      name: "Axios",
      text: "axios",
      img: "https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png",
      className: "p-2",
      isChoosen: false,
    },
    {
      name: "Sass",
      text: "-g sass",
      img: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      className: "",
      isChoosen: false,
    },
    {
      name: "Swiper Js",
      text: "swiper",
      img: "https://cms-assets.tutsplus.com/uploads/users/780/posts/39427/image-upload/68747470733a2f2f6769746875622e7375726d6f6e2e6d652f696d616765732f636f6d6d6f6e2f7377697065722d6c6f676f2e737667.svg",
      className: "",
      isChoosen: false,
    },
    {
      name: "React Hook Form",
      text: "react-hook-form",
      img: `data:image/jpeg;base64,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`,
      className: "",
      isChoosen: false,
    },
    {
      name: "React Spring",
      text: "react-spring",
      img: reactSpring,
      className: "p-1",
      isChoosen: false,
    },
    {
      name: "Lodash",
      text: "--save lodash",
      img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Lodash.svg",
      className: "p-1",
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
                      className={`img w-22 me-3 bg-white ${e?.className}`}
                      style={e.bg && { backgroundColor: `${e.bg}` }}
                    >
                      <img className={`img-fluid`} src={e.img} alt="" />
                    </div>
                    <div className="d-flex w-75 align-items-center justify-content-between">
                      <span className="fs-6 m-0 font-normal text-white">
                        {e.name}
                      </span>
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
