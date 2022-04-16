import { useEffect, useState } from "react";
import Definition from "./Definition";
import TextField from '@material-ui/core/TextField';
import TopResultCard from "./TopResultCard";
import BasicTable from "./BasicTable";
import AlphabeticIndexTable from "./AlphabeticIndexTable";
import Button from '@material-ui/core/Button';
import ClipLoader from "react-spinners/ClipLoader";
import {useLocation} from 'react-router-dom';
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import SearchPath from "./SearchPath";
import {Link} from "react-router-dom";
import Section from "./Section";


const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data,setData] = useState({});
    const [loading, setLoading] = useState(false);
    const {search} = useLocation();
    const [loadSearch, setLoadSearch] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const {q} = queryString.parse(search);
        setSearchQuery(q);
        setLoadSearch(q);
    },[search]);

    useEffect(()=>{
        const handleSearch = () => {
            if(searchQuery !== "")
            {
                setData({});
            }
            setLoading(true);
            async function fetchResults(){
                const res = await fetch('https://api.medicalcoder.org/search?q='+searchQuery).then(res=>res.json()).catch(err=>setIsError(true));
                setData(res);
                setLoading(false);
                console.log("res",res);
            };
            if(searchQuery !== ''){
    
                fetchResults();
            }
            if(searchQuery === "")
            {
                setData({});
            }
        };
        handleSearch();
    },[searchQuery]);
    
    const navigate = useNavigate();

    const handleSearchClick = () =>{
        navigate("/results?q="+loadSearch);
    }

    return (
        <div style={{padding:"2rem 1rem", minHeight:"95vh"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <TextField id="outlined-basic" label="Search" variant="outlined" style={{width:"70%"}} value={loadSearch} onChange={(e)=>{setLoadSearch(e.target.value)}} onKeyPress={(e)=>{if(e.key==='Enter'){console.log("clickwd enter");handleSearchClick()}}} />
                <span>{"   "}</span>
                <Button type="submit" style={{marginLeft:"10px"}} variant="contained" color="primary" onClick={handleSearchClick} >
                    Search
                </Button>
            </div>
            <br/>
            <button style={{background:"#e3e3e3aa",padding:"0.2rem 0.4rem",borderRadius:"4px"}} onClick = {()=>{navigate("/")}}>Clear search</button>
            <div id="flexContainer">
            {isError &&
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <h2>Something went wrong while fetching the results. Check your connection and Try refreshing the page.</h2>
                </div>}
                {loading &&
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <ClipLoader />
                </div>}
                <div>
                    {Boolean(data["top-result"]) && !Array.isArray(data['top-result']) && (
                        <>
                        
                            <div>
                                <h3>Top Results</h3>
                                <div style={{margin:"1rem 0rem"}}>
                                    <Link to={"/summary?code="+data["top-result"]["cm-code"]} style={{textDecoration:"none",color:"black"}}>
                                        <TopResultCard key={data["top-result"]["cm-code"]}  code={data["top-result"]["cm-code"]} title={data["top-result"]["title"]} />
                                    </Link>
                                </div>
                            </div>
                            <br/>
                        </>
                    )}

                    {Array.isArray(data["top-result"]) && (
                        <>
                            <div>
                                <h3>Top Results</h3>
                                {data["top-result"]?.map(each=>{
                                    return (
                                        <div style={{margin:"1rem 0rem"}}>
                                            <Link to={"/summary?code="+each["cm-code"]} style={{textDecoration:"none",color:"black"}}>
                                                <TopResultCard key={each["cm-code"]}  code={each["cm-code"]} title={each["title"]} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                            <br/>
                        </>
                    )}
                    
                <div id="definition">
                   {Boolean(data["dictionary"]) && <Definition entry={data["dictionary"]["entry"]} definition={data["dictionary"]["definition"]} />}
                </div>

                <div id="search-path">
                    {Boolean(data["search-path"]) && <>
                            <h3>Search Paths</h3>
                        {data["search-path"]?.map(each=>{
                            if(Boolean(each["level"] || Number(each['level']) === 0)){
                                return (
                                    <SearchPath key={each["level"]} data={each} />
                                );
                            }
                            return null;
                        })}
                        <br />
                    </>}
                </div>
                
                    {Boolean(data["alphabetic-index"]) && (
                    <div>
                        <h3>Alphabetic Index</h3>   
                        <AlphabeticIndexTable data={data["alphabetic-index"]}/>
                    </div>)}
                <br />
                {Boolean(data["sections"]) && (
                    <div>
                        <h3>Sections</h3>   
                        <Section data={data["sections"]}/>
                        <br/>
                    </div>)}
                    {Boolean(data["icd-cm-codes"]) && (
                    <div>
                        <h3>ICD-CM-Codes</h3>
                        
                        <BasicTable data={data["icd-cm-codes"]}/>
                    </div>)}
                    
                </div>
            </div>
        </div>
    )
}

export default Search;