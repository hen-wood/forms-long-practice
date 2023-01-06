import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userRegistrationInformation = {
      name,
      email,
      phone,
      submittedOn: new Date(),
    };

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            type="text"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <label htmlFor="phone-type">Phone Type:</label>
          <select id="phone-type">
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div>
          <h3>Staff</h3>
          <label htmlFor="instructor">Instructor</label>
          <input type="radio" id="instructor" name="staff" />
          <br></br>
          <label htmlFor="student">Student</label>
          <input type="radio" id="student" name="staff" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="signup">Signup for email notifications</label>
          <input type="checkbox" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
