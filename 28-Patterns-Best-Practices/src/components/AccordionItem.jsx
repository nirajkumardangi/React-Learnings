import React from 'react';

export default function AccordionItem({ title, className, children }) {
  return (
    <li className={className}>
      <h3>{title}</h3>
      <div>{children}</div>
    </li>
  );
}
