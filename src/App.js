import React, { useState, useEffect } from 'react';
import Loading from './loading';
import Users from './users';
const url = 'https://api.github.com/users';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const users = await response.json();
      console.log(users);
      setLoading(false);
      setUsers(users);
    } catch (error) {
      setLoading(false);
      console.log('there is an error');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default App;
