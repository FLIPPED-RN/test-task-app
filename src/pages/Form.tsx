export default function Form() {
  return (
    <div className="Form">
      <h1>Form Component</h1>
      <form>
        <div className="Form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="Form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
