// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "News Updates from Computer Vision and Machine Perception lab at UTN.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Team at CVMP-Lab @ UTN.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Areas of Research that the CVMP Lab is currently working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "All publications from the Data Systems Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-social",
          title: "Social",
          description: "Social life at the CVMP Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/social/";
          },
        },{id: "nav-open-positions",
          title: "Open Positions",
          description: "Positions available at our Lab Currently",
          section: "Navigation",
          handler: () => {
            window.location.href = "/open_positions/";
          },
        },{id: "news-a-warm-welcome-to-agniv-sharma-who-joins-the-cvmp-lab-as-a-doctoral-researcher",
          title: 'A warm welcome to Agniv Sharma, who joins the CVMP Lab as a...',
          description: "",
          section: "News",},{id: "news-we-have-a-post-doc-position-at-our-lab-find-more-details-here",
          title: 'We have a Post-Doc position at our lab. Find more details here:',
          description: "",
          section: "News",},{id: "open_positions-",
          title: '',
          description: "",
          section: "Open_positions",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/utndatasystems.bsky.social", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
