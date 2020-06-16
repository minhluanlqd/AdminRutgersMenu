import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
/*
change the state into 2 state
fetch data from server
return {...preState, data}
*/
export default function MaterialTableDemo() {
  const [columns, setCol] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Information", field: "info" },
      { title: "Image", field: "img", type: "string" },
      {
        title: "Campus",
        field: "campus",
        lookup: {
          busch: "Busch",
          livingston: "Livingston",
          collegeAve: "College Avenue",
          cookdouglas: "Cook/Douglas",
        },
      },
    ],
  });

  /*const [state, setState] = React.useState([
    {
      name: "Pizza",
      info: "280g",
      image:
        "https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg",
      campus: 1,
    },
    {
      name: "Cupcake",
      info: "28g",
      image:
        "https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg",
      campus: 4,
    },
  ]);*/
   const [state, setState] =useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    console.log("I am usee effect")
    const fetchData = async () => {
      //let result = await axios.get('http://localhost:5000/food');
      try {
        let result = await axios.get(
          "https://menurutgersbackend.herokuapp.com/food"
        );
        setState(result.data.data);
        console.log(result)
        //setShouldFetch(false)
      } catch (e) {
        if (e) console.log(e);
      }
    };
    if (shouldFetch) {
      fetchData();
      setShouldFetch(false)
    
    }
    else {
      console.log(shouldFetch)
    }
  }, [state.length]);
  console.log("render...");
  return (
    <div>
      <MaterialTable
        title="Rutgers Menu"
        columns={columns.columns}
        data={state}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState];
                  console.log(newData);
                  data.push(newData);
                  console.log(state);

                  return data;
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState];
                    data[data.indexOf(oldData)] = newData;
                    console.log(state);
                    return data;
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState];
                  data.splice(data.indexOf(oldData), 1);
                  console.log(state);
                  return data;
                });
              }, 600);
            }),
        }}
      />
      <button>Save</button>
    </div>
  );
}
