import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { token } = useParams();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`/api/user/${token}`)
      .then(response => {
        setName(response.data.name);
      })
      .catch(error => {
        setError('Invalid or expired token');
      });
  }, [token]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <h1>Welcome, {name}!</h1>
      )}
    </div>
  );
};

export default UserProfile;
