import "./styles.css";

export default function App() {
  return (
    <div className="forms">
      <fieldset>
        <legend>Basic Information</legend>
        <form className="user-info">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" required />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="phone">Phone Number</label>
          <input type="number" name="phone" id="phone" />
          <div className="form-buttons">
            <button type="reset">Clear</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        <form className="user-education">
          <label htmlFor="school-name">School</label>
          <input type="text" name="school-name" id="school-name" />
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" />
          <label htmlFor="graduation-year">Graduation Year</label>
          <input type="number" name="graduation-year" id="graduation-year" />
          <div className="form-buttons">
            <button type="reset">Clear</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </fieldset>
      <fieldset>
        <legend>Work Experience</legend>
        <form className="user-work">
          <label htmlFor="title">Job Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="location">City/Town</label>
          <input type="text" name="location" id="location" />
          <label htmlFor="employer">Employer</label>
          <input type="text" name="employer" id="employer" />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            maxLength={100}
          ></textarea>
          <div className="form-buttons">
            <button type="reset">Clear</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
