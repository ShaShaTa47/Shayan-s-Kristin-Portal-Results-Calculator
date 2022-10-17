# Shayan-s-Kristin-Portal-Results-Calculator

Shayan's Kristin-Portal-Results-Calculator

Download Instructions	Page 2
User collected data	Page 2
How does this extension work?	Page 2
Known Bugs and Issues	Page 3
Tools	Page 3
Permissions	Page 3
Developer Contact Information	Page 3
Privacy Policy	Page 3


“Shayan's Kristin-Portal-Results-Calculator” is a Chrome extension. Thank you for considering using this extension.
An extension for the use of https://portal.kristin.school.nz/group/portal/my-info/results to calculate your result mean, median, mode, range, etc. This tool also contains a histogram graph function for your grades.
☆☆  Key Features ☆☆ 
✓  Produce frequency-chart/histogram of results *
✓ Calculate mean 
✓ Calculate mode
✓ Calculate median
✓ Calculate range
✓ Calculate sum 
✓ Calculate count

*Scroll down for next page*
*Scroll down for next page*
*Scroll down for next page*
*Scroll down for next page*
*Scroll down for next page*

Download Instructions
Files
Folder
Extension Zip
Download zip file of extension. 
Unzip extension file to extract contents in a folder
Open Chrome extension page through the following two options.
type chrome://extensions in the url bar and press enter
click on the three dots in the top right of the browser, then click "More tools" then click "Extensions"
Turn on the switch on the top right of the page that says "Developer mode"
Press “Load Unpacked” on the top left
Select extracted/unzipped file in “Step 2”

All your grades on the Kristin Portal iframe or commportal aspx through the usage of a DOM “res_grd_cell” class selector executed in contentScript.js.

How does this extension work?
“Find Page” Functionality:

If you enter your Kristin user-ID and press the “Find Page” button, the extension will replace your current tab’s Uniform Resource Locators (URL) with:
https://portal.kristin.school.nz/commportal/stures.aspx?sn={your-user-ID}
“Calculate” Functionality:
If you press the “Calculate” button, the page will use the manifest.json “<https://portal.kristin.school.nz/*>” content_scripts match in order to check if you are on the intended results page for the calculated functionality. If your “active_tab” is on the intended page, manifest.json will use the "scripting" and “tab” permission to inject contentScript.js into your results page. The contentScript.js file will use DOM functionality to query select the data mentioned in User collected data. After you press the button, script.js will send a message to contentScript.js which requests the User collected data. Next, the requested data - messaged through contentScript.js which ran in the portal - will be stored in a scope in script.js and the requested data will be displayed in the extension through editing the extension’s DOM. In summary, the contentScript.js file is able to read your Portal’s DOM and it collects the data mentioned in User collected data; and the data is parsed and messaged in script.js which is able to edit your extension’s DOM.

Known Bugs and Issues
Sometimes, “Error 1” is shown after the user presses the “calculate” button wrongly. Usually, refreshing your page will resolve this issue.

Tools
Chart.js is used to style the histogram which is displayed after the “Calculate” Functionality is successfully executed

Permissions
"permissions": [
       "activeTab",

],
"host_permissions": [

       "https://portal.kristin.school.nz/*"
],

Developer Contact Information
To contact the developer to report suggestions, bugs, feedback, etc, please contact 47135@kristin.school.nz.
Privacy Policy
Shayan's Kristin-Portal-Results-Calculator Privacy Policy https://docs.google.com/document/d/1h5gQvCR97NKujUnAD8hBkx-ET9nBAb1SOZzTsFNwukw/edit?usp=sharing
