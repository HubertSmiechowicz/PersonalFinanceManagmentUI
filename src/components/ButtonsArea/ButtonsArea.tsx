import GetButton from "@/components/ButtonsArea/GetButton.tsx";
import * as React from "react";

function ButtonsArea(props: {padding: string,
    position: string,
    firstButtonMargin: string,
    secondButtonMargin: string,
    firstButtonContent: string,
    secondButtonContent: string,
    pageNumber: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>,
    maxPageNumber: number,
    api: string,
    pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void
    monthMode: boolean
}){
    return (
        <div className={`${props.padding} w-9/12 flex ${props.position}`}>
            <GetButton margin={props.firstButtonMargin} content={props.firstButtonContent} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} maxPageNumber={props.maxPageNumber} api={props.api} pagingData={props.pagingData} monthMode={props.monthMode}/>
            <GetButton margin={props.secondButtonMargin} content={props.secondButtonContent} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} maxPageNumber={props.maxPageNumber} api={props.api} pagingData={props.pagingData} monthMode={props.monthMode}/>
        </div>
    )
}

export default ButtonsArea;