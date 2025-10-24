import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "../styles.css";

const BarGraphModal = ({ date, data, onClose }) => {
  if (!data) return null;

  // Convert array of objects into format [{ name: "user_1", value: 3 }]
  const chartData = data.map((obj) => {
    const [key, value] = Object.entries(obj)[0];
    return { name: key, value };
  });

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Data for {date}</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BarGraphModal;
