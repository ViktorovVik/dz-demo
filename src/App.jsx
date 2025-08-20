import './App.css'
import TitleSearch from "./components/TitleSearch/TitleSearch";
import TextCTA from "./components/TextCTA/TextCTA";
import Button from "./components/Button/Button";

function App() {

  return (
    <>
      <TitleSearch/>
      <TextCTA/>
      <TextCTA size='large'/>
      <Button text={'Искать'}/>
    </>
  )
}

export default App
