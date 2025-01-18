import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, Activity, Thermometer, Zap, Coins, Server, Settings, Bell } from 'lucide-react';

// Rest of the component remains exactly the same
const MiningDashboard = () => {
  // Sample data - in a real app, this would come from your mining API
  const [miningData] = useState({
    currentHashrate: 95.5,
    averageHashrate: 93.2,
    acceptedShares: 985,
    rejectedShares: 12,
    temperature: 65,
    powerUsage: 1200,
    dailyEarnings: 0.0045,
    poolShare: 0.023,
    workers: 3,
    networkDifficulty: '3.25P'
  });

  const [hashHistory] = useState([
    { time: '00:00', hashrate: 94 },
    { time: '04:00', hashrate: 95 },
    { time: '08:00', hashrate: 93 },
    { time: '12:00', hashrate: 96 },
    { time: '16:00', hashrate: 94 },
    { time: '20:00', hashrate: 95 }
  ]);

  const [earningsHistory] = useState([
    { day: 'Mon', earnings: 0.0043 },
    { day: 'Tue', earnings: 0.0045 },
    { day: 'Wed', earnings: 0.0044 },
    { day: 'Thu', earnings: 0.0046 },
    { day: 'Fri', earnings: 0.0045 },
    { day: 'Sat', earnings: 0.0042 },
    { day: 'Sun', earnings: 0.0045 }
  ]);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-8">Mining Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Current Hashrate</p>
                <p className="text-2xl font-bold">{miningData.currentHashrate} MH/s</p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Temperature</p>
                <p className="text-2xl font-bold">{miningData.temperature}°C</p>
              </div>
              <Thermometer className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Power Usage</p>
                <p className="text-2xl font-bold">{miningData.powerUsage}W</p>
              </div>
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Daily Earnings</p>
                <p className="text-2xl font-bold">{miningData.dailyEarnings} BTC</p>
              </div>
              <Coins className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hashrate History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hashHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="hashrate" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningsHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="earnings" fill="#16a34a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mining Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mining Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Active Workers</span>
                <span className="font-bold">{miningData.workers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Accepted Shares</span>
                <span className="font-bold text-green-500">{miningData.acceptedShares}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Rejected Shares</span>
                <span className="font-bold text-red-500">{miningData.rejectedShares}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Pool Share</span>
                <span className="font-bold">{(miningData.poolShare * 100).toFixed(3)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Network Difficulty</span>
                <span className="font-bold">{miningData.networkDifficulty}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-500">
                <AlertTriangle className="h-5 w-5" />
                <span>High temperature warning on Worker #2</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-500">
                <Bell className="h-5 w-5" />
                <span>Payout threshold reached (0.1 BTC)</span>
              </div>
              <div className="flex items-center space-x-2 text-green-500">
                <Server className="h-5 w-5" />
                <span>New worker connected successfully</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MiningDashboard;