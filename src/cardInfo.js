import PetocracyHome from "./images/PetocracyHome.png";
import MovieInfo from "./images/MovieInfo.png";
import StartScreenJavascriptQuiz from "./images/StartScreenJavascriptQuiz.png";
import burgerMain from "./images/burgerMain.png";
import UserSearchCity from "./images/UserSearchCity.png";
import TPG2 from "./images/TPG2.png";
import Transactions from "./images/Transactions.png";
import EmployeeDirSortAsc from "./images/EmployeeDirSortAsc.png";
import WorkoutTrackerHomePage from "./images/WorkoutTrackerHomePage.png";

const cardInfo = [
    {
      id: 1,
      title: "Petocracy",
      image: PetocracyHome,
      github: "https://github.com/jtoth7824/group1_project2/",
      deployed: "https://immense-coast-50151.herokuapp.com/",
      description: "Allows users to sign up for help '('services/donations')' during Covid. Also, allows volunteers to sign up to donate or provide those requested services."
    },
    {
      id: 2,
      title: "Book/Cinema Library",
      image: MovieInfo,
      github: "https://github.com/jtoth7824/group_project1/",
      deployed: "https://jtoth7824.github.io/group_project1",
      description: "Allows user to search by author name to find book and author event information. If corresponding movie exists for book, then movie information displayed."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: UserSearchCity,
      github: "https://github.com/jtoth7824/weatherDashboard/",
      deployed: "https://jtoth7824.github.io/weatherDashboard",
      description: "Allows user to get weather information about city selected."
    },
    {
        id: 4,
        title: "Javascript Quiz",
        image: StartScreenJavascriptQuiz,
        github: "https://github.com/jtoth7824/javascriptCodeQuiz/",
        deployed: "https://jtoth7824.github.io/javascriptCodeQuiz",
        description: "Take a quick javascript quiz."
      },
      {
        id: 5,
        title: "Team Profile Generator",
        image: TPG2,
        github: "https://github.com/jtoth7824/teamProfileGenerator/",
        deployed: "N/A",
        description: "Generate a team consisting of manager, engineers and interns."
      },
      {
        id: 6,
        title: "Eat Da Burger",
        image: burgerMain,
        github: "https://github.com/jtoth7824/burger/",
        deployed: "https://morning-island-76519.herokuapp.com/",
        description: "Allows user to enter a burger name to add to list of available.  User can then click Eat Me button to devour burger and move it to devoured list."
      },
      {
        id: 7,
        title: "Employee Directory",
        image: EmployeeDirSortAsc,
        github: "https://github.com/jtoth7824/employee_directory/",
        deployed: "https://jtoth7824.github.io/employee_directory/",
        description: "Generates list of employees which can be filtered and sorted."
      },
      {
        id: 8,
        title: "Budget Tracker",
        image: Transactions,
        github: "https://github.com/jtoth7824/budget_tracker/",
        deployed: "https://mighty-castle-87506.herokuapp.com",
        description: "Budget tracker allows user to keep track of income/expenses in on-line & off-line mode.  This is a progressive web application."
      },
      {
        id: 9,
        title: "Workout Tracker",
        image: WorkoutTrackerHomePage,
        github: "https://github.com/jtoth7824/workout_tracker/",
        deployed: "https://desolate-anchorage-35501.herokuapp.com",
        description: "Workout tracker allows user to enter exercises and workouts and graph results.   This utilized a mongoDb Atlas for the database."
      },
  ]

  export default cardInfo;