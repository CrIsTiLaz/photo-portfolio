import React from "react";

const EmailTemplate = ({ firstName }) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>We're glad to have you with us.</p>
    </div>
  );
};

export default EmailTemplate;
