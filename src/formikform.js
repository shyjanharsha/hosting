import React from 'react';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import * as Yup from 'yup';

class Regform extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required')
                        .min(5, 'firstName must be 5 letters'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required'),


                })}
                // onSubmit={fields => {
                //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                // }}
            >
                {({ errors, touched }) => (

                	<div className="Form col-md-8 col-lg-6">
                	<div className="card shadow">
                    <Form id="align">
                    <div className="form-group">
                        <div className="flexdisplay">
                            <div className="form-group col-5 ">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="lastName" className="marginlf" id="space">Last Name</label>
                                <Field name="lastName" type="text"  className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group col-5">
                            <label htmlFor="email" >Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="flexdisplay">
                            <div className="form-group col-5">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="confirmPassword" className="marginlf" id = "gap">Confirm Password</label>
                                <Field name="confirmPassword" type="password" id="gap" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        
                        <div className="form-group col-5">
                            <button type="submit" className="btn btn-secondary btn-block">Register</button>
                        </div>
                    </div>    
                    </Form>
                    </div>
                    </div>
                )}
            </Formik>
        )
    }
}

export default Regform; 