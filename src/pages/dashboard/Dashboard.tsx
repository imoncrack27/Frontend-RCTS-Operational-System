import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard">
      <div className="title-dashboard">
        <h1>Total Appointment Status</h1>
        <div className="dashboard-date">
          <h5>
            <FontAwesomeIcon
              className="icon-less"
              icon={faLessThan as IconProp}
            />
            April 2, 2024
            <FontAwesomeIcon
              className="icon-great"
              icon={faGreaterThan as IconProp}
            />
          </h5>
        </div>
      </div>

      <div className="box">
        <div className="box1">
          <p>
            95% <span className="breakpoint">Completed</span>
          </p>

          <p>
            89% <span className="breakpoint">Upcoming</span>
          </p>

          <p>
            75% <span className="breakpoint">Pending</span>
          </p>

          <p>
            65% <span className="breakpoint">Reschedule</span>
          </p>

          <p>
            50% <span className="breakpoint">Cancelled</span>
          </p>
        </div>

        <div className="box2">
          <h2>New Employee's</h2>Box 2
        </div>
        <div className="box3">Box 3</div>

        <div className="box4">
          <h2>Total Employee's</h2>Box 4
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
