import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store/dashboardSlice";

interface AddWidgetProps {
  categoryName?: string;
}

const AddWidget: React.FC<AddWidgetProps> = ({ categoryName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (categoryName) {
      const newWidget = {
        id: Date.now(),
        title,
        text,
      };
      dispatch(addWidget({ categoryName, widget: newWidget }));
      setTitle("");
      setText("");
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        className="py-2 px-4 bg-white rounded-lg border hover:shadow-lg border-gray-300"
        onClick={() => setIsOpen(true)}
      >
        + Add Widget
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Add New Widget</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Text</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mr-4 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddWidget}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
              >
                Add Widget
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWidget;
