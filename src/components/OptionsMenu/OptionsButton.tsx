import {Button} from "@/components/ui/button.tsx";
import OptionsIcon from "@/components/OptionsMenu/OptionsIcon.tsx";
import {TableCell} from "@/components/ui/table.tsx";

function OptionsButton() {
    return (
        <TableCell>
            <Button className="hover:bg-slate-700">
                <OptionsIcon />
            </Button>
        </TableCell>
    )
}

export default OptionsButton;