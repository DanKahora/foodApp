import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [fooddata, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(654959);
  return (
    <div className="App">
      <Nav />
      <Search fooddata={fooddata} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          {" "}
          <FoodList fooddata={fooddata} foodId={foodId} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
