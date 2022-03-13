import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlusSquare, BsTrash } from "react-icons/bs";
import { FiMinusSquare } from "react-icons/fi";
import Libraries from "../../Data/Libraries";
import ToolPageWrapper from "./ToolPageWrapper";

function ToolPage() {
  const [npm, setNpm] = useState(Libraries);

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
      <ToolPageWrapper
        // style="overflow-x: hidden"
        className="container-fluid px-lg-5 over px-1 py-3"
      >
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
                  setNpm(Libraries);
                }}
              >
                <BsTrash />
              </button>
              {/* <button
                className="btn fw-bold rounded-circle trash ms-3 bg-white"
                onClick={() => {
                  setAll();
                }}
              >
                FAQ
              </button> */}
            </div>
          </div>
        </div>
      </ToolPageWrapper>
    </>
  );
}

export default ToolPage;
