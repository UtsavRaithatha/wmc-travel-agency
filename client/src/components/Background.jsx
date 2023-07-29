import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../assets/css/styles.css";

const Background = () => {

    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <div className="Background" style={{ position: "absolute", zIndex: -1 }}>
            <Particles

                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={
                    {
                        background: {
                            color: {
                                value: "#10141b"
                            }
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectOn: "canvas",
                            events: {
                                resize: true
                            }
                        },
                        particles: {
                            color: {
                                value: "9fafca"
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1080
                                },
                                limit: 0,
                                value: 400
                            },
                            opacity: {
                                animation: {
                                    enable: true,
                                    minimumValue: 0.05,
                                    speed: 2,
                                    sync: false
                                },
                                random: {
                                    enable: true,
                                    minimumValue: 0.05
                                },
                                value: 1
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                random: {
                                    enable: true,
                                    minimumValue: 0.5
                                },
                                value: 1
                            }
                        }
                    }
                } />
        </div>
    );
};

export default Background;