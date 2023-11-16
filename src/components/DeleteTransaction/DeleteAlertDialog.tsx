import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {Trash2} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import axios from "axios";
import * as React from "react";

function DeleteAlertDialog(props: {api: string, transactionId: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void}) {

    const deleteTransaction = () => {
        axios.delete(`${props.api}?id=${props.transactionId}`)
            .then((response) => {
                if (response.status === 200) {
                    axios.get(`${props.api}?pageNumber=${0}`).then((response) => {
                        props.setPageNumber(0);
                        props.pagingData(response.data);
                    })
                }
            })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full">
                <Button className="text-red-600 hover:bg-slate-700 w-full flex justify-start">
                    <Trash2 className="mr-2 h-4 w-4"/>
                    <span>delete</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-slate-900">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-slate-50">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this
                        transaction and it from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-slate-50 text-slate-900 hover:bg-slate-300">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-slate-50 text-slate-900 hover:bg-slate-300" onClick={deleteTransaction}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAlertDialog;