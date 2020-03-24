import React from 'react';

const NewPasswordForm = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      method="GET"
      action={`http://localhost:5000/password?pwLength=${props.inputValue}`}
    >
      <div className="form-group">
        <label htmlFor="pwLength">
          Adjust Password Length: {props.inputValue}
        </label>
        <input
          className="form-control"
          onChange={props.inputChangeHandler}
          type="range"
          id="pwLength"
          name="pwLength"
          min="8"
          max="12"
          placeholder={props.inputValue}
          value={props.inputValue}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Generate New Passsword
      </button>
    </form>
  );
};

export default NewPasswordForm;
