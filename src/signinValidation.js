function signinValidation(values){
    let error = {}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const pass_pattern= /^[1-9]{8}/


    if(values.name=== ""){
        error.name= "Name should'n be empty"
    }
    else{
        error.name= ""
    }
    if(values.email=== ""){
        error.email= "Email should'n be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Shouldn't match"
    }
    else{
        error.email= ""
    }
    if(values.password===""){
        error.password= "password should'n be empty"
    }
    else if(!pass_pattern.test(values.password)){
        error.password="Shouldn't match"
    }
    else{
        error.password= ""
    }

    return error

}
export default signinValidation;