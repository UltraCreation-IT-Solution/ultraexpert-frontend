import React from "react";

function Pdetail({ formData, setFormData, handleError }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        name="firstName"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
          handleError("");
        }}
        className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
          handleError("");
        }}
        className="absolute top-[250.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3 pr-3"
      />
    </div>
  );
}

export default Pdetail;
