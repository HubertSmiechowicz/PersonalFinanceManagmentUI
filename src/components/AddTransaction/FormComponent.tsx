import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useEffect, useState} from "react";
import * as React from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";

function FormComponent(props: {cols: string, checkbox:boolean, disabled: boolean, setDisabled: React.Dispatch<React.SetStateAction<boolean>>, placeHolder: string, variant: string, getDataFromFormComponent: (variant: string, value: string) => void, toggleDisabled: (disabled: boolean, setDisabled: React.Dispatch<React.SetStateAction<boolean>>, variant: string) => void, checked: boolean}) {

    const [inputValue, setInputValue] = useState<string>('');
    const [display, setDisplay] = useState<string>('hidden');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        props.getDataFromFormComponent(props.variant, value);
    }

    useEffect(() => {
        if (props.checkbox) {
            setDisplay('block')
        }
    }, []);

    return(
        <div className={`grid ${props.cols} gap-4 items-center`}>
            <Label htmlFor={props.variant} className="text-right capitalize">{props.variant}</Label>
            <Input id={props.variant} placeholder={props.placeHolder} disabled={props.disabled} value={inputValue} className="col-span-3 text-slate-900" onChange={handleInputChange}></Input>
            <Checkbox className={`bg-slate-50 col-span-1 ${display}`} checked={props.checked} onCheckedChange={() => props.toggleDisabled(props.disabled, props.setDisabled, props.variant)}/>
        </div>
    )
}

export default FormComponent;