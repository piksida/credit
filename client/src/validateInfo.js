export default function validateInfo(values) {
  let errors = {};

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later"
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvv = false;
  errors.camount = false;

  //Card Amount validation
  if (values.cardAmount === "" || values.cardAmount === '0') {
    errors.message = "Enter amount";
  } else  {
    errors.camount = true;
  }

  //Card CVV expiration
  if ( values.cardSecurityCode.length !== 3) {
    errors.message = "Credit card CVV is invalid";
  } else  {
    errors.ccvv = true;
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || values.cardExpiration.length!==7 || values.cardExpiration[2]!=='/') {
    errors.message = "Credit card expiration date valid form MM/YYYY";
  } else {
    errors.cexp = true;
  }


  //Card Number Verification
  if (values.cardNumber.length!==16 )  {
    errors.message = "Credit card number is not valid";
  } else {
    errors.cnumber = true;
  }

  if (
    errors.camount &&
    errors.cnumber &&
    errors.cexp &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Payment Successful";
  }

  return errors;
}
