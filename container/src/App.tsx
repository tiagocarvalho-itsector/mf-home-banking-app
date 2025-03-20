import React, { Suspense } from "react";
import "./global.css";
import FallbackRemote from "./components/FallbackRemote";
import { LoggedInProvider, useLoggedIn } from "./context/LoggedInContext";
import { store } from "./store/store";
import { Provider } from "react-redux";

const FirstChildApp = React.lazy(() =>
  import("firstChild/App").catch(() => {
    return { default: () => <FallbackRemote name="firstChild/App" /> };
  })
);

const SecondChildApp = React.lazy(() =>
  import("secondChild/App").catch(() => {
    return { default: () => <FallbackRemote name="secondChild/App" /> };
  })
);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LoggedInProvider>
        <LoginApp />
      </LoggedInProvider>
    </Provider>
  );
};

const LoginApp: React.FC = () => {
  const { loggedInEmail } = useLoggedIn();

  return (
    <>
      <h1>Hello, I am the container app!</h1>
      {loggedInEmail && (
        <Suspense fallback={<div>Loading First Child App...</div>}>
          <FirstChildApp />
        </Suspense>
      )}
      {loggedInEmail && (
        <Suspense fallback={<div>Loading Second Child App...</div>}>
          <SecondChildApp />
        </Suspense>
      )}
    </>
  );
};

export default App;
