import StarFill from "@/components/star-fill";

interface Props {
  reviewName: string;
  review: string;
}

export default function Review({ reviewName, review }: Props) {
  const range = Array.from({ length: 5 }, (_, index) => index);
  const initials = reviewName.split(" ").map((word) => word[0]).join("");

  return (
    <>
      <div className="flex lg:pl-12">
        <div
          className="hidden lg:flex items-center justify-center relative ring ring-2 ring-gray-100 w-10 h-10 overflow-hidden bg-gray-100 rounded-full mt-2"
        >
          <span className="font-medium text-gray-600">{initials}</span>
        </div>
        <div id="text" className="pl-5 flex flex-col">
          <div className="flex items-center text-yellow-400">
            {range.map((item) => (
              <div className="pr-0.5">
                <StarFill />
              </div>
            ))}
          </div>
          <div className="font-bold">{reviewName}</div>
          <p>{review}</p>
        </div>
      </div>
      <div className="pt-6 pb-6">
        <hr className="bg-black" />
      </div>
    </>
  );
}
