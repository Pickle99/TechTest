import React from 'react';
import User from './user';
const Users = ({ users }) => {
  return (
    <section className='forea'>
      <div className='header'>
        <h2>GitHub users</h2>
      </div>
      <div className='diver'>
        <div className='diver-2'>
          {users.map((user) => {
            return <User key={user.id} {...user}></User>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Users;
