import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import "./Proyects.css";
import ProyectCard from "./ProyectCard";
import Loading from "./Loading";

import SerachBar from "./SearchBar";

const Proyects = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const getData = () => {
    setIsLoading(true);
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        if (data.status === 401) {
          setUser({ type: "logout" });
        } else {
          data.json().then((data) => {
            setIsLoading(false);
            setProjects(data);
          });
        }
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
        setProjects({});
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="proyectsColumn">
      <SerachBar></SerachBar>
      <div className="proyectsRow">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          projects.map((project) => (
            <ProyectCard key={project._id} {...project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Proyects;
