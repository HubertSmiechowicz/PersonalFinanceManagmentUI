import {TableHead, TableHeader, TableRow} from "../ui/table.tsx"

function Legend () {
    return (
        <>
            <TableHeader className="text-base">
                <TableRow className="hover:bg-transparent">
                    <TableHead>Date</TableHead>
                    <TableHead>Bill</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
        </>
    )
}

export default Legend;