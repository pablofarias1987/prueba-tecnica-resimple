import React, { useEffect, useState } from "react"
import * as XLSX from "xlsx";
import Enterprise from "./Enterprise.css";

function useDatos() {
  const [enterprise, setEmployees] = useState([])

  useEffect(() => {
    fetch("json/enterprise.json")
      .then(response => response.json())
      .then(input => {
        setEmployees(input)
      })
  }, [])

  return enterprise
}

export default function Datos() {
  const [data, setData] = useState([]);
  
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  const enterprise = useDatos()

  return (
    <div className="container mt-5" align="center">
      
      <h4>List of Employees</h4>
        
      <div className="row">

        <div className="col-md-12">

          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID EMPRESA</th>
	              <th scope="col">NOMBRE_EMPRESA</th>
              </tr>
            </thead> 
            <tbody>

            {enterprise.map(item => (

              <tr key={item.ID_EMPRESA}>
	              <td>{item.ID_EMPRESA}</td>
	              <td>{item.NOMBRE_EMPRESA}</td>
              </tr>

            ))}

            </tbody>

          </table>

        </div>


    <input 
      type="file" 
      accept=".xlsx, .xls" 
      onChange={handleFileUpload} 
    />

    {data.length > 0 && (
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}

    <br /><br />
    ... Employees ...
  </div>


      <section className="mt-5 mb-5">
        <div align="center">
            Desarrollado por <a href="https://www.linkedin.com/in/pablo-farias-gallardo-3355a8b8/" target="_blank">Pablo Farias Gallardo</a>
        </div> 
      </section>
        
    </div>

  )
}