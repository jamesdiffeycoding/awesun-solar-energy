export default function getDate() {
    const getCurrentDateTime = () => {
        const now = new Date();
    
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
    
        return formattedDateTime;
    };
    
    const currentDateTime = getCurrentDateTime();
        console.log("potato")
        console.log(currentDateTime)
        return (
        <div>
            <p>Date and Time: {currentDateTime}</p>
        </div>
        );
    }