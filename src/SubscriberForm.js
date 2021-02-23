import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age: "",
    newMember: false,
    comment: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formStr = `${formData.name}, ${formData.age}, ${formData.newMember}, ${formData.comment}`;
    console.log(formStr);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Your Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label htmlFor="age">
        What is your age?
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option value="">-- Select an Option --</option>
          <option value="nan">Prefer not to say</option>
          <option value="zeroToNineteen">0-19</option>
          <option value="twentiesThirties">20-39</option>
          <option value="fortiesFifties">40-59</option>
          <option value="sixtyPlus">60+</option>
        </select>
        <br />
      </label>
      <br />
      <label htmlFor="newMember">
        New Member?
        <input
          id="newMember"
          type="checkbox"
          name="newMember"
          onChange={handleChange}
          checked={formData.newMember}
          value="newMember"
        />
      </label>
      <br />
      <label htmlFor="comment">
        Comments:
        <input
          id="comment"
          type="text"
          name="comment"
          onChange={handleChange}
          value={formData.comment}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RSVPForm;
