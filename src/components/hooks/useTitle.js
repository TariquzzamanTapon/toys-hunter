import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `THunter  ${title}`
    }, [title])
}

export default useTitle;