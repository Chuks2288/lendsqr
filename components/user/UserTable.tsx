"use client"


import Image from "next/image";

import * as React from "react"
import {
    ChevronDownIcon,
} from "lucide-react";

import { ListFilter, MoreVertical } from "lucide-react";



import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ClientOnly from "@/components/ClientOnly";
import { useRouter } from "next/navigation";

import { data } from "./data";

import { Payment } from "./data";
import Link from "next/link";



export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "organization",
        header: ({ column }: any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="gap-2"
                    title="Organization"
                    Icon={<ListFilter size="14" />}
                />

            )
        },
        cell: ({ row }: any) => (
            <div className="capitalize">{row.getValue("organization")}</div>
        ),
    },
    {
        accessorKey: "username",
        header: ({ column }: any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="gap-2"
                    title="Username"
                    Icon={<ListFilter size="14" />}
                />

            )
        },
        cell: ({ row }: any) => (
            <div className="capitalize">{row.getValue("username")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }: any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="gap-2"
                    title="Email"
                    Icon={<ListFilter size="14" />}
                />

            )
        },
        cell: ({ row }: any) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "contact",
        header: ({ column }: any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="gap-2"
                    title="Contact"
                    Icon={<ListFilter size="14" />}
                />

            )
        },
        cell: ({ row }: any) => (
            <div className="capitalize">{row.getValue("contact")}</div>
        ),
    },
    {
        accessorKey: "date",
        header: ({ column }: any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="gap-2"
                    title="Date"
                    Icon={<ListFilter size="14" />}
                />

            )
        },
        cell: ({ row }: any) => (
            <div className="capitalize">{row.getValue("date")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }: any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="gap-2"
                    title="Status"
                    Icon={<ListFilter size="14" />}
                />

            )
        },
        cell: ({ row }: any) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }: any) => {
            const payment: any = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        <Button
                            title=""
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            Icon={<MoreVertical className="h-4 w-4" />}
                        />

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuItem>
                            <Link
                                className="cursor-pointer flex items-center gap-1"
                                href={`/dashboard/users/${row.original.id}`}
                            >
                                <Image
                                    src="/images/view.svg"
                                    alt="view"
                                    width="14"
                                    height="14"
                                    className="object-cover"
                                />
                                View Details
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="cursor-pointer flex items-center gap-1"
                        >
                            <Image
                                src="/images/blacklist.svg"
                                alt="view"
                                width="14"
                                height="14"
                                className="object-cover"
                            />

                            Blacklist User
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="cursor-pointer flex items-center gap-1"
                        >
                            <Image
                                src="/images/activate.svg"
                                alt="view"
                                width="14"
                                height="14"
                                className="object-cover"
                            />

                            Activate User
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

const UserTable = () => {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        // <ClientOnly>
        <div className="w-full">
            <div className="w-full bg-white p-2 space-y-8">
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup: any) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header: any) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row: any) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell: any) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-between space-x-2 py-4">
                    {/* <div className="space-x-2">
                        <span>
                            {table.pageCount
                                ? `Showing page ${table.pageIndex + 1} of ${table.pageCount}`
                                : 'No results.'}
                        </span>
                    </div>
                    <div className="space-x-2">
                        {Array.from({ length: table.pageCount }).map((_, index) => (
                            <Button
                                key={index}
                                title={(index + 1).toString()}
                                variant={table.pageIndex === index ? 'solid' : 'outline'}
                                size="sm"
                                onClick={() => table.gotoPage(index)}
                                className="cursor-pointer"
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
        // </ClientOnly >
    )
}
export default UserTable;