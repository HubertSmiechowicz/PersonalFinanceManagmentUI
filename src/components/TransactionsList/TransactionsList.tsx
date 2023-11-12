import {Table, TableBody} from "../ui/table.tsx"
import Legend from './Legend.tsx'
import TransactionsItem from "@/components/TransactionsList/TransactionsItem.tsx";
import ButtonsArea from "@/components/ButtonsArea/ButtonsArea.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

function TransactionsList () {

    const [transactions, setTransactions] = useState<{id: number, date: string, billName: string, amount: number}[]>([]);
    const api = "http://localhost:5074/transaction";

    useEffect(() =>
    {
        axios.get(api)
            .then(response => {
                setTransactions(response.data);
            });
    }, []);

    return (
        <>
            <div className={"flex flex-col items-center justify-center w-12/12 md:w-9/12"}>
                <ButtonsArea padding={'pb-5'} position={"justify-start"} firstButtonMargin={"mr-2"} secondButtonMargin={"mr-0"} firstButtonContent={"Week"} secondButtonContent={"Month"} />
                <div className="border rounded-md">
                    <Table>
                        <Legend />
                        <TableBody className="text-slate-300 text-base">
                            {transactions.map((transaction) => (
                                <TransactionsItem id={transaction.id} date={transaction.date} bill={transaction.billName} amount={transaction.amount} api={api} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <ButtonsArea padding={'pt-5'} position={"justify-end"} firstButtonMargin={"mr-2"} secondButtonMargin={"mr-0"} firstButtonContent={"Previous"} secondButtonContent={"Next"} />
            </div>
        </>
    )
}

export default TransactionsList;