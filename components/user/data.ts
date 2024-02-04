import { LiaCoinsSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";

import { IconType } from "react-icons"


interface userHeaderContentProps {
    icon: IconType;
    title: string;
    stat: string;
    textColor: string;
    bgColor?: string;
}

interface userTableHeaderProps {
    titleHead: string;
    icon: string;
}

export type Payment = {
    id: string,
    organization: string,
    username: string,
    email: string,
    contact: string,
    date: string,
    status: "Pending" | "Inactive" | "Blacklisted" | "Active"

    fullName?: string,
    UserTier: number,
    amount: number,
    accountNo: string,
    bankName: string,
    customerImage: string,
    maritalStatus: string,
    childrenNo: string,
    ResidenceType: string,
    bvn: string,
    gender: string,

    educationLevel: string,
    employmentStatus: string,
    employmentSector: string,
    employmentDuration: string,
    officeEmail: string,
    monthlyIncome: string,
    loanRepayment: string,

    twitter: string,
    facebook: string,
    instagram: string,

    guarantorFullName: string,
    guarantorContact: string,
    guarantorEmail: string,
    relationship: string,


    pageCount?: any;
    pageIndex?: any;
    gotoPage?: any
}


export const data: Payment[] = [
    {
        id: "5kma53ae",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Inactive",

        fullName: "Adedeji Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",

    },
    {
        id: "bhqecj4p",
        organization: "Irorun",
        username: "Debby Ogana",
        email: "debby2@irorun.com",
        contact: "08160780928",
        date: "Apr 30, 2020 10:00 AM",
        status: "Pending",

        fullName: "Debby Ogana",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "derv1ws0",
        organization: "Lendsqr",
        username: "Grace Effiom",
        email: "grace@lendstar.com",
        contact: "07060780922",
        date: "Apr 30, 2020 10:00 AM",
        status: "Blacklisted",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "3u1reuv4",
        organization: "Lendsqr",
        username: "Tosin Dokunmu",
        email: "tosin@lendsqr.com",
        contact: "07003309226",
        date: "Apr 10, 2020 10:00 AM",
        status: "Pending",

        fullName: "Tosin Dokunmu",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "m5gr84i9",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Inactive",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "5kma53ae",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Inactive",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "bhqecj4p",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Pending",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "derv1ws0",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Blacklisted",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "3u1reuv4",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Active",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
    {
        id: "m5gr84i9",
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        contact: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Inactive",

        fullName: "Grace Effiong",
        UserTier: 1,
        amount: 200000.00,
        accountNo: "867495768",
        bankName: "Providus Bank",
        customerImage: "/images/customer.svg",
        maritalStatus: "Single",
        childrenNo: "None",
        ResidenceType: "Parent's Apartment",
        bvn: "95874652345",
        gender: "female",

        educationLevel: "B.sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "200,000.00 - 400,000.00",
        loanRepayment: "40,000",

        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",

        guarantorFullName: "Debby Ogana",
        guarantorContact: "0706078922",
        guarantorEmail: "debby@gmail.com",
        relationship: "Sister",
    },
]



export const userHeaderContent: userHeaderContentProps[] = [
    {
        icon: HiOutlineUsers,
        title: "Users",
        stat: "2,453",
        textColor: "#DF18FF",
        bgColor: "#DF18FF",
    },
    {
        icon: FaUsers,
        title: "Active Users",
        stat: "2,453",
        textColor: "#5718FF",
        bgColor: "#5718FF",
    },
    {
        icon: FaCoins,
        title: "Users with Loans",
        stat: "12,453",
        textColor: "#F55F44",
        bgColor: "#F55F44",
    },
    {
        icon: LiaCoinsSolid,
        title: "Users with savings",
        stat: "102,453",
        textColor: "#FF3366",
        bgColor: "#FF3366",
    },
]


export const userTableHeader: userTableHeaderProps[] = [
    {
        titleHead: "Organization",
        icon: "/images/filter.png",
    },
    {
        titleHead: "Username",
        icon: "/images/filter.png",
    },
    {
        titleHead: "Email",
        icon: "/images/filter.png",
    },
    {
        titleHead: "Phone Number",
        icon: "/images/filter.png",
    },
    {
        titleHead: "Date Joined",
        icon: "/images/filter.png",
    },
    {
        titleHead: "Status",
        icon: "/images/filter.png",

    },
]



