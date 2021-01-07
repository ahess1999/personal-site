import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FaceBookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import '../StyleSheets/ContactTag.css';

const useStyles = makeStyles({ 
    clickableIcon: {
        '&:hover': {
            scale: 1.1,
        },
        color: '#45A29E',
    },
});

const ContactTag: React.FC = () => {
    const styles = useStyles();
    return (
        <div className="tagcontainer">
            <div>Email&nbsp;</div>
            <EmailIcon onClick={event =>  window.location.href="mailto:ahess@ksu.edu"} className={styles.clickableIcon}/>
            <div>GitHub&nbsp;</div>
            <GitHubIcon onClick={event =>  window.location.href='https://github.com/ahess1999'} className={styles.clickableIcon}/>
            <div>FaceBook&nbsp;</div>
            <FaceBookIcon onClick={event =>  window.location.href='https://www.facebook.com/austin.hess.507'} className={styles.clickableIcon}/>
        </div>
    )
}

export default ContactTag