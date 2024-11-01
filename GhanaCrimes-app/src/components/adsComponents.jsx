import React, { useState, useEffect } from "react";
import { fetchAdvertisements } from "../api/adsAPI";

const AdvertisementSection = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const loadAds = async () => {
      try {
        setLoading(true);
        const response = await fetchAdvertisements();
        // console.log("Ads response:", response);
        setAds(response.ads);
        setError(null);
      } catch (err) {
        console.error("Error loading ads:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAds();
  }, []);

  // Rotate ads every 10 seconds if there's more than one ad
  useEffect(() => {
    if (ads.length > 1) {
      const interval = setInterval(() => {
        setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [ads]);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <p className="text-gray-500">Loading advertisements</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <p className="text-red-500">
          {error}
          <button
            onClick={() => window.location.reload()}
            className="ml-2 text-[#f06c00] hover:text-[#d95e00] underline"
          >
            Retry
          </button>
        </p>
      </div>
    );
  }

  if (!ads || ads.length === 0) {
    return (
      <div className="bg-[#fafafa] h-full w-full flex items-center justify-center p-4">
        <p className="text-gray-500">No advertisements available</p>
      </div>
    );
  }

  const currentAd = ads[currentAdIndex];

  return (
    <div className="bg-[#fafafa] lg:col-span-1 ">
      <h2 className="pt-4 text-[#D2D2D2] text-sm text-center">Advertisement</h2>

      <div className="space-y-6">
        {ads.map((ad) => (
          <div key={currentAd.id} className="overflow-hidden">
            <div className="p-4">
              {currentAd.imageUrl && (
                <a
                  href={currentAd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={currentAd.imageUrl}
                    alt={currentAd.title}
                    className="w-full h-48 object-cover mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                </a>
              )}
              <h3 className="text-center text-xl font-bold mb-2 text-[#212529]">
                {ad.title}
              </h3>
              {/* <p className="text-[#666666] mb-4 text-sm">
                {currentAd.description}
              </p> */}
              {/* {ad.link && (
                <a
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f06c00] hover:text-[#d95e00] font-semibold text-sm"
                >
                  Learn More
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementSection;
