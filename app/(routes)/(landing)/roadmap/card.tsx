type CardProps = {
  circlePosition?: "top" | "right" | "left";
  circleNumber?: string;
  title?: string;
  desc?: string;
};

export default function Card({
  circlePosition,
  circleNumber,
  title,
  desc,
}: CardProps) {
  return (
    <div className="flex flex-col w-[173px] sm:w-[273px] justify-center items-start gap-4 px-6 py-10 mb-0 lg:mb-20 relative rounded-[14px] bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderGreenToPink">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm font-normal text-white">{desc}</p>
      <div className="flex lg:hidden justify-center items-center w-8 h-8 rounded-[50%] absolute top-[-12px] left-0 right-0 m-auto bg-green-light">
        <h2 className="text-lg">{circleNumber}</h2>
      </div>
      {circlePosition === "top" ? (
        <div className="hidden lg:flex justify-center items-center w-8 h-8 rounded-[50%] absolute top-[-12px] left-0 right-0 m-auto bg-green-light">
          <h2 className="text-lg">{circleNumber}</h2>
        </div>
      ) : null}
      {circlePosition === "right" ? (
        <div className="hidden lg:flex justify-center items-center w-8 h-8 rounded-[50%] absolute right-[-12px] top-0 bottom-0 m-auto bg-green-light">
          <h2 className="text-lg">{circleNumber}</h2>
        </div>
      ) : null}
      {circlePosition === "left" ? (
        <div className="hidden lg:flex justify-center items-center w-8 h-8 rounded-[50%] absolute left-[-12px] top-0 bottom-0 m-auto bg-green-light">
          <h2 className="text-lg">{circleNumber}</h2>
        </div>
      ) : null}
    </div>
  );
}
