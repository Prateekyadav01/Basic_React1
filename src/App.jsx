import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
 

  const handleAdd = () => {
    if (value.trim() !== '') {
      setData([...data, value.trim()]);
      setValue('');
    }
  };

  const handleDelete = (indexToRemove) => {
    const updatedData = data.filter((_, index) => index !== indexToRemove);
    setData(updatedData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Grocery</h1>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add item"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <ul>
          {data.map((item, index) => (
            <div className="flex items-center space-x-2 mb-2 justify-between" key={index}>
              <div className='flex items-center justify-between gap-4'>
              <input type="checkbox" id={`item-${index}`} className="h-5 w-5" />
              <label htmlFor={`item-${index}`} className="text-lg">{item}</label>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
