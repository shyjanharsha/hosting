import validator from 'validator';

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
 * See their docs here https://github.com/validatorjs/validator.js
 */

class ValidateFields {
  /*
   * A method that takes in the email
   * Validates it
   * Returns the response either error or false if there is no error
   */

  validatefirsname(firsname){
    if(validator.isEmpty(firsname)){
      return 'firstname is required';
    }
    if(!validator.isAlpha(firsname)){
      return 'name must be in letter';
    }

    if(!validator.isLength(firsname, { min: 6 })){
      return 'Name should be minimum 6 characters';
    }else{

    }
    return false;
  }
  validatelastname(lastname){
    if(validator.isEmpty(lastname)){
      return 'lastname required';
    }
    if(!validator.isAlpha(lastname)){
      return 'name must be letters';
    }
    if(!validator.isLength(lastname, { min: 5 })){
      return 'lastname should be minimum 5  characters';
    }
    return false;
  }
  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Email is required';
    } else if (!validator.isEmail(email)) {
      return 'Invalid Email';
    }
    return false;
  }

  validatePassword(password) {
    if (validator.isEmpty(password)) {
      return 'Password is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      return 'Password should be minimum 8 characters';
    }
    return false;
  }
  validaterepeat_password(repeat_password) {
    if (validator.isEmpty(repeat_password)) {
      return 'repeat_password is required';
    } else if (!validator.isLength(repeat_password, { min: 8 })) {
      return 'repeat_password should be minimum 8 characters';
    }
    return false;
  }

}

const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };