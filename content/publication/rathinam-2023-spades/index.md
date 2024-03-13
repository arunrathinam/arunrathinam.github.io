---
title: 'SPADES: A Realistic Spacecraft Pose Estimation Dataset using Event Sensing'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Haytam Qadadri
  - Djamila Aouada

# Author notes (optional)
author_notes:
  - ''
  - ''
  - ''

date: '2024-05-12T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Conference on Robotics and Automation*
publication_short: In *ICRA*

abstract: In recent years, there has been a growing demand for improved autonomy for in-orbit operations such as rendezvous, docking, and proximity manoeuvres, leading to increased interest in employing Deep Learning-based Spacecraft Pose Estimation techniques. However, due to limited access to real target datasets, algorithms are often trained using synthetic data and applied in the real domain, resulting in a performance drop due to the domain gap. State-of-the-art approaches employ Domain Adaptation techniques to mitigate this issue. In the search for viable solutions, event sensing has been explored in the past and shown to reduce the domain gap between simulations and real-world scenarios. Event sensors have made significant advancements in hardware and software in recent years. Moreover, the characteristics of the event sensor offer several advantages in space applications compared to RGB sensors. To facilitate further training and evaluation of DL-based models, we introduce a new dataset, SPADES, comprising real event data acquired in a controlled laboratory environment and simulated event data using the same camera intrinsics. Furthermore, we introduce an image-based event representation that performs better than existing representations. In addition, we propose an effective data filtering method to improve the quality of training data, thus enhancing model performance. A multifaceted baseline evaluation was conducted using different event representations, event filtering strategies, and algorithmic frameworks, and the results are summarized. The dataset will be made available at [http://cvi2.uni.lu/spades.](http://cvi2.uni.lu/spades).

# Summary. An optional shortened abstract.
summary: We introduce a new dataset, SPADES - SPAcecraft Pose Estimation Dataset using Event Sensing, comprising simulated event data end real event data acquired in a controlled laboratory environment.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2311.05310'
url_code: 'http://cvi2.uni.lu/spades'
url_dataset: 'http://cvi2.uni.lu/spades'
url_poster: ''
url_project: ''
url_slides: ''
url_source: 'http://cvi2.uni.lu/spades'
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - spacecraft_pose

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

