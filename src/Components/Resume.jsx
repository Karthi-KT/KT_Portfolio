import React, { useState, useEffect } from "react";
import { useTheme } from "../App";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import axios from "axios";

const Resume = () => {
  const { darkMode } = useTheme();
  const [pdfFile, setPdfFile] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        // Replace with your Google Drive shareable link
        const googleDriveLink =
          "https://drive.google.com/file/d/1zCWongAm8TV_8eL1eoGWRCowr_aMy6CN/view?usp=drive_link";

        // Extract file ID using regex
        const fileIdMatch = googleDriveLink.match(/\/d\/(.*?)\//);
        if (!fileIdMatch) {
          throw new Error("Invalid Google Drive link format.");
        }
          const fileId = fileIdMatch[1];
          console.log(fileId)

        // Construct the direct download URL
        const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

        // Fetch the PDF
        const response = await axios.get(directDownloadUrl, {
          responseType: "blob",
        });
        const file = new Blob([response.data], { type: "application/pdf" });
        setPdfFile(URL.createObjectURL(file));
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchPDF();
  }, []);

  return (
    <div
      className={`p-4 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {pdfFile ? (
        <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
      ) : (
        <div>Loading PDF...</div>
      )}
    </div>
  );
};

export default Resume;
