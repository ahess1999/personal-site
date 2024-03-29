import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceBookIcon from "@material-ui/icons/Facebook";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "../StyleSheets/ContactTag.css";

const useStyles = makeStyles({
  clickableIcon: {
    "&:hover": {
      scale: 1.1,
    },
    color: "#45A29E",
  },
});

const ContactTag: React.FC = () => {
  const styles = useStyles();

  return (
    <div className="tagcontainer">
      <a href="AustinHessResume.pdf">
        <MenuBookIcon className={styles.clickableIcon} />
      </a>

      <a href="AustinHessResume.pdf" style={{ textDecoration: "none" }}>
        <div className="contactlabel">Resume</div>
      </a>

      <Link to="">
        <EmailIcon
          onClick={(event) => (window.location.href = "mailto:ahess@ksu.edu")}
          className={styles.clickableIcon}
        />
      </Link>

      <Link to="" style={{ textDecoration: "none" }}>
        <div
          onClick={(event) =>
            (window.location.href = "mailto:austinhess1999@gmail.com")
          }
          className="contactlabel"
        >
          Email&nbsp;
        </div>
      </Link>

      <Link to="">
        <GitHubIcon
          onClick={(event) =>
            (window.location.href = "https://github.com/ahess1999")
          }
          className={styles.clickableIcon}
        />
      </Link>

      <Link to="" style={{ textDecoration: "none" }}>
        <div
          onClick={(event) =>
            (window.location.href = "https://github.com/ahess1999")
          }
          className="contactlabel"
        >
          GitHub&nbsp;
        </div>
      </Link>

      <Link to="">
        <FaceBookIcon
          onClick={(event) =>
            (window.location.href = "https://www.facebook.com/austin.hess.507")
          }
          className={styles.clickableIcon}
        />
      </Link>

      <Link to="" style={{ textDecoration: "none" }}>
        <div
          onClick={(event) =>
            (window.location.href = "https://www.facebook.com/austin.hess.507")
          }
          className="contactlabel"
        >
          FaceBook&nbsp;
        </div>
      </Link>
    </div>
  );
};

export default ContactTag;
