import React, { Component } from 'react';
import { validateFields } from './validation';
import classnames from 'classnames';

const initialState = {
	firsname: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  lastname: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  email: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  password: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  repeat_password: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  submitCalled: false,
  allFieldsValidated: false
};
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    console.log(initialState)
  }   

  /*
   * validates the field onBlur if sumbit button is not clicked
   * set the validateOnChange to true for that field
   * check for error
   */
  handleBlur(validationFunc, evt) {
    const field = evt.target.name;
    // console.log(field)
    // validate onBlur only when validateOnChange for that field is false
    // because if validateOnChange is already true there is no need to validate onBlur
    if (
      this.state[field]['validateOnChange'] === false &&
      this.state.submitCalled === false
    ) {
      this.setState(state => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value)
        }
      }));
    }
    return;
  }

  /*
   * update the value in state for that field
   * check for error if validateOnChange is true
   */
  handleChange(validationFunc, evt) {
    const field = evt.target.name;
    const fieldVal = evt.target.value;
    this.setState(state => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : ''
      }
    }));
  }

  /*
   * validate all fields
   * check if all fields are valid if yes then submit the Form
   * otherwise set errors for the feilds in the state
   */
  handleSubmit(evt) {
    evt.preventDefault();
    // validate all fields
    const { firsname, lastname,email, password,repeat_password } = this.state;
    const firsnameError = validateFields.validatefirsname(firsname.value);
    const lastnameError = validateFields.validatelastname(lastname.value);
    const emailError = validateFields.validateEmail(email.value);
    const passwordError = validateFields.validatePassword(password.value);
    const repeat_passwordError = validateFields.validaterepeat_password(repeat_password.value);


    if(repeat_password.value === password.value && [firsnameError,lastnameError,emailError,passwordError,repeat_passwordError].every(e => e === false)){
    	// console.log(repeat_password.value,password.value)
    	this.setState({ passwordfaild:false});
      this.setState({ ...initialState, allFieldsValidated : true });
      this.showAllFieldsValidated();
    }
    // if (repeat_password.value != password.value) 
    // {
    //   // no errors submit the form
    //   // console.log('success');
    //   // alert("Enter the same password")
    //   // clear state and show all fields are validated
    //   this.setState({ passwordfaild:true});

    //   // this.showAllFieldsValidated();
    
    // } 
    else 
    {
      // update the state with errors
      this.setState(state => ({
      	firsname: {
          ...state.firsname,
          validateOnChange: true,
          error: firsnameError
        },
        lastname: {
          ...state.lastname,
          validateOnChange: true,
          error: lastnameError
        },

        email: {
          ...state.email,
          validateOnChange: true,
          error: emailError
        },
        password: {
          ...state.password,
          validateOnChange: true,
          error: passwordError
        },
        repeat_password: {
          ...state.repeat_password,
          validateOnChange: true,
          error: repeat_passwordError
        }
      }));
    }
    if(repeat_password.value != password.value){
      this.setState({ passwordfaild:true});
    }
    
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {
    const { firsname,lastname, email, password,repeat_password, allFieldsValidated, passwordfaild} = this.state;
    return (
      <div className="Form col-md-8 col-lg-6">
        <div className="card shadow">
          <div className="card-header">
            <h4 className="text-center">Form Validation React</h4>
          </div>

          <div className="card-body">
            {allFieldsValidated && (
              <p className="text-success text-center">
                Success, All fields are validated
              </p>
            )}
            


            {/* Form Starts Here */}
            <form onSubmit={evt => this.handleSubmit(evt)}>
        	{/*firsname*/}
        	<div className = "flexdisplay">
	            <div className="form-group">
	                <label>Firsname</label>
	                <input
	                  type="text"
	                  name="firsname"
	                  value={firsname.value}
	                  placeholder="Enter your firsname"
	                  className={classnames(
	                    'form-control',
	                    { 'is-valid': firsname.error === false },
	                    { 'is-invalid': firsname.error }
	                  )}
	                  onChange={evt =>
	                    this.handleChange(validateFields.validatefirsname, evt)
	                  }
	                  onBlur={evt =>
	                    this.handleBlur(validateFields.validatefirsname, evt)
	                  }
	                />
	                <div className="invalid-feedback">{firsname.error}</div>
	              </div>
	          	{/*lastname*/}
	            <div className="form-group" id = "space">
	                <label>Lastname</label>
	                <input
	                  type="text"
	                  name="lastname"
	                  value={lastname.value}
	                  
	                  placeholder="Enter your lastname"
	                  className={classnames(
	                    'form-control',
	                    { 'is-valid': lastname.error === false },
	                    { 'is-invalid': lastname.error }
	                  )}
	                  onChange={evt =>
	                    this.handleChange(validateFields.validatelastname, evt)
	                  }
	                  onBlur={evt =>
	                    this.handleBlur(validateFields.validatelastname, evt)
	                  }
	                />
	                <div className="invalid-feedback">{lastname.error}</div>
	              </div>
              </div>
              {/* Email field */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email.value}
                  placeholder="Enter your email"
                  className={classnames(
                    'form-control',
                    { 'is-valid': email.error === false },
                    { 'is-invalid': email.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateEmail, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateEmail, evt)
                  }
                />
                <div className="invalid-feedback">{email.error}</div>
              </div>

          {/* Password field */}
              <div className = "flexdisplay">
	              <div className="form-group">
	                <label>Password</label>
	                <input
	                  type="password"
	                  name="password"
	                  value={password.value}
	                  placeholder="Enter your password"
	                  className={classnames(
	                    'form-control',
	                    { 'is-valid': password.error === false },
	                    { 'is-invalid': password.error }
	                  )}
	                  onChange={evt =>
	                    this.handleChange(validateFields.validatePassword, evt)
	                  }
	                  onBlur={evt =>
	                    this.handleBlur(validateFields.validatePassword, evt)
	                  }
	                />
	                <div className="invalid-feedback">{password.error}</div>
	              </div>
	          	{/* repeat_password field */}
	              <div className="form-group" id = "gap">
	                <label>repeat_password</label>
	                <input
	                  type="password"
	                  name="repeat_password"

	                  value={repeat_password.value}
	                  placeholder="repeat password"
	                  className={classnames(
	                    'form-control',
	                    { 'is-valid': repeat_password.error === false },
	                    { 'is-invalid': repeat_password.error }
	                  )}
	                  onChange={evt =>
	                    this.handleChange(validateFields.validaterepeat_password, evt)
	                  }
	                  onBlur={evt =>
	                    this.handleBlur(validateFields.validaterepeat_password, evt)
	                  }
	                />
	                <div className="invalid-feedback">{repeat_password.error}</div>
	                {passwordfaild && (
              		<p className="text-danger text-center">
               			 Enter same password
             		 </p>
           			 )}
	              </div>
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-block"
                onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
