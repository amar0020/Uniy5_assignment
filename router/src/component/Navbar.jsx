import { Link } from "react-router-dom"

export const Navbar = ()=>{
    const nav = [
        {title:"Home", to:"/"}
        ,{title:"About", to:"/about"},
        {title:"User", to:"/user"}
    ]

    return (
        <div>
            {nav.map((e,i)=>(
                <Link rel="stylesheet" href="" key={i} to={e.to} style={{margin:"20px"}}>
                    {e.title}
                </Link>
            ))}
        </div>
    )
}