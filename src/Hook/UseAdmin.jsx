import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin,setIsAdmin] = useState(false);
    useEffect( () =>{
        if(email){
            fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/users/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
            })
        }
    }, [email])
    return[isAdmin]
}
export default useAdmin;