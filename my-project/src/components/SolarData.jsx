// Solar Data

export default function SolarData(){
    const randomNum = Math.floor(Math.random() * 6);
    return(
        <>
            <h1>awesun sunbers</h1> 
            <p>{randomNum}GW</p>
        </>
    )
}