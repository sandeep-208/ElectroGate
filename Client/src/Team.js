import React from "react";
import "./Team.css";

import sachin from "./sachin.jpeg";
import sandeep from "./sandeep.jpeg";

function Team() {
  return (
    <div className="team">
      <img
        className="team_image"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cb2b2c4-d98d-4453-a961-4d5fc9e3ebb8/d2vlnw8-b83c6cd5-e0bf-4939-abf7-730be844d123.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjYjJiMmM0LWQ5OGQtNDQ1My1hOTYxLTRkNWZjOWUzZWJiOFwvZDJ2bG53OC1iODNjNmNkNS1lMGJmLTQ5MzktYWJmNy03MzBiZTg0NGQxMjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f426h-H23o9pLr1SotXDxKsV14lvXJBUChafkgmFInI"
        alt=""
      />
      <h1 className="team_heading">We are ElectroGate</h1>
      <div className="team_container">
        <div className="team_row">
          <div className="col-sm">
            <div class="card">
              <img class="card-img-top" src={sandeep} alt="" height="170px" />
              <div className="card-body">
                <h5 className="card-title">Sandeep Kumar</h5>
                <p class="card-text">
                  <br></br>
                  <b>Tech-Stack</b>: HTML, CSS, Bootstrap, ReactJS, NodeJS,
                  Javascript, FireBase, ExpressJS
                </p>
                <div className="card-pos1">
                  <h5 className="card-pos">Full Stack Developer</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div class="card">
              <img class="card-img-top" src={sachin} alt="" height="170px" />
              <div class="card-body">
                <h5 class="card-title">Sachin Rawat</h5>
                <p class="card-text">
                  <br></br>
                  <b>Tech-Stack</b>: HTML, CSS, ReactJS, Javascript, Bootstrap,
                  Material-UI
                </p>
                <div className="card-pos1">
                  <h5 className="card-pos">Frontend Developer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
