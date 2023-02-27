
const Bill = ({ data }) => {
    return (
        <div className="row">
            <h1>{data.id}</h1>
            <p>{data.attributes.start} - {data.attributes.end}</p>
            <p>{data.attributes.cost}</p>
            <p>{data.attributes.tndCost}</p>
            <p>{data.attributes.genCost}</p>
            <p>{data.attributes.use}</p>
            <p>{data.attributes.demand}</p>
        </div>

    )
}

export default Bill