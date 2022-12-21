import { React } from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
function Home(props) {
  const { showAlert } = props;
  return (
    <div>
      <Navbar />
      <Notes showAlert={showAlert}></Notes>
    </div>
  );
}

export default Home;
