import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Widget from "./Widget";
import { RootState } from "../store/store";
import { removeWidget } from "../store/dashboardSlice";
import AddWidget from "./AddWidget";

interface DashboardProps {
  searchQuery: string;
}

const Dashboard: React.FC<DashboardProps> = ({ searchQuery }) => {
  const categories = useSelector(
    (state: RootState) => state.dashboard.categories
  );
  const dispatch = useDispatch();

  const handleRemoveWidget = (categoryName: string, widgetId: number) => {
    dispatch(removeWidget({ categoryName, widgetId }));
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="p-6">
      <div className="ml-3">
        {filteredCategories.map((category) => (
          <div className="mb-8" key={category.name}>
            <h2 className="text-lg font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.widgets.map((widget) => (
                <Widget
                  key={widget.id}
                  title={widget.title}
                  id={widget.id}
                  onRemove={() => handleRemoveWidget(category.name, widget.id)}
                >
                  <p>{widget.text}</p>
                </Widget>
              ))}
              <div className="relative max-w-96 min-h-52 p-6 bg-white rounded-2xl shadow-md flex justify-center items-center">
                <AddWidget categoryName={category.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
