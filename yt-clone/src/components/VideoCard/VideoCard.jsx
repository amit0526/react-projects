const VideoCard = ({ video }) => {
  return (
    <div className="cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>

      {/* Video Info */}
      <div className="flex gap-3 mt-3">
        {/* Channel Image */}
        <img
          src={video.channelImage}
          alt={video.channel}
          className="w-9 h-9 rounded-full object-cover shrink-0"
        />

        {/* Text */}
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-5">
            {video.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">{video.channel}</p>

          <p className="text-sm text-gray-500">
            {video.views} views • {video.uploaded}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
