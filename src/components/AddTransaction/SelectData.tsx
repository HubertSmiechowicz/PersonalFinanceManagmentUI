import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

function SelectData(props: {variant: string, disabled: boolean, placeHolder: string, getDataFromSelectData: (variant: string, value: string) => void}) {

    const[items, setItems] = useState<{id: number, name: string}[]>([]);

        useEffect(() => {
            axios.get(`http://localhost:5074/${props.variant}/names`)
                .then((response) => {
                    setItems(response.data);
                });
        }, []);

        const getValue = (value: string) => {
            props.getDataFromSelectData(props.variant, value);
        }

    return (
        <div className="col-span-3 text-slate-900">
            <Select onValueChange={getValue} disabled={props.disabled}>
                <SelectTrigger>
                    <SelectValue placeholder={props.placeHolder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {items.map((item) => (
                            <SelectItem value={item.id.toString()}>{item.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectData;