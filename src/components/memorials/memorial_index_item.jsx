import React from 'react';

export const MemorialIndexItem = ({formatDate, memorial}) => {
  return (
    <li>
      <p>Memorial Creation Date: {formatDate(memorial.creationDate) + " "}</p>
      <p>Last Name: {memorial.lastName}</p>
      <p>First Name: {memorial.firstName}</p>
    </li>
  );
}