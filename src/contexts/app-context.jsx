import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = React.useState({
    columns: ["list1", "list2", "list3"],
    lists: {
      list1: { id: "list1", title: "List1", cards: ["card1-1", "card1-2"] },
      list2: { id: "list2", title: "List2", cards: ["card2-1"] },
      list3: { id: "list3", title: "List3", cards: [] },
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
  function onDragList({ source, destination }) {
    setTodos((preState) => {
      const clonedColumns = [...preState.columns];
      const listDragged = clonedColumns.splice(source.index, 1)[0];
      clonedColumns.splice(destination.index, 0, listDragged);
      console.log("clonedColumns: ", { clonedColumns });
      return {
        ...preState,
        columns: clonedColumns,
      };
    });
  }

  // TODO: drag & drop card in same list
  function onDragCardSameList({ source, destination, draggableId }) {
    const droppableId = source.droppableId;
    const sourceList = todos.lists[droppableId];
    const cards = sourceList.cards;
    cards.splice(source.index, 1);
    cards.splice(destination.index, 0, draggableId);

    setTodos((prevState) => {
      return {
        ...prevState,
        lists: {
          ...prevState.lists,
          [droppableId]: {
            ...prevState.lists[droppableId],
            cards,
          },
        },
      };
    });

    console.log("onDragCardSameList: ", { sourceList, cards });
  }

  //TODO: drag & drop card in different list
  function onDragCardDiffList({ source, destination, draggableId }) {}

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
