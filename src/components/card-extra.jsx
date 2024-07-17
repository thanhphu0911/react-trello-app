import { Button, Tooltip } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

function CardExtra() {
  return (
    <div>
      <Tooltip title="Add a card" className="mr-2">
        <Button shape="circle" icon={<PlusOutlined />} />
      </Tooltip>

      <Tooltip title="Delete this list">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
    </div>
  );
}

export default CardExtra;
