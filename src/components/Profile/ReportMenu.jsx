import React from "react";
import { Link } from "react-router-dom";
import "./ReportMenu.scss";

const ReportMenu = () => {
  return (
    <>
      <div className="report_details">
        <div className="report_d">
          <div className="report_inner">
            <h1>Report Lost Person</h1>
            <img
              className="logo"
              src="https://www.logomoose.com/wp-content/uploads/2009/10/lost.jpg"
              alt=""
            />
            <Link to="/missingreport" className="more">
              <p style={{ color: "red" }}>Report Lost Person</p>
            </Link>
            <p>
              Citizen can very easliy submit their report of missing person by
              filling the form. Basic information of missing person is required
              to submit the report like Name, Relative name, address, gender Age
              (or age range), Incident details, Incident Place, Date and time of
              Incident of missing person are required at the time of
              registration. A recent picture of missing person is required to
              for it's identification.
            </p>
            {/* <Link to="/missingreport" className="more">
              <p style={{ color: "red" }}>Report Missing Person</p>
            </Link> */}
          </div>
          <div className="report_inner">
            <h1>Found Lost Person</h1>
            <img
              className="logo"
              src="https://www.nerdwallet.com/cdn-cgi/image/quality=85/cdn/banking/logos/Found-logo.png"
              alt=""
            />
            <Link to="/foundmissing" className="more">
              <p style={{ color: "green" }}>Found Lost Person</p>
            </Link>
            <p>
              If you found any person who is missing then you can submit the
              report of found person. Submit your report only if you found the
              missing/lost person. If the lost Person can speak and knows where
              he live's and from where he/she got Missing, you can fill these
              details also so that our team can easliy found their parents or
              relatives. A recent picture of missing person is required to for
              it's identification.
            </p>
            {/* <Link to="/foundmissing" className="more">
              <p style={{ color: "green" }}>Found Missing Person</p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportMenu;
