// Asset 
import Data from "../../asset/data/newcomerOffer.json"

// React table
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css'
 
function table() {
  const data = Data;
  const columns = [{
    Header: 'Newcomer Offer',
    accessor: 'Name' // String-based value accessors!
  }, {
    Header: 'Monthly Fee',
    accessor: 'Monthly Fee',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
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