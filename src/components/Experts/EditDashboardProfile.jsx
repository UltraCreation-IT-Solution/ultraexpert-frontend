import React, { useState, useEffect } from "react";
import logo from "../../assets/images/photography.png"
import { IoCloseOutline } from "react-icons/io5";

const Pill = ({ text, onClick }) => {
  return (
    <div className="bg-white px-2 py-1 text-gray-500 text-xs lg:text-sm " onClick={onClick}>
      {text} &times;
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
            className="w-[100%] p-2 border border-solid rounded-lg mt-[0.5vw] mb-[1.5vw] md:mb-[0.5vw] font-normal text-xs md:text-sm"
            placeholder="Enter Your Skills"
          />
          {/* Search Suggestions */}
          <div className="border border-t-0 border-solid border-b-0 border-gray-200 rounded-lg">
            {suggestions.map((skill) => {
              return !selectedUserSet.has(skill.value) ? (
                <div
                  onClick={() => handleSelectedUser(skill)}
                  onChange={()=>handleSelectChange(skill)}
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

const MultiSelect2 = ({...choosedOptions}) => {
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
            className="w-[100%] p-2 border border-solid rounded-lg mt-[0.5vw] mb-[1.5vw] md:mb-[0.5vw] font-normal text-xs md:text-sm"
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

const Update = ({profile,handleShowEditProfile}) =>{

  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("Bhavesh Bhanushali");
  const [userId, setUserId] = useState("bhavesh@bhanushali");
  const [userPost, setUserPost] = useState("Web Developer");
  const [desc, setDesc] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quod!"
  );
  const [country, setCountry] = useState("India");
  const [lang, setLang] = useState("EN");



  const [choosedOptions,setchoosedOptions] = useState([]);

  // const handleMultiSelect1Change = (selectedOptions) => {
  //   setchoosedOptions(selectedOptions);
  // };

  return(
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center backdrop-blur-sm w-full pb-[2vw] overflow-hidden text-left text-lg text-black font-montserrat">
      <div className="h-auto w-full md:w-[55%] rounded-2xl mt-[100px] bg-white shadow-xl">
        <div className="flex flex-col">
            <div className="flex justify-between text-3xl md:text-4xl font-bold mx-auto md:m-0 px-8 py-2 md:py-5">
                <div>Edit Profile</div>
                <IoCloseOutline onClick={handleShowEditProfile} />
            </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(!isEditing);
          }}
          className="md:flex">
            <div className="w-full md:w-[40%] py-2 px-5">
              <div className="flex flex-col items-center" > 
                <img
                className="h-[45vw] w-[45vw] sm:w-[25vw] sm:h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[10vw] lg:h-[10vw] rounded-lg"
                src={logo}
                alt=""
                />
                <button className="text-xs bg-white rounded-md cursor-pointer duration-200 md:mb-[1vw]">
                  Change Picture
                </button>
                <div className="w-[80%] my-[5vw] md:my-[2vw] font-semibold text-lg md:text-xl text-slate-700">
                  Top Skills:
                  {isEditing ? (
                    <MultiSelect1/>
                  ) : (
                    <div className="flex flex-wrap w-[100%] gap-[1vw] sm:gap-2 mt-[0.5vw]">
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 md:shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 md:shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 md:shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-[80%] mb-[5vw] flex flex-col md:mt-[2vw] font-semibold text-lg md:text-xl text-slate-700">
                  Skills:
                  {isEditing ? (
                    <MultiSelect2 />
                  ) : (
                    <div className="flex flex-wrap md:flex-row w-[100%] gap-[1vw] sm:gap-2 mt-[0.5vw]">
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 shrink-0 rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                      <button className="text-base cursor-pointer bg-white border self-start text-slate-700 shrink-0  rounded-md py-1 text-nowrap mb-1 hover:text-white hover:bg-black duration-200">
                        Logo Design
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md:w-[60%] flex flex-col md:py-2 px-5 md:px-0 items-center">
              <div className="font-semibold text-lg md:text-xl text-slate-700 mb-[5vw] md:mb-[1vw] w-[80%]">
                Name:{" "}
                {isEditing ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Name"
                    className="flex border font-normal text-sm md:text-base text-gray-500 p-2 md:w-[25vw] rounded-lg mt-[0.5vw] w-[100%]"
                  />
                ) : (
                  <div className="text-slate-700 md:w-[25vw] border border-solid border-gray-800 mt-[0.5vw] font-normal text-sm md:text-base p-2 rounded-lg">
                    {name}
                  </div>
                )}
              </div>
                <div className="font-semibold text-lg md:text-xl text-slate-700 mb-[5vw] md:mb-[1vw] w-[80%]">
                User Id:{" "}
                {isEditing ? (
                  <input
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    type="text"
                    placeholder="Enter Your User Id"
                    className="flex border font-normal text-sm md:text-base text-gray-500 p-2 md:w-[25vw] rounded-lg mt-[0.5vw] w-[100%]"
                  />
                ) : (
                  <div className="text-slate-700 md:w-[25vw] border border-solid border-gray-800 mt-[0.5vw] font-normal text-sm md:text-base p-2 rounded-lg">
                    {userId}
                  </div>
                )}
              </div>
              <div className="font-semibold text-lg md:text-xl text-slate-700 md:mb-[1vw] w-[80%]">
                Designation:{" "}
                {isEditing ? (
                  <input
                    value={userPost}
                    onChange={(e) => setUserPost(e.target.value)}
                    type="text"
                    placeholder="Enter Your Designation"
                    className="flex border font-normal text-sm md:text-base text-gray-500 p-2 md:w-[25vw] rounded-lg mt-[0.5vw] w-[100%]"
                  />
                ) : (
                  <div className="text-slate-700 md:w-[25vw] border border-solid border-gray-800 font-normal mt-[0.5vw] text-sm md:text-base p-2 rounded-lg">
                    {userPost}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row w-[80%] gap-4 md:gap-0 md:my-[0.5vw] my-[5vw]">
                  <div className="flex flex-col font-semibold text-xl text-slate-700 mb-[0.5vw] lg:w-[80%]">
                    Nationality:
                    {isEditing ? (
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        name="country"
                        id="country"
                        className="border text-gray-500 font-normal text-sm md:text-base rounded-lg p-2 w-[100%] lg:w-[12vw] mt-[0.5vw]"
                      >
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">
                          Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    ) : (
                      <div className="text-slate-700 border border-solid border-gray-800 font-normal text-sm md:text-base mt-[0.5vw] w-[100%] md:w-[93%] lg:w-[12vw] p-2 rounded-lg">
                        {country}
                      </div>
                    )}
                  </div>    
                  <div className="flex flex-col font-semibold text-xl text-slate-700 mb-[0.5vw] lg:w-[80%]">
                    Language:
                    {isEditing ? (
                      <select
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        name="lang"
                        id="lang"
                        className="border text-gray-500 font-normal text-sm md:text-base rounded-lg p-2 w-[100%] lg:w-[12vw] mt-[0.5vw]"
                      >
                        <option value="AF">Afrikaans</option>
                        <option value="SQ">Albanian</option>
                        <option value="AR">Arabic</option>
                        <option value="HY">Armenian</option>
                        <option value="EU">Basque</option>
                        <option value="BN">Bengali</option>
                        <option value="BG">Bulgarian</option>
                        <option value="CA">Catalan</option>
                        <option value="KM">Cambodian</option>
                        <option value="ZH">Chinese (Mandarin)</option>
                        <option value="HR">Croatian</option>
                        <option value="CS">Czech</option>
                        <option value="DA">Danish</option>
                        <option value="NL">Dutch</option>
                        <option value="EN">English</option>
                        <option value="ET">Estonian</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finnish</option>
                        <option value="FR">French</option>
                        <option value="KA">Georgian</option>
                        <option value="DE">German</option>
                        <option value="EL">Greek</option>
                        <option value="GU">Gujarati</option>
                        <option value="HE">Hebrew</option>
                        <option value="HI">Hindi</option>
                        <option value="HU">Hungarian</option>
                        <option value="IS">Icelandic</option>
                        <option value="ID">Indonesian</option>
                        <option value="GA">Irish</option>
                        <option value="IT">Italian</option>
                        <option value="JA">Japanese</option>
                        <option value="JW">Javanese</option>
                        <option value="KO">Korean</option>
                        <option value="LA">Latin</option>
                        <option value="LV">Latvian</option>
                        <option value="LT">Lithuanian</option>
                        <option value="MK">Macedonian</option>
                        <option value="MS">Malay</option>
                        <option value="ML">Malayalam</option>
                        <option value="MT">Maltese</option>
                        <option value="MI">Maori</option>
                        <option value="MR">Marathi</option>
                        <option value="MN">Mongolian</option>
                        <option value="NE">Nepali</option>
                        <option value="NO">Norwegian</option>
                        <option value="FA">Persian</option>
                        <option value="PL">Polish</option>
                        <option value="PT">Portuguese</option>
                        <option value="PA">Punjabi</option>
                        <option value="QU">Quechua</option>
                        <option value="RO">Romanian</option>
                        <option value="RU">Russian</option>
                        <option value="SM">Samoan</option>
                        <option value="SR">Serbian</option>
                        <option value="SK">Slovak</option>
                        <option value="SL">Slovenian</option>
                        <option value="ES">Spanish</option>
                        <option value="SW">Swahili</option>
                        <option value="SV">Swedish </option>
                        <option value="TA">Tamil</option>
                        <option value="TT">Tatar</option>
                        <option value="TE">Telugu</option>
                        <option value="TH">Thai</option>
                        <option value="BO">Tibetan</option>
                        <option value="TO">Tonga</option>
                        <option value="TR">Turkish</option>
                        <option value="UK">Ukrainian</option>
                        <option value="UR">Urdu</option>
                        <option value="UZ">Uzbek</option>
                        <option value="VI">Vietnamese</option>
                        <option value="CY">Welsh</option>
                        <option value="XH">Xhosa</option>
                      </select>
                    ) : (
                      <div className="text-slate-700 border border-solid border-gray-800 font-normal text-sm md:text-base mt-[0.5vw] w-[100%] md:w-[93%] lg:w-[12vw] p-2 rounded-lg">
                        {lang}
                      </div>
                    )}
                  </div>
              </div>
              <div className="flex justify-start flex-col font-semibold text-xl text-slate-700 mt-[0.5vw] mb-[5vw] md:mb-[0.5vw] w-[80%]">
                Title:
                {isEditing ? (
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Describe yourself"
                    name="desc"
                    id="desc"
                    cols="10"
                    rows="5"
                    className="rounded-lg font-normal text-sm md:text-base border h-auto md:w-[25vw] mt-[0.5vw] text-gray-500 px-[1vw] py-2"
                  ></textarea>
                ) : (
                  <div className="h-auto mt-[0.5vw] md:w-[25vw] text-slate-700 border border-solid border-gray-800 font-normal text-sm md:text-base p-2 rounded-lg ">
                    {desc}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row mb-[5vw] md:my-[2vw] gap-3 lg:gap-4 justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEditing(false);
                  }}
                  type="submit"
                  className="py-3 px-4 text-sm md:text-base bg-transparent border-2 border-solid border-red-500 rounded-lg text-red-500 font-semibold"
                >
                  Discard Changes
                </button>
                <button
                  type="submit"
                  className="py-3 px-6 text-sm md:text-base bg-green-400 rounded-lg text-white font-semibold"
                >
                  {isEditing ? "Save" : "Edit"} Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update;