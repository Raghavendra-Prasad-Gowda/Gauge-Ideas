const { openBrowser, write, closeBrowser, goto,click, into, $, title, } = require('taiko');
const assert = require('assert').strict;

step("Open Chrome Browser",async()=>{
    await openBrowser({headless:false},{args:['--window-size=1440,1440']});
})

step("Goto the login page of HRM Demo URL <URL>",async(URL)=>{
    await goto(URL);

   // await currentURL();

    //Assertion to verify the Title
    assert.strictEqual("OrangeHRM", await title());
});    

step("Enter username <Username> and password <Password>",async(Username,Password)=>{
    await write(Username,into($("//input[@name='txtUsername']")));
    await write(Password,into($("//input[@name='txtPassword']")));
});


step("Click on Login button",async()=>{
    await click($("//input[@name='Submit']"));
});

step("Verify the Username Display in the right top corner of the page", async()=>{
    var name=await ($("//a[@id='welcome']")).text(); 
    if(name.length>0){
        console.log("Login Success")
    }else{
        console.log("Login Fail")
    }
});

step("Click on Logout Button",async()=>{
    click($("//a[@id='welcome']"))
    click("Logout")
});

step("Close Chrome Browser",async()=>{
    await closeBrowser();
})


step("Create the following projects", async()=>{
});