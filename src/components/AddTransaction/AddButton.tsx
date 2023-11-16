import {Button} from '../ui/button.tsx';

function AddButton(props: {submit: () => void}) {
    return(
        <Button variant="secondary" className="w-16" onClick={props.submit}>Submit</Button>
    )
}

export default AddButton;