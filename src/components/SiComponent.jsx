import React from "react";
import { NavbarComplete } from "./Navbar2";
import "../styles/SiPage.css";
import data from "../data.json";

export const SiComponent = () => {
  const headers = [
    "Unit Name/Visual",
    "Item",
    "Project",
    "MCode",
    "QDF",
    "Part Type",
    "Location",
    "Owner",
    "Notes",
  ];

  return (
    <>
      <NavbarComplete />
      <div className="mainPage">
        <div className="container">
          <div className="content">
            <table className="table table-striped">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr>
                    <td>{row["UNIT NAME/VISUALID"]}</td>
                    <td>{row.ITEM}</td>
                    <td>{row.PROJECT}</td>
                    <td>{row.MCODE}</td>
                    <td>{row.QDF}</td>
                    <td>{row["PART TYPE"]}</td>
                    <td>{row.LOCATION}</td>
                    <td>{row.OWNER}</td>
                    <td>{row.NOTES}</td>
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
