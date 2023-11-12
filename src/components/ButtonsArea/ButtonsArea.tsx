import SimpleButton from "@/components/ButtonsArea/SimpleButton.tsx";

function ButtonsArea(props: {padding: string,
    position: string,
    firstButtonMargin: string,
    secondButtonMargin: string,
    firstButtonContent: string,
    secondButtonContent: string} ){
    return (
        <div className={`${props.padding} w-9/12 md:w-6/12 lg:w-3/12 flex ${props.position}`}>
            <SimpleButton margin={props.firstButtonMargin} content={props.firstButtonContent} />
            <SimpleButton margin={props.secondButtonMargin} content={props.secondButtonContent} />
        </div>
    )
}

export default ButtonsArea;