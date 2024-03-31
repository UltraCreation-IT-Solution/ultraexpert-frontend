import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CHECKOUT_STEPS = [
  { name: "General Details", Component: () => <GeneralDetails /> },
  { name: "Personal Details", Component: () => <PersonalDetails /> },
  { name: "Education", Component: () => <Education /> },
  { name: "Skill Set", Component: () => <SkillSets /> },
  { name: "Experience", Component: () => <Experience /> },
  { name: "Account Details", Component: () => <AccountDetails /> },
];

const Stepper = ({ stepsConfig = [] }) => {
  const [currStep, setCurrStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const navigate = useNavigate();

  const stepRef = useRef([]);

  const handleNext = () => {
    setCurrStep((prevStep) => {
      if (prevStep === stepsConfig.length - 1) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepRef.current.length - 1].offsetWidth / 2,
    });
  }, [stepRef.current]);

  const calculateProgressBarWidth = () => {
    return (currStep / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currStep]?.Component;

  if (!stepsConfig.length) return <></>;

  return (
    <>
      <div className="relative flex justify-between items-center my-5 mx-20">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`flex flex-col items-center relative ${
              currStep > index || isComplete
                ? "text-[#3E5676]"
                : "text-gray-400"
            } ${currStep === index ? "text-[#3E5676]" : ""}`}
          >
            <div
              className={`w-7 h-7 rounded-full bg-white flex items-center justify-center mb-1 z-10 border border-solid ${
                currStep > index || isComplete
                  ? "border-[#3E5676]"
                  : "border-gray-400"
              } `}
            >
              {currStep > index || isComplete ? "✔" : index + 1}
            </div>
            <div className="text-xs">{step.name}</div>
          </div>
        ))}
        <div
          className="absolute top-1/4 left-0 h-[1px] bg-gray-400"
          style={{
            width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
            marginLeft: `${margin.marginLeft}px`,
            marginRight: `${margin.marginRight}px`,
          }}
        >
          <div
            className="h-full bg-[#3E5676] transition-all duration-500 ease-in"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-400 my-2"></div>
      <ActiveComponent />
      {!isComplete && (
        <div className="flex justify-end mx-32 mb-10">
          {currStep === stepsConfig.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="cursor-pointer px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
};

const GeneralDetails = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col text-center my-8">
        <div className="text-4xl font-bold text-[#3E5676]">
          Sign Up as Customer
        </div>
        <div className="text-sm text-gray-500">
          Provide accurate information to ensure proper record-keeping.
        </div>
      </div>
      <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
        <label htmlFor="name" className="text-lg mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
          placeholder="Enter your name"
        />
        <label htmlFor="mobileNumber" className="text-lg mb-1">
          Mobile Number
        </label>
        <div className="flex mb-4">
          <select
            name="countryCode"
            id="countryCode"
            className="border border-solid border-gray-300 px-2 py-2 rounded-s-md w-[15%]"
          >
            <option value="IN">India</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Bouvet Island</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, Democratic Republic of the Congo</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Cote D'Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Curacao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard Island and Mcdonald Islands</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea, Democratic People's Republic of</option>
            <option value="KR">Korea, Republic of</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Lao People's Democratic Republic</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libyan Arab Jamahiriya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MK">
              Macedonia, the Former Yugoslav Republic of
            </option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia, Federated States of</option>
            <option value="MD">Moldova, Republic of</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="AN">Netherlands Antilles</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestinian Territory, Occupied</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="RW">Rwanda</option>
            <option value="BL">Saint Barthelemy</option>
            <option value="SH">Saint Helena</option>
            <option value="KN">Saint Kitts and Nevis</option>
            <option value="LC">Saint Lucia</option>
            <option value="MF">Saint Martin</option>
            <option value="PM">Saint Pierre and Miquelon</option>
            <option value="VC">Saint Vincent and the Grenadines</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="CS">Serbia and Montenegro</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syrian Arab Republic</option>
            <option value="TW">Taiwan, Province of China</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania, United Republic of</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor-Leste</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks and Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Viet Nam</option>
            <option value="VG">Virgin Islands, British</option>
            <option value="VI">Virgin Islands, U.s.</option>
            <option value="WF">Wallis and Futuna</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            required
            className="border border-solid border-gray-300 px-2 py-2 rounded-e-md w-[85%]"
            placeholder="91XXXXXXXXX"
          />
        </div>
        <label htmlFor="email" className="text-lg mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
          placeholder="Enter your name"
        />
      </div>
    </form>
  );
};
const PersonalDetails = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col text-center my-8">
        <div className="text-4xl font-bold text-[#3E5676]">
          Sign Up as Customer
        </div>
        <div className="text-sm text-gray-500">
          Provide accurate information to ensure proper record-keeping.
        </div>
      </div>
      <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
        <div className="flex justify-around gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="gender" className="text-lg mb-1">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="level" className="text-lg mb-1">
              Level
            </label>
            <select
              name="level"
              id="level"
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            >
              <option value="basic">Basic</option>
              <option value="inter">Intermediate</option>
              <option value="amateur">Amateur</option>
              <option value="pro">Professional</option>
            </select>
          </div>
        </div>
        <label htmlFor="profession" className="text-lg mb-1">
          Profession
        </label>
        <input
          type="text"
          id="profession"
          name="profession"
          required
          className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
          placeholder="Profession"
        />
        <label htmlFor="about" className="text-lg mb-1">
          About Me
        </label>
        <textarea
          required
          type="text"
          id="about"
          name="about"
          className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
          placeholder="I want to learn css, html, python with django"
        />
      </div>
    </form>
  );
};
const Education = () => {
  const [educationForms, setEducationForms] = useState([{ id: 1 }]);

  const addEducationForm = () => {
    const newId = educationForms.length + 1;
    setEducationForms([...educationForms, { id: newId }]);
  };

  return (
    <form className="flex flex-col">
      <div className="flex flex-col text-center my-8">
        <div className="text-4xl font-bold text-[#3E5676]">
          Sign Up as Customer
        </div>
        <div className="text-sm text-gray-500">
          Provide accurate information to ensure proper record-keeping.
        </div>
      </div>
      <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
        {educationForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Education {ind + 1}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addEducationForm();
                }}
                className="underline cursor-pointer text-gray-400 bg-inherit"
              >
                + Add Education
              </button>
            </div>
            <label htmlFor={`institute${form.id}`} className="text-lg mb-1">
              Institute Name
            </label>
            <input
              type="text"
              id={`institute${form.id}`}
              name={`institute${form.id}`}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Institute Name"
            />
            <div className="flex justify-around gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor={`type${form.id}`} className="text-lg mb-1">
                  Type
                </label>
                <input
                  type="text"
                  id={`type${form.id}`}
                  name={`type${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Institute Name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor={`passing${form.id}`} className="text-lg mb-1">
                  Passing Year
                </label>
                <select
                  name={`passing${form.id}`}
                  id={`passing${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>
            <div className="flex justify-around gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor={`city${form.id}`} className="text-lg mb-1">
                  City
                </label>
                <input
                  type="text"
                  id={`city${form.id}`}
                  name={`city${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="City"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor={`state${form.id}`} className="text-lg mb-1">
                  State
                </label>
                <select
                  id={`state${form.id}`}
                  name={`state${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
              </div>
            </div>
            <div className="flex justify-around gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor={`country${form.id}`} className="text-lg mb-1">
                  Country
                </label>
                <select
                  name={`country${form.id}`}
                  id={`country${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="United States">United States</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antartica">Antarctica</option>
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
                  <option value="Bosnia and Herzegowina">
                    Bosnia and Herzegowina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
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
                  <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                  <option value="Croatia">Croatia (Hrvatska)</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="France Metropolitan">
                    France, Metropolitan
                  </option>
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
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard and McDonald Islands">
                    Heard and Mc Donald Islands
                  </option>
                  <option value="Holy See">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran (Islamic Republic of)</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Democratic People's Republic of Korea">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao">Lao People's Democratic Republic</option>
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
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">
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
                  <option value="Micronesia">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova">Moldova, Republic of</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
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
                  <option value="Russia">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint LUCIA</option>
                  <option value="Saint Vincent">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia (Slovak Republic)</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="Span">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="St. Helena">St. Helena</option>
                  <option value="St. Pierre and Miguelon">
                    St. Pierre and Miquelon
                  </option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard">
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syrian Arab Republic</option>
                  <option value="Taiwan">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania, United Republic of</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Viet Nam</option>
                  <option value="Virgin Islands (British)">
                    Virgin Islands (British)
                  </option>
                  <option value="Virgin Islands (U.S)">
                    Virgin Islands (U.S.)
                  </option>
                  <option value="Wallis and Futana Islands">
                    Wallis and Futuna Islands
                  </option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor={`division${form.id}`} className="text-lg mb-1">
                  Division
                </label>
                <select
                  name={`division${form.id}`}
                  id={`division${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="forth">Forth</option>
                </select>
              </div>
            </div>
          </>
        ))}
      </div>
    </form>
  );
};
const SkillSets = () => {
  const [skillForms, setSkillForms] = useState([{ id: 1 }]);

  const addSkillForm = () => {
    const newId = skillForms.length + 1;
    setSkillForms([...skillForms, { id: newId }]);
  };

  return (
    <form className="flex flex-col">
      <div className="flex flex-col text-center my-8">
        <div className="text-4xl font-bold text-[#3E5676]">
          Sign Up as Customer
        </div>
        <div className="text-sm text-gray-500">
          Provide accurate information to ensure proper record-keeping.
        </div>
      </div>
      <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
        {skillForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Skill {ind + 1}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addSkillForm();
                }}
                className="underline cursor-pointer text-gray-400 bg-inherit"
              >
                + Add Skill
              </button>
            </div>
            <label htmlFor={`technology${form.id}`} className="text-lg mb-1">
              Technology Name
            </label>
            <input
              type="text"
              id={`technology${form.id}`}
              name={`technology${form.id}`}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Institute Name"
            />
            <label htmlFor={`rating${form.id}`} className="text-lg mb-1">
              Rating
            </label>
            <input
              type="number"
              id={`rating${form.id}`}
              name={`rating${form.id}`}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4 w-[50%]"
              placeholder="1"
            />
          </>
        ))}
      </div>
    </form>
  );
};
const Experience = () => {
  const [experienceForms, setExperienceForms] = useState([{ id: 1 }]);

  const addExperienceForm = () => {
    const newId = experienceForms.length + 1;
    setExperienceForms([...experienceForms, { id: newId }]);
  };

  return (
    <form className="flex flex-col">
      <div className="flex flex-col text-center my-8">
        <div className="text-4xl font-bold text-[#3E5676]">
          Sign Up as Customer
        </div>
        <div className="text-sm text-gray-500">
          Provide accurate information to ensure proper record-keeping.
        </div>
      </div>
      <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
        {experienceForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Experience {ind + 1}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addExperienceForm();
                }}
                className="underline cursor-pointer text-gray-400 bg-inherit"
              >
                + Add Experience
              </button>
            </div>
            <label htmlFor={`company${form.id}`} className="text-lg mb-1">
              Company Name
            </label>
            <input
              type="text"
              id={`company${form.id}`}
              name={`company${form.id}`}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Company Name"
            />
            <div className="flex justify-around gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor={`start${form.id}`} className="text-lg mb-1">
                  Start Year
                </label>
                <select
                  name={`start${form.id}`}
                  id={`start${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor={`end${form.id}`} className="text-lg mb-1">
                  End Year
                </label>
                <select
                  name={`end${form.id}`}
                  id={`end${form.id}`}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>
            <label htmlFor={`designtaion${form.id}`} className="text-lg mb-1">
              Designation
            </label>
            <input
              type="text"
              id={`designtaion${form.id}`}
              name={`designtaion${form.id}`}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Designtaion"
            />
          </>
        ))}
      </div>
    </form>
  );
};
const AccountDetails = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col text-center my-8">
        <div className="text-4xl font-bold text-[#3E5676]">
          Sign Up as Customer
        </div>
        <div className="text-sm text-gray-500">
          Provide accurate information to ensure proper record-keeping.
        </div>
      </div>
      <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
        <div className="flex flex-col w-full">
          <label htmlFor="holderName" className="text-lg mb-1">
            Account Holder Name
          </label>
          <input
            type="text"
            id="holderName"
            name="holderName"
            required
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="Account Holder Name"
          />
          <label htmlFor="bankName" className="text-lg mb-1">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            required
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="Bank Name"
          />
          <label htmlFor="accNumber" className="text-lg mb-1">
            Account Number
          </label>
          <input
            type="number"
            id="accNumber"
            name="accNumber"
            required
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="Account Number"
          />
          <label htmlFor="ifsc" className="text-lg mb-1">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifsc"
            name="ifsc"
            required
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="IFSC Code"
          />
        </div>
      </div>
    </form>
  );
};

const SignUpAsExpert = () => {
  return (
    <div className="min-h-screen mt-[80px] bg-white">
      <div className="w-[60%] border border-solid border-gray-300 mx-auto">
        <Stepper stepsConfig={CHECKOUT_STEPS} />
      </div>
    </div>
  );
};

export default SignUpAsExpert;
