import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import DeleteModal from './modalDelete';
/*
change the state into 2 state
fetch data from server
return {...preState, data}
*/

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MaterialTableDemo(props) {
  const {token} = props;

  const classes = useStyles();

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

  const [state, setState] =useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  // fetch data from server Heroku

  useEffect(() => {
    // console.log("I am usee effect") // Test use effect
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

  // console.log("render...");   // test whether the web renders or not

  // Edit data from server 
  // CODE GOES HERE: (just for fun)


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
                  axios.post("https://menurutgersbackend.herokuapp.com/food", 
                  newData,
                  {headers: {authorization: token}})
                      .then(respone => console.log(respone))
                      .catch(e => console.log(e)) // update data on server
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
                    const id = oldData._id;
                    // console.log(state);
                    // console.log(oldData._id);
                    // console.log(newData._id);
                    axios.patch("https://menurutgersbackend.herokuapp.com/food/" + id, 
                    newData,
                    {headers: {authorization: token}})
                    .then(respone => console.log(respone))
                    .catch(e => console.log(e)) // update data on server
                   
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
                  const id = oldData._id;
                  console.log(state);
                  axios.delete("https://menurutgersbackend.herokuapp.com/food/" + id, 
                    {headers: {authorization: token}})
                    .then(respone => console.log(respone))
                    .catch(e => console.log(e)) // update data on server

                  return data;
                });
              }, 600);
            }),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => setModalDeleteShow(true)}
      >
        Delete All
      </Button>
      <DeleteModal 
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
        onConfirm={() => {
          setState([])
          setModalDeleteShow(false)}}/>
    </div>
  );
}
