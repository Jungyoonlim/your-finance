import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Investment } from '../../types';

interface InvestmentPerformanceProps {
  data: Investment[];
}

const InvestmentPerformance: React.FC<InvestmentPerformanceProps> = ({ data }) => (
  <Box>
    <Typography variant="h6">Investment Performance</Typography>
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </Box>
);

export default InvestmentPerformance;