import {Link} from 'react-router-dom';

const Exclude = ({data}) => {
    return (
        <div style={{border:"1px solid gray",padding:"0.5rem 1rem",textAlign:"left"}}>
                <Link to={"/results?q="+data["rule"]} style={{textDecoration:"none", color:"black",pointerEvents:data["rule"]?"active":"none"}}>
                    {/* <span style={{marginTop:"1rem",border:"1px solid gray",padding:"3px 12px",borderRadius:"15px",background:"gray",opacity:"0.9",fontSize:"0.9rem",fontWeight:"bolder"}}>
                        {data["pattern"]}
                    </span> */}
                    <p style={{fontSize:"0.9rem"}}>{data["title"]}</p>
                </Link>
          {/* <p style={{fontSize:"0.9rem",textAlign:"justify"}}>{data["text"]}</p> */}
        </div>
    )
}

export default Exclude;