"use client";

import { BarChart, BarChart1, LineChart, PieChart } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Car, MapPin, Zap,Package,Building2 } from "lucide-react";
import countyJsonData from "../data converter/output/County_Distribution.json";
import evTypesJsonData from "../data converter/output/Electric_Vehicle_Type_Distribution.json";
// import makersJsonData from "../data converter/output/Make_Model_Counts.json";
import makeJsonData from "../data converter/output/Make_Distribution.json";
import modelJsonData from "../data converter/output/Model_Distribution.json";
import cityJsonData from "../data converter/output/City_Distribution.json";
import { SetStateAction, useState } from "react";

interface CountyData {
  County: string;
  Count: number;
}
interface CityData {
  City: string;
  Count: number;
}

interface EVTypeData {
  "Electric Vehicle Type": any;
  Count: number;
}

interface MakerData {
  Make: string;
  Model: number;
  Count: number;
}



export default function Dashboard() {

  const evTypeData: EVTypeData[] = evTypesJsonData;
  const evTypeDistribution = {
    labels: evTypeData.map(type => type["Electric Vehicle Type"].replace(" (BEV)", "").replace(" (PHEV)", "")),
    datasets: [
      {
        label: "Vehicle Types",
        data: evTypeData.map(type => type.Count),
        backgroundColor: [
          "rgb(65, 105, 225)",
          "rgb(135, 206, 250)",
        ],
      },
    ],
  };

  const countyData: CountyData[] = countyJsonData;
  const topCounties = countyData.slice(0, 8);
  const totalEVs = countyData.reduce((sum, county) => sum + county.Count, 0);
  const numberOfCounties = countyData.length;
  const countyDistribution = {
    labels: topCounties.map(county => `${county.County} County`),
    datasets: [
      {
        label: "Number of EVs",
        data: topCounties.map(county => county.Count),
        backgroundColor: [
          "rgb(65, 105, 225)",
          // "rgb(135, 206, 250)",
        ],
      },
    ],
  };

  const cityData: CityData[] = cityJsonData;
  const topCities = cityData.slice(0, 8);
  const numberOfCities = cityData.length;
  const cityDistribution = {
    labels: topCities.map(city => `${city.City} County`),
    datasets: [
      {
        label: "Number of EVs",
        data: topCities.map(city => city.Count),
        backgroundColor: [
          "rgb(65, 105, 225)",
        ],
      },
    ],
  };


  const modelData = modelJsonData;
  const topModels = modelData.slice(0, 12);
  const AllModels = modelData;
  const numberOfModels=modelData.length;

  const modelDistributionAll = {
    labels: AllModels.map(item => `${item.Model}`),
    datasets: [{
      label: "count",
      data: AllModels.map(item => item.Count),
      backgroundColor: [
        "rgb(65, 105, 225)",
      ],
    }]
  };

  const modelDistribution = {
    labels: topModels.map(item => `${item.Model}`),
    datasets: [{
      label: "count",
      data: topModels.map(item => item.Count),
      backgroundColor: [
        "rgb(65, 105, 225)",
      ],
    }]
  };

  const makeModelData = makeJsonData;
  const topMaker = makeModelData.slice(0, 12);
  const AllMaker = makeModelData;
  const numberOfMakers=makeModelData.length;

  const makeDistributionAll = {
    labels: AllMaker.map(item => `${item.Make}`),
    datasets: [{
      label: "count",
      data: AllMaker.map(item => item.Count),
      backgroundColor: [
        "rgb(65, 105, 225)",
      ],
    }]
  };

  const makeDistribution = {
    labels: topMaker.map(item => `${item.Make}`),
    datasets: [{
      label: "count",
      data: topMaker.map(item => item.Count),
      backgroundColor: [
        "rgb(65, 105, 225)",
      ],
    }]
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
          <TabsTrigger value="Manufacturer">Manufacturer</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
                <CardTitle className="text-sm font-medium">Total EVs</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalEVs}</div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">BEV count</CardTitle>
                <Battery className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{evTypeData[0].Count.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((evTypeData[0].Count / (evTypeData[0].Count + evTypeData[1].Count)) * 100)}% of total
                </p>
              </CardContent>
            </Card>

          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

            <Card className="col-span-7 bg-black text-white">
              <CardHeader>
                <CardTitle>EV Types Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart className="h-[300px] " data={evTypeDistribution} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>


        <TabsContent value="distribution">

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top County</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{countyData[0].County}</div>
                <p className="text-xs text-muted-foreground">{countyData[0].Count.toLocaleString()} EVs</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Counties</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{numberOfCounties}</div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top City</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{cityData[0].City}</div>
                <p className="text-xs text-muted-foreground">{cityData[0].Count.toLocaleString()} EVs</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cities</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{numberOfCities}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 ">
            <Card className="col-span-3 bg-black text-white">
              <CardHeader>
                <CardTitle>County Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="h-[400px]" data={countyDistribution} />
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


        <TabsContent value="Manufacturer">

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top Maker</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{makeModelData[0].Make}</div>
                <p className="text-xs text-muted-foreground">{makeModelData[0].Count.toLocaleString()} EVs</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Makers</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{numberOfMakers}</div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top Model</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{modelData[0].Model}</div>
                <p className="text-xs text-muted-foreground">{modelData[0].Count.toLocaleString()} EVs</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Models</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{numberOfModels}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-4 bg-black text-white">
              <CardHeader>
                <CardTitle>Top Makers</CardTitle>
                <CardContent>
                  <BarChart className="h-[400px]" data={makeDistribution} />
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="col-span-4 bg-black text-white">
              <CardHeader>
                <CardTitle>Top Models</CardTitle>
                <CardContent>
                  <BarChart className="h-[400px]" data={modelDistribution} />
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="col-span-8 bg-black text-white">
              <CardHeader>
                <CardTitle>All Makers</CardTitle>
                <CardContent>
                  <BarChart className="h-[600px]" data={makeDistributionAll} />
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="col-span-8 bg-black text-white">
              <CardHeader>
                <CardTitle>All Models</CardTitle>
                <CardContent>
                  <BarChart className="h-[600px]" data={modelDistributionAll} />
                </CardContent>
              </CardHeader>
            </Card>

          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}