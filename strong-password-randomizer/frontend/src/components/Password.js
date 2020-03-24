import React, { useEffect, useState } from 'react';
import NewPasswordForm from './NewPasswordForm';

const Password = () => {
  const [password, setPassword] = useState('');
  const [inputValue, setInputValue] = useState(8);

  useEffect(() => {
    const headers = { 'Content-Type': 'application/json' };

    try {
      fetch(`http://localhost:5000/password?pwLength=${inputValue}`, {
        headers
      }).then(async response => {
        const data = await response.json();
        setPassword(data.password);
      });
    } catch (error) {
      if (error) {
        alert('something went wrong');
      }
    }
  }, [inputValue]);

  const handleSubmit = event => {
    event.preventDefault();
    let inputValue = event.target.firstElementChild.children[1].value;

    const headers = { 'Content-Type': 'application/json' };

    try {
      fetch(`http://localhost:5000/password?pwLength=${inputValue}`, {
        headers
      }).then(async response => {
        const data = await response.json();
        setPassword(data.password);
      });
    } catch (error) {
      if (error) {
        alert('something went wrong');
      }
    }
  };

  const inputChangeHandler = event => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const styles = {
    letterSpacing: '.5em'
  };

  let display;
  display = password.length > 0 ? password : 'Something went wrong!';

  return (
    <div className="container mt-5">
      <h1 style={styles}>{display}</h1>
      <NewPasswordForm
        handleSubmit={handleSubmit}
        inputChangeHandler={inputChangeHandler}
        inputValue={inputValue}
      />
    </div>
  );
};
export default Password;
