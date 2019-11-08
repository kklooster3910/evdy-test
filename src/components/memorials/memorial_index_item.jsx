import React from "react";

export const MemorialIndexItem = ({ formatDate, memorial }) => {
  return (
    <li className="sorted-list-item">
      <p className="sorted-list-item-creationDate">
        Memorial Creation Date: {formatDate(memorial.creationDate) + " "}
      </p>
      <p className="sorted-list-item-lastName">
        Last Name: {memorial.lastName}
      </p>
      <p className="sorted-list-item-firstName">
        First Name: {memorial.firstName}
      </p>
    </li>
  );
};
