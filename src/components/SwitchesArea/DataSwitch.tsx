import { Switch } from "@/components/ui/switch"
import {Label} from "@/components/ui/label.tsx";
import * as React from "react";
import {useState} from "react";
import axios from "axios";

function DataSwitch(props: {margin: string, content: string, pageNumber: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, maxPageNumber: number, api: string, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void, monthMode: boolean, setMonthMode: React.Dispatch<React.SetStateAction<boolean>>, setMaxPageNumber: React.Dispatch<React.SetStateAction<number>>}) {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const changeChacked = () => {
        if (isChecked) {
            setIsChecked(false)
            props.setMonthMode(false);
            props.setPageNumber(0);
            axios.get(`${props.api}?pageNumber=${props.pageNumber}`).then((response) => {
                props.setPageNumber(props.pageNumber);
                props.pagingData(response.data);
            }).then(() => {
                axios.get(`${props.api}/page`)
                    .then((response) => {
                        props.setMaxPageNumber(response.data);
                    })
            })
        }
        else {
            setIsChecked(true);
            props.setMonthMode(true);
            props.setPageNumber(0);
            axios.get(`${props.api}/month?pageNumber=${props.pageNumber}&monthNumber=${new Date().getMonth() + 1}`).then((response) => {
                props.setPageNumber(props.pageNumber);
                props.pagingData(response.data);
            }).then(() => {
                axios.get(`${props.api}/page/month?monthNumber=${new Date().getMonth() + 1}`)
                    .then((response) => {
                        props.setMaxPageNumber(response.data);
                    })
            })
        }
    }

    return (
        <div className={`w-20 ${props.margin} flex justify-center items-center`}>
            <Switch checked={isChecked} onCheckedChange={changeChacked}></Switch>
            <Label className="text-slate-50">{props.content}</Label>
        </div>
    )
}

export default DataSwitch;