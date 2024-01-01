import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .required("Email is required!")
    .max(30, "Email cannot be more than 30 characters!"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long!")
    .required("Password is required!"),
});
export const loginSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required!")
    .max(20, "Name cannot be more than 20 characters!"),
  lastName: yup
    .string()
    .required("Last Name is required!")
    .max(20, "Name cannot be more than 20 characters!"),
  email: yup
    .string()
    .email("Invalid email!")
    .required("Email is required!")
    .max(30, "Email cannot be more than 30 characters!"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long!")
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match!")
    .required("Confirm Password is required!"),
  referedBy: yup.string().optional(),
  mobileNo: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits!")
    .min(10, "Must be exactly 10 digits!")
    .max(10, "Must be exactly 10 digits!")
    .required("Mobile Number is required!"),
});
