import { memo } from "react";

interface Props {
  listItens: string[];
  from: string;
}

const List = ({ listItens, from }: Props) => {
  return (
    <pre>
      <span className="c-magento">
        import 
      </span> {`{`}<br />
        {
          listItens.map((item:string) => <>{` `}{item},<br/></>)
        }
      {`}`} <span className="c-magento">from</span>
      <span className="c-yellow">'{from}'</span>;
    </pre>
  )
}

export default memo(List);