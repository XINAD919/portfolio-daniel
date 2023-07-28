import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const DownloadButton: React.FC<{ fileName: string }> = ({ fileName }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const handleDownload = () => {
    const link = document.createElement("a");
    router.locale === "es"
      ? (link.href = "/CV_Daniel.pdf")
      : (link.href = "/CV_Daniel_EN.pdf");
    link.download = fileName;
    link.click();

    link.remove();
  };

  return (
    <button
      className='text-quaternary flex gap-4 border-button items-center px-4 py-2'
      onClick={handleDownload}
    >
      {t("download")} CV{" "}
      <Image
        src={"/download.svg"}
        alt={"download icon"}
        width={10}
        height={10}
      />
    </button>
  );
};

export default DownloadButton;
