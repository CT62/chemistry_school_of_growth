"use client"
import { useRouter } from 'next/navigation'

interface Props {
    FileName: string;
    FileType?: string;
    CurrentDir: string;
    FileID: string;
}

export default function FileIcon({ FileName, CurrentDir,FileType,FileID }: Props) {
    const router = useRouter();

    return (
        <div>
            <div
                onClick={()=>{router.push(`${CurrentDir}/${FileName.replaceAll(" ","_")}`)}}
                className="py-3 hover:bg-gray-200"
            >
                <div className="flex items-center pl-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                        />
                    </svg>

                    <p className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis w-full lg:w-40">
                        {FileName}
                    </p>
                </div>
            </div>

            <div className="flex-grow w-full h-px bg-gray-400"></div>
        </div>
    );
}
