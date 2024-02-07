"use client"
import { getTimeHalfHourLater } from "@/app/helper";



export default function SolarData({peakMWWeek, peakMWMonth, peakMWYear, peakMWMonthDayAndTime, peakMWYearDayAndTime, peakMWWeekDayAndTime}) {
    let endOfPeakWindowWeek = getTimeHalfHourLater(peakMWWeekDayAndTime)
    let endOfPeakWindowMonth = getTimeHalfHourLater(peakMWMonthDayAndTime)
    let endOfPeakWindowYear = getTimeHalfHourLater(peakMWYearDayAndTime)

    return (
        <div className="text-right">
            <div>
                <div className="pt-1 pb-1 underline underline-offset-8">Latest <span className="hide-when-portrait">production</span> peaks</div>
                <div className="pt-1"><span className="text-yellow-500">{peakMWWeek.toFixed(0)} MW</span> last week.</div>
                <div className="supersmalltext text-slate-900">{peakMWWeekDayAndTime}-{endOfPeakWindowWeek}</div>
                <div className="pt-1"><span className="text-yellow-500">{peakMWWeek.toFixed(0)} MW</span> last month.</div>
                <div className="supersmalltext text-slate-900">{peakMWWeekDayAndTime}-{endOfPeakWindowMonth}</div>
                <div className="pt-1"><span className="text-yellow-500">{peakMWYear.toFixed(0)} MW</span> last year.</div>
                <div className="supersmalltext text-slate-900">{peakMWYearDayAndTime}-{endOfPeakWindowYear}</div>
                <hr className="pt-1 pb-1 hide-when-portrait" style={{borderTop: 'dotted 1.5px'}} /> 
                <div className="text-xs hide-when-portrait">
                    <div className="pt-1">Over the last year, domestic </div>
                    <div className="pt-1">solar provided <span className="text-yellow-500">4.5%</span></div> {/* This is hard coded for now until we find a good energy demand API. */}
                    <div className="pt-1">of electricity demand.</div>
                </div>

            </div>
    </div>            
	);
}