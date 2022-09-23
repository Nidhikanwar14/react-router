
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/page3";
import Add from "./components/reactMemo/Add";
import React from "react";
import Profile from "./components/useStateExample";
import Timer from "./components/useEffect";
import Counter from "./components/useEffect2";

function App() {
  return (
      <>
          <Add/>
          <Profile/>
          <Timer/>
     <BrowserRouter>
       <Routes>

         <Route path = "/" element={<Main/>}>
         <Route path="/page1" element={<Page1/>}/>
         <Route path = "/page2" element={<Page2/>}/>
         <Route path = "/page3" element={<Page3/>}/>
         </Route>

       </Routes>
     </BrowserRouter>

          <Counter/>
      </>
  );
}

export default App;
