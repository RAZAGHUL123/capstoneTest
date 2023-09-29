import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  // State to hold the user's profile data
  const [userProfile, setUserProfile] = useState(null);

  // Get the user ID from the URL using useParams
  const { userId } = useParams();

  // Function to fetch the user's profile data by userId
  const fetchUserProfile = async () => {
    try {
      // Replace this with your API endpoint for fetching a user's profile by ID
      const response = await fetch(`https://your-api-url.com/users/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        setUserProfile(userData);
      } else {
        console.error('Failed to fetch user profile data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch the user's profile data when the component mounts
  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  return (
    <div className="container mt-5">
      {userProfile ? (
        <div>
          <h1>{userProfile.name}'s Profile</h1>
          <p>Email: {userProfile.email}</p>
          {/* Additional user profile details can be displayed here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
