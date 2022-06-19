import React from "react";
import PropTypes from "prop-types";

const ComposantProfile = (props) => {
  return (
    <div
      style={{ display: "block", textAlign: "center", margin: "0 25px 0 25px" }}
    >
      {props.children}
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          width: "300px",
          height: "150px",
        }}
      >
        Full Name: {props.name}
        <br />
        job: {props.job}
        <br />
        City: {props.city} <br />
        <div style={{display:"flex",justifyContent:"left",marginLeft:"75px"}}> <img style={{ height: "25px", width: "25px",marginRight:"5px"}}
          src="data:image/png;base64,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"
          alt=""/> : {props.nubphone} </div>
      </p>
    </div>
  );
};
ComposantProfile.defaultProps = {
  name: `name & Surname`,
  job: `Occupation`,
  city: `The city you live in`,
  nubphone: `-- --- ---`
};
ComposantProfile.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  cit: PropTypes.string,
  nubphone: PropTypes.number,
};

export default ComposantProfile;
