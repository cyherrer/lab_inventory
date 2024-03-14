import React from "react";
import { NavbarComplete } from "./Navbar2";
import "../styles/SiPage.css";
import data from "../data.json";
import "@fontsource/poppins";

export const SiComponent = () => {
  const headers = [
    "Unit Name/Visual",
    "Item",
    "Description",
    "Project",
    "MCode",
    "QDF",
    "Part Type",
    "Location",
    "Owner",
    "Notes",
    "Actions",
  ];

  return (
    <>
      <NavbarComplete />
      <div className="mainPage">
        <div className="container1">
          <div className="search1">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="ID/ITEM/Project/QDF"
            />
            <button className="btn btn-primary">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="content">
            <table className="table table-striped">
              <thead>
                <tr>
                  {headers.map((header, i) => (
                    <th key={i} className={i === 2 ? "largo" : ""}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr>
                    <td>{row["UNIT NAME/VISUALID"]}</td>
                    <td>{row.ITEM}</td>
                    <td>{row["DESCRIPTION OF ITEM"]}</td>
                    <td>{row.PROJECT}</td>
                    <td>{row.MCODE}</td>
                    <td>{row.QDF}</td>
                    <td>{row["PART TYPE"]}</td>
                    <td>{row.LOCATION}</td>
                    <td>{row.OWNER}</td>
                    <td>{row.NOTES}</td>
                    <td>
                      <div className="icons-table">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x-lg"
                          viewBox="0 0 16 16"
                    
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
