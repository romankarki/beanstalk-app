import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import queryString from "query-string";
import CodeDetail from "./CodeDetails";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import CancelIcon from '@material-ui/icons/Cancel';

const Details = () => {
    const {search} = useLocation()
    const [codeParam, setCodeParam] = useState("");
    const [data,setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        const {code} = queryString.parse(search);
        setCodeParam(code);
        async function fetchResults(){
            setIsLoading(true);
            const res = await fetch('https://api.medicalcoder.org/code/'+code).then(res=>res.json());
            setData(res);
            setIsLoading(false);
        };
        if(search!=null)
        {
            fetchResults();
        }
    },[search])
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("Data from API",data);
    },[data]) 
    useEffect(()=>{
        console.log("Code Param",codeParam);
    },[codeParam]) 

    return (
        <div style={{padding:"1.5rem 1rem",background:"#f4f4f4", minHeight:"100vh"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h2>Details</h2>
                <CancelIcon style={{fontSize:"2rem"}} onClick={()=>{navigate(-1)}}/>
            </div>
            <hr />
            <br />

            {isLoading &&  <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20vh"}}>
                     <ClipLoader />
                </div>}
            {!isLoading && <CodeDetail data={data} code={data["icd-cm"]} />}

           {Boolean(data["code-details"]) && <div style={{}}>
                {
                    data["code-details"]?.map(each=>{
                        return <CodeDetail data={each} code={data["icd-cm"]} />
                    })
                }
                
            </div>}
        </div>

    )
}

export default Details;