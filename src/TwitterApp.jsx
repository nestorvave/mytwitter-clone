import React from "react";
import AppRouter from "./Routers/AppRouter";
import "./styles/styles.scss";
import { DataProvider } from './Context/DataProvider'
const TwitterApp = () => {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
};

export default TwitterApp;
