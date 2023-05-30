import AppContextProvider from "./context/app_context";
import Admin from "./Admin";

function App() {
  return (
    <AppContextProvider>
      <Admin/>
    </AppContextProvider>    
  );
}

export default App;
