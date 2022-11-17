import React from "react";

//* Components *//
import Home from "./pages/Home";

//* Styles *//
import Container from "./UI/Container";

//* Data *//
const DUMMY_DATA = [
  {
    id: 0,
    title: "Iphone",
    description: "This is first iphone in the world",
    price: 1200,
  },
];

const App = () => {
  return (
    <>
      <Home data={DUMMY_DATA} />
    </>
  );
};

export default App;
