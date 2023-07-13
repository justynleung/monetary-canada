// Asset 
import data from "../../../asset/data/newcomerChequing.json";


function App() {
    const rowHeader = Object.keys(data[0]).splice(1, 6)
    const row = rowHeader.map((item, index) => {
        return (
            <tr>
                <td>{item}</td>
                <Cell item={item} />
            </tr>

        )
    })

    return (
        <tbody>
            {row}
        </tbody>
    );
}
function Cell(props) {
    const col = data.map((item, index) => {

        return (
            <>
                <td>{data[index][props.item.toString()]}</td>
            </>
        )
    })
    return (
        <>
            {col}
        </>

    )
}

export default App;