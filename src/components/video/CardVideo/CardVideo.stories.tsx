import type { Meta, StoryObj } from "@storybook/react";
import CardVideo from "./CardVideo";

const meta = {
  title: "Components/Video/CardVideo",
  component: CardVideo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockVideo2 = {
  kind: "youtube#video",
  etag: "VoqXAzGnabx-bYJi95mtuQ2_HEE",
  id: "a6lzvWby9UE",
  snippet: {
    publishedAt: "2025-10-22T13:59:51Z",
    channelId: "UC1Myj674wRVXB9I4c6Hm5zA",
    title: "Pluribus — Official Trailer | Apple TV",
    description:
      "We hope you enjoy the trailer, Carol.\n\nPluribus premieres November 7 on Apple TV https://apple.co/_Pluribus\n\nSubscribe to Apple TV’s YouTube channel: https://apple.co/AppleTVYouTube\n\nFollow Apple TV:\nInstagram: https://instagram.com/AppleTV\nTikTok: https://tiktok.com/@AppleTV\nFacebook: https://facebook.com/AppleTV\nX: https://X.com/AppleTV\nGiphy: https://giphy.com/AppleTV\n\nMore from Apple TV: https://apple.co/32qgOEJ\n\nApple TV is a streaming service with original stories from the most creative minds in TV and film. Watch now on the Apple TV app: https://apple.co/_AppleTVapp Subscription required for Apple TV\n\n#Pluribus #Trailer #RheaSeehorn #VinceGilligan #AppleTV",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/a6lzvWby9UE/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/a6lzvWby9UE/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/a6lzvWby9UE/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/a6lzvWby9UE/sddefault.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/a6lzvWby9UE/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "Apple TV",
    tags: [
      "pluribus",
      "trailer",
      "trailers",
      "pluribus trailer",
      "trailer pluribus",
      "official trailer",
      "pluribus official trailer",
      "official trailer pluribus",
      "vince gilligan",
      "vince gilligan apple tv",
      "apple tv vince gilligan",
      "breaking bad",
      "breaking bad vince gilligan",
      "rhea seehorn",
      "rhea seehorn apple tv",
      "better call saul",
      "diane mercer",
      "jenn carroll",
      "series",
      "show",
      "pluribus apple tv",
      "apple tv pluribus",
      "apple tv",
      "apple",
      "tv",
      "apple tv+",
      "apple tv series",
      "apple tv app",
      "apple original",
      "science fiction",
      "scifi",
    ],
    categoryId: "24",
    liveBroadcastContent: "none",
    defaultLanguage: "en",
    localized: {
      title: "Pluribus — Official Trailer | Apple TV",
      description:
        "We hope you enjoy the trailer, Carol.\n\nPluribus premieres November 7 on Apple TV https://apple.co/_Pluribus\n\nSubscribe to Apple TV’s YouTube channel: https://apple.co/AppleTVYouTube\n\nFollow Apple TV:\nInstagram: https://instagram.com/AppleTV\nTikTok: https://tiktok.com/@AppleTV\nFacebook: https://facebook.com/AppleTV\nX: https://X.com/AppleTV\nGiphy: https://giphy.com/AppleTV\n\nMore from Apple TV: https://apple.co/32qgOEJ\n\nApple TV is a streaming service with original stories from the most creative minds in TV and film. Watch now on the Apple TV app: https://apple.co/_AppleTVapp Subscription required for Apple TV\n\n#Pluribus #Trailer #RheaSeehorn #VinceGilligan #AppleTV",
    },
    defaultAudioLanguage: "en",
  },
  contentDetails: {
    duration: "PT2M3S",
    dimension: "2d",
    definition: "hd",
    caption: "true",
    licensedContent: false,
    contentRating: {},
    projection: "rectangular",
  },
  statistics: {
    viewCount: "1242111",
    likeCount: "19204",
    favoriteCount: "0",
    commentCount: "1246",
  },
  player: {
    embedHtml:
      '<iframe width="480" height="270" src="//www.youtube.com/embed/a6lzvWby9UE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
};

// const mockVideo = {
//   kind: "youtube#searchResult",
//   etag: "8Aa_xslEU1HDUXixf-LGVfpA6E8",
//   id: {
//     kind: "youtube#video",
//     videoId: "3ZAbV6viYj8",
//   },
//   snippet: {
//     publishedAt: "2025-10-22T01:07:39Z",
//     channelId: "UCWZoPPW7u2I4gZfhJBZ6NqQ",
//     title:
//       "TRUMP X MADURO | LEI DANILO GENTILI | ROUBO DO LOUVRE | e MAIS - Noticia iLtda. #002",
//     description:
//       "RICARDO MARCÍLIO é professor de Geografia e FERNANDA COMORA é jornalista. Eles são os âncoras do Notícia I-LTDA, ...",
//     thumbnails: {
//       default: {
//         url: "https://i.ytimg.com/vi/3ZAbV6viYj8/default.jpg",
//         width: 120,
//         height: 90,
//       },
//       medium: {
//         url: "https://i.ytimg.com/vi/3ZAbV6viYj8/mqdefault.jpg",
//         width: 320,
//         height: 180,
//       },
//       high: {
//         url: "https://i.ytimg.com/vi/3ZAbV6viYj8/hqdefault.jpg",
//         width: 480,
//         height: 360,
//       },
//     },
//     channelTitle: "Inteligência Ltda",
//     liveBroadcastContent: "live",
//     publishTime: "2025-10-22T01:07:39Z",
//   },
// };

export const Default: Story = {
  args: {
    video: mockVideo2,
  },
};
