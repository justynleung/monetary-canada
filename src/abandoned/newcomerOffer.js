

export default function card(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h3>{props.monthlyFee}</h3>
            <h3>{props.chequeBook}</h3>
            <h3>{props.bankDraft}</h3>
            <h3>{props.cashBonus}</h3>
            <h3>{props.cdic}</h3>
        </div>
    )
}