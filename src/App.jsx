import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import { useState } from "react";

function App() {
  const [anotherCount, setAnotherCount] = useState(0);

  function Test2(count) {
    setAnotherCount(count);
  }

  // console.log(anotherCount)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                anotherCount={anotherCount}
                setAnotherCount={setAnotherCount}
              />
            }
          >
            <Route index element={<Home Test2={Test2} />} />
            <Route path="collections" element={<Collections />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
