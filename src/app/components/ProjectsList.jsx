"use client";

export default function ProjectsList({ projectList = [], showSeeAll = false }) {
  return (
    <div className="mt-10 flex flex-col gap-6 max-w-[1200px] mx-auto px-4">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
          Projects
        </h2>
        {showSeeAll && (
          <a
            href="/projects"
            className="text-sm flex underline hover:text-base-content/80"
          >
            See All
          </a>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {projectList.map((item, index) => (
          <div
            key={index}
            className="group p-6 md:p-8 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-102 transition-transform duration-200"
          >
            <div className="flex flex-col gap-4">
              {/* Title + Arrow */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <svg
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                >
                  <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                </svg>
              </div>

              {/* Description */}
              <p className="text-base-content/80 text-sm sm:text-base">{item.description}</p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Vimeo Video Embed */}
              {item.videoUrl && (
                <div className="aspect-video w-full rounded-xl overflow-hidden mt-4">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}