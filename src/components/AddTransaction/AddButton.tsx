import {Button} from '../ui/button.tsx';

function AddButton(props: {submit: () => void, disable: boolean}) {
    return(
        <Button disabled={props.disable} variant="secondary" className="w-16" onClick={props.submit}>Submit</Button>
    )
}

export default AddButton;