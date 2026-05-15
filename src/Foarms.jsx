import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 import jsPDF from 'jspdf';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 
const generatePdf = (f,l,e) => {
  const pdf = new jsPDF();
  
  // Add border
  pdf.setDrawColor(0); 
  pdf.setLineWidth(0.5);
  pdf.rect(5, 5, 200, 100);
  
  // Add title
  pdf.setFontSize(16);
  pdf.text('Form Data', 10, 20);
  
  // Add form data
  pdf.setFontSize(12);
  pdf.text(`Name: ${f}`, 10, 40);
  pdf.text(l, 10, 50);
  pdf.text(e, 10, 60);
  
  pdf.save('form-data.pdf');
};

 const Foarms = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        generatePdf(values.firstName, values.lastName,values.email);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Foarms