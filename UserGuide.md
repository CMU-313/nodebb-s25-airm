User Documentation on new features

1. New feature: register as an instructor
Implemented a new functin to register as an instructor. In the registration page, the user can check the "Are you a Instructor" box under the password to register as an instructor. This allows user to be registered as an instructor and hence having ability to manage posts and post private posts.
How to test:
Frontend:
NodeBB -> log in (upper right corner) -> register -> check "Are you an instructor?" box -> complete register button -> test instructor functions (e.g. mark as official)
Test file:
Run test/user.js
This is a test file that tests the user creation process and verifies the privilages user have. The specific test for this functionality is located at line 2702. It tests whether use registered as an instructor has admin privilage, hence making sure they can manage posts and mark questions as official. This is sufficient for testing the function of registering as an instructor, making sure they have the ability we want them to have.

2. New feature: search
Implemented a new search feature that can search for keywords of the post the user wants to look for in the categories page. The user can go to the one of the categories page, enter a keyword they want to look for, and then the search result would be fetched with the backend search topics api after pressing enter. Then, if no result is found, the page displays “No matching topics found.” Otherwise, it dynamically displays the posts that contain the search input. When there is search result, the display is not fully functional yet: the page only shows a $ sign instead of actual posts.
How to test:
Frontend:
NodeBB -> categories -> Announcements / General Discussion / Comments & Feedback/ Blogs -> enter search result -> the page shows No matching topics found if search content does not exist or $ if search content exists
Test file:
Run test/search-topics-api.js.
This is a test file that tests the search topics api in src/api/search.js. It tests for two inputs, one valid and one invalid. The valid input is an existing topic, so the response should include the expected topic. The invalid inputs include the following: non-existent queries, special characters, and empty query, so the response should correctly return no topic. It also tests whether the search function is correctly case-insensitive. These tests cover the most cases that would occur in search, including edge cases, so should be sufficient for covering the new function.

3. New feature: default tag whitelist
Implemented a folder feature through the use of default nodes tag whitelist. Admin can now see a section to input a default tag whitelist. Within this form users are also able to signify the end of a tag by pressing enter which will result in the tag being highlighted blue and having the option to delete it.
How to test:
From the nodeBB homepage go to admin, then manage, then categories. From the categories page click new category and you can now see an input section for a default tag whitelist. Video demo: https://drive.google.com/file/d/1FbTcDUAf0JE4wCuAsEjsrXWl1HN96G-L/view?usp=sharing 

4. New feature: mark as official. 
Implemented a feature where admins can mark a post as official for a topic. When it is marked it will display a badge saying official answer. Admins only can click and see the mark as official button. Clicking the button should toggle the official status. 
How to test: 
log in as an admin. Go and open a topic. Check if the mark as official button appears under a post and the badge should appear. There is also a test file test/adminPrivileges.test.js and run NPM test. The test cases check if Admin marks a post as official, the post should display the badge and that a user cannot mark a post with the UI not showing the button.