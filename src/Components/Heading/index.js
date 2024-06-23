import React from "react";
import PropTypes from "prop-types";

const Heading = (props) => {
  const { title, className } = props;

  return (
    <h2 className={`heading my-2 my-md-3 my-lg-5 text-center ${className}`} dangerouslySetInnerHTML={{ __html: title }}></h2>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
