//fonction pour naviguer entre les stack screen
import * as React from 'react';


export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
    }
