import { useState } from 'react';
import Logo from './components/Logo.jsx';
import Form from './components/Form.jsx';

import './index.css';
import PackingList from './components/PackingList.jsx';
import Stats from './components/Stats.jsx';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function handleClearItems() {
    const confirmed = window.confirm('Are you shure you want to delete all items???');
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
