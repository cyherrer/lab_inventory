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
  ];

  return (
    <>
      <NavbarComplete />
      <div className="mainPage">
        <div className="container1">
        <div className="search1">
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ID/ITEM/Project/QDF"/>
        <button className="btn btn-primary"><i class="bi bi-search"></i></button>
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
