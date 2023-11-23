
import React, { useEffect, useState } from "react"
import Enterprise from "./Enterprise.css";

function useEmployees() {

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

export default function Employees() {

	const enterprise = useEmployees()

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

	              <tr key={item.id}>
	                <td>{item.id}</td>
	                <td>{item.nombre}</td>
	              </tr>

	            ))}

	            </tbody>

	          </table>

	        </div>

	      </div>

	      <section className="mt-5 mb-5">
	        <div align="center">
	            Desarrollado por <a href="http://www.nubecolectiva.com" target="_blank">Nube Colectiva</a>
	        </div> 
	      </section>
        
    	</div>

	)

}
