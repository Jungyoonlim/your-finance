import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@material-ui/core';
import { fetchUserData } from '../redux/actions/userActions';
import { USER_DATA_QUERY } from '../graphql/queries';
import { RootState } from '../redux/reducers';
import { AppDispatch } from '../redux/store';

const AccountBalances = lazy(() => import('./AccountBalances'));
const TransactionHistory = lazy(() => import('./TransactionHistory'));
const SpendingCategories = lazy(() => import('./SpendingCategories'));
const InvestmentPerformance = lazy(() => import('./InvestmentPerformance'));

const PersonalFinanceDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user.data);
  const { loading, error } = useQuery(USER_DATA_QUERY, {
    onCompleted: () => dispatch(fetchUserData()),
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box display="flex" flexWrap="wrap" p={2}>
        <Suspense fallback={<CircularProgress />}>
          <AccountBalances data={userData.accounts} />
          <TransactionHistory data={userData.transactions} />
          <SpendingCategories data={userData.transactions} />
          <InvestmentPerformance data={userData.investments} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default PersonalFinanceDashboard;