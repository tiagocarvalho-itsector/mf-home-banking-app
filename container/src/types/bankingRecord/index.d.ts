declare module "#not-for-import/bankingRecord/services/bankService" {
    export function getCurrentBalance(username: string): Promise<number>;
    export function getBankExtract(username: string): Promise<{
        id: string;
        username: string;
        date: string;
        description: string;
        payee: string;
    }[]>;
}
declare module "#not-for-import/bankingRecord/components/bankBalance" {
    import React from "react";
    type BankBalanceProps = {
        username: string;
    };
    export const BankBalance: React.FC<BankBalanceProps>;
}
declare module "#not-for-import/bankingRecord/components/bankExtract" {
    import React from "react";
    type BankExtractProps = {
        username: string;
    };
    export const BankExtract: React.FC<BankExtractProps>;
}
declare module "bankingRecord/App" {
    import React from "react";
    import "../../global.css";
    const App: React.FC;
    export default App;
}
