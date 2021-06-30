import React from "react";
import PropTypes from "prop-types";

function PublicationItem({ className, id, title, message, onDelete }) {

  const handleDeleteClick = () => {
    onDelete(id);
  }

  return (
    <div className={className}>
      <div>
        <strong>{title}</strong>
        <div className="mx-1 btn btn-danger btn-sm" onClick={handleDeleteClick}>Delete</div>
      </div>
      <div>{message}</div>
    </div>
  );
}

PublicationItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PublicationItem;
