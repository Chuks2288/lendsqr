
interface dashboardProps {
    title?: string;
    content: {
        id: string;
        dashboardId?: string | undefined;
        icon: string;
        subTitle: string;
        path: string;
    }[]
}

export const dashboard: dashboardProps[] = [
    {
        content: [
            {
                id: "1",
                dashboardId: "1",
                icon: "/images/dashboard/menu.svg",
                subTitle: "Dashboard",
                path: "/dashboard/home"
            }
        ],
    },
    {
        title: "Customers",
        content: [
            {
                id: "2",
                dashboardId: "2",
                icon: "/images/dashboard/user.svg",
                subTitle: "Users",
                path: "/dashboard/users",
            },
            {
                id: "3",
                dashboardId: "3",
                icon: "/images/dashboard/guarantor.svg",
                subTitle: "Guarantors",
                path: "/dashboard/guarantors",
            },
            {
                id: "4",
                dashboardId: "4",
                icon: "/images/dashboard/loan.svg",
                subTitle: "Loans",
                path: "/dashboard/loans",
            },
            {
                id: "5",
                dashboardId: "5",
                icon: "/images/dashboard/decision.svg",
                subTitle: "Decision Models",
                path: "/dashboard/decisionModels",
            },
            {
                id: "6",
                dashboardId: "6",
                icon: "/images/dashboard/saving.svg",
                subTitle: "Savings",
                path: "/dashboard/savings",
            },
            {
                id: "7",
                dashboardId: "7",
                icon: "/images/dashboard/loan.svg",
                subTitle: "Loan Requests",
                path: "/dashboard/loanRequests",
            },
            {
                id: "8",
                dashboardId: "8",
                icon: "/images/dashboard/whitelist.svg",
                subTitle: "Whitelist",
                path: "/dashboard/whitelist",
            },
            {
                id: "9",
                dashboardId: "9",
                icon: "/images/dashboard/karma.svg",
                subTitle: "Karma",
                path: "/dashboard/karma",
            },
        ],
    },
    {
        title: "Businesses",
        content: [
            {
                id: "10",
                dashboardId: "10",
                icon: "/images/dashboard/organization.svg",
                subTitle: "Organization",
                path: "/dashboard/organization",
            },
            {
                id: "11",
                dashboardId: "11",
                icon: "/images/dashboard/loanProduct.svg",
                subTitle: "Loan Products",
                path: "/dashboard/loanProducts",
            },
            {
                id: "12",
                dashboardId: "12",
                icon: "/images/dashboard/savingProduct.svg",
                subTitle: "Savings Products",
                path: "/dashboard/savingsProducts",
            },
            {
                id: "13",
                dashboardId: "13",
                icon: "/images/dashboard/fee.svg",
                subTitle: "Fees and Charges",
                path: "/dashboard/feesCharges",
            },
            {
                id: "14",
                dashboardId: "14",
                icon: "/images/dashboard/transaction.svg",
                subTitle: "Transactions",
                path: "/dashboard/transactions",
            },
            {
                id: "15",
                dashboardId: "15",
                icon: "/images/dashboard/service.svg",
                subTitle: "Services",
                path: "/dashboard/services",
            },
            {
                id: "16",
                dashboardId: "16",
                icon: "/images/dashboard/serviceAccount.svg",
                subTitle: "Service Account",
                path: "/dashboard/serviceAccount",
            },
            {
                id: "17",
                dashboardId: "17",
                icon: "/images/dashboard/settlement.svg",
                subTitle: "Settlements",
                path: "/dashboard/settlements",
            },
            {
                id: "18",
                dashboardId: "18",
                icon: "/images/dashboard/report.svg",
                subTitle: "Reports",
                path: "/dashboard/reports",
            },
        ],
    },
    {
        title: "Settings",
        content: [
            {
                id: "19",
                dashboardId: "19",
                icon: "/images/dashboard/preference.svg",
                subTitle: "Preference",
                path: "/dashboard/preference",
            },
            {
                id: "20",
                dashboardId: "20",
                icon: "/images/dashboard/feePricing.svg",
                subTitle: "Fees and Pricing",
                path: "/dashboard/feesPricing",
            },
            {
                id: "21",
                dashboardId: "21",
                icon: "/images/dashboard/audit.svg",
                subTitle: "Audit Logs",
                path: "/dashboard/auditLogs",
            },
        ],
    },
]