import {Button} from "@/components/ui/button.tsx";

function SimpleButton(props: {margin: string, content: string}) {
    return (
        <Button variant="secondary" className={`w-16 ${props.margin}`}>{props.content}</Button>
    )
}

export default SimpleButton;