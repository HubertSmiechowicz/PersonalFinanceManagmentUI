import * as React from "react";
import DataSwitch from "@/components/SwitchesArea/DataSwitch.tsx";

function SwitchesArea(props: {padding: string,
    position: string,
    firstButtonMargin: string,
    secondButtonMargin: string,
    firstButtonContent: string,
    secondButtonContent: string,
    pageNumber: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>,
    maxPageNumber: number,
    api: string,
    pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void,
    monthMode: boolean,
    setMonthMode: React.Dispatch<React.SetStateAction<boolean>>,
    setMaxPageNumber: React.Dispatch<React.SetStateAction<number>>
})
{
    return (
        <div className={`${props.padding} w-9/12 flex ${props.position} `}>
            <DataSwitch margin={props.firstButtonMargin} content={props.firstButtonContent} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} maxPageNumber={props.maxPageNumber} api={props.api} pagingData={props.pagingData} monthMode={props.monthMode} setMonthMode={props.setMonthMode} setMaxPageNumber={props.setMaxPageNumber}/>
            <DataSwitch margin={props.secondButtonMargin} content={props.secondButtonContent} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} maxPageNumber={props.maxPageNumber} api={props.api} pagingData={props.pagingData} monthMode={props.monthMode} setMonthMode={props.setMonthMode} setMaxPageNumber={props.setMaxPageNumber}/>
        </div>
    )
}

export default SwitchesArea;