# React + Vite

083 - Thinking In State Management - Calculating Statistics as Derived State

084 - Sorting items

085 - Clearing the items with window confirmation

    function handleClearItems() {
        const confirmed = window.confirm('Are you shure you want to delete all items???');
        if (confirmed) setItems([]);
      }

086 Moving Components into separete files - refactiring app
