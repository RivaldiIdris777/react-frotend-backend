import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import RecentOrder from '../component/RecentOrders/RecentOrder'


// For Box stats
function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

// For Buyer Profile Chart
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const data2 = [
  { name: 'Male', value: 540 },
  { name: 'Female', value: 620 },
  { name: 'Other', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const Dashboard = () => {

  // For Transaction chart
  const data = [
    {
      name: 'Jan',
      Expense: 4000,
      Income: 2400
    },
    {
      name: 'Feb',
      Expense: 3000,
      Income: 1398
    },
    {
      name: 'Mar',
      Expense: 2000,
      Income: 9800
    },
    {
      name: 'Apr',
      Expense: 2780,
      Income: 3908
    },
    {
      name: 'May',
      Expense: 1890,
      Income: 4800
    },
    {
      name: 'Jun',
      Expense: 2390,
      Income: 3800
    },
    {
      name: 'July',
      Expense: 3490,
      Income: 4300
    },
    {
      name: 'Aug',
      Expense: 2000,
      Income: 9800
    },
    {
      name: 'Sep',
      Expense: 2780,
      Income: 3908
    },
    {
      name: 'Oct',
      Expense: 1890,
      Income: 4800
    },
    {
      name: 'Nov',
      Expense: 2390,
      Income: 3800
    },
    {
      name: 'Dec',
      Expense: 3490,
      Income: 4300
    }
  ]

  return (
    <div className='flex flex-col gap-4'>
      {/* Box stats */}
      <div className="flex gap-4">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Sales</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">$54232</strong>
              <span className="text-sm text-green-500 pl-2">+343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Expenses</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
              <span className="text-sm text-green-500 pl-2">-343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Customers</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">12313</strong>
              <span className="text-sm text-red-500 pl-2">-30</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoCart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Orders</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">16432</strong>
              <span className="text-sm text-red-500 pl-2">-43</span>
            </div>
          </div>
        </BoxWrapper>
      </div>
      {/* End Box stats */}

      <div className="flex flex-row gap-4 w-full">

        {/* For transaction chart */}
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
          <strong className="text-gray-700 font-medium">
            <div className="mt-3 w-full flex-1 text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={500}
                  data={data}
                  margin={{
                    top: 20,
                    right: 10,
                    left: -10,
                    bottom: 0
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Income" fill="#0ea5e9" />
                  <Bar dataKey="Expense" fill="#ea580c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </strong>
        </div>

        {/* BuyerProfileChart */}
        <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
          <strong className="text-gray-700 font-medium">Buyer Profile</strong>
          <div className="mt-3 w-full flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={300}>
                <Pie
                  data={data2}
                  cx="50%"
                  cy="45%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={105}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 w-full">
        <RecentOrder/>
      </div>
    </div>
  )
}

export default Dashboard
