import React from "react";

function Odetail({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        name="referBy"
        placeholder="Refered By..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, referBy: e.target.value });
        }}
        className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
      />
      <input
        type="number"
        name="mobileNo"
        placeholder="Mobile Number..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, mobileNo: e.target.value });
        }}
        className="absolute top-[250.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3 pr-3"
      />
    </div>
  );
}

export default Odetail;
