import Chequing from './newcomerOffer/TableNewcomerChequing';
import Saving from './newcomerOffer/TableNewcomerSaving';

export default function BankingAccounts() {
    return (
        <>
            <div className="text-box-left">
                <h2>Newcomer's offer</h2>
            </div>
            <div className="text-box-left">
                <h3>Chequing Accounts</h3>
            </div>
            <Chequing />
            <div className="text-box-left">
                <h3>Saving Accounts</h3>
            </div>
            <Saving />
            <div className="text-box-left">
                <small class="tc-text">*Base interest rate and promotional interest rate are subjected to change by the instituitions. Cash bonus detail can be found on respective official websites. Please refer to official website for most accurate information. Information is up to date as of 5/6/2023.</small>
            </div>
        </>
    )
}