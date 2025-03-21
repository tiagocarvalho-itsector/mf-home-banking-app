declare module "#not-for-import/bankingRecord/services/bankBalanceService" {
    export function getCurrentBalance(username: string): Promise<number>;
}
declare module "#not-for-import/bankingRecord/components/bankBalance" {
    import React from "react";
    type BankBalanceProps = {
        username: string;
    };
    export const BankBalance: React.FC<BankBalanceProps>;
}
declare module "bankingRecord/App" {
    import React from "react";
    import "../../global.css";
    const App: React.FC;
    export default App;
}
