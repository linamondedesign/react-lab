import './card.css';
import number1Img from '../assets/img-01.png';
// props : 부모 -> 자식 : 객체로 전달
const Card = ({file,title})=>{
  // console.log(data);
  // const fileName = data.file;
// const {file} = data;
const PUBLIC= process.env.PUBLIC_URL;
console.log (file);
 return (
  <div className="Card">
    <div className="img-wrap">
       <img src={`${PUBLIC}/images/${file}.png`} alt="day1이미지"/>
       <h2>{title}</h2>
       {/* <img src={number1Img} alt='1번 이미지'/> */}
    </div>
  </div>
 );
} 
export default Card;