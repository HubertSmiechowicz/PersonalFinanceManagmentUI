import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup} from "@/components/ui/dropdown-menu.tsx";
import OptionsButton from "@/components/OptionsMenu/OptionsButton.tsx";
import TransactionInfoSheet from "@/components/TransactionInfo/TransactionInfoSheet.tsx";
import DeleteAlertDialog from "@/components/DeleteTransaction/DeleteAlertDialog.tsx";
import * as React from "react";
import EditTransactionSheet from "@/components/EditTransaction/EditTransactionSheet.tsx";

function OptionsMenu(props: { api: string, transactionId: number, pageNumber: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={false}>
                <OptionsButton />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900 text-slate-300 w-56">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <EditTransactionSheet variant={'pencil'} api={props.api} transactionId={props.transactionId} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} pagingData={props.pagingData}/>
                    <DeleteAlertDialog api={props.api} transactionId={props.transactionId} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} pagingData={props.pagingData}/>
                    <TransactionInfoSheet api={props.api} transactionId={props.transactionId} />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default OptionsMenu;