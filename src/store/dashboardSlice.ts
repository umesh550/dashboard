import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Widget {
  id: number;
  title: string;
  text: string;
}

interface Category {
  name: string;
  widgets: Widget[];
}

interface DashboardState {
  categories: Category[];
}

const initialState: DashboardState = {
  categories: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (
      state,
      action: PayloadAction<{ categoryName: string; widget: Widget }>
    ) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find((c) => c.name === categoryName);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (
      state,
      action: PayloadAction<{ categoryName: string; widgetId: number }>
    ) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find((c) => c.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setCategories } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
