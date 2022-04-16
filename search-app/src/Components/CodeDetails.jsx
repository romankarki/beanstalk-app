import Exclude from './Exclude';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import SevenRequired from './SevenRequired';
import SubCode from './SubCode';

const CodeDetail = ({data, code }) => {
    if(data !== {}){

        return (
            <>
            <div style={{border:"1px dotted black", padding:"2rem 1rem",marginBottom:"2rem",background:"#fefefc",borderRadius:"10px"}}>
                {Boolean(data["icd-cm"])&&( <>
                        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                            <span style={{fontSize:"1.3rem",fontWeight:"bolder"}}>{data["icd-cm"]}</span>
                            <div style={{border:"3px solid black",width:"50px",justifyContent:"center",textAlign:"center",borderRadius:"3px",padding:"0.2rem 0",background:"#08f29e"}}>
                                {data["billable"]?<AttachMoneyIcon style={{background:"none",fontSize:"1.3rem",fontWeight:"bold",padding:"0",margin:"0"}}/>:<MoneyOffIcon style={{background:"none",fontSize:"1.3rem"}}/>}
                            </div>                                
                        </div>
                        <br />
                        <hr />
                        <div>
                            <p style={{fontSize:"1rem"}}>{data["title"]}</p>
                        </div>
                    </>)}
            </div>
            {Boolean(data["guidelines"]) &&  (<> 
                    <div>
                        <h3 style={{marginLeft:"0.8rem",color:"gray",fontSize:"1rem"}}>Guidelines:</h3>
                        <div style={{padding:"0.3rem 1rem",border:"1px solid #aaaaaa",borderRadius:"10px",background:"#fffffc"}}>
                            {data["guidelines"]?.map(each=>{
                                return <p style={{textAlign:"left",justifyContent:"justify"}} key={each}>{each}</p>
                            })}
                        </div>
                    </div>
                    <br />
                </>)}
            
            {Boolean(data["seven-required"])&& Boolean(Object.keys(data["seven-required"]).length !== 0) && <div >
                <div style={{border:"1px solid gray",background:"#e1e1e1",padding:"10px 1rem",borderRadius:"10px 10px 0px 0px",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <h3>Seven Required</h3>
                </div>
                <SevenRequired data = {data["seven-required"]}/>
            </div>}

            {Boolean(data["code-first"]) && <div >
                    <div style={{border:"1px solid gray",background:"#e1e1e1",padding:"10px 1rem",borderRadius:"10px 10px 0px 0px",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h3>Code First</h3>
                        <p style={{fontWeight:"bold", fontSize:"0.9rem",color:"gray"}}>Rules: {data["code-first"].length}</p>
                    </div>
                    {data["code-first"]?.map(each=>{
                        return <Exclude key={each.title} data={each}/>
    
                    })}
                </div>}
               

                {Boolean(data["use-additional-codes"]) && <div >
                        <div style={{border:"1px solid gray",background:"#e1e1e1",padding:"10px 1rem",borderRadius:"10px 10px 0px 0px",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h3>Additional Codes</h3>
                            <p style={{fontWeight:"bold", fontSize:"0.9rem",color:"gray"}}>Rules: {data["use-additional-codes"].length}</p>
                        </div>
                        {data["use-additional-codes"]?.map(each=>{
                            return <Exclude key={each.title} data={each}/>
        
                        })}
                    </div>}

                {Boolean(data["exclude-1"]) && <div >
                    <div style={{border:"1px solid gray",background:"#e1e1e1",padding:"10px 1rem",borderRadius:"10px 10px 0px 0px",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h3>Exclude-1</h3>
                        <p style={{fontWeight:"bold", fontSize:"0.9rem",color:"gray"}}>Rules: {data["exclude-1"].length}</p>
                    </div>
                    {data["exclude-1"]?.map(each=>{
                        return <Exclude key={each.title} data={each}/>
    
                    })}
                </div>}
    
                {Boolean(data["exclude-2"]) && <div >
                    <div style={{border:"1px solid gray",background:"#e1e1e1",padding:"10px 1rem",borderRadius:"10px 10px 0px 0px",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h3>Exclude-2</h3>
                        <p style={{fontWeight:"bold", fontSize:"0.9rem",color:"gray"}}>Rules: {data["exclude-2"].length}</p>
                    </div>
                    {data["exclude-2"]?.map(each=>{
                        return <Exclude key={each.title} data={each}/>
    
                    })}
                {Boolean(data["sub-codes"]) && <div >
                    <div style={{border:"1px solid gray",background:"#e1e1e1",padding:"10px 1rem",borderRadius:"10px 10px 0px 0px",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h3>Sub Codes</h3>
                        <p style={{fontWeight:"bold", fontSize:"0.9rem",color:"gray"}}>Rules: {data["sub-codes"].length}</p>
                    </div>
                    <SubCode data={data["sub-codes"]}/>
                </div>}
                </div>}
                
            </>
        )
    }
    return null;
}

export default CodeDetail;