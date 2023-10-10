import React from 'react';
import { useState } from 'react';

export const ActiveRestaurantIndexContext = React.createContext();

export const ActiveRestaurantIndexContextProvider = ({ children }) => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return <ActiveRestaurantIndexContext.Provider value={{ activeRestaurantIndex, setActiveRestaurantIndex }}>{children}</ActiveRestaurantIndexContext.Provider>;
}