import React from 'react';

function Logout() {
  // Function to handle user logout
  const handleLogout = () => {
    // Clear the JWT token from local storage (or your chosen storage mechanism)
    localStorage.removeItem('token'); // Replace with your token storage key

    // Redirect the user to the login page or any other appropriate page
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div className="container mt-5">
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
