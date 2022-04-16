
const CodeSummary = ({data}) => {
    return (
        <>
            <div style={{border:"1px solid gray",background:"#e3e3e3aa",padding:"1rem 0.7rem",borderRadius:"10px 10px 0px 0px"}}>
                {data["chapter"]?<span style={{fontWeight:"bold"}}>{data["chapter"]} : </span>:""}
                <span style={{fontWeight:"bold"}}>{data["title"]}{data["cm-code"]?" ("+data["cm-code"]+")":null}</span>
            </div>
            {Boolean(data["Exclude-1"])&&(
                <div style={{border:"1px solid gray",background:"#fffffc",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.7rem 1rem"}}>
                    <p style={{fontWeight:"",fontSize:"0.9rem"}}>Exclude-1</p>
                    <p>Rules: <span style={{fontWeight:"",fontSize:"0.9rem"}}>{data["Exclude-1"]}</span></p>
                </div>
            )}
            {Boolean(data["Exclude-2"])&&(
                <div style={{border:"1px solid gray",background:"#fffffc",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.7rem 1rem"}}>
                    <p style={{fontWeight:"",fontSize:"0.9rem"}}>Exclude-1</p>
                    <p>Rules: <span style={{fontWeight:"",fontSize:"0.9rem"}}>{data["Exclude-2"]}</span></p>
                </div>
            )}
            {Boolean(data["use-additional-code"])&&(
                <div style={{border:"1px solid gray",background:"#fffffc",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1rem"}}>
                    <p style={{fontWeight:"",fontSize:"0.9rem"}}>Use Addional Code</p>
                    <p>Rules: <span style={{fontWeight:"",fontSize:"0.9rem"}}>{data["use-additional-code"]}</span></p>
                </div>
            )}

            <br />
        
        </>
    )
}

export default CodeSummary;