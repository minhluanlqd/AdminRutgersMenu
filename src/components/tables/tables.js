import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Information', field: 'info' },
      { title: 'Image', field: 'image', type: 'string' },
      {
        title: 'Campus',
        field: 'campus',
        lookup: { 1: 'Busch', 2: 'Livingston', 3: 'College Avenue', 4: 'Cook/Douglas' },
      },
    ],
    data: [
      { 
        name: 'Pizza', 
        info: '280g', 
        image: "https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg", 
        campus: 1 
      },
      {
        name: 'Cupcake', 
        info: '28g', 
        image: "https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg", 
        campus: 4
      },
    ],
  });

  return (
    <MaterialTable
      title="Rutgers Menu"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}