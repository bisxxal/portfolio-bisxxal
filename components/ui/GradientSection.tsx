  
 function GradientSection({rotate}:{rotate:string}) {
  return (
    <div  style={{ transform: `rotate(${rotate})` }} className={`relative h-[400px] gradsec  w-full overflow-hidden `}></div>
  );
}
export default GradientSection;