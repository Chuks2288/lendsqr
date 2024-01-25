export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/users",
        "/dashboard/guarantors",
        "/dashboard/loans",
        "/dashboard/decisionModels",
        "/dashboard/savings",
        "/dashboard/loanRequests",
        "/dashboard/whitelist",
        "/dashboard/karma",
        "/dashboard/organization",
        "/dashboard/loanProducts",
        "/dashboard/savingsProducts",
        "/dashboard/feesCharges",
        "/dashboard/transactions",
        "/dashboard/services",
        "/dashboard/serviceAccount",
        "/dashboard/settlements",
        "/dashboard/reports",
        "/dashboard/preference",
        "/dashboard/feesPricing",
        "/dashboard/auditLogs",
    ]
}