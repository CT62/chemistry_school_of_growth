import FileIcon from '@/components/FileIcon';

interface Props{
  courses: string[]
  title: string
  CurrentDir: string
}

export default function FilePage({courses, title,CurrentDir}: Props){
  return (
    <div className="min-h-screen py-16 flex flex-col items-center">
      <div className="text-3xl font-bold mb-8">
        {title}
      </div>
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <FileIcon
            key={index}
            FileName={course}
            CurrentDir={CurrentDir}
            className="hover:shadow-lg rounded-lg overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
}
