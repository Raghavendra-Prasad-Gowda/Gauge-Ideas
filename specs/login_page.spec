#Login Feature of HRM Site
This Specs verfiy the various scenarios for login functionality of Banking site


These are Context Steps
*Open Chrome Browser 
*Goto the login page of HRM Demo URL "https://opensource-demo.orangehrmlive.com/"


##Successful Login
|Username|Password|
|--------|--------|
|Admin   |admin123|

*Enter username <Username> and password <Password>
*Click on Login button
*Verify the Username Display in the right top corner of the page
*Click on Logout Button



##Unsuccessfull Login
|Username|Password |
|--------|---------|
|Admin1  |admin1234|
|Admin2  |admin1234|
|Admin3  |admin1234|
|Admin4  |admin1234|

*Enter username <Username> and password <Password>
*Click on Login button

______________________________________________________
These are Tear Down Steps

*Close Chrome Browser

