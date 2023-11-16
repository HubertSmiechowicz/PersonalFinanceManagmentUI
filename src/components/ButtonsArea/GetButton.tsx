import {Button} from "@/components/ui/button.tsx";
import axios from "axios";
import * as React from "react";

function GetButton(props: {margin: string, content: string, pageNumber: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>, maxPageNumber: number, api: string, pagingData: (dataPaged: {id: number, date: string, billName: string, amount: number}[]) => void }) {

    let page: number;

    const getTransactions = () => {
        if (props.content === "Next") {

            if (props.pageNumber >= props.maxPageNumber) {
                page = props.maxPageNumber;
            }
            else {
                page = props.pageNumber + 1;
            }

            axios.get(`${props.api}?pageNumber=${page}`).then((response) => {
                props.setPageNumber(page);
                props.pagingData(response.data);
            })
        }
        else if (props.content === "Previous") {

            if (props.pageNumber <= 0) {
                page = 0;
            }
            else {
                page = props.pageNumber - 1;
            }

            axios.get(`${props.api}?pageNumber=${page}`).then((response) => {
                props.setPageNumber(page);
                props.pagingData(response.data);
            })
        }
    }

    return (
        <Button variant="secondary" className={`w-16 ${props.margin}`} onClick={getTransactions}>{props.content}</Button>
    )
}

export default GetButton;