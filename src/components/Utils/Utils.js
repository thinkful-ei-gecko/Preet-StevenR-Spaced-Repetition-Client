import React from 'react';
//keyboard accessibility
export function Loader(props) {
  return (
    <div className={props.className + ' lds-ripple'}>
      <div></div>
      <div></div>
    </div>
  );
}