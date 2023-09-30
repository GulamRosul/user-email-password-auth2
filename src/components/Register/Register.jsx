const Register = () => {
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form>
          <input
            className="mb-4 w-3/4  py-2 px-4 rounded"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 py-2 px-4 rounded"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <br />
          <input
            className=" btn btn-secondary  w-3/4 mb-4 "
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
