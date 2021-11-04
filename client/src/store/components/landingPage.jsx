import React from 'react';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Countries Hub</h1>
      <Link to="/home">
        <input type="submit" value="GO!" />
      </Link>
    </div>
  );
}
