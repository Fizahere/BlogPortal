import { ApiService } from "../utilities/Api.service";

const dashboardUrl={
    name: "dashboard-analytic",
}

const getDashboardAnalytics=()=>{
    const response = ApiService.get(dashboardUrl.name)
    return response
}

export const DashboardService={
    getDashboardAnalytics,
}