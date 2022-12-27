import React from "react";
// import * as Validator from "validatorjs";

const Input = ({ label, type, nama, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <br />
      <input type={type} name={nama} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red", marginLeft: "-20px" }}>
      {errors.map((errors, i) => (
        <li key={i}>{errors}</li>
      ))}
    </ul>
  );
};

class Validation extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleChange = (e) => {
    return this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    // let data = { email, password };

    // let rules = {
    //   // name: 'required',
    //   email: "required|email",
    //   // age: 'min:18'
    //   password: "min:8|required",
    // };

    // let validation = new Validator(data, rules);
    // validation.passes();
    // this.setState({
    //   errors: [...validation.errors.get("email"), ...validation.errors.get("password")],
    // });

    let message = [];

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // if (email.length === 0) {
    //   message = [...message, "email tidak boleh kosong"];
    // }

    // if (password.length === 0) {
    //   message = [...message, "password tidak boleh kosong"];
    // }

    if (!re.test(String(email).toLocaleLowerCase())) {
      message = [...message, "email tidak valid"];
    }

    if (password.length < 8) {
      message = [...message, "Password kurang kuat"];
    }

    if (message.length > 0) {
      this.setState({
        errors: message,
      });
    } else {
      alert(`
          email: ${this.state.email},
          password : ${this.state.password}
        `);

      this.setState({
        errors: [],
      });
    }
  };

  render() {
    const style = {
      width: "400px",
      border: "1px solid gray",
      margin: "100px auto 0",

      padding: "10px",
    };

    return (
      <div style={style}>
        <form onSubmit={this.handleSubmit}>
          <ShowErrors errors={this.state.errors} />
          <h4>Login</h4>
          Email: <br />
          <input type="email" name="email" label="email" onChange={this.handleChange} />
          <br />
          Password: <br />
          <input type="password" name="password" label="password" onChange={this.handleChange} />
          <br />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
