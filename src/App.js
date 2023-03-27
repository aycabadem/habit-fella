import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Headers";
import { Fragment } from "react";
import MenuSemantic from "./components/MenuSemantic";

function App() {
  return (
    <Fragment>
      <Headers />
      <MenuSemantic />
    </Fragment>
  );
}

export default App;
