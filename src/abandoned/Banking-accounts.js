// import data from '../asset/data/newcomerOffer.json';
// import Elements from './newcomerOffer'

// import Table from '../outlet/Banking-accounts/TableNewcomerOffer';

// export default function comparisonLayout() {
//   const elements = addHeader(data).map(item => {
//     return <Elements
//       key={item.id}
//       name={item.name}
//       monthlyFee={item.monthlyFee}
//       chequeBook={item.chequeBook}
//       bankDraft={item.bankDraft}
//       cashBonus={item.cashBonus}
//       cdic={item.cdic}
//     />
//   })
//   return (
//     <div className="main-wraper">
//       <Table />
//     </div>
//   )
// }

// function camelCaseReverse(item) {
//   return item.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })
// }

// function addHeader(d) {
//   let arr = []
//   const head = Object.keys(data[0]).slice(1).reduce((a, v) => ({ ...a, [v]: camelCaseReverse(v) }), {})
//   for (let i = 0; i < d.length; i++) {
//     if (i === 0) {
//       arr.push(head)
//       arr.push(data[i])
//     } else {
//       arr.push(data[i])
//     }
//   }
//   return arr
// }


