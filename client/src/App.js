import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import About from "./pages/About";
import Examples from "./pages/Examples";
import Grades from "./pages/Grades";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import SkillShow from "./pages/SkillShow";
import Things from "./pages/Things";
import Users from "./pages/Users";
import UserShow from "./pages/UserShow";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/things" component={Things} />
        <Route exact path="/examples" component={Examples} />

        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={UserShow} />
        <Route exact path="/grades" component={Grades} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/skills/:id" component={SkillShow} />


      </Switch>
    </>
  );
}

export default App;
