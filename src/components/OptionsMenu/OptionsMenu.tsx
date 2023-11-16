import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup} from "@/components/ui/dropdown-menu.tsx";
import OptionsButton from "@/components/OptionsMenu/OptionsButton.tsx";
import TransactionInfoSheet from "@/components/TransactionInfo/TransactionInfoSheet.tsx";
import { Pencil } from 'lucide-react';
import {Button} from "@/components/ui/button.tsx";
import DeleteAlertDialog from "@/components/DeleteTransaction/DeleteAlertDialog.tsx";
import * as React from "react";

function OptionsMenu(props: { api: string, transactionId: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={false}>
                <OptionsButton />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900 text-slate-300 w-56">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Button className="text-green-600 hover:bg-slate-700 w-full flex justify-start">
                        <Pencil className="mr-2 h-4 w-4"/>
                        <span>edit</span>
                    </Button>
                    <DeleteAlertDialog api={props.api} transactionId={props.transactionId} setPageNumber={props.setPageNumber} pagingData={props.pagingData}/>
                    <TransactionInfoSheet api={props.api} transactionId={props.transactionId} />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default OptionsMenu;