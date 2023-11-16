import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";
import * as React from "react";

function FormComponent(props: {variant: string, getDataFromFormComponent: (variant: string, value: string) => void}) {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        props.getDataFromFormComponent(props.variant, value);
    }

    return(
        <div className="grid grid-cols-4 gap-4 items-center">
            <Label htmlFor={props.variant} className="text-right capitalize">{props.variant}</Label>
            <Input id={props.variant} placeholder={props.variant} value={inputValue} className="col-span-3 text-slate-900" onChange={handleInputChange}></Input>
        </div>
    )
}

export default FormComponent;