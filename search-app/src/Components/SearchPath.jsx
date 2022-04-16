import {Link} from "react-router-dom";
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SearchPath = ({data}) => {
    const level = Number(data["level"]);
    return (
        <Link to={data["cm-code"]?"/details?code="+data["cm-code"]:"#"} style={{textDecoration:"none",pointerEvents:data["cm-code"]?"active":"none"}}>
            <div style={{background:"#fffffc", border:"0.5px solid #000000aa", padding:"0.9rem 1rem",borderRadius:"10px",textAlign:"left",marginBottom:"0.7rem",fontSize:"0.9rem",fontWeight:"bold",color:"#1a1a1a"}}>
                {/* <span>{Number(data["level"])}.</span> */}
                <span style={{marginRight:"0.4rem"}}>
                    {
                        [...Array(level+1)].map((e, i) => <span className="busterCards" key={i}>♦ </span>)
                    }
                </span>
                
                <span>{data["title"]}</span>
                {data["cm-code"]?<span>, ({data["cm-code"]})</span> : ""}
            </div>
        </Link>

    )
}
export default SearchPath;