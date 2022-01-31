import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../StyleSheets/Projects.css";
import Particle from "../../Shared/Particle";
import axios from "axios";
import { Box, CircularProgress } from "@material-ui/core";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/").then((res) => {
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
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                width: "50vw",
              }}
            >
              <CircularProgress style={{ width: "75px", height: "75px" }} />
            </Box>
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
