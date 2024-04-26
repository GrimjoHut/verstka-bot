import "./LongWay.css";

interface LongWayProps {
  TextNumber: number;
  NowayNumber: number;
  BackStyle: string;
}

const LongWay: React.FC<LongWayProps> = ({ TextNumber, NowayNumber, BackStyle }) => {
  const NoWayTxtArr = [
    "АбуАбу",
    "fdfdf",
    "fdfdfd",
    "Fdfdfdsf",
    "АбуАбу",
    "fdfdf",
    "fdfdfd",
    "Fdfdfdsf",
    "АбуАбу",
    "fdfdf",
  ];

  const ArrIndex = NowayNumber + TextNumber * 3;
  const curNoWay = NoWayTxtArr[ArrIndex];

  return (
    <div className={`LongWayContainer ${BackStyle}`}>
      <span>{curNoWay}</span>
      <span>{curNoWay}</span>
      <span>{curNoWay}</span>
    </div>
  );
};

export default LongWay
