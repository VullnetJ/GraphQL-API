import React from "react";
import "./App.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const continentquery = gql`
    {
      countries {
        code
        name
        continent {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(continentquery);

  if (loading)
    // If still loading
    return "Loading...";
  if (error)
    // If something goes wrong
    return `Error ${error.message}`;

  return (
    <div className="App">
      <table>
          <thead>
            <tr>
            <th>Code</th><th>Country</th><th>Continent</th>  
          </tr>   
          </thead>      
        <tbody>
          {data.countries.map((city, index) => (
            <tr key={index}>
              <td>{city.code}</td>
              <td>{city.name}</td>
              <td>{city.continent.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
