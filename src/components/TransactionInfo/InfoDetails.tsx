function InfoDetails(props: {name: string, value: string}) {
    return(
        <div className="grid grid-cols-4 justify-center items-center pb-5">
            <p className="pr-2 text-slate-400">{props.name}</p><p className="col-span-3 bg-slate-50 rounded-sm p-2 text-slate-900">{props.value}</p>
        </div>
    )
}

export default InfoDetails;