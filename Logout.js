import React from 'react';


const Logout = () => {
    const handleLogout = async () => {
      try {
      
        // Make a request to the server to clear the session
        const response = await fetch("http://localhost:3001/logout", {
          method: 'POST',
          credentials: 'include', 
        });
  
        if (response.ok) {
          // Redirect to the login page or perform any other actions after successful logout
          window.location.href = '/login';
        } else {
          // Handle error (e.g., show an error message)
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };
  
    return (
        <h1>
            you are about to quit , click here to confirm<button onClick={handleLogout} >Log out</button>
        </h1>

    );
  };
  
  export default Logout;