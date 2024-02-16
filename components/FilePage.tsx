"use client"
import React, { useState } from 'react';
import FileIcon from '@/components/FileIcon';
import ContentManager from '@/components/ContentManager';

interface File {
  VideoID?: string;
  ImageID?: string;
  PdfID: string;
  DocumentID: string;
  FileName: string;
  FileType: string;
  Files?: File[];
}

interface Props {
  title: string;
  files: File[];
}

export default function FilePage({ title, files }: Props) {
  const [currentDir, setCurrentDir] = useState(files);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const enterFolder = (folder: File) => {
    setCurrentDir(folder.Files || []);
  };

  const navigateUp = () => {
    console.log(files);
    setCurrentDir(files);
  };

  const handleFileClick = (file: File) => {
    if (file.FileType === 'folder') {
      enterFolder(file);
    } else{
      setSelectedFile(file);
    }
  };

  const clearScreen = () => {
    setSelectedFile(null);
  };

if (selectedFile) {
      return (
        <div className="min-h-screen py-16 flex flex-col items-center">
          <button onClick={clearScreen} className="mb-4 px-4 py-2 ">
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


          </button>
          <ContentManager ContentID={selectedFile.ContentID} />
        </div>
      );
    }
  return (
  <div className="min-h-screen flex flex-col items-center">
  {title && (
    <button onClick={navigateUp} className="mb-4 px-6 py-5 rounded-lg flex items-center">
      <div className="flex items-center mr-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </div>
      <div className="text-3xl font-bold">{title}</div>
    </button>
  )}
  <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
    {currentDir.map((file, index) => (
      <div
        key={index}
        onClick={() => handleFileClick(file)}
        className="overflow-hidden"
      >
        <div className="flex items-center pl-2">
          {file.FileType === 'folder' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          ) || file.FileType === 'video' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-earmark-play mr-2 mb-3" viewBox="0 0 16 16">
              <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
          ) || (file.FileType === 'pdf' || file.FileType === 'document') && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mb-3 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          ) || file.FileType === 'picture' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mb-3 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          )}
          <p className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis w-full lg:w-40 pb-3">
            {file.FileName}
          </p>
        </div>
        <div className="flex-grow w-full h-px bg-gray-400"></div>
      </div>
    ))}
  </div>
</div>
  );
}
