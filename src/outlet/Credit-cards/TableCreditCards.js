// Asset 
import Data from "../../../asset/data/creditCards.json"

// React table
import ReactTable from 'react-table-v6';
import '../../../css/credit-cards.css'

function table() {
    const data = Data;
    const columns = [{
        Header: '',
        accessor: 'Name'
    }, {
        Header: 'Monthly Fee',
        accessor: 'Monthly Fee',
    }, {
        Header: 'Base interest rates',
        accessor: 'Base interest rates'
    }, {
        Header: 'Promotional interest rates',
        accessor: 'Promotional interest rates'
    }, {
        Header: 'CDIC',
        accessor: 'CDIC'
    }]

    return <ReactTable
        data={data}
        columns={columns}
        minRows={0}
        showPagination={false}
        className="-highlight"
    />
}

export default table;