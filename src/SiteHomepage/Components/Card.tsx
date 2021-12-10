import React from "react";
import "../StyleSheets/Card.css";
import { Csharp } from "@styled-icons/simple-icons/Csharp";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { C } from "@styled-icons/simple-icons/C";
import { Python } from "@styled-icons/simple-icons/Python";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import { Java } from "@styled-icons/simple-icons";

interface Props {
  name?: string;
  description?: string;
  url?: string;
  siteUrl?: string;
  languages?: object;
}

const Card: React.FC<Props> = ({
  name,
  description,
  url,
  siteUrl,
  languages,
}) => {
  const langList = getIcons(languages);

  function getIcons(languages) {
    const languageElements = [];

    if (languages["C#"] > 0)
      languageElements.push(
        <Csharp style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
      );
    if (languages.TypeScript > 0)
      languageElements.push(
        <Typescript
          style={{ width: "25px", height: "25px", marginLeft: "5px" }}
        />
      );
    if (languages.JavaScript > 0)
      languageElements.push(
        <Javascript
          style={{ width: "25px", height: "25px", marginLeft: "5px" }}
        />
      );
    if (languages.Java > 0)
      languageElements.push(
        <Java style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
      );
    if (languages.Python > 0)
      languageElements.push(
        <Python style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
      );
    if (languages.HTML > 0)
      languageElements.push(
        <Html5 style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
      );
    if (languages.CSS > 0)
      languageElements.push(
        <Css3 style={{ width: "25px", height: "25px", marginLeft: "5px" }} />
      );
    if (languages.C > 0)
      languageElements.push(
        <C style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
      );

    return languageElements;
  }

  return (
    <div className="cardcontainer">
      <div className="cardinner">
        <div className="cardtitle">
          {name}
          <div className="carddesc">{description}</div>
        </div>

        <div className="cardtech">
          {langList.map((index, i) => {
            return <div key={i}>{index}</div>;
          })}
        </div>
        <footer className="cardfooter">
          {siteUrl !== "" ? (
            <LinkExternal
              onClick={(event) => (window.location.href = siteUrl)}
              style={{
                width: "25px",
                height: "25px",
                color: "#66FCF1",
                cursor: "pointer",
              }}
            />
          ) : null}
          <GitHubIcon
            onClick={(event) => (window.location.href = url)}
            style={{
              width: "25px",
              height: "25px",
              color: "#66FCF1",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          />
        </footer>
      </div>
    </div>
  );
};

export default Card;
