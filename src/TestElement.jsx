// -----------------------------Skills--------------------------------------------


// import React, { useState } from 'react';
// import axios from './axios';

// const TestElement = () => {
//     const [skills, setSkills] = useState([]);
//     const [technology, setTechnology] = useState('');
//     const [rating, setRating] = useState('');

//     const handleAddSkill = () => {
//         if (technology && rating) {
//             setSkills([...skills, { technology_name: technology, ratings: rating }]);
//             setTechnology('');
//             setRating('');
//         }
//     };

//     const handleDeleteSkill = (index) => {
//         const newSkills = skills.filter((_, i) => i !== index);
//         setSkills(newSkills);
//     };

//     const cookies = document.cookie.split("; ");
//     const jsonData = {};
//     cookies.forEach((item) => {
//         const [key, value] = item.split("=");
//         jsonData[key] = value;
//     });

//     const handleSubmit = async () => {
//         const skillJson = { skill_json: skills };
//         console.log('Submitting skills:', skillJson);

//         try {
//             const res = await axios.post('/experts/', { action: 3, skill_json: skillJson }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${jsonData.access_token}`,
//                 },
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 sm:p-8">
//             <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-center">Add Your Skills</h1>
//             <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-center items-center">
//                 <input
//                     type="text"
//                     className="border p-2 mr-0 sm:mr-2 mb-2 sm:mb-0 w-full sm:w-1/4"
//                     placeholder="Technology Name"
//                     value={technology}
//                     onChange={(e) => setTechnology(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     className="border p-2 mr-0 sm:mr-2 mb-2 sm:mb-0 w-full sm:w-1/4"
//                     placeholder="Rating"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                 />
//                 <button
//                     className="bg-blue-500 text-white p-2 w-full sm:w-auto"
//                     onClick={handleAddSkill}
//                 >
//                     Add Skill
//                 </button>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Technology</th>
//                             <th className="py-2 px-4 border-b">Rating</th>
//                             <th className="py-2 px-4 border-b">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {skills.map((skill, index) => (
//                             <tr key={index}>
//                                 <td className="py-2 px-4 border-b">{skill.technology_name}</td>
//                                 <td className="py-2 px-4 border-b">{skill.ratings}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         className="bg-red-500 text-white p-2"
//                                         onClick={() => handleDeleteSkill(index)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="flex justify-center mt-4 sm:mt-6">
//                 <button
//                     className="bg-green-500 text-white p-3 w-full sm:w-auto"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TestElement;

// -----------------------------Education--------------------------------------------


// import React, { useState } from 'react';
// import axios from './axios';

// const TestElement = () => {
//     const [education, setEducation] = useState([]);
//     const [formData, setFormData] = useState({
//         type: '',
//         certificate: '',
//         institute_name: '',
//         city: '',
//         state_name: '',
//         country: '',
//         start_date: '',
//         end_date: '',
//         division: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleAddEducation = () => {
//         if (Object.values(formData).every(field => field)) {
//             setEducation([...education, formData]);
//             setFormData({
//                 type: '',
//                 certificate: '',
//                 institute_name: '',
//                 city: '',
//                 state_name: '',
//                 country: '',
//                 start_date: '',
//                 end_date: '',
//                 division: '',
//             });
//         }
//     };

//     const handleDeleteEducation = (index) => {
//         const newEducation = education.filter((_, i) => i !== index);
//         setEducation(newEducation);
//     };

//     const cookies = document.cookie.split("; ");
//     const jsonData = {};
//     cookies.forEach((item) => {
//         const [key, value] = item.split("=");
//         jsonData[key] = value;
//     });

//     const handleSubmit = async () => {
//         const educationJson = { education_json: education };
//         console.log('Submitting education:', educationJson);

