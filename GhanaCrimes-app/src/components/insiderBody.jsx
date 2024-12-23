import AdvertisementSection from "./adsComponents";

const InsiderBody = () => {
  return (
    <main className="overflow-x-hidden px-3 lg:px-[9%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-11 gap-11">
        <div className="lg:col-span-2">
          <div>
            <p className="font-EB font-bold text-[#393939] text-2xl md:text-5xl">
              Know something? Send us the info!
            </p>
            <p className="mt-9">
              Do you have any credible information or evidence that can help us
              investigate an issue of public interest? *Your identity will
              remain private! Information: To upload video files, please
              go here or to a similar file transfer service of your choice.
              After the upload is ready, please send the link
              at ghanacrimes@gmail.com or enter it in the form below:
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-[30%]">
            <div>
              <AdvertisementSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InsiderBody;
