/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <h1>Page Not Found</h1>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </>
    );
  }
}

export default NotFoundPage;
