import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
} from "@ui5/webcomponents-react";
import { MyApp } from "./MyApp";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <>
        <MyApp />
      </>
    </HashRouter>
  );
}

export default App;
