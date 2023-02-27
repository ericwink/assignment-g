import Bill from '../components/Bill'

const BillsView = ({ data }) => {
    const billArray = data.data

    return (
        <div className="table">
            <div className="row">
                <p>ID</p>
                <p>Billing Date</p>
                <p>Cost</p>
                <p>tndCost</p>
                <p>genCost</p>
                <p>Use in kw</p>
                <p>Demand in kw</p>
            </div>
            {billArray.map((bill) => {
                return <Bill data={bill} key={bill.id} />
            })}
        </div>
    )
}

export default BillsView