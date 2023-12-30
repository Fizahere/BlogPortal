import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";
import { DashboardService } from '../../services/dashboard.services';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

function AdminHome() {
  const { data: dashbaordData } = useQuery(
    "dashboard",
    DashboardService.getDashboardAnalytics
  );

  const mappedDashboardData = useMemo(
    () => dashbaordData?.data?.results,
    [dashbaordData]
  );

  const data = {
    labels: ["Posts", "Comments", "Users", "Categories"],
    datasets: [
      {
        label: "Entries Count",
        data: [
          mappedDashboardData?.post_count,
          mappedDashboardData?.comment_count,
          mappedDashboardData?.user_count,
          mappedDashboardData?.category_count,
        ],
        backgroundColor: "#a884e491",
      },
    ],
  };

  return (
    <div>
      <h3>Welcome To Dashboard</h3>
      <Bar options={chartOptions} data={data} />
    </div>
  );
}

export default AdminHome;
