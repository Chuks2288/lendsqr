

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

const organizations = [
    {
        name: "organization 1"
    },
    {
        name: "organization 2"
    },
    {
        name: "organization 3"
    },
]

const NavigationAction = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className='flex items-center gap-2 pt-4 pl-4 text-blue-70 focus:outline-none'
                asChild
            >
                <button
                    className='w-full text-md gap-2 font-semibold px-3 flex items-center h-12 border-neutral-200 
                     hover:bg-zinc-700/10  transition'
                >
                    <Image
                        src="/images/switch.svg"
                        alt="switch"
                        width={16}
                        height={16}
                        className='object-cover'
                    />

                    <h4 className='text-sm'>
                        Switch Organization
                    </h4>

                    <Image
                        src="/images/downArrow.svg"
                        alt="switch"
                        width={14}
                        height={14}
                        className='object-cover self-center'
                    />
                </button>

            </DropdownMenuTrigger>

            <DropdownMenuContent
                className='w-52 text-xs font-medium space-y-[2px] bg-black text-white z-50'
            >

                {organizations.map((organization) => (
                    <DropdownMenuItem
                        className='cursor-pointer'
                    >
                        {organization.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavigationAction