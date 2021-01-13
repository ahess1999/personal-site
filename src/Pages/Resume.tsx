import React from 'react';
import '../StyleSheets/Resume.css';

const Resume: React.FC = () => {
    return (
        <div className="resumecontainer">
            <object data='./AustinHessResume.pdf' width="100%" height="700" type='application/pdf'>

            </object>
        </div>
    )
}

export default Resume
