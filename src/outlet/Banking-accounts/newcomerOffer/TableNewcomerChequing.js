// Asset 
import data from '../../../asset/data/newcomerChequing.json';

import Table from '../../../components/table/table';


function App() {
    const rowHeader = Object.keys(data[0]).splice(1, 6)
    return (
        <>
            <Table rowHeader={rowHeader} data={data} />
        </>
    )
}

export default App;

// function App() {
//     const rowHeader = Object.keys(data[0]).splice(1, 6)
//     const row = rowHeader.map((item, index) => {
//         return (
//             <tr key={index}>
//                 <td >{item}</td>
//                 <Cell item={item} />
//             </tr>
//         )
//     })

//     return (
//         <tbody>
//             {row}
//         </tbody>
//     );
// }
// function Cell(props) {
//     const col = data.map((item, index) => {

//         return (
//             <td key={index}>{data[index][props.item.toString()]}</td>
//         )
//     })
//     return (
//         <>
//             {col}
//         </>

//     )
// }