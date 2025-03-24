declare module "#not-for-import/personalData/stores/types" {
    export type User = {
        id: number;
        username: string;
        fullName: string;
        email: string;
        image: string;
    };
}
declare module "#not-for-import/personalData/stores/useUserStore" {
    export const useUserStore: any;
}
declare module "#not-for-import/personalData/components/personalData" {
    import React from "react";
    import "../styles/personalData.css";
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
