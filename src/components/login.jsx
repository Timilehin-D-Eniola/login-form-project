import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmission = (event) => {
    
    event.preventdefault();

    // if (!username || !password) {
    //   setError("Please, fill in your username and password");
    //   return;
    // } else {
    //   onLogin(username, password);
    // }

    console.log("Form submitted");
  };

  return (
    <div className="container">
    <form className = "login-details"
    onSubmit={handleFormSubmission}>
    <div className="input-details">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      </div>

      <div className="buttons">
      <button type="submit">Login</button>
      <button
        type="button"
        onClick={() => setShowPassword(showPassword? false : true)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      {/* {error} */}
      </div>
    </form>
    </div>
  );
};

export default Form;
