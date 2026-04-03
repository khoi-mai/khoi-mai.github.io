"use client";

export default function ProjectsList({ projectList }) {
  return (
    <div className="mt-10 flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((item, index) => (
          <div
            key={index}
            className="group p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 transition-transform duration-200"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-base-content/80 text-sm sm:text-base mb-4">
              {item.description}
            </p>

            {/* Vimeo embed */}
            {item.videoUrl && (
              <div className="relative w-full pb-[56.25%] mb-4 rounded-lg overflow-hidden">
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}