import './List.css'

function List(props){

    return (
        <ul className="repos">
            {(props.items) && (
                props.items.map((item) => {
                    return <li key={item.name}>{item.name}</li>
                })
            )}
        </ul>
    )    
}

export default List