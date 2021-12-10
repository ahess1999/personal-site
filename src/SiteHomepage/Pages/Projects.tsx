import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../StyleSheets/Projects.css";
import Particle from "../Components/Particle";
import axios from "axios";
import { LinearProgress } from "@material-ui/core";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/github/repos").then((res) => {
      setProjects(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Particle />
      <div className="projcontainer">
        <h1 id="Projects" className="ph1">
          My work
        </h1>
        <div className="carouselcont">
          {loading ? (
            <LinearProgress style={{ width: "950px" }} />
          ) : (
            projects.map((index, i) => {
              return (
                <Card
                  name={index.name}
                  description={index.description}
                  url={index.homepage}
                  siteUrl={index.html_url}
                  languages={index.languages}
                  key={i}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
