import React from 'react';

const Popupmodal = ({ workshop, onClose }) => {
  return (
    <div className="modal" id={`myModal-${workshop._id}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Today's List</h4>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <ol type="1">
              {workshop.studentname.map((booking, i) => (
                <li key={i}>
                  Name: {booking} - College: {workshop.studentcollege[i]}
                </li>
              ))}
            </ol>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupmodal;
