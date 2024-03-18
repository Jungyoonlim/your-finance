import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Account } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';

interface AccountBalancesProps {
  data: Account[];
}

const AccountBalances: React.FC<AccountBalancesProps> = ({ data }) => (
  <Box>
    <Typography variant="h6">Account Balances</Typography>
    <List>
      {data.map((account) => (
        <ListItem key={account.id}>
          <ListItemText primary={account.name} secondary={formatCurrency(account.balance)} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default AccountBalances;