import React from "react";
import { HOMEPAGE_NAV_COLOR, SPOTIFY_NAV_COLOR } from "./Constants";

interface Props {
  colorTheme: any;
}

const GlobalNavBar: React.FC<Props> = ({ colorTheme }) => {
  function getColorTheme(colorTheme: string): string {
    if (colorTheme === "HOMEPAGE") return HOMEPAGE_NAV_COLOR;
    if (colorTheme === "SPOTIFY") return SPOTIFY_NAV_COLOR;
  }

  const containerStyles: Object = {
    display: "flex",
    position: "fixed",
    right: "0",
    top: "20px",
    fontSize: "15px",
  };

  const itemStyles: Object = {
    paddingRight: "20px",
    color: getColorTheme(colorTheme),
  };

  return (
    <div style={containerStyles}>
      <a href="/" style={itemStyles}>
        Home
      </a>
    </div>
  );
};

export default GlobalNavBar;
