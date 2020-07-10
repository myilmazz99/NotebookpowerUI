import React from "react";
import SkeletonBlock from "./SkeletonBlock";

const ProductPreviewSkeleton = () => {
  return (
    <div className="skeleton product-preview-skeleton">
      <SkeletonBlock />
      <SkeletonBlock />
    </div>
  );
};

export default ProductPreviewSkeleton;
