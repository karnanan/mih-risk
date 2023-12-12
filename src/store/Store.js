import { configureStore } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import RiskReducer from '../components/pages/risk/DIVRiskSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    riskReducer: RiskReducer,
  },
});

export default store;
