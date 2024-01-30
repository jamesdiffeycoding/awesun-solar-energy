"use client"




export default function SolarData({highestSolarDataValueWeek, highestSolarDataValueMonth, highestSolarDataValueYear}) {
    return (
        <div className="text-right">
            <div>
                <div className="">Solar half-hourly production peaked at...</div>
                <div className=""><span className="production-stat">{highestSolarDataValueWeek}</span>MW this week.</div>
                <div className=""><span className="production-stat">{highestSolarDataValueMonth}</span> MW this month.</div>
                <div className=""><span className="production-stat">{highestSolarDataValueYear}</span> MW this year.</div>
                <hr style={{borderTop: 'dotted 1.5px'}} /> 
                <div className="">Solar power provides 4.5%</div> {/* This is hard coded for now. */}
                <div className="">of the UK's daily electricity demand</div>
            </div>
    </div>            
	);
}