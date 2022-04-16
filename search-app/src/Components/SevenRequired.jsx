// import {Link} from "react-router-dom";

const SevenRequired = ({data}) => {
    return (
        Object.keys(data)?.map(key => {
            return (
                <div key={key} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fffffc",borderRadius:"0px",padding:"0.7rem 1rem",border:"1px solid gray"}}>
                    {/* <Link to={"/details?code="+row["cm-code"]} style={{textDecoration:"none",color:"black",marginRight:"1rem"}}> */}
                        <span style={{marginTop:"1rem",padding:"3px 12px",borderRadius:"15px",background:"#e1e1e1",opacity:"0.9",fontSize:"0.9rem",fontWeight:"bolder"}}>{key}</span>
                    {/* </Link> */}
                    <div style={{width:"70%"}}>
                        <span style={{fontSize:"0.9rem",textAlign:"left"}}>{data[key]}</span>
                    </div>
                </div>
            )
        })
        // data?.map(row=>{
        //     return (
                // <div key={row["cm-code"]} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fffffc",borderRadius:"10px",padding:"0.9rem 1rem",margin:"0.9rem 0",borderBottom:"1px solid #e1e1e1"}}>
                //     <Link to={"/details?code="+row["cm-code"]} style={{textDecoration:"none",color:"black",marginRight:"1rem"}}>
                //         <span style={{marginTop:"1rem",padding:"3px 12px",borderRadius:"15px",background:"#e1e1e1",opacity:"0.9",fontSize:"0.9rem",fontWeight:"bolder"}}>{row["cm-code"]}</span>
                //     </Link>
                //     <div style={{width:"70%"}}>
                //         <span style={{fontSize:"0.9rem",textAlign:"left"}}>{row.title}</span>
                //     </div>
                // </div>
        //     )
        // })
    )
}

export default SevenRequired;
