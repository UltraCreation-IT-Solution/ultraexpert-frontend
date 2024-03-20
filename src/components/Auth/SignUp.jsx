import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };

  const validationSchemaStep1 = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const validationSchemaStep2 = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    navigate("/loginTest");
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="h-full mt-[100px] bg-white m-auto flex justify-center items-center">
      <div className="sm:max-w-md w-[90%] bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={
            step === 1 ? validationSchemaStep2 : validationSchemaStep1
          }
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              {step === 1 && (
                <>
                  <div className="mb-6">
                    <label
                      htmlFor="firstName"
                      className="block mb-1 font-semibold text-lg"
                    >
                      First Name:
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter your first name"
                      className="border rounded-md p-2 w-full"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="lastName"
                      className="block mb-1 font-semibold text-lg"
                    >
                      Last Name:
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter your last name"
                      className="border rounded-md p-2 w-full"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isValid || !dirty}
                    className="bg-blue-500 text-lg text-white font-semibold py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-1 font-semibold text-lg"
                    >
                      Email:
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="border rounded-md p-2 w-full"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-1 font-semibold text-lg"
                    >
                      Password:
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="border rounded-md p-2 w-full"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-1 font-semibold text-lg"
                    >
                      Confirm Password:
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="border rounded-md p-2 w-full"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-lg text-white font-semibold py-2 px-4 mb-2 rounded-md w-full"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                    className="bg-blue-500 text-lg text-white font-semibold py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                  >
                    Submit
                  </button>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
