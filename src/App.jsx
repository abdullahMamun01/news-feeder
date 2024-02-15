
import Footer from "./components/Footer";
import AppContextProvider from "./provider/AppContextProvider";

import Page from "./components/Page";

const App = () => {

  return (
    <>
      <AppContextProvider>
        <Page />
      </AppContextProvider>
    </>
  );
};

export default App;
