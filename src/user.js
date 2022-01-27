import React, { useState, useEffect } from 'react';

const User = ({ login, avatar_url, html_url }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div className='user'>
      <div className='user-inner'>
        <a href={html_url}>
          <img src={avatar_url} alt='avatar' />
        </a>
        <footer>
          <div className='desc'>
            <p
              className='html-url'
              onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(html_url);
              }}
            >
              {html_url}
            </p>
            {alert && <h3 className='copy-alert'>Copied to clipboard!</h3>}
            <div className='desc-bar'>
              <div className='desc-info'>
                <p>Posts: 7</p>
              </div>
              <div className='desc-info'>
                <p>Followers: 38</p>
              </div>
              <div className='desc-info'>
                <p>Following: 48</p>
              </div>
            </div>

            <div className='login-div'>
              <div>
                <p className='user-name'>User name : </p>
              </div>

              <div>
                <h2>{login}</h2>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default User;
