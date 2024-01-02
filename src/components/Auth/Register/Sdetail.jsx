import React from "react";

function Sdetail({ formData, setFormData, handleError }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        name="email"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) => {
          setFormData({ ...formData, email: event.target.value });
          handleError("");
        }}
        className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
      />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) => {
          setFormData({ ...formData, password: event.target.value });
          handleError("");
        }}
        className="absolute top-[250.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3 pr-3"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) => {
          setFormData({ ...formData, confirmPassword: event.target.value });
          handleError("");
        }}
        className="absolute top-[325.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3 pr-3"
      />
    </div>
  );
}

export default Sdetail;
