import PetocracyHome from "./images/PetocracyHome.png";
import MovieInfo from "./images/MovieInfo.png";
import GoogleBookSearch from "./images/GoogleBookSearch.png";
import Spiceaholic from "./images/Spiceaholic.png";
import Transactions from "./images/Transactions.png";
import EmployeeDirSortAsc from "./images/EmployeeDirSortAsc.png";

const cardInfo = [
    {
      id: 1,
      title: "Spice-A-Holic",
      image: Spiceaholic,
      github: "https://github.com/jtoth7824/project3_store",
      deployed: "https://spiceaholic.herokuapp.com/",
      description: "E-commerce site for selling organic spices & teas.",
      skills:  "React, Node.js, Express, Bootstrap, Passport, MongoDB & Atlas, Heroku",
      role: "Team member (back end)"
    },  
    {
      id: 2,
      title: "Petocracy",
      image: PetocracyHome,
      github: "https://github.com/jtoth7824/group1_project2/",
      deployed: "https://immense-coast-50151.herokuapp.com/",
      description: "Allows users to sign up for help '('services/donations')' during Covid. Also, allows volunteers to sign up to donate or provide those requested services.",
      skills: "Node.js, Express, Passport, MySQL, Heroku",
      role: "Team member (back end)"
    },
    {
      id: 3,
      title: "Book/Cinema Library",
      image: MovieInfo,
      github: "https://github.com/jtoth7824/group_project1/",
      deployed: "https://jtoth7824.github.io/group_project1",
      description: "Allows user to search by author name to find book and author event information. If corresponding movie exists for book, then movie information displayed.",
      skills: "jQuery, Javascript, 3rd party API, Bootstrap",
      role: "Team Lead (front end)"
    },
    {
      id: 4,
      title: "Employee Directory",
      image: EmployeeDirSortAsc,
      github: "https://github.com/jtoth7824/employee_directory/",
      deployed: "https://jtoth7824.github.io/employee_directory/",
      description: "Generates list of employees which can be filtered and sorted.",
      skills: "React, axios, Bootstrap, Javascript",
      role: "Individual"
    },
    {
      id: 5,
      title: "Budget Tracker",
      image: Transactions,
      github: "https://github.com/jtoth7824/budget_tracker/",
      deployed: "https://mighty-castle-87506.herokuapp.com",
      description: "Budget tracker allows user to keep track of income/expenses in on-line & off-line mode.  This is a progressive web application.",
      skills: "PWA, IndexedDB, Mongoose, Heroku, Node.js, Express",
      role: "Individual"
    },

    {
      id: 6,
       title: "GoogleBookSearch",
       image: GoogleBookSearch,
       github: "https://github.com/jtoth7824/googleBookSearch/",
       deployed: "https://secure-ocean-84141.herokuapp.com/",
       description: "Search google for books and then save books to list.",
       skills: "React, 3rd party API, axios, Heroku, Node.js, Express",
       role: "Individual"
    },
  ]

  export default cardInfo;