import {TableCell, TableRow} from "../ui/table.tsx"
import OptionsMenu from "@/components/OptionsMenu/OptionsMenu.tsx";
import * as React from "react";

function TransactionsItem(props:{ id: number, date: string, bill: string, amount: number, api: string, pageNumber: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void }) {
    return (
        <>
            <TableRow className="hover:bg-transparent">
                <TableCell>{props.date}</TableCell>
                <TableCell>{props.bill}</TableCell>
                <TableCell>{props.amount.toFixed(2)}</TableCell>
                <OptionsMenu api={props.api} transactionId={props.id} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} pagingData={props.pagingData}/>
            </TableRow>
        </>
    )
}

export default TransactionsItem;