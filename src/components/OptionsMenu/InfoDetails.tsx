function InfoDetails(props: {name: string, value: string}) {
    return(
        <div>
            <span className="pr-2 text-slate-400">{props.name}</span><span>{props.value}</span>
        </div>
    )
}

export default InfoDetails;