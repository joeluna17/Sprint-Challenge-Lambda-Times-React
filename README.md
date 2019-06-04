# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  	ProtoTypes are used for type checking and validating the data that is being passed to components via props. ProtoTypes check the shape of the data being passed through as well as the raw/permeative types (string, int, boolean), and help catch and prevent bugs as our apps grow in complexity. It is important to type check in JavaScript because of the dynamic nature of the language meaning that the compiler does not force a strict or safe type to be passed in through a function or a variable I as the compiler will try and pass arguments through a function or var and not enforce any protocol on what the var should actually be. This is both a good and bad thing as it allows for a flexibility that other languages do not. It also can introduce errors if the programmer does not keep a vigilant eye on what they are coding.



- [ ] Describe a life-cycle event in React?

    		The React life-cycle event is has multiple transition of states and rely on different methods and user interaction to execute, but on the most basic way to explain it is that the application is born, the application grow, and the application dies. When born the application is calling the classical constructor method and setting up the state variables as well as calling the super class that the component is inheriting from. Afterwards the render method is called and tells the Dom what should be displayed to the user which shortly after calls the componentDidMount method that says the scaffold of the apps UI has loaded and here we can choose to do something or not. When Growing some data on the state is changed and because of that there are multiple methods that are called that being shouldComponentUpdate which can, on some logic change some data or UI in the method or not, but the most important method being called and executed in the render function which reloads the components data or UI to reflect the changes. This function stays alive through the beginning and changes of the life cycle. This method is considered the life blood of the app. The death of the application occurs when data and the UI will be unmounted from memory and the application will be terminated. This will call one function called componentWIllUnmount which is used as a clean up method.

- [ ] Explain the details of a Higher Order Component?

    	A HOC is used to take a functional component and wrap it with more functionality via a classical component and allows the functional component to have access to data and other functionality that HOC may have and implement. The best part of an HOC is that it allows for more reusability via composition rather that linking components through inheritance. Allowing components to share traits and yet allowing components to have individuality and control their own state and UI. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

        They first way to style components in react and actually my preferred method as of right not is plain css/sass/less approach. Having a style page and associating a className with the component to update the UI design foe each individual component. This is straight forward and familiar to users that have been coding traditional static websites. 
		The second way to style components is to use React Strap which is a third party library that allows you to take advantage of pre composed components and make easy changes to the components without a lot of overhead.
		The third way to style components and one that I like more and will eventually migrate to with more practice is the the styled-components which is a library to write css in js just like jsx allows us to write html in js. This implementation of css in js allows us to encapsulate all component related responsibilities and do alway with classNames that must be used to style components directly in the build file and also allowing us to take advantage of js to manipulate how the component should display dependent on some logical condition which is a big plus.

## Project Setup

Follow these steps to set up your project:

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [ ] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [ ] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [ ] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [ ] You should now be able to filter cards using your tabs!
- [ ] Make sure all of your props being passed are validated using PropTypes.
- [ ] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
