let areValidCredentials = (name, password) => {
  // your code here
 
  if(name.length >= 3 && password.length>= 8){
  	return true;
     } else {
     	return false;
     }
  // console.log(return true);
}

areValidCredentials('Rit', 'mylongpassword')
