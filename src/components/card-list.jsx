import { Card } from "antd";
import { Draggable, Droppable } from "react-beautiful-dnd";

//components
import CardTitle from "./card-title";
import CardExtra from "./card-extra";
import CardItem from "./card-item";

function CardList({ listItem, cards, index }) {
  return (
    <Draggable draggableId={listItem.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card-list-container"
        >
          <Droppable droppableId={listItem.id.toString()} type="CARD">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                // style={{
                //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                // }}

                {...provided.droppableProps}
                className="card-list-box"
              >
                <Card
                  // className="cardList"
                  title={
                    <>
                      <CardTitle title={listItem.title} />
                    </>
                  }
                  extra={<CardExtra />}
                >
                  {cards.map((card, index) => {
                    return <CardItem index={index} key={card.id} card={card} />;
                  })}
                </Card>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default CardList;
