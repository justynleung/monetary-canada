export function Table() {

    const row = rowHeader.map((item) => {
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
    const loop = data.map((item, index) => {
        return (
            <>
                <td>{data[index][props.item.toString()]}</td>
            </>
        )
    })
    return (
        <>
            {loop}
        </>
    )
}