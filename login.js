function loginFun(){
      var emailId,subject;
      var emailReg =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	
	emailId = document.getElementById("mailid").value;
	subject = document.getElementById("subject").value;
	
  if( subject ===''){
    document.getElementById("p2").innerHTML = '<h6 style="color:red">  Please Enter Your Password* </h6>';
  }else{
    document.getElementById("p2").innerHTML = '';
  }
  if(emailId === ''){
    document.getElementById("p1").innerHTML = '<h6 style="color:red">  Please Enter your Email ID* </h6>';
  }
  else if(!(emailId).match(emailReg)){
    document.getElementById("p1").innerHTML = '<h6 style="color:red">  Please Enter Correct Email ID* </h6>';
  }
  else{
  document.getElementById("p1").innerHTML = '';
  }
}
  function RegisterFun(){
      var name1, emailId1, subject1, subject2;
      var emailReg =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	
		var lowercaseLetter = /[a-z]/g;
		var uppercaseLetter = /[A-Z]/g;
	
	name1 = document.getElementById("name1").value;
	emailId1 = document.getElementById("mailid1").value;
	subject1 = document.getElementById("subject1").value;
	subject2 = document.getElementById("subject2").value;
	
  if( name1 ===''){
    document.getElementById("p4").innerHTML = '<h6 style="color:red">  Please Enter Your Name* </h6>';
  }else{
    document.getElementById("p4").innerHTML = '';
  }
  if( subject1 ===''){
    document.getElementById("p6").innerHTML = '<h6 style="color:red">  Please Enter Your Password* </h6>';
  }
  else if(subject1.length <=7){
	 document.getElementById("p6").innerHTML = '<h6 style="color:red">  Password must contain 8  characters* </h6>';
  }
  else if(!(subject1).match(lowercaseLetter)){
	 document.getElementById("p6").innerHTML = '<h6 style="color:red">  Password must contain 1 Lower Case character* </h6>';
  }
  else if(!(subject1).match(uppercaseLetter)){
	 document.getElementById("p6").innerHTML = '<h6 style="color:red">  Password must contain 1 Upper Case character*</h6>';
  }
  else{
    document.getElementById("p6").innerHTML = '';
  }
  if(subject2 === ''){
    document.getElementById("p7").innerHTML = '<h6 style="color:red">  Please Enter Confirem Password* </h6>';
  }
  else if( subject1.localeCompare(subject2)){
    document.getElementById("p7").innerHTML = '<h6 style="color:red">  Password is Not Matching* </h6>';
  }else{
    document.getElementById("p7").innerHTML = '';
  }
  if(emailId1 === ''){
    document.getElementById("p5").innerHTML = '<h6 style="color:red">  Please Enter your Email ID* </h6>';
  }
  else if(!(emailId1).match(emailReg)){
    document.getElementById("p5").innerHTML = '<h6 style="color:red">  Please Enter Correct Email ID* </h6>';
  }
  else{
  document.getElementById("p5").innerHTML = '';
  }
}
  

