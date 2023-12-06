import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import RoundedButton from "@/components/AddTransaction/RoundedButton.tsx";
import FormComponent from "@/components/AddTransaction/FormComponent.tsx";
import AddButton from "@/components/AddTransaction/AddButton.tsx";
import {Label} from "@/components/ui/label.tsx";
import SelectData from "@/components/AddTransaction/SelectData.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {useState} from "react";
import axios from "axios";
import * as React from "react";

function AddTransactionSheet(props: {api: string, setPageNumber: React.Dispatch<React.SetStateAction<number>>, maxPageNumber: number, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void}) {

    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<number>(0);
    const [billId, setBillId] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [categoryId, setCategoryId] = useState<number>(0);

    const getDataFromFormComponent = (variant: string, value: string) => {
        if (variant === 'name') {
            setName(value);
        }
        else if (variant === 'amount') {
            setAmount(parseFloat(value));
        }
    }

    const getDataFromSelectData = (variant: string, value: string) => {
        if (variant === 'bill') {
            setBillId(parseInt(value));
        }
        else if (variant === 'category') {
            setCategoryId(parseInt(value));
        }
    }

    const getStatus = (value: string) => {
        if (value === 'Payment') {
            setStatus(0);
        }
        else if (value === 'Deposit') {
            setStatus(1);
        }
    }

    const submit = () => {
        axios.post(props.api, {
            name: name,
            status: status,
            billId: billId,
            amount: amount,
            categoryId: categoryId
        }).then((response) => {
            if (response.status === 200) {
                axios.get(`${props.api}?pageNumber=${props.maxPageNumber}`).then((response) => {
                    props.setPageNumber(props.maxPageNumber);
                    props.pagingData(response.data);
                })
            }
        })
    }

    return(
        <div className="pb-5">
            <Sheet>
                <SheetTrigger>
                    <RoundedButton></RoundedButton>
                </SheetTrigger>
                <SheetContent className="bg-slate-900 text-slate-50">
                    <SheetHeader>
                        <SheetTitle className="text-slate-50">Add transaction</SheetTitle>
                        <SheetDescription>Add a new transaction by completing the form below</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <FormComponent cols={"grid-cols-4"} checkbox={false} disabled={false} placeHolder={"Name"} variant={"name"} getDataFromFormComponent={getDataFromFormComponent} setDisabled={() => {}} checked={false} toggleDisabled={() => {}}/>
                        <div className="grid grid-cols-4 gap-4 items-center">
                            <Label htmlFor="select" className="text-right capitalize">Status</Label>
                            <div className="col-span-3 text-slate-900">
                                <Select onValueChange={getStatus}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value={"Payment"}>Payment</SelectItem>
                                            <SelectItem value={"Deposit"}>Deposit</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 items-center">
                            <Label htmlFor="bill" className="text-right capitalize">Bill</Label>
                            <SelectData variant="bill" getDataFromSelectData={getDataFromSelectData} disabled={false} placeHolder={"Bill"}/>
                        </div>
                        <FormComponent cols={"grid-cols-4"} checkbox={false} disabled={false} placeHolder={"Amount"} variant={"amount"} getDataFromFormComponent={getDataFromFormComponent} setDisabled={() => {}} checked={false} toggleDisabled={() => {}}/>
                        <div className="grid grid-cols-4 gap-4 items-center">
                            <Label htmlFor="category" className="text-right capitalize">Category</Label>
                            <SelectData variant="category" getDataFromSelectData={getDataFromSelectData} disabled={false} placeHolder={"Category"}/>
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose>
                            <AddButton submit={submit} disable={false}></AddButton>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default AddTransactionSheet;