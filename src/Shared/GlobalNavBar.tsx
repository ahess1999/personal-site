import React from "react";

interface Props {
  colorTheme: any;
}

const GlobalNavBar: React.FC<Props> = ({ colorTheme }) => {
  function getColorTheme(colorTheme: string): string {
    if (colorTheme === "HOMEPAGE") {
      return "#66FCF1";
    }
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
      <div style={itemStyles}>/</div>
      <a href="/" style={itemStyles}>
        Spotify
      </a>
    </div>
  );
};

export default GlobalNavBar;
