export default function Table({ rowHeader, data }) {

    const row = rowHeader.map((item, index) => {
        return (
            <tr key={index}>
                <td><div>{item}</div></td>
                <Cell item={item} data={data} />
            </tr>
        )
    })

    return (
        <tbody>
            {row}
        </tbody>
    );
}
function Cell({ item, data }) {
    const loop = data.map((e, index) => {
        return (
            <td key={index}>{data[index][item.toString()]}</td>
        )
    })

    return (
        <>
            {loop}
        </>
    )
}