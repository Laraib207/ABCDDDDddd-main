"use client";
import React, { useState } from "react";
export default function ClientImage({ src, alt = "", className = "" }) {
  const [imgSrc, setImgSrc] = useState(src);
  return <img src={imgSrc} alt={alt} className={className} onError={() => setImgSrc("https://placehold.co/600x400/FACC15/000?text=Image+Missing")} />;
}
