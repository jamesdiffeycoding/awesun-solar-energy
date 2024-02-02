"use client"




export default function SolarData({peakMWWeek, peakMWMonth, peakMWYear, peakMWMonthDayAndTime, peakMWYearDayAndTime, peakMWWeekDayAndTime}) {
    return (
        <div className="text-right">
            <div>
                <div className="pt-1 pb-1 underline underline-offset-8">Half-hourly MW production peaks</div>
                <div className="pt-1"><span className="text-yellow-300">{peakMWWeek.toFixed(0)}</span> in the last week.</div>
                <div className="supersmalltext text-slate-900">{peakMWWeekDayAndTime}</div>
                <div className="pt-1"><span className="text-yellow-300">{peakMWWeek.toFixed(0)}</span> in the last month.</div>
                <div className="supersmalltext text-slate-900">{peakMWWeekDayAndTime}</div>
                <div className="pt-1"><span className="text-yellow-300">{peakMWYear.toFixed(0)}</span> in the last year.</div>
                <div className="supersmalltext text-slate-900">{peakMWYearDayAndTime}</div>
                <hr className="pt-1 pb-1" style={{borderTop: 'dotted 1.5px'}} /> 
                <div className="text-xs">
                    <div className="pt-1">Over the last year, domestic </div>
                    <div className="pt-1">provided solar provided <span className="text-yellow-300">4.5%</span></div> {/* This is hard coded for now until we find a good energy demand API. */}
                    <div className="pt-1">of the UK's electricity demand.</div>
                </div>
            </div>
    </div>            
	);
}