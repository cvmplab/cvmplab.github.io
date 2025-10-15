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
        },{id: "nav-contact-us",
          title: "Contact Us",
          description: "Following are some ways you can reach us",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact_us/";
          },
        },{id: "news-a-warm-welcome-to-agniv-sharma-who-joins-the-cvmp-lab-as-a-doctoral-researcher",
          title: 'A warm welcome to Agniv Sharma, who joins the CVMP Lab as a...',
          description: "",
          section: "News",},{id: "news-we-have-a-new-post-doc-position-at-our-lab-available-find-more-details-here",
          title: 'We have a new Post-Doc position at our lab available. Find more details...',
          description: "",
          section: "News",},{id: "open_positions-",
          title: '',
          description: "",
          section: "Open_positions",},{id: "projects-dataloom",
          title: 'DataLoom',
          description: "Using the Power of AI to Democratize Data Science through Agentic Data Pipelines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dataloom/";
            },},{id: "projects-seehaus",
          title: 'Seehaus',
          description: "A Database With Waves",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seehaus/";
            },},{id: "projects-spectra",
          title: 'Spectra',
          description: "Taking LLM-Based Semantic SQL Operators to the Limit With Our Own Multi-Modal Data Engine",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spectra/";
            },},{id: "projects-virtual",
          title: 'Virtual',
          description: "Compressing Data Lake Storage Files Using Functional Inter-Column Dependencies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/virtual/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%74%61-%73%79%73%74%65%6D%73@%75%74%6E.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/utndatasystems", "_blank");
        },
      },{
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
