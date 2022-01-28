import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeApp from "./ThemeApp";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeApp />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
