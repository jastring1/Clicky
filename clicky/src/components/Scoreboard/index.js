import React from "react";
import "./style.css";

function Scoreboard(props){
    return(
        <div className="jumbotron text-center">
            <div className="jumbotron-content">
                <h2>Clicky Game!</h2>
                <p>Click on an image to score a point, dont click the same image twice!</p>
                <hr />
                <div className="navbar container-fluid text-center">
                    <div className="scoreboard text-center">
                        <h3 className="d-inline">
                            {" "}
                            <span>
                                {" "} Score: {props.currentScore} {" "}
                            </span>
                            <span>
                                High: {props.highScore}
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard;