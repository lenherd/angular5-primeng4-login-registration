Tasks Completed:
1. Register and login buttons on first page
2. User can register with name,role,userid and password
3. User can login with the created user id and password
4. On the home page there are two tabs
5. Tab1 contains a datagrid of all the registered users
6. The delete button deletes the user based on his userid
7. The update option updates the user password, the user can login with the updated password
8. On click of edit it opens a movable dialogue box
9. Tab2 contains a drag-drop option, that allows user to drag data from one div to another
10. User can logout from the account and to login again he will have to use the login page, he can't login just by going back on the previous page.
11. Used primrng4 to do the ui functionalities


Tasks Incomplete:
1. On clicking reorder the roles don't get reordered-->minor error
2. Due to mockbackend the drag-drop option couldnt work. As the drag-drop option makes use of arrays and json file to update tables,faced a challenge due to the project using mockbackend http local storage and no arrays
(Just to make sure drag-drop works kept the original drag-drop example) 
Note: The tried codes are written in the comment section

Challenges faced:
1. Due to unstable angular2 and frequent updates on angular2 getting a project to work really took a long time.The latest angular doesn't use "systemjs.config.js" and hence had to find a project that had one since most of the tutorials/references/notes use it.
2. Due to the mockbackend http local storage used in the project it consumed a way lot more time than expected, but again this is because there are no new models/tutorials/references for working with it in angular4/5
3. Faced a lot of challenges and errors in trying to get primeng work again due to angular issues. Somehow found a way to get it working using the console and googling the errors. The current model uses angular5 and primeng.
4. With every primeng model added it gave rise to errors had to solve it using the console again.
5. Every other kind of error was solved by previous experience and/or  googling the errors

