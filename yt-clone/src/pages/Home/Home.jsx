import VideoCard from "../../components/VideoCard/VideoCard";

import {
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  jack,
  megan,
  gerard,
} from "../../assets/assets";

const videos = [
  {
    thumbnail: thumbnail1,
    title: "Amazing Technology That You Need to See",
    channel: "GreatStack",
    channelImage: jack,
    views: "1.2M",
    uploaded: "2 days ago",
    duration: "10:24",
  },
  {
    thumbnail: thumbnail2,
    title: "How I Built This Amazing Project",
    channel: "Code With Me",
    channelImage: megan,
    views: "856K",
    uploaded: "4 days ago",
    duration: "12:45",
  },
  {
    thumbnail: thumbnail3,
    title: "The Future of Technology Is Here",
    channel: "Tech World",
    channelImage: gerard,
    views: "2.1M",
    uploaded: "1 week ago",
    duration: "8:32",
  },
  {
    thumbnail: thumbnail4,
    title: "10 Things You Should Know About Coding",
    channel: "Programming Hub",
    channelImage: jack,
    views: "540K",
    uploaded: "5 days ago",
    duration: "15:20",
  },
  {
    thumbnail: thumbnail5,
    title: "Best Tips and Tricks for Developers",
    channel: "Developer Zone",
    channelImage: megan,
    views: "980K",
    uploaded: "3 days ago",
    duration: "9:18",
  },
  {
    thumbnail: thumbnail6,
    title: "Learn React From Beginner to Advanced",
    channel: "React Master",
    channelImage: gerard,
    views: "1.8M",
    uploaded: "2 weeks ago",
    duration: "18:40",
  },
  {
    thumbnail: thumbnail7,
    title: "This Will Change the Way You Code",
    channel: "Coding Academy",
    channelImage: jack,
    views: "730K",
    uploaded: "6 days ago",
    duration: "11:05",
  },
  {
    thumbnail: thumbnail8,
    title: "Build a YouTube Clone With React",
    channel: "Web Dev",
    channelImage: megan,
    views: "1.4M",
    uploaded: "1 day ago",
    duration: "14:52",
  },
];

const Home = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Technology",
    "Sports",
    "Learning",
  ];

  return (
    <main className="ml-55 pt-5 px-5">
      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-5 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition ${
              index === 0
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </main>
  );
};

export default Home;
