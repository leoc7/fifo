import React from 'react';

export interface IUser {
    _id: string;
    shortName: string;
    name: string;
    email: string;
    imageURL?: string;
    isAdmin: boolean;
}

export const UserContext = React.createContext<IUser | null>(null);
