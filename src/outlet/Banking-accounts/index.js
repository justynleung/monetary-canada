import Saving from './newcomerOffer/TableNewcomerSaving';
import Chequing from './newcomerOffer/TableNewcomerChequing'
export default function BankingAccounts() {
    return (
        <div className="banking-accounts-wrapper">
            <div className="--wrapper-width-60">
                <div className="text-wrapper">
                    <h2>Newcomer's offer</h2>
                </div>
                <div className="text-wrapper">
                    <h3>Chequing Accounts</h3>
                </div>
                <table>
                    <Chequing />
                </table>
                <div className="text-wrapper">
                    <h3>Saving Accounts</h3>
                </div>
                <table>
                    <Saving />
                </table>
                <div className="text-wrapper">
                    <small className="tc-text">*Base interest rate and promotional interest rate are subjected to change by the instituitions. Cash bonus detail can be found on respective official websites. Please refer to official website for most accurate information. Information is up to date as of 5/6/2023.</small>
                </div>
            </div>

        </div>
    )
}