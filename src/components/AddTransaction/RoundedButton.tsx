import {Button} from '../ui/button.tsx';
import {Plus} from "lucide-react";

function RoundedButton() {
    return (
        <Button variant="secondary" className="bg-slate-50 text-slate-900 hover:bg-slate-300 rounded-full w-12 h-12"><Plus/></Button>
    )
}

export default RoundedButton;