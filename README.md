# Simple Node REST Framework

This framework will allow you to start a Node REST server at *localhost:3000/*, set up routes, and execute REST commands.  

**To use the framework - require it with the code below**


`var framework = require("./framework");`

##Framework methods

####addResource

Syntax:  `framework.addResource("resourceName");`  

Description: This will add an additional path to your server.

####startServer

Syntax:  `framework.startServer();`  

Description: This will create and start the server using any resource paths that you have added.

##REST methods 

The resources that are added via the addResource method will all respond to the standard REST methods below.  You can test these methods using superagent-cli. 

**GET:**  This reads a specified existing JSON file.  
**Example:** Using superagent-cli, type the following into the command line `superagent http://localhost:3000/specifiedResourceName/specifiedFileName GET` This will return the contents of the specified JSON file.

**POST:**  This will create a JSON file with your specified input and file name and add it to your ./data folder. 
**Example:** Using superagent-cli, type the following into the command line `superagent http://localhost:3000/specifiedResourceName/specifiedFileName POST '{"baby":"goblin"}'` This will create a JSON file under the specified resource path and file name and the contents of the file will be {"baby":"goblin"}.

**PUT:** This will take a specified existing JSON file from your ./data folder, and replace the contents of the file with your specified input.
**Example:** Using superagent-cli, type the following into the command line `superagent http://localhost:3000/specifiedResourceName/specifiedFileName PUT '{"dark":"night","sunny":"day"}'` This will replace the contents of an existing JSON file under the specified resource path and file name.  The contents of the file will be {"dark":"night","sunny":"day"}.

**PATCH:** This will take a specified existing JSON file from your ./data folder, and will go through all existing keys and update them to any new values provided by your specified input.  It will also append any new data that does not match any existing keys.  Unmatched keys from the original file will be left in the file as is.
**Example:** Using superagent-cli, type the following into the command line `superagent http://localhost:3000/specifiedResourceName/specifiedFileName PATCH '{"sunny":"Friday","rainy":"Saturday"}'` Using the same resource and file as you used in the PUT method above, this will update the contents of that file to the following: {"dark":"night","sunny":"Friday","rainy":"Saturday"}.

**DELETE:** This will delete a specified existing JSON file from your ./data folder.
**Example:** Using superagent-cli, type the following into the command line `superagent http://localhost:3000/specifiedResourceName/specifiedFileName DELETE` This will delete the specified JSON file.