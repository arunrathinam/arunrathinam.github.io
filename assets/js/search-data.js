// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "All publications, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-machine-learning-experiment-ai4space-launched-into-orbit-successfully",
          title: 'Our Machine learning experiment AI4SPACE launched into orbit successfully',
          description: "",
          section: "News",},{id: "news-opportunities-and-challenges-in-dl-based-spacecraft-pose-estimation-for-future-in-orbit-servicing-missions",
          title: 'Opportunities and Challenges in DL-based Spacecraft Pose Estimation for Future In-orbit Servicing missions...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-our-paper-3d-aware-object-localization-using-gaussian-implicit-occupancy-function-appeared-at-iros-2023-in-detroit-usa",
          title: 'Our paper 3D-Aware Object Localization using Gaussian Implicit Occupancy Function appeared at IROS...',
          description: "",
          section: "News",},{id: "news-our-paper-discriminator-free-unsupervised-domain-adaptation-for-multi-label-image-classification-appeared-at-wacv-2024",
          title: 'Our paper Discriminator-free Unsupervised Domain Adaptation for Multi-label Image Classification appeared at WACV...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-icra-39-24",
          title: 'Paper Accepted at ICRA&amp;#39;24',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4.html";
            },},{id: "news-released-the-spark-2024-dataset-for-spacecraft-semantic-segmentation-and-trajectory-estimation",
          title: 'Released the SPARK 2024 dataset for spacecraft semantic segmentation and trajectory estimation',
          description: "",
          section: "News",},{id: "news-spades-our-event-camera-dataset-for-spacecraft-pose-estimation-was-presented-at-icra-2024-in-yokohama-japan",
          title: 'SPADES, our event-camera dataset for spacecraft pose estimation, was presented at ICRA 2024...',
          description: "",
          section: "News",},{id: "news-our-paper-lean-demonstration-of-on-board-thermal-anomaly-detection-using-machine-learning-was-published-in-aerospace",
          title: 'Our paper Lean Demonstration of On-Board Thermal Anomaly Detection Using Machine Learning was...',
          description: "",
          section: "News",},{id: "news-i-ll-co-organize-the-third-edition-of-spark-challenge-at-cvpr-2024",
          title: 'I’ll co-organize the third edition of SPARK challenge at CVPR 2024',
          description: "",
          section: "News",},{id: "news-our-paper-hybrid-attention-for-robust-rgb-t-pedestrian-detection-in-real-world-conditions-was-published-in-ieee-robotics-and-automation-letters-ra-l",
          title: 'Our paper Hybrid Attention for Robust RGB-T Pedestrian Detection in Real-World Conditions was...',
          description: "",
          section: "News",},{id: "news-our-paper-on-ai-enabled-thermal-monitoring-of-li-ion-pouch-cells-was-published-in-the-journal-of-power-sources",
          title: 'Our paper on AI-enabled thermal monitoring of Li-ion pouch cells was published in...',
          description: "",
          section: "News",},{id: "news-three-papers-presented-at-astra-2025-esa-leiden-netherlands-on-spacecraft-pose-estimation-domain-adaptation-and-real-time-object-detection",
          title: 'Three papers presented at ASTRA 2025 (ESA, Leiden, Netherlands) on spacecraft pose estimation,...',
          description: "",
          section: "News",},{id: "news-i-ll-co-organize-the-ai4space-workshop-at-cvpr-26",
          title: 'I’ll co-organize the AI4SPACE workshop at CVPR’26',
          description: "",
          section: "News",},{id: "news-i-ll-organize-the-fourth-edition-of-spark-challenge-at-cvpr-26",
          title: 'I’ll organize the fourth edition of SPARK challenge at CVPR’26',
          description: "",
          section: "News",},{id: "news-our-paper-annotation-free-spacecraft-detection-and-segmentation-using-vision-language-models-was-presented-at-icra-2026-in-vienna-austria",
          title: 'Our paper Annotation Free Spacecraft Detection and Segmentation using Vision Language Models was...',
          description: "",
          section: "News",},{id: "news-our-paper-efficient-onboard-spacecraft-pose-estimation-with-event-cameras-and-neuromorphic-hardware-appeared-at-the-cvpr-2026-workshops",
          title: 'Our paper Efficient Onboard Spacecraft Pose Estimation with Event Cameras and Neuromorphic Hardware...',
          description: "",
          section: "News",},{id: "news-our-paper-eclipse-a-spacecraft-rendezvous-trajectories-dataset-with-controlled-in-orbit-lighting-conditions-has-been-accepted-at-neurips-2026",
          title: 'Our paper Eclipse: A Spacecraft Rendezvous Trajectories Dataset with Controlled In-Orbit Lighting Conditions...',
          description: "",
          section: "News",},{id: "news-our-paper-on-unsupervised-domain-adaptation-for-sim-to-real-object-pose-estimation-was-presented-at-iros-2026",
          title: 'Our paper on unsupervised domain adaptation for sim-to-real object pose estimation was presented...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-wacv-2027-scope-on-cross-domain-6d-object-pose-estimation-and-talon-on-lightweight-adapters-for-spacecraft-pose-estimation",
          title: 'Two papers accepted at WACV 2027: SCOPE on cross-domain 6D object pose estimation...',
          description: "",
          section: "News",},{id: "news-our-paper-domain-aware-conformal-prediction-for-trustworthy-spacecraft-pose-estimation-under-sim-to-real-shift-will-be-presented-at-the-joint-i-sairas-amp-amp-isparo-conference-nov-3-6-2026",
          title: 'Our paper Domain-Aware Conformal Prediction for Trustworthy Spacecraft Pose Estimation under Sim-to-Real Shift...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%75%6E%6B%75%6D%61%72.%72%61%74%68%69%6E%61%6D@%75%6E%69.%6C%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zC2Ri2MAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arunsz", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2231-0734", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/arunrathinam", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_2026_academic.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
