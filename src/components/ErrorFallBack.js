import React from "react";

const ErrorFallBack = ({ error }) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};
export default ErrorFallBack;
