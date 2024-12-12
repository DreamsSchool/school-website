import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { NewsItem } from '@/types';

interface NewsState {
  items: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setNews, setLoading, setError } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
