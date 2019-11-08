import React from "react";

export const MemorialIndexItem = ({ formatDate, memorial }) => {
  return (
    <li className="sorted-list-item">
      <p className="sorted-list-item-creationDate">
        <b className="mobile-only-tags">Created On: </b>{" "}
        {formatDate(memorial.creationDate) + " "}
      </p>
      <p className="sorted-list-item-lastName">
        <b className="mobile-only-tags">Last Name: </b> {memorial.lastName}
      </p>
      <p className="sorted-list-item-firstName">
        <b className="mobile-only-tags">First Name: </b> {memorial.firstName}
      </p>
    </li>
  );
};
