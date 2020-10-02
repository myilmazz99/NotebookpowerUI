import React from "react";
import FullLine from "./FullLine";
import ImageSkeleton from "./ImageSkeleton";
import SmallLine from "./SmallLine";
import SkeletonBlock from "./SkeletonBlock";
import Tabs from "../Utilities/Tabs";

const ProductPageSkeleton = () => {
  return (
    <>
      <div className="product-slider">
        <ImageSkeleton />
      </div>
      <div className="product-details">
        <SmallLine />
        <SmallLine />
        <FullLine />
        <FullLine />
        <FullLine />
        <SkeletonBlock />
      </div>

      <Tabs
        tabName="product-tab"
        tabs={[
          {
            Açıklama: (
              <>
                <FullLine />
                <FullLine />
                <FullLine />
              </>
            ),
          },
          {
            Yorumlar: (
              <>
                <FullLine />
                <FullLine />
                <FullLine />
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default ProductPageSkeleton;
