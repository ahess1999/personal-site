import React from 'react'
import Particles from 'react-particles-js';
import '../StyleSheets/Particle.css';

const Particle = () => {
    return (
        <div style={{position: 'absolute', zIndex: 0, height: '100vh', width: '100vw'}}>
        <Particles params = {{
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 4500,
                    }
                },
            },
        }}> </Particles>
        </div>
    )
}

export default Particle
