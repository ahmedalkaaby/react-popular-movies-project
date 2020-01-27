import React ,{useState,useEffect} from "react";
import { useSelector} from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import "./Main.css";
import FilmBar from "./ProgressBarOverlay";
import SettingsModal from "./SettingsModal";

const Main = props => {
  const isLoading = useSelector(
    state => !(state.home.genresLoaded && state.home.configsLoaded)
  );
const [darkMode, setDarkMode]= useState(getInitialMode);
useEffect(()=>{
  localStorage.setItem('dark', JSON.stringify(darkMode))
},[darkMode])

function getInitialMode() {
 const SavedMode= JSON.parse(localStorage.getItem('dark'));
 return SavedMode || false;
}
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <SettingsModal />
      {isLoading && <FilmBar />}
      <Header appName={props.appName} className="App-header" />
      <ToggleButtonGroup className="toggleButton" type="checkbox">
      <ToggleButton variant="light" className="Mode-button"
      onClick={()=> setDarkMode(false)}
      ><span style={{color : darkMode ? "grey" : "yellow"}}>☀</span></ToggleButton>
      <ToggleButton variant="dark" className="Mode-button"
      onClick={()=> setDarkMode(true)}
      ><span style={{color : darkMode ? "slateblue" : "grey"}}>☾</span></ToggleButton>
      </ToggleButtonGroup>

      {!isLoading && (
        <div className="App-page-wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movie/:id" component={MoviePage} />
          </Switch>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
