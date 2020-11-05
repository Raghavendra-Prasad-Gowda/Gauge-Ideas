const {click, into, write, dropDown,$ } = require("taiko");

 step("Click on PIM Tab and click on Add Employee Feature",async()=>{
    await click($("//a[@id='menu_pim_viewPimModule']"));
    await click($("//a[@id='menu_pim_addEmployee']"));
 });

 step("Enter Employee Name <FirstName>, Middle Name <MiddleName> and Last Name <LastName>",async(firstName,middleName,lastName)=>{
    await write(firstName,into($("//input[@id='firstName']")));
    await write(middleName,into($("//input[@id='middleName']")));
    await write(lastName,into($("//input[@id='lastName']")));
});

step("Select Create Login Details",async()=>{
    await click($("//input[@id='chkLogin']"))
})

step("Enter Username <uname> and Password <password> and confirm the password again.",async(userName, Password)=>{
    await write(userName, into($("//input[@id='user_name']")));
    await write(Password, into($("//input[@id='user_password']")));
    await write(Password, into($("//input[@id='re_password']")));
})

step("Select Status as <Enable_OR_Disable>",async(Status)=>{
    
    if(Status==="Enabled"){
        await dropDown({id:'status'}).select('Enabled')
    }else{
        await dropDown({id:'status'}).select('Disabled')
    }
    
})

step("Click on Save",async()=>{
    await click("Save")
})

step("Check data from csv file <Username>, <Password>, <ID> and <Test_Series>",async(Username,Password,ID,Test_Series)=>{
    console.log(Username);
    console.log(Password);
    console.log(ID);
    console.log(Test_Series);
})



beforeScenario(async function () {
    console.log("*********Before Scenario************");
});

afterScenario(async function () {
    console.log("*********After Scenario************");
});