import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = React.useState({
    colums: ["list1", "list2"],
    lists: {
      list1: { id: "list1", title: "List1", cards: ["card1-1", "card1-2"] },
      list2: { id: "list2", title: "List2", cards: ["card2-1"] },
    },
    cards: {
      "card1-1": {
        id: "card1-1",
        title: "card1-1",
        description: "javascript",
        author: "nathan",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        meta: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },
      "card1-2": {
        id: "card1-2",
        title: "card1-2",
        description: "angular",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        meta: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },

      "card2-1": {
        id: "card2-1",
        title: "card2-1",
        description: "vue",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        meta: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },
    },
  });

  // TODO: nothing if destination is null

  // TODO: drag & drop list
  function onDragList() {}

  // TODO: drag & drop card in same list
  function onDragCardSameList() {}

  //TODO: drag & drop card in different list
  function onDragCardDiffList() {}

  return (
    <AppContext.Provider
      value={{
        todos,
        //action
        onDragList,
        onDragCardSameList,
        onDragCardDiffList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
