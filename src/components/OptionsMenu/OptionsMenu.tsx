import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup} from "@/components/ui/dropdown-menu.tsx";
import OptionsButton from "@/components/OptionsMenu/OptionsButton.tsx";
import TransactionInfoSheet from "@/components/OptionsMenu/TransactionInfoSheet.tsx";
import { Pencil, Trash2 } from 'lucide-react';
import {Button} from "@/components/ui/button.tsx";

function OptionsMenu(props: { api: string, transactionId: number }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={false}>
                <OptionsButton />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900 text-slate-300 w-56">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Button className="text-green-600 hover:bg-slate-700 w-full flex justify-start">
                        <Pencil className="mr-2 h-4 w-4"/>
                        <span>edit</span>
                    </Button>
                    <Button className="text-red-600 hover:bg-slate-700 w-full flex justify-start">
                        <Trash2 className="mr-2 h-4 w-4"/>
                        <span>delete</span>
                    </Button>
                    <TransactionInfoSheet api={props.api} transactionId={props.transactionId} />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default OptionsMenu;