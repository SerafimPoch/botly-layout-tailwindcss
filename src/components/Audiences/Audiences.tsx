import Image from "next/image";

export default function Audiences() {
  return (
    <div className="rounded-3xl border-2 border-solid border-purple-gray p-membership">
      <p className="text-lg font-semibold leading-6 mb-4 text-white">
        Audiences
      </p>
      <div className="flex items-center gap-8">
        <Image src="circle.svg" alt="chart-mock" width={138} height={138} />
        <div>
          <p className="text-6xl font-bold leading-10 mb-3 text-white">68%</p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple" />
            <p className="text-base font-semibold mr-2 text-white">New</p>
            <div className="flex items-center gap-1">
              <div className="w-0 h-0 border-b-10 border-custom-green border-l-5 border-l-transparent border-r-5 border-r-transparent" />
              <p className="text-sm leading-5 text-custom-green">10%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
