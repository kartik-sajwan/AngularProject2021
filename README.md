# COURSE CORRECT

## Overview

Course Correct is a project I made while learning Angular.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Build](#build)
- [Running Tests](#running-tests)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Specs](#specs)

## Prerequisites

Make sure you have the following installed before setting up the project:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli)

To install Angular CLI globally:

```bash
npm install -g @angular/cli
```

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-angular-project.git
cd your-angular-project
```

Install the required dependencies:

```bash
npm install
```

## Running the Project

To run the project locally in development mode, use the following command:

```bash
ng serve
```

This will start the development server. Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Troubleshoot

```bash
npm i -D postcss@latest
```
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```
## Build

To build the project for production, run:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), use:

```bash
ng test
```

To execute end-to-end tests via [Protractor](http://www.protractortest.org/), use:

```bash
ng e2e
```

## Deployment

To deploy the project to a hosting service (e.g., Firebase, AWS S3, GitHub Pages), follow the specific instructions provided by the service for deploying Angular projects. Typically, you'll use the build output from the `dist/` folder.

For example, deploying to GitHub Pages:

```bash
ng build --prod --base-href "https://your-username.github.io/AngularProject2021/"
npx angular-cli-ghpages --dir=dist/AngularProject2021
```

## Folder Structure

Provide an overview of the project structure:

```
your-angular-project/
│
├── src/
│   ├── app/
│   │   ├── components/    # Angular components
│   │   ├── services/      # Angular services
│   │   ├── models/        # Data models
│   │   ├── app-routing.module.ts # Routing module
│   │   ├── app.module.ts  # Root module
│   │   └── app.component.ts # Root component
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── environments/      # Environment configurations
│   ├── index.html         # Main HTML file
│   ├── styles.scss        # Global styles
│   └── main.ts            # Main entry point for the application
│
├── angular.json           # Angular CLI configuration
├── package.json           # npm dependencies and scripts
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

Please make sure your code follows the project's coding conventions and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Functional Requirements
The user should land on the homepage by default.

### 1. TopNavigation
All the icons on the top bar should be clickable and should display the respective pages on the icon click.

>- Course Correct Icon should be placed on the left and clicking on it should open the homepage.
>- Courses - It should also open the homepage on the click
>- My Wishlist - Should show all the courses added in the wishlist ● Cart Details - Should show all the courses added to the cart
>- My Profile Page - Should show the user’s profile

### 2. Dashboard
It should have the below features

>- Page Banner displaying ‘Discover Latest Courses on Angular’
>- List of courses - Each course should show some basic details as
mentioned below(refer designs as well):

>1. The Complete Angular Developer Course
❏ Author-John
❏ ActualPrice-₹899
❏ Discounted%age-10% ❏ Tags-Angular

>2. Build Responsive Websites with HTML5 and CSS
❏ Author-John
 ❏ ActualPrice-₹1099
❏ Discounted%age-7.5% ❏ Tags-Responsive,HTML

>It should have two actions

>- AddToCart-Clickingonitwilladdthecoursetothecart.
>- AddtoWishlist-Clickingonitwilladdthecoursetothe wishlist. Courses already added in the wishlist should be marked with a yellow star.

>Clicking on the arrow should open the course details page for the selected course.

>- Show Discounted Price, if applicable - Some courses should be available at discounted price. In such a scenario, strike the actual price and show the discounted price. Otherwise, just show the actual price.
>- Show Popup - Popup should be shown once the course is added to the cart stating ‘Course successfully added in the cart’. Also, if the user tries to add the course which is already present in the cart, an alert message should be shown to the user stating ‘Already exists in the cart’ with the course name.
>- Implement Pagination - Course list should be paginated. It should show 4 (this number should be configurable) courses initially. Clicking on the next/previous button, should change the courses accordingly.
>- Search bar - User should be able to search the course by the course title, author or tags.
>- Sorting - User should be able to see the sorted data based on price i.e Sort by Lowest and Highest
>- Cart - The cart widget on the right side should be updated in real time to show the list of courses added to the cart and should display the total cost. It should have an action ‘GO TO CHECKOUT ’, clicking on which will take them to the cart page.
>-Also, the cart widget should not move if the page is being scrolled.
### 3. ShoppingCart(Checkoutscreen)
This page should list the courses added to the cart. It should have

>- Course Card - Each course card should have a feature to
>- Move to wishlist - It will remove the course from the cart and will add to the wishlist
>- Delete the course - User should be able to delete the course if not needed
>- Clicking on any of the above actions should update the cart price.
>- Price card shown on the right should show the total cart value and savings amount. Also, it should have a Checkout button, which should show the popup on click, notifying the user about the successful order placement. The cart should get empty once the user clicks on “OK” in the success modal.

### 4. CourseDetails
Course details page should show the information about the selected course. It should have

>- Page Banner displaying ‘Discover Latest Courses on React’
>- Breadcrumb - It should have the title as All Courses with the link to
dashboard Page followed by the selected course title name
>- Course Content - It should describe the course on the left side.
>- Video Card - This card should have any thumbnail image. Clicking on
which should play a video. The card should have the price details (discounted price too if applicable). This card should also allow the user to add the course to the cart or the wishlist and show the popup once the course is added to the cart.
>- Implement time left feature- Some courses are available on sale at a discounted price. So, the card should show how many hours are left for the sale to get over. Time should be calculated on the basis of time left for the next day to start. Also, time should only be shown for those courses whose sale will end in less than 24 hours.

### 5. MyWishlist
It should show the list of courses added to the wishlist. Each course should be given an option to Add to cart. Clicking on it should get an update similar to what we have on the dashboard. It should have the delete option.
 
 ### 6. MyProfile
This page should allow the user to enter his/her basic details

>- Profile Image on the left side.
>- User details should have
>- Display name (Mandatory Field)
>- First name (Mandatory Field)
>- Last name
>- About yourself (Max char 100)
>- Your area of interest (user can select multiple options)
>- Are you a student or a professional?
>- If professional, then - Experience
>- 0-5
>- 5-10
>- 10 & above
>- Expertise
>- Backend
>- Frontend - Mention your role (Max char 200)
Add appropriate validations to each of the fields.Save Button should be disabled when any of the validations fail. On click of save, show a popup that says Your profile is updated.


### Milestones

● Milestone 1
- Project Setup, completion of Dashboard screen and Top navigation(header) is a must along with proper test cases, and proper handling of the error states. Ignore wishlist feature for milestone 1.

● Milestone 2
- Completion of Checkout screen is a must along with proper test cases, and proper handling of the error states.
The user should be able to add items from the dashboard screen(milestone 1) and should be able to view the courses on the checkout screen.
-Delete functionality in the checkout screen is a must.

● Milestone 3
- Completion of Profile screen is a must along with proper test cases, and proper handling of the error states.
- Proper validations should be added for different fields. The user should be allowed to save changes even if changes are made to a single form field.

● Milestone 4
- Completion of Course details screen is a must along with proper test cases, and proper handling of the error states.

● Milestone 5
- Completion of Wish List screen is a must along with proper test cases, and proper handling of the error states.
Move to wishlist feature should be enabled on the dashboard and checkout screen.


This README.md was created with ChatGPT

---
