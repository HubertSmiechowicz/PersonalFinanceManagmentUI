import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet.tsx";
import FormComponent from "@/components/AddTransaction/FormComponent.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import SelectData from "@/components/AddTransaction/SelectData.tsx";
import AddButton from "@/components/AddTransaction/AddButton.tsx";
import {useEffect, useState} from "react";
import {Pencil} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import * as React from "react";
import axios from "axios";

function EditTransactionSheet(props: {variant: string, api: string, transactionId: number, pageNumber: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void}) {

    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<number>(0);
    const [billId, setBillId] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [categoryId, setCategoryId] = useState<number>(0);

    const [namePlaceHolder, setNamePlaceHolder] = useState<string>('');
    const [statusPlaceHolder, setStatusPlaceHolder] = useState<string>('');
    const [billIdPlaceHolder, setBillIdPlaceHolder] = useState<string>('');
    const [amountPlaceHolder, setAmountPlaceHolder] = useState<number>(0);
    const [categoryIdPlaceHolder, setCategoryIdPlaceHolder] = useState<string>('');

    const [disabledName, setDisabledName] = useState<boolean>(true);
    const [disabledStatus, setDisabledStatus] = useState<boolean>(true);
    const [disabledBill, setDisabledBill] = useState<boolean>(true);
    const [disabledAmount, setDisabledAmount] = useState<boolean>(true);
    const [disabledCategory, setDisabledCategory] = useState<boolean>(true);
    const [isSomethingEnable, setIsSomethingEnable] = useState<boolean>(false);

    const [isCheckedName, setIsCheckedName] = useState<boolean>(false);
    const [isCheckedStatus, setIsCheckedStatus] = useState<boolean>(false);
    const [isCheckedBill, setIsCheckedBill] = useState<boolean>(false);
    const [isCheckedAmount, setIsCheckedAmount] = useState<boolean>(false);
    const [isCheckedCategory, setIsCheckedCategory] = useState<boolean>(false);

    const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);

    const [requestType, setRequestType] = useState<string>('');

    useEffect(() => {
        axios.get(`${props.api}/single?id=${props.transactionId}`)
            .then((result) => {
                setNamePlaceHolder(result.data.name);
                setBillIdPlaceHolder(result.data.billName);
                setAmountPlaceHolder(result.data.amount);
                setStatusPlaceHolder(result.data.status);
                setCategoryIdPlaceHolder(result.data.categoryName);
            })
    }, []);

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

    const toggleDisabled = (disabled: boolean, setDisabled: React.Dispatch<React.SetStateAction<boolean>>, variant: string) => {
        if (disabled) {
            if (!isSomethingEnable) {
                console.log("Executed!")
                setDisabled(false);
                setIsSomethingEnable(true);
                setIsButtonDisable(false);
                setRequestType(variant);
                if (variant === 'name') {
                    setIsCheckedName(true)
                }
                else if (variant === 'status') {
                    setIsCheckedStatus(true);
                }
                else if (variant === 'bill') {
                    setIsCheckedBill(true);
                }
                else if (variant === 'amount') {
                    setIsCheckedAmount(true)
                }
                else if (variant === 'category') {
                    setIsCheckedCategory(true);
                }
            }
        }
        else if (!disabled) {
            console.log("Executed!")
            setDisabled(true);
            setIsSomethingEnable(false);
            setIsButtonDisable(true);
            if (variant === 'name') {
                setIsCheckedName(false)
            }
            else if (variant === 'status') {
                setIsCheckedStatus(false);
            }
            else if (variant === 'bill') {
                setIsCheckedBill(false);
            }
            else if (variant === 'amount') {
                setIsCheckedAmount(false)
            }
            else if (variant === 'category') {
                setIsCheckedCategory(false);
            }
        }
    }

    const update = (variant: string, value: string | number) => {
        axios.patch(`${props.api}/${variant}?id=${props.transactionId}&${variant}=${value}`)
            .then((response) => {
                if (response.status === 200) {
                    axios.get(`${props.api}?pageNumber=${props.pageNumber}`).then((response) => {
                        props.setPageNumber(props.pageNumber);
                        props.pagingData(response.data);
                    })
                }
            })
    }

    const submit = () => {
        if (!isButtonDisable) {
            if (requestType === 'name') {
                update(requestType, name);
            }
            else if (requestType === 'status') {
                update(requestType, status);
            }
            else if (requestType === 'bill') {
                update(requestType, billId);
            }
            else if (requestType === 'amount') {
                update(requestType, amount);
            }
            else if (requestType === 'category') {
                update(requestType, categoryId);
            }
        }
    }


    return (
        <Sheet>
            <SheetTrigger className="w-full">
                <Button className="text-green-600 hover:bg-slate-700 w-full flex justify-start">
                    <Pencil className="mr-2 h-4 w-4"/>
                    <span>edit</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-900 text-slate-50">
                <SheetHeader>
                    <SheetTitle className="text-slate-50">Edit transaction</SheetTitle>
                    <SheetDescription>Edit transaction by completing the form below. You can only edit one field at a time. Check the checkbox next to the field you want to edit</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <FormComponent cols={"grid-cols-5"} checkbox={true} disabled={disabledName} setDisabled={setDisabledName} placeHolder={namePlaceHolder} variant={"name"} getDataFromFormComponent={getDataFromFormComponent} toggleDisabled={toggleDisabled} checked={isCheckedName}/>
                    <div className="grid grid-cols-5 gap-4 items-center">
                        <Label htmlFor="select" className="text-right capitalize">Status</Label>
                        <div className="col-span-3 text-slate-900">
                            <Select onValueChange={getStatus} disabled={disabledStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder={statusPlaceHolder}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value={"Payment"}>Payment</SelectItem>
                                        <SelectItem value={"Deposit"}>Deposit</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Checkbox className="bg-slate-50 col-span-1" checked={isCheckedStatus} onCheckedChange={() => toggleDisabled(disabledStatus, setDisabledStatus, 'status')}/>
                    </div>
                    <div className="grid grid-cols-5 gap-4 items-center">
                        <Label htmlFor="bill" className="text-right capitalize">Bill</Label>
                        <SelectData variant="bill" getDataFromSelectData={getDataFromSelectData} disabled={disabledBill} placeHolder={billIdPlaceHolder}/>
                        <Checkbox className="bg-slate-50 col-span-1" checked={isCheckedBill} onCheckedChange={() => toggleDisabled(disabledBill, setDisabledBill, 'bill')}/>
                    </div>
                    <FormComponent cols={"grid-cols-5"} checkbox={true} disabled={disabledAmount} setDisabled={setDisabledAmount} placeHolder={amountPlaceHolder.toString()} variant={"amount"} getDataFromFormComponent={getDataFromFormComponent} toggleDisabled={toggleDisabled} checked={isCheckedAmount}/>
                    <div className="grid grid-cols-5 gap-4 items-center">
                        <Label htmlFor="category" className="text-right capitalize">Category</Label>
                        <SelectData variant="category" getDataFromSelectData={getDataFromSelectData} disabled={disabledCategory} placeHolder={categoryIdPlaceHolder}/>
                        <Checkbox className="bg-slate-50 col-span-1" checked={isCheckedCategory} onCheckedChange={() => toggleDisabled(disabledCategory, setDisabledCategory, 'category')}/>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose>
                        <AddButton submit={submit} disable={isButtonDisable}></AddButton>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default EditTransactionSheet;