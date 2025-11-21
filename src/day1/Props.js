import "./Props.css";
const Props = ({user,text,idx})=>{
//  const user = props.user;


//   // console.log(props.user);
//   // console.log(user);
//   const user = {
//     job:'도둑',
//     age:20
//   }
// //  const job = user.job;
// //  const age = user.age;
// //  console.log( age );
//   const { job,age} = user;
//   console.log( job,age );
  return(
   <div className="card">
     <img
      src={`/images/img-0${idx}.png`}
      alt="카드이미지01"
      />
      <h2>{user}</h2>
      <p>{text}</p>
   </div>
  );
}
export default Props;