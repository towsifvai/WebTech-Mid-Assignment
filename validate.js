function validateForm(event) {

event.preventDefault();

const form= document.getElementById("employeeForm");    
const id=document.getElementById("employeeId");
const name= document.getElementById("employeeName");
const email= document.getElementById("employeeEmail");    
const date=document.getElementById("employeeJoin");
const department= document.getElementById("department");
const gender= document.getElementById("employeeGender");    
// const type=document.getElementById("employeeType");
const chekcbox=document.getElementsByName("employeeType");

const errorid=document.getElementById("IdError");
const errorname= document.getElementById("NameError");
const erroremail= document.getElementById("EmailError");    
const errordate=document.getElementById("DateError");
const errordepartment= document.getElementById("DepartmentError");
const errorgender= document.getElementById("RadioError");    
const errortype=document.getElementById("CheckboxError");




function validateName() {
  const regex = /^[a-zA-Z\s]{3,}$/;
  if (!regex.test(name.value.trim())) {
    errorname.style.display = 'inline';
    return false;
  }
  errorname.style.display = 'none';
  return true;
  }


  function validateID()
  {
const regex = /^(?=.*[A-Z])(?=.*\d)[A-Z0-9]{3,}$/;
if(!regex.test(id.value.trim()))
{
errorid.style.display='inline';
return false;
}
errorid.style.display='none';
return true;
}



function validateEmail(){

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
  if (!regex.test(email.value.trim())) {
  {
    erroremail.style.display= 'inline';
    return false;
  }
erroremail.style.display='none';
return true;
}

}




function validateDepartment(){

if (department.value===""){

  errordepartment.style.display='inline';
  return false;
}
errordepartment.style.display='none';
return true;

}


function validateDate(){

if (date.value===""){

  errordate.style.display='inline';
  return false;
}
errordate.style.display='none';
return true;


}



function validateGender()

{

const genderRadious = document.getElementsByName("gender");
let isChecked=false;


for(let i=0;i<genderRadious.length;i++){
  if(genderRadious[i].checked){
    isChecked=true;
    break;
  }
}

if(!isChecked){

  errorgender.style.display='inline';
  return false;
}

errorgender.style.display='none';
return true;
}








function validateCheckbox(){

  let isChecked = false;

  for (let i = 0; i < chekcbox.length; i++) {
    if (chekcbox[i].checked)
    {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
  
    errortype.style.display = 'inline';
    return false;
  }

  errortype.style.display = 'none';
  return true;



}









  
  
  
  
  
  
  
  //returnig all the validation functions
const nameValid= validateName();
const idValid= validateID();
const emailValid=validateEmail();
const departmentValid=validateDepartment();
const dateValid=validateDate();
const genderValid=validateGender();
const typeValid=validateCheckbox();




if (nameValid && idValid && emailValid&&departmentValid&& dateValid
  &&genderValid&& typeValid
) {
  form.submit(); // Now submit the form manually
}
}

