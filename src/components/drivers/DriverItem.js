import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteDriver } from "../../store/actions/driverActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DriverItem = ({ driver: { id, firstName, lastName }, deleteDriver }) => {
  const onDelete = () => {
    deleteDriver(id);
    M.toast({ html: `${firstName} ${lastName} removed from drivers` });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">remove driver</i>
        </a>
      </div>
    </li>
  );
};

DriverItem.propTypes = {
  driver: PropTypes.object.isRequired,
  deleteDriver: PropTypes.func.isRequired
};

// We are not getting/pulling anything from state so null
export default connect(null, { deleteDriver })(DriverItem);
