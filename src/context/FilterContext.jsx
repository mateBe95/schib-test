import React from "react";

const FilterStateContext = React.createContext();
const FilterDispatchContext = React.createContext();

function filterReducer(state, action) {
  switch (action.type) {
    case "FILTER_CHANGE":
      state = { category: action.category };
      break;
  }
  return state;
}

function FilterProvider({ children }) {
  const [state, dispatch] = React.useReducer(filterReducer, {
    category: "fashion"
  });
  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
}

function useFilterState() {
  const context = React.useContext(FilterStateContext);
  if (context === undefined) {
    throw new Error("add FilterProvider");
  }
  return context;
}
function useFilterDispatch() {
  const context = React.useContext(FilterDispatchContext);
  if (context === undefined) {
    throw new Error("add FilterProvider");
  }
  return context;
}

export { FilterProvider, useFilterState, useFilterDispatch };