//         try {
//             const res = await axios.post('/experts/', { action: 4, education_json: educationJson }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${jsonData.access_token}`,
//                 },
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 sm:p-8">
//             <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-center">Add Your Education</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6">
//                 <input
//                     type="text"
//                     name="type"
//                     className="border p-2"
//                     placeholder="Type"
//                     value={formData.type}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="certificate"
//                     className="border p-2"
//                     placeholder="Certificate"
//                     value={formData.certificate}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="institute_name"
//                     className="border p-2"
//                     placeholder="Institute Name"
//                     value={formData.institute_name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="city"
//                     className="border p-2"
//                     placeholder="City"
//                     value={formData.city}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="state_name"
//                     className="border p-2"
//                     placeholder="State Name"
//                     value={formData.state_name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="country"
//                     className="border p-2"
//                     placeholder="Country"
//                     value={formData.country}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="date"
//                     name="start_date"
//                     className="border p-2"
//                     value={formData.start_date}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="date"
//                     name="end_date"
//                     className="border p-2"
//                     value={formData.end_date}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="division"
//                     className="border p-2"
//                     placeholder="Division"
//                     value={formData.division}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="flex justify-center mb-4 sm:mb-6">
//                 <button
//                     className="bg-blue-500 text-white p-2 w-full sm:w-auto"
//                     onClick={handleAddEducation}
//                 >
//                     Add Education
//                 </button>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Type</th>
//                             <th className="py-2 px-4 border-b">Certificate</th>
//                             <th className="py-2 px-4 border-b">Institute Name</th>
//                             <th className="py-2 px-4 border-b">City</th>
//                             <th className="py-2 px-4 border-b">State</th>
//                             <th className="py-2 px-4 border-b">Country</th>
//                             <th className="py-2 px-4 border-b">Start Date</th>
//                             <th className="py-2 px-4 border-b">End Date</th>
//                             <th className="py-2 px-4 border-b">Division</th>
//                             <th className="py-2 px-4 border-b">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {education.map((edu, index) => (
//                             <tr key={index}>
//                                 <td className="py-2 px-4 border-b">{edu.type}</td>
//                                 <td className="py-2 px-4 border-b">{edu.certificate}</td>
//                                 <td className="py-2 px-4 border-b">{edu.institute_name}</td>
//                                 <td className="py-2 px-4 border-b">{edu.city}</td>
//                                 <td className="py-2 px-4 border-b">{edu.state_name}</td>
//                                 <td className="py-2 px-4 border-b">{edu.country}</td>
//                                 <td className="py-2 px-4 border-b">{edu.start_date}</td>
//                                 <td className="py-2 px-4 border-b">{edu.end_date}</td>
//                                 <td className="py-2 px-4 border-b">{edu.division}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         className="bg-red-500 text-white p-2"
//                                         onClick={() => handleDeleteEducation(index)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="flex justify-center mt-4 sm:mt-6">
//                 <button
//                     className="bg-green-500 text-white p-3 w-full sm:w-auto"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TestElement;


// -----------------------------Experience--------------------------------------------

// import React, { useState } from 'react';
// import axios from './axios';

// const TestElement = () => {
//     const [experience, setExperience] = useState([]);
//     const [formData, setFormData] = useState({
//         company_name: '',
//         start_date: '',
//         isPresent: false,
//         end_date: '',
//         designation: '',
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//     };

//     const handleAddExperience = () => {
//         if (formData.company_name && formData.start_date && formData.designation && (formData.isPresent || formData.end_date)) {
//             setExperience([...experience, formData]);
//             setFormData({
//                 company_name: '',
//                 start_date: '',
//                 isPresent: false,
//                 end_date: '',
//                 designation: '',
//             });
//         }
//     };

//     const handleDeleteExperience = (index) => {
//         const newExperience = experience.filter((_, i) => i !== index);
//         setExperience(newExperience);
//     };

//     const cookies = document.cookie.split("; ");
//     const jsonData = {};
//     cookies.forEach((item) => {
//         const [key, value] = item.split("=");
//         jsonData[key] = value;
//     });

//     const handleSubmit = async () => {
//         const experienceJson = { experience_json: experience };
//         console.log('Submitting experience:', experienceJson);

