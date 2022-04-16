import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import CodeSummary from "./CodeSummary";
import CancelIcon from '@material-ui/icons/Cancel';

const Summary = () => {
    const {search} = useLocation()
    const [codeParam, setCodeParam] = useState("");
    const [data,setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        const {code} = queryString.parse(search);
        setCodeParam(code);
        async function fetchSummary(){
            setIsLoading(true);
            const res = await fetch('https://api.medicalcoder.org/code/summary/'+code).then(res=>res.json());
            setData(res);
            setIsLoading(false);
        };
        if(search!=null)
        {
            fetchSummary();
        }
    },[search])
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("Summary data:",data);
    },[data]) 
    useEffect(()=>{
        console.log("Code Param :",codeParam);
    },[codeParam]) 

    return(
        <div style={{padding:"1.5rem 1rem",background:"#f4f4f4", minHeight:"100vh"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h2>Summary</h2>
                <CancelIcon style={{fontSize:"2rem"}} onClick={()=>{navigate(-1)}}/>
            </div>
            <hr />
            <br />

            {isLoading &&  <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20vh"}}>
                    <ClipLoader />
                </div>}
            {!isLoading &&(
            <>
                <div style={{padding:"1rem 1rem",border:"1px solid #aaaaaa",borderRadius:"10px",background:"#fffffc"}}>
                    <span style={{marginTop:"1rem",border:"1px solid gray",padding:"3px 2rem 3px 12px",borderRadius:"15px",background:"gray",opacity:"0.9",fontSize:"1.1rem",fontWeight:"bolder"}}>{data["icd-cm"]}</span>
                    <br />
                    <p>{data["title"]}</p>
                </div>
                <br />
                {Boolean(data["guidelines"]) &&  ( <div>
                    <h3>Guidelines:</h3>
                    <div style={{padding:"0.3rem 1rem",border:"1px solid #aaaaaa",borderRadius:"10px",background:"#fffffc"}}>
                        {data["guidelines"]?.map(each=>{
                            return <p style={{textAlign:"justify"}} key={each}>{each}</p>
                        })}
                    </div>
                </div>)}
                <br />
                <div>
                    {data["code-summary"]?.map(each=>{
                        return <CodeSummary data={each}/>
                    })}
                </div>
            </>)}

        </div>
    )
}

export default Summary;