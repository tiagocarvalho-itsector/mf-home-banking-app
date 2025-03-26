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
        closePersonalData: () => void;
    };
    export const PersonalData: React.FC<PersonalDataProps>;
}
declare module "personalData/App" {
    import React from "react";
    import "../../global.css";
    type PersonalDataAppProps = {
        username: string;
        closePersonalData: () => void;
    };
    const App: React.FC<PersonalDataAppProps>;
    export default App;
}
