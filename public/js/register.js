
function convertDate (dateString) {
  // Split the input date string into month, day, and year components
  const dateParts = dateString.split('/');
  const month = dateParts[0];
  const day = dateParts[1];
  const year = dateParts[2];

  // Create a new date object with the components in the required format
  const formattedDate = new Date(`${year}-${month}-${day}`);

  // Extract the date string in the required format from the date object
  const formattedDateString = formattedDate.toISOString().slice(0, 10);

  // Return the formatted date string
  return formattedDateString;
}

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const dob1 = document.querySelector('#dob').value.trim();
    const emailAddress = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const myFile = document.querySelector('#myFile').value.trim();

    console.log(`${firstName} ${lastName} ${emailAddress} ${dob1} ${userPassword}`);
  
    if (firstName && lastName && dob1 && emailAddress && userPassword) {

      const DOB = convertDate(dob1);

      console.log(` Enters here again ${firstName} ${lastName} ${DOB} ${emailAddress} ${userPassword}`);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, DOB, emailAddress, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);