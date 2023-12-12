import axios from '../../../utils/axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = '/api/data/risk/AllRiskData';

const initialState = {
  risks: [],
  currentFilter: 'total_risks',
  riskSearch: '',
};

export const RiskSlice = createSlice({
  name: 'risk',
  initialState,
  reducers: {
    getRisks: (state, action) => {
      state.risks = action.payload;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    SearchRisk: (state, action) => {
      state.riskSearch = action.payload;
    },
  },
});

export const { getRisks, setVisibilityFilter, SearchRisk } = RiskSlice.actions;

export const fetchRisks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getRisks(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export default RiskSlice.reducer;
