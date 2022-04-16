import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useNavigate} from "react-router-dom";

const Home=()=>{
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/results?q="+searchQuery);
    }
    return (
        <div style={{height:"50vh"}}>
            <div style={{display:"flex", justifyContent:"center", marginTop:"40vh"}}>
                <TextField id="outlined-basic" label="Search" variant="outlined" style={{width:"70%"}} value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} onKeyPress={(e)=>{if(e.key==='Enter'){handleSearch()}}} autoFocus />
                <span>{"   "}</span>
                <Button type="submit" style={{marginLeft:"10px"}} variant="contained" color="primary" onClick={handleSearch} >
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Home;