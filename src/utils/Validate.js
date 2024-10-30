export const checkValidata = (email, password, confirmPassword) => {
    
    const isEmailValid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);


    if(!isEmailValid) return "*Email is not valid";
    if(!isPasswordValid) return "*Password is not valid";
    if(password !== confirmPassword) return "*Passwords do not match";

    return null;
}
