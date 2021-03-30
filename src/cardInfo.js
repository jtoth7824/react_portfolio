import PetocracyHome from "./images/PetocracyHome.png";
import MovieInfo from "./images/MovieInfo.png";
import StartScreenJavascriptQuiz from "./images/StartScreenJavascriptQuiz.png";
import burgerMain from "./images/burgerMain.png";
import UserSearchCity from "./images/UserSearchCity.png";
import TPG2 from "./images/TPG2.png";

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
        github: "https://github.com/jtoth7824/javascriptQuiz/",
        deployed: "https://jtoth7824.github.io/javascriptQuiz",
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
  ]

  export default cardInfo;