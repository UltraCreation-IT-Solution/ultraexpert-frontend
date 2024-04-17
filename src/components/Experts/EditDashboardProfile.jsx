import React, { useState, useEffect } from "react";
import logo from "../../assets/images/photography.png";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import EditProfileExpert from "../Auth/EditProfileExpert";

const Pill = ({ text, onClick }) => {
  return (
    <div className="bg-white px-2 py-1 text-gray-500 text-xs lg:text-sm flex items-center gap-2">
      {text} <span onClick={onClick}>x</span>
    </div>
  );
};

const MultiSelect1 = () => {
  const tagOptions = {
    skills: [
      { value: "ui", label: "UI" },
      { value: "ux", label: "UX" },
      { value: "graphics", label: "Graphics" },
      { value: "webdeveloper", label: "Web Developer" },
      { value: "appdeveloper", label: "App Developer" },
      { value: "logodesign", label: "Logo Design" },
    ],
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser1, setSelectedUser1] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const handleSelectChange = (selectedItems) => {
    if (selectedItems.length <= 3) {
      setSelectedUser1(selectedItems);
    }
    setSuggestions([]);
  };

  const handleSelectedUser = (skill) => {
    if (selectedUser1.length < 3) {
      setSelectedUser1([...selectedUser1, skill]);
      setSelectedUserSet(new Set([...selectedUserSet, skill.value]));
      setSearchTerm("");
      setSuggestions([]);
    }
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleRemoveUser = (skill) => {
    const updateUsers = selectedUser1.filter(
      (selectedUser1) => selectedUser1.value !== skill.value
    );
    setSelectedUser1(updateUsers);
    const updatedValue = new Set(selectedUserSet);
    updatedValue.delete(skill.value);
    setSelectedUserSet(updatedValue);
  };

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      setSuggestions(tagOptions.skills);
    };
    fetchUsers();
  }, [searchTerm]);

  return (
    <div className="">
      <div className="">
        {/* input field */}
        <div className="w-[100%]">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[100%] p-2 border border-solid rounded-md mt-[0.5vw] mb-[1.5vw] md:mb-[0.5vw] font-normal text-xs md:text-sm "
            placeholder="Enter Your Skills"
          />
          {/* Search Suggestions */}
          <div className="border border-t-0 border-solid border-b-0 border-gray-200 rounded-lg">
            {suggestions.map((skill) => {
              return !selectedUserSet.has(skill.value) ? (
                <div
                  onClick={() => handleSelectedUser(skill)}
                  onChange={() => handleSelectChange(skill)}
                  className="text-xs text-gray-500 font-light p-1 cursor-pointer hover:text-white hover:bg-gray-500"
                  key={skill.value}
                >
                  {skill.label}
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
        {/* Pills */}
        <div className="flex flex-wrap">
          {selectedUser1.map((skill) => (
            <div className=" mx-1 mb-[1vw] md:mb-[0.5vw] cursor-pointer border border-solid rounded-xl border-gray-200 ">
              <Pill
                key={skill.value}
                text={skill.label}
                onClick={() => handleRemoveUser(skill)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MultiSelect2 = ({ ...choosedOptions }) => {
  const tagOptions = {
    skills: [
      { value: "ui", label: "UI" },
      { value: "ux", label: "UX" },
      { value: "graphics", label: "Graphics" },
      { value: "webdeveloper", label: "Web Developer" },
      { value: "appdeveloper", label: "App Developer" },
      { value: "logodesign", label: "Logo Design" },
    ],
  };

  console.log(choosedOptions);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser2, setSelectedUser2] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const handleSelectedUser = (skill) => {
    setSelectedUser2([...selectedUser2, skill]);
    setSelectedUserSet(new Set([...selectedUserSet, skill.value]));
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleRemoveUser = (skill) => {
    const updateUsers = selectedUser2.filter(
      (selectedUser2) => selectedUser2.value !== skill.value
    );
    setSelectedUser2(updateUsers);
    const updatedValue = new Set(selectedUserSet);
    updatedValue.delete(skill.value);
    setSelectedUserSet(updatedValue);
  };

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      setSuggestions(tagOptions.skills);
    };
    fetchUsers();
  }, [searchTerm]);

  return (
    <div className="">
      <div className="">
        {/* input field */}
        <div className="w-[100%]">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[100%] p-2 border border-solid rounded-md mt-[0.5vw] mb-[1.5vw] md:mb-[0.5vw] font-normal text-xs md:text-sm"
            placeholder="Enter Your Skills"
          />
          {/* Search Suggestions */}
          <div className="border border-t-0 border-solid border-b-0 border-gray-200 rounded-lg">
            {suggestions.map((skill) => {
              return !selectedUserSet.has(skill.value) ? (
                <div
                  onClick={() => handleSelectedUser(skill)}
                  className="text-xs text-gray-500 font-light p-1 cursor-pointer hover:text-white hover:bg-gray-500"
                  key={skill.value}
                >
                  {skill.label}
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
        {/* Pills */}
        <div className="flex flex-wrap">
          {selectedUser2.map((skill) => (
            <div className="mx-1 mb-[1vw] md:mb-[0.5vw] cursor-pointer border border-solid rounded-xl border-gray-200">
              <Pill
                key={skill.value}
                text={skill.label}
                onClick={() => handleRemoveUser(skill)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Update = ({ profile, handleShowEditProfile }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("Bhavesh Bhanushali");
  const [userId, setUserId] = useState("bhavesh@bhanushali");
  const [userPost, setUserPost] = useState("Web Developer");
  const [desc, setDesc] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quod!"
  );
  const [country, setCountry] = useState("India");
  const [lang, setLang] = useState("EN");

  const [choosedOptions, setchoosedOptions] = useState([]);

  // const handleMultiSelect1Change = (selectedOptions) => {
  //   setchoosedOptions(selectedOptions);
  // };

  return (
    <div className="absolute -top-20 left-0 z-50 flex items-start justify-center backdrop-contrast-50 backdrop-blur-sm w-full min-h[120vh] max-h-[120vh] overflow-scroll px-2 pb-[2vw]  text-left text-lg text-black font-montserrat">
      <div className="min-h[120vh] max-h-[120vh] w-full md:w-[80vw] xl:w-[70%] rounded-2xl mt-[100px] bg-white shadow-xl">
        <EditProfileExpert />
      </div>
    </div>
  );
};

export default Update;
