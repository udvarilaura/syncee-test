import { useState } from "react";

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {username, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //TODO
      };

      const handleChange = (event) => {
        const {name, value} = event.target;
        
        setFormFields({...formFields, [name]: value})
        //TODO

      };

    return( 
      <div>
        <h1> Sign up with your email and password</h1>
        <form onSubmit={()=>{}}>
          <label>
            Usernameame:
            <input
            type="text"
            value={username}
            name="username"
            //onChange={handleChange()}
            required/>
          </label>
          <label>
            Email:
            <input
            type="email"
            name="email"
            value={email}
            //onChange={handleChange()}
            required/>
          </label>
          <label>
            Password:
            <input
            type="password"
            name="password"
            value={password}
            //onChange={handleChange()}
            required/>
          </label>
          <label>
              Confirm password:
              <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              //onChange={handleChange()}
              required/>
          </label>
          <button type="submit">Sign Up</button>
      </form>
    </div>
    )
};

export default SignUpForm;