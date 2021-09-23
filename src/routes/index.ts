import React from "react";
import Contacts from "../pages/contacts/contacts";
import Main from "../pages/main/main";


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    Main='/',
    Contacts='/contacts'
}

export const routes: IRoute[] = [
    { path: RouteNames.Main, component: Main, exact: true },
    { path: RouteNames.Contacts, component: Contacts, exact: true },
];