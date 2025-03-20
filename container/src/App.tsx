import React, { Suspense } from "react";
import "./global.css";
import FallbackRemote from "./components/FallbackRemote";
import { LoggedInProvider, useLoggedIn } from "./context/LoggedInContext";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { LoginForm } from "./components/LoginForm";

const BankingRecordApp = React.lazy(() =>
  import("bankingRecord/App").catch(() => {
    return { default: () => <FallbackRemote name="bankingRecord/App" /> };
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
  const { loggedInUser } = useLoggedIn();

  return (
    <>
      {!loggedInUser && <LoginForm />}
      {loggedInUser && (
        <Suspense fallback={<div>Loading Banking Record...</div>}>
          <BankingRecordApp />
        </Suspense>
      )}
    </>
  );
};

export default App;
