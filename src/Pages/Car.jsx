import { useParams } from "react-router-dom"

const Car = () => {
    const { id } = useParams()

    return(
        <>
        
            <div>
                This is Car Page with an id of {id}
            </div>
        
        </>
    )
}

export default Car