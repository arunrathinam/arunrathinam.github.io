---
title: Opportunities and Challenges in Deep Learning-based Spacecraft Pose Estimation for Future In-orbit Servicing missions.

event: ESA - 2023 Clean Space Industry Days
event_url: https://indico.esa.int/event/450/

location: ESTEC

summary: This talk will discuss the opportunities and challenges in Deep Learning-based Spacecraft Pose Estimation for Future In-orbit Servicing missions.
abstract: This talk will discuss the challenges in selecting the hardware and choosing the correct algorithm development strategy for spacecraft pose estimation. Also, the challenges in algorithm development include domain gap, dataset generation, and model deployability, along with the opportunities in the evolution of current research to tackle these problems, including domain adaptation, multi-model training, neural architecture search and quantization-aware training. 

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2030-06-01T13:00:00Z'
date_end: '2030-06-01T15:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2017-01-01T00:00:00Z'

authors: []
tags: []

# Is this a featured talk? (true/false)
featured: true

image:
  caption: 
  focal_point: Centre

links:
  - icon: twitter
    icon_pack: fab
    name: Follow
    url: https://twitter.com/akum86
url_code: ''
url_pdf: 'https://indico.esa.int/event/450/contributions/8928/attachments/5743/9499/ESA-CSID-Rathinam.pdf'
url_slides: 'https://indico.esa.int/event/450/contributions/8928/attachments/5743/9499/ESA-CSID-Rathinam.pdf'
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
  - example
---

In recent years, interest towards in-orbit servicing (IOS) and active debris removal (ADR) has been increasing rapidly, thus resulting in increased technology demonstration and commercial orbital-servicing missions. Future IOS and ADR missions are expected to be more autonomous, and sensor perception is critical to gain knowledge and information about the target, especially if the target is known and non-cooperative. Monocular sensors are widely preferred in space applications due to mass limitations imposed by other sensors, such as LiDARs. Monocular vision sensors encompass various sensors such as RGB, Thermal/Infrared, and Event Cameras, each with different data but operating under the single principle of pin-hole cameras. RGB cameras have been prominent in space missions and have a long space heritage for earth-orbit and deep-space missions. Recent developments in computer vision and AI, especially deep learning, unlock new realms of possibility with monocular vision sensors. In IOS and ADR missions, it enables more autonomous spacecraft with a wide range of capabilities, including navigation, rendezvous and docking scenarios, grasping and manipulating objects using actuators such as robotic arms, and many others. As deep learning research evolves in this space domain, the challenges encountered will be specific to the characteristics of the spacecraft environment domain.

Deep learning algorithms are known for their requirements for large amounts of data. However, no large datasets are available for in-orbit targets, and it is harder to acquire for individual mission targets. So, the primary research go-to solution is to generate data using simulators synthetically. SPEED[1], SPEED+[2], and SPARK [3] are standard datasets with synthetically generated images accompanied by small proportion images from the laboratory environment. With synthetically generated data used for training, the problem of domain gap arises when the trained model is applied to test data from lab setup or actual space imagery. There is a significant drop in performance when the model encounters data not seen in training or out-of-training distribution. Several steps have been made to tackle the problem, from the data perspective, adding different modalities and performing multi-modal data fusion, and from an algorithm perspective, training the algorithm with an adversarial approach to solving these problems. However, such practices lead to the problem of significantly larger models, which are hard to deploy in edge devices or a resource-contained environment. In a multi-modal setup, the data from these different sensors are entirely hostile to one another.

Recently Event cameras are gaining popularity with the new generation of hardware development. With the deep learning algorithms catching up for event sensing, it allows space applications to reduce the domain gap. Event cameras are known for their extremely high dynamic range, up to 120 dB and low power consumption, which makes them highly suitable for space applications. However, it has unique challenges for use cases, including spacecraft pose estimation.

This talk will discuss the challenges in selecting the hardware and choosing the correct algorithm development strategy for spacecraft pose estimation. Also, the challenges in algorithm development include domain gap, dataset generation, and model deployability, along with the opportunities in the evolution of current research to tackle these problems, including domain adaptation, multi-model training, neural architecture search and quantization-aware training. This talk will additionally explore the following questions: 1. Can RGB camera data be complemented with the data from other cameras in a multi-modal data fusion? 2. Can an Event camera be considered for spacecraft pose estimation? 3. Domain gap challenges in deep learning and how domain adaption approach can solve the problem and its importance for spacecraft pose estimation. 4. Deploying model in edge devices and how neural architectural search is evolving to find the optimum topology of the architecture to help in deployment in edge devices.

[1] Kisantal, Mate, et al. "Satellite pose estimation challenge: Dataset, competition design, and results." IEEE Transactions on Aerospace and Electronic Systems 56.5 (2020): 4083-4098.

[2] Park, Tae Ha, et al. "SPEED+: Next-generation dataset for spacecraft pose estimation across domain gap." 2022 IEEE Aerospace Conference (AERO). IEEE, 2022.

[3] Rathinam, Arunkumar, et al. (2022). SPARK 2022 Dataset : Spacecraft Detection and Trajectory Estimation [Data set]. Zenodo. https://doi.org/10.5281/zenodo.6599762
