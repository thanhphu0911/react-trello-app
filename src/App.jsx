import CardList from "./components/card-list";
import { useAppContext } from "./contexts/app-context";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const { todos, onDragList, onDragCardSameList, onDragCardDiffList } =
    useAppContext();
  console.log("todos: ", todos);

  const onDragEnd = React.useCallback((e) => {
    // the only one that is required
    console.log("onDragEnd:", e);
  }, []);

  return (
    <>
      <header className="flex">
        <div className="header__container">
          <div className="header__logo" />
          <div className="header__right">
            <div className="header__avatar">
              <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>
      <main className="pt-[40px] h-[calc(100vh-15px)] w-full">
        <div className=" flex flex-grow items-start h-full  mt-2 px-2">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="LIST"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  // style={{
                  //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  // }}
                  className="listContainer"
                  {...provided.droppableProps}
                >
                  {todos.colums.map((column, index) => {
                    const listItem = todos.lists[column];
                    const cards = listItem.cards.map(
                      (card) => todos.cards[card]
                    );
                    console.log("cards: ", cards);
                    return (
                      <CardList
                        index={index}
                        key={column}
                        listItem={listItem}
                        cards={cards}
                      />
                    );
                  })}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>
    </>
  );
}

export default App;
