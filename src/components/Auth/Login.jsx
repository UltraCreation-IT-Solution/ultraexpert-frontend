import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="h-full mt-[100px] bg-white m-auto flex justify-center items-center">
      <div className="sm:max-w-md w-[90%] bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <h1 className="text-4xl font-bold mb-8">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
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
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-lg text-white font-semibold py-2 px-4 rounded-md w-full"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