//         try {
//             const res = await axios.post('/experts/', { action: 5, experience_json: experienceJson }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${jsonData.access_token}`,
//                 },
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 sm:p-8">
//             <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-center">Add Your Experience</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6">
//                 <input
//                     type="text"
//                     name="company_name"
//                     className="border p-2"
//                     placeholder="Company Name"
//                     value={formData.company_name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="date"
//                     name="start_date"
//                     className="border p-2"
//                     value={formData.start_date}
//                     onChange={handleChange}
//                 />
//                 <div className="flex items-center">
//                     <input
//                         type="checkbox"
//                         name="isPresent"
//                         className="border p-2 mr-2"
//                         checked={formData.isPresent}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="isPresent">Currently Working Here</label>
//                 </div>
//                 {!formData.isPresent && (
//                     <input
//                         type="date"
//                         name="end_date"
//                         className="border p-2"
//                         value={formData.end_date}
//                         onChange={handleChange}
//                     />
//                 )}
//                 <input
//                     type="text"
//                     name="designation"
//                     className="border p-2"
//                     placeholder="Designation"
//                     value={formData.designation}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="flex justify-center mb-4 sm:mb-6">
//                 <button
//                     className="bg-blue-500 text-white p-2 w-full sm:w-auto"
//                     onClick={handleAddExperience}
//                 >
//                     Add Experience
//                 </button>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Company Name</th>
//                             <th className="py-2 px-4 border-b">Start Date</th>
//                             <th className="py-2 px-4 border-b">End Date</th>
//                             <th className="py-2 px-4 border-b">Designation</th>
//                             <th className="py-2 px-4 border-b">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {experience.map((exp, index) => (
//                             <tr key={index}>
//                                 <td className="py-2 px-4 border-b">{exp.company_name}</td>
//                                 <td className="py-2 px-4 border-b">{exp.start_date}</td>
//                                 <td className="py-2 px-4 border-b">{exp.isPresent ? 'Present' : exp.end_date}</td>
//                                 <td className="py-2 px-4 border-b">{exp.designation}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         className="bg-red-500 text-white p-2"
//                                         onClick={() => handleDeleteExperience(index)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="flex justify-center mt-4 sm:mt-6">
//                 <button
//                     className="bg-green-500 text-white p-3 w-full sm:w-auto"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TestElement;


// ----------------------certifications--------------------------


// import React, { useState } from 'react';
// import axios from './axios';

// const AchievementsForm = () => {
//     const [achievements, setAchievements] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         year: '',
//         certificate: null,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'file' ? files[0] : value,
//         });
//     };

//     const handleAddAchievement = () => {
//         if (formData.name && formData.year && formData.certificate) {
//             setAchievements([...achievements, formData]);
//             setFormData({
//                 name: '',
//                 year: '',
//                 certificate: null,
//             });
//         }
//     };

//     const handleDeleteAchievement = (index) => {
//         const newAchievements = achievements.filter((_, i) => i !== index);
//         setAchievements(newAchievements);
//     };

//     const cookies = document.cookie.split("; ");
//     const jsonData = {};
//     cookies.forEach((item) => {
//         const [key, value] = item.split("=");
//         jsonData[key] = value;
//     });

//     const handleSubmit = async () => {
//         const formData = new FormData();
//         achievements.forEach((achievement, index) => {
//             formData.append(`achievements_json[${index}][name]`, achievement.name);
//             formData.append(`achievements_json[${index}][year]`, achievement.year);
//             formData.append(`achievements_json[${index}][certificate]`, achievement.certificate);
//         });

//         try {
//             const res = await axios.post('/experts/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     Authorization: `Bearer ${jsonData.access_token}`,
//                 },
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 sm:p-8">
//             <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-center">Add Your Achievements</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6">
//                 <input
//                     type="text"
//                     name="name"
//                     className="border p-2"
//                     placeholder="Achievement Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="year"
//                     className="border p-2"
//                     placeholder="Year"
//                     value={formData.year}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="file"
//                     name="certificate"
//                     className="border p-2"
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="flex justify-center mb-4 sm:mb-6">
//                 <button
//                     className="bg-blue-500 text-white p-2 w-full sm:w-auto"
//                     onClick={handleAddAchievement}
//                 >
//                     Add Achievement
//                 </button>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Name</th>
//                             <th className="py-2 px-4 border-b">Year</th>
//                             <th className="py-2 px-4 border-b">Certificate</th>
//                             <th className="py-2 px-4 border-b">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {achievements.map((achievement, index) => (
//                             <tr key={index}>
//                                 <td className="py-2 px-4 border-b">{achievement.name}</td>
//                                 <td className="py-2 px-4 border-b">{achievement.year}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <img
//                                         src={URL.createObjectURL(achievement.certificate)}
//                                         alt="Certificate"
//                                         className="w-20 h-20 object-cover"
//                                     />
//                                 </td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         className="bg-red-500 text-white p-2"
//                                         onClick={() => handleDeleteAchievement(index)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="flex justify-center mt-4 sm:mt-6">
//                 <button
//                     className="bg-green-500 text-white p-3 w-full sm:w-auto"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AchievementsForm;



