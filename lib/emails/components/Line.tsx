import { MjmlDivider } from "mjml-react";
import { grayLight } from "./theme";

type LineProps = {
  padding: string;
};

const Line: React.FC<LineProps> = ({ padding }) => {
  return (
    <>
      <MjmlDivider
        borderColor={grayLight}
        borderWidth="1px"
        padding={padding}
      ></MjmlDivider>
    </>
  );
};

export default Line;
