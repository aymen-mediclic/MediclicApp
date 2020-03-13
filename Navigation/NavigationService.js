
import * as React from 'react';
import { DrawerActions } from 'react-navigation';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
    }
