import {Table, TableBody} from "../ui/table.tsx"
import Legend from './Legend.tsx'
import TransactionsItem from "@/components/TransactionsList/TransactionsItem.tsx";
import ButtonsArea from "@/components/ButtonsArea/ButtonsArea.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import AddTransactionSheet from "@/components/AddTransaction/AddTransactionSheet.tsx";

function TransactionsList () {

    const [transactions, setTransactions] = useState<{id: number, date: string, billName: string, amount: number}[]>([]);
    const api = "http://localhost:5074/transaction";
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [maxPageNumber, setMaxPageNumber] = useState<number>(0);

    useEffect(() =>
    {
        axios.get(`${api}?pageNumber=${pageNumber}`)
            .then(response => {
                setTransactions(response.data);
            })
            .then(() => {
                axios.get(`${api}/page`)
                    .then((response) => {
                        setMaxPageNumber(response.data);
                    })
            })
    }, []);

    const pagingData = (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => {
        setTransactions(dataPaged);
    }

    return (
        <>
            <div className={"flex flex-col items-center justify-center w-12/12 md:w-9/12 lg:w-6/12 2xl:w-4/12"}>
                <div className="w-9/12 flex justify-between items-center">
                    <ButtonsArea padding={'pb-5'} position={"justify-start"} firstButtonMargin={"mr-2"} secondButtonMargin={"mr-0"} firstButtonContent={"Week"} secondButtonContent={"Month"} pageNumber={pageNumber} setPageNumber={setPageNumber} maxPageNumber={maxPageNumber} api={api} pagingData={pagingData}/>
                    <AddTransactionSheet api={api} setPageNumber={setPageNumber} maxPageNumber={maxPageNumber} pagingData={pagingData}></AddTransactionSheet>
                </div>
                <div className="w-full h-526 border rounded-md">
                    <Table>
                        <Legend />
                        <TableBody className="text-slate-300 text-base">
                            {transactions.map((transaction) => (
                                <TransactionsItem id={transaction.id} date={transaction.date} bill={transaction.billName} amount={transaction.amount} api={api} pageNumber={pageNumber} setPageNumber={setPageNumber} pagingData={pagingData} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <ButtonsArea padding={'pt-5'} position={"justify-end"} firstButtonMargin={"mr-2"} secondButtonMargin={"mr-0"} firstButtonContent={"Previous"} secondButtonContent={"Next"} pageNumber={pageNumber} setPageNumber={setPageNumber} maxPageNumber={maxPageNumber} api={api} pagingData={pagingData}/>
            </div>
        </>
    )
}

export default TransactionsList;