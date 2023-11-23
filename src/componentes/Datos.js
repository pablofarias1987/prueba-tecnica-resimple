import React, { useEffect, useState } from "react"
import * as XLSX from "xlsx";
import Style from "./Enterprise.module.css";

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

  return (<body>
    <div className={Style.left_mountain}></div>
    <div className={Style.back_mountain}></div>
    <div className={Style.sun}></div>

    
    <div class="container" align="center">

      <h1>List of Employees JSON</h1>
        
      <div className="row">

        <div className="col-md-12">

          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID ENTERPRISE</th>
	              <th scope="col">NAME ENTERPRISE</th>
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

    <div className={Style.frame}>
      <div className={Style.canvas}>
        <div className={Style.one}></div>
        <div className={Style.two}></div>
        <div className={Style.three}></div>
      </div>
    </div>
    <input 
      type="file" 
      accept=".xlsx, .xls" 
      onChange={handleFileUpload} 
    />
   
      <h1>List of Employees Excel</h1>
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


  </div>
        
    </div>
    <footer>
        <address>
    <section className="mt-5 mb-5">
        <div align="center">

        Developed by - <a href="https://www.linkedin.com/in/pablo-farias-gallardo-3355a8b8/" target="_blank">Pablo Farias Gallardo</a><br/>
          santiago,
          chile
         
      </div> 
      </section>
      </address>
      </footer>
      </body>
  )
}