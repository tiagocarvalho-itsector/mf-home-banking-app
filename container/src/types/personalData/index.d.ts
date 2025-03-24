declare module "#not-for-import/personalData/components/personalData" {
    import React from "react";
    type PersonalDataProps = {
        username: string;
    };
    export const PersonalData: React.FC<PersonalDataProps>;
}
declare module "personalData/App" {
    import React from "react";
    import "../../global.css";
    const App: React.FC;
    export default App;
}
