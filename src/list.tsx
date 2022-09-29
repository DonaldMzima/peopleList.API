import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Link } from '@chakra-ui/react'

type listPeople = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;                                 
  species: any[];
  starships: string[];
  url: string;
};

const PeopleList = () => {
  const [list, setList] = useState<null | listPeople[]>(null);

  const baseURL = "https://swapi.dev/api/people";

  const getData =() =>{
    try {
      axios.get(`${baseURL}`).then((response) => {
        if(response.status === 200){
          setList(response.data.results);
          console.log("checking a response", response);
        } 
       
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  // useEffect(() => {
  //   try {
  //     axios.get(`${baseURL}`).then((response) => {
  //       if(response.status === 200){
  //         setList(response.data.results);
  //         console.log("checking a response", response);
  //       } 
       
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }, []);

  
  return (
    <div>
      <h1 style={{ textAlign: "center" ,boxShadow: "0px 5px 100px -7px rgba(29, 60, 55, 0.95)"}} >People List:</h1>
      
      <Button onClick={getData} colorScheme ='blue'>Button</Button>
     
      {list?.map((people: listPeople) => {
        console.log("checking birth year", people);
       
        return (

          
          <div key={people.birth_year} style={{ textAlign: "center" }}>
            <Link color='teal.500' href='#' >name:{people.name}</Link>
            <p>birth year:{people.eye_color} </p>-
            <p>height:{people.gender}</p>-
            <p>height:{people.hair_color}</p>-<p>hair color:{people.height}</p>-
            <p>gender:{people.mass}</p>-
            <p>skin color:{people.skin_color}</p>-
          </div>
        );
      })}
    </div>
  );
};

export default PeopleList;