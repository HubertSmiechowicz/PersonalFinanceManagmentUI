import {TableCell, TableRow} from "../ui/table.tsx"
import OptionsMenu from "@/components/OptionsMenu/OptionsMenu.tsx";

function TransactionsItem(props:{ id: number, date: string, bill: string, amount: number, api: string }) {
    return (
        <>
            <TableRow className="hover:bg-transparent">
                <TableCell>{props.date}</TableCell>
                <TableCell>{props.bill}</TableCell>
                <TableCell>{props.amount}</TableCell>
                <OptionsMenu api={props.api} transactionId={props.id}/>
            </TableRow>
        </>
    )
}

export default TransactionsItem;