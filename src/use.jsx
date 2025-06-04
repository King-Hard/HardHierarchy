import { useMemo, useCallback } from "react";

const Practice = () =>{

    const compute = () =>{
        console.log("Compute: computing...")
    }

    const memoizedCompute = useMemo(() =>{
        console.log("memoizedCompute: computing...")
    }, [])

    return(
        
        <div>
            Practice useMemo and useCallback
            <br></br>
            Compute: {compute()}
            Compute: {memoizedCompute}
        </div>
    )
}

export default Practice