import './card.css'
// props : 부모 -> 자식 : 객체로 전달
const Card = ({file,title})=>{
  // console.log(data);
  // const fileName = data.file;
// const {file} = DataTransfer;
 return (
  <div className="Card">
    <div className="img-wrap">
       <img src={`/images${file}.png`}alt="day1이미지"/>
       <h2>{title}</h2>
    </div>
  </div>
 );
}
export default Card;