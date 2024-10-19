import { Link } from "react-router-dom";
const BodyGridLG = () => {
  return (
    <main className="overflow-x-hidden md:px-[5%]  md:block">
      <div className="overflow-x-hidden mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {/*First Column*/}
          <div className="lg:col-span-2 md:col-span-1 space-y-4">
            <Link className="">
              <div className="bg-slate-500 h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
            <Link className="">
              <div className="bg-slate-500 h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
          </div>

          {/*Second Column*/}
          <div className="lg:col-span-3 md:col-span-1 order-first lg:order-none">
            <div className="h-full flex flex-col space-y-4">
              {/*First Section*/}
              <Link>
                <div className="bg-slate-500 h-[251px] object-cover" />
                <p className="text-sm text-[#f06c00]">Business</p>
                <p className="text-[#393939] text-xl lg:text-4xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
                  Michelin pauses some French tyre factories as demand falls
                </p>
                <p>
                  More than 400 white-collar workers will be laid off from
                  Northvolt, split across the battery manufacturer's sites in
                  Skellefteå, Stockholm and Västerås.
                </p>
              </Link>
              <hr className="mt-4 mb-4 w-full" />
              {/*Second Section*/}
              <Link className="flex gap-3">
                {/* Text Div - Appears first on larger screens */}
                <div className="order-2 sm:order-1">
                  <p className="text-sm text-[#f06c00]">Business</p>
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                    Michelin pauses some French tyre factories as demand falls
                  </p>
                </div>

                {/* Image Div - Appears first on mobile (default order for mobile) */}
                <div className="bg-slate-500 w-[185px] h-[123px] object-cover flex-shrink-0 order-1 sm:order-2" />
              </Link>
            </div>
          </div>

          {/*Third Column*/}
          <div className="space-y-8 lg:col-span-2 md:col-span-2">
            <Link className="">
              <div className="bg-slate-500  h-40 object-cover " />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
            <Link className="">
              <div className="bg-slate-500 h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-8 items-center">
        <div className="bg-[#f74548] w-4 h-4" />
        <p className="font-EB font-bold text-lg">TRAVEL NEWS</p>
      </div>
      <hr className=" mb-4" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-11">
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-11">
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
      </div>
      <div className=" flex gap-3 mt-8 items-center">
        <div className="bg-[#f74548] w-4 h-4" />
        <p className="font-EB font-bold text-lg">TRAVEL NEWS</p>
      </div>
      <hr className="mb-4" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-11">
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
        <Link>
          <div className="bg-slate-500  h-40 object-cover" />
          <p className="text-sm text-[#f06c00]">Business</p>
          <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
            Michelin pauses some French tyre factories as demand falls
          </p>
        </Link>
      </div>
    </main>
  );
};

export default BodyGridLG;
