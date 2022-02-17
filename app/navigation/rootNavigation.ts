import React from 'react';
import { Navigation } from '../types';

export const navigationRef = React.createRef<Navigation>();

export const navigate = (name: string, params = {}) =>
    navigationRef.current?.navigation.navigate(name, params);
