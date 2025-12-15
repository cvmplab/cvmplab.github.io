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
          description: "",
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
          title: 'We have a Post-Doc position at our lab. Find more details here',
          description: "",
          section: "News",},{id: "open_positions-we-are-looking-for-a-postdoctoral-researcher-who-wants-to-build-the-next-generation-of-geometric-reasoning-and-language-grounded-3d-perception-systems-what-you-ll-do-lead-research-on-3d-reconstruction-scene-understanding-or-vision-language-models-for-embodied-agents-collaborate-with-graduate-students-on-experiments-and-publications-help-shape-datasets-and-benchmarks-that-stress-test-geometric-priors-and-multimodal-reasoning-what-you-bring-phd-in-computer-vision-robotics-machine-learning-or-a-related-area-strong-publication-record-in-3d-cv-or-vlms-e-g-neurips-cvpr-iccv-icra-proficiency-with-pytorch-jax-and-modern-3d-vision-toolchains-how-to-apply-email-your-cv-and-a-short-research-statement-to-the-email-address-below",
          title: 'We are looking for a postdoctoral researcher who wants to build the next...',
          description: "",
          section: "Open_positions",},{id: "open_positions-we-are-looking-for-ambitious-phd-students-who-want-to-build-the-next-generation-of-geometric-reasoning-and-language-grounded-3d-perception-systems-what-you-ll-do-research-on-3d-reconstruction-scene-understanding-or-vision-language-models-for-embodied-agents-what-you-bring-strong-master-s-degree-in-computer-vision-robotics-machine-learning-or-a-related-area-strong-publication-record-in-3d-cv-or-vlms-e-g-neurips-cvpr-iccv-icra-proficiency-with-pytorch-jax-and-modern-3d-vision-toolchains-how-to-apply-email-your-cv-and-a-short-research-statement-to-the-email-address-below",
          title: 'We are looking for ambitious PhD students who want to build the next...',
          description: "",
          section: "Open_positions",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cvmplab", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.utn.de", "_blank");
        },
      },];
