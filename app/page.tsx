"use client";

import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Car, MapPin, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface EVData {
  vin: string;
  county: string;
  city: string;
  state: string;
  postalCode: string;
  modelYear: number;
  make: string;
  model: string;
  evType: string;
  cafvEligibility: string;
  electricRange: number;
  baseMSRP: number;
}

export default function Dashboard() {
  const [data, setData] = useState<EVData[]>([]);

  const geographicDistribution = {
    labels: [
      "King County",
      "Pierce County",
      "Snohomish County",
      "Clark County",
      "Spokane County",
      "Thurston County",
      "Kitsap County",
      "Whatcom County",
    ],
    datasets: [
      {
        label: "Number of EVs",
        data: [8500, 3200, 2800, 1500, 1200, 900, 850, 700],
        backgroundColor: [
           "rgb(65, 105, 225)"
        ],
      },
    ],
  };

  const cityDistribution = {
    labels: [
      "Seattle",
      "Bellevue",
      "Tacoma",
      "Vancouver",
      "Kirkland",
      "Redmond",
      "Spokane",
      "Olympia",
    ],
    datasets: [
      {
        label: "Number of EVs",
        data: [5200, 2100, 1800, 1500, 1300, 1200, 1000, 800],
        backgroundColor:  ["rgb(65, 105, 225)"],
      },
    ],
  };

  const evTypeData = {
    labels: ["BEV", "PHEV", "Other"],
    datasets: [
      {
        label: "EV Types",
        data: [65, 30, 5],
        backgroundColor: [
          "rgb(0, 0, 255)",
          "rgb(65, 105, 225)",
          "rgb(135, 206, 250)",
        ],
      },
    ],
  };

  const monthlyTrends = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "New Registrations",
        data: [450, 520, 580, 690, 850, 920, 1020, 980, 870, 790, 680, 590],

        borderColor: "rgb(84, 108, 187)",
        backgroundColor: "rgb(4, 4, 57)",
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col space-y-4 p-4 md:p-8 pt-6 bg-secondary">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold text-primary">mapup - Analytics Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="text-white">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="distribution">Geographic Distribution</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
                <CardTitle className="text-sm font-medium">Total EVs</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18,974</div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Range</CardTitle>
                <Battery className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">264 mi</div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. MSRP</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$52,847</div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Countries</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">39</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-black text-white">
              <CardHeader>
                <CardTitle>Monthly Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="h-[300px] " data={monthlyTrends} />
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-black text-white">
              <CardHeader>
                <CardTitle>EV Types Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart className="h-[300px] " data={evTypeData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="distribution">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* <div className="flex-1 grid gap-4 md:grid-cols-2 "> */}
            <Card className="col-span-3 bg-black text-white">
              <CardHeader>
                <CardTitle>Country Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="h-[400px]" data={geographicDistribution} />
              </CardContent>
            </Card>
            <Card className="col-span-4 bg-black text-white">
              <CardHeader>
                <CardTitle>City Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="h-[400px]" data={cityDistribution} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="trends">
          <div className="grid gap-4">
            <Card className="bg-black text-white">
              <CardHeader>
                <CardTitle>Registration Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="h-[400px]" data={monthlyTrends} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}