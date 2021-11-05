# React Tech Test

The purpose of this test is to see how comfortable you are working with react.

Please create a fork using your github account and create a branch named after your name for your code.
When you're happy and have completed your tasks please create a pull request and let us know you've finished.

### Project structure

-   The main contents of this project is found in the `/src` folder. Most of your tasks will only involve editing/adding code in this folder but feel free to add any other folders/files should you see fit.
-   All of the app's pages are stored in the `src/pages` folder and all the components are found in `src/components`. We've created a couple of components but add more as you complete the tasks.

## Tasks

1. **Layout Task**
    - Using the existing `Header` and `Footer` components create a layout that applies to all pages.
    - The `Header` should appear at the top of all pages.
    - The `Footer` should sit at the bottom of all pages. The component should be sticky to the bottom of the screen, so if the content doesn't reach the bottom of the screen then white space should appear between the content and the footer.
    - A responsive layout should be applied to the main content of each page.
        - A gutter margin of 20px should appear on the left and right sides of the content.
        - The content should reach a maximum of 1200px. If the screen is wider than this it should be centrally aligned horizontally.
2. **API Task**
    - We have created an API endpoint at `https://s3.eu-west-2.amazonaws.com/tap.techtest/destinations.json` that returns JSON collection of destinations. The aim of this task is to fetch this content and render it responsively. You should:
        - Fetch the API content from `https://s3.eu-west-2.amazonaws.com/tap.techtest/destinations.json`.
        - On the page `/api-task` render a list of these destinations. Each destination should show:
            - An image
            - Destination name
            - Country
            - Continent
        - The content should be responsive so should display correctly on all device sizes.
        - The images are hosted using [imgix](https://docs.imgix.com/apis/rendering). This means you can resize and crop the image as you see fit.
3. **Form Task**
    - We need you to create a form that takes user data and submits it to a server. You can use any library that you feel comfortable for this task.
        - The form should submit a post request to `https://reqbin.com/echo/post/json` with the JSON payload. This is a mock endpoint and should always return a 200 response code.
        - The form should contain 3 fields:
            - First Name
            - Last Name
            - Email
        - Basic validation should applied ensuring the fields are not empty.
        - On successful submission the user should be redirected to `/form-task/success`.
        - Only basic styling is required. You don't have to be fancy. Just ensure it's easy to read and submit.

### Other notes

-   The project has been setup to use SASS and ideally all styling should be done using this. Our preferred react styling method is using modules as this is what we use in our projects. If you would prefer to use another method please feel free to do so.
-   Feel free to add libraries to the project as you see fit.
-   Refactor as much as you like! We're interested to see how you code.
