// Asset 
import Data from "../../../asset/data/newcomerChequing.json"

// React table
import ReactTable from 'react-table-v6';
import '../../../css/banking-accounts.css'

function table() {
  const data = Data;
  const columns = [{
    Header: '',
    accessor: 'Name'
  }, {
    Header: 'Monthly Fee',
    accessor: 'Monthly Fee',
  }, {
    Header: 'Cheque Book',
    accessor: 'Cheque Book'
  }, {
    Header: 'Bank Draft',
    accessor: 'Bank Draft'
  }, {
    Header: 'Cash Bonus',
    accessor: 'Cash Bonus'
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