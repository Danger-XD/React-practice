const Form = () => {
  const loginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");
    const about = formData.get("about");
    const gender = formData.get("gender");
    const terms = formData.get("terms");
    const color = formData.get("color");
    const progress = formData.get("progress");
    const postBody = {
      email: email,
      password: password,
      profession: role,
      aboutDes: about,
      gender: gender,
      terms: terms,
      color: color,
      progress: progress
    };
    alert(postBody);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h1>Login Form</h1>
            <form onSubmit={loginSubmit}>
              <div>
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <br />
              <div>
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>
              <br />
              <div>
                <label className="form-label">Role</label>
                <br />
                <small>Select your role</small>
                <select name="role" className="form-select form-control">
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                  <option value="customer">Customer</option>
                  <option value="guest">Guest</option>
                  <option value="moderator">Moderator</option>
                  <option value="partner">Partner</option>
                  <option value="affiliate">Affiliate</option>
                  <option value="agent">Agent</option>
                  <option value="subagent">Sub Agent</option>
                  <option value="consultant">Consultant</option>
                  <option value="client">Client</option>
                  <option value="vendor">Vendor</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="consultant">Consultant</option>
                </select>
              </div>
              <br />
              <div>
                <label className="form-label">About you</label>
                <textarea
                  name="about"
                  rows={5}
                  className="form-control"
                  placeholder="Write something about yourself"
                  required
                />
              </div>
              <br />
              <div>
                <label className="form-label">Gender</label>
                <br />
                <input type="radio" value="Male" name="gender" />
                <label className="form-check">Male</label>
                <input type="radio" value="Female" name="gender" />
                <label className="form-check">Female</label>
              </div>
              <br />
              <div>
                <label className="form-label">Terms and Conditions</label>
                <input type="checkbox" name="terms" value="accept" className="form-check" required />
              </div>
              <br />
              <div>
                <label className="form-label">Color</label>
                <input type="color" name="color" className="form-control" />
              </div>
              <br />
              <label className="form-label">Your progress</label>
              <input type="range" name="progress" className="form-range" min={0} max={100} />
              <br />
              <div>
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
