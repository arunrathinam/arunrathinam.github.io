---
title: 'A survey on deep learning-based monocular spacecraft pose estimation: Current state, limitations and prospects'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Leo Pauly
- Wassim Rharbaoui
- Carl Shneider
- admin
- Vincent Gaudillière
- Djamila Aouada

# Author notes (optional)
author_notes:
  - ''
  - ''
  - ''
  - ''
  - ''
  - ''

date: '2023-11-01T00:00:00Z'
doi: '10.1016/j.actaastro.2023.08.001'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Acta Astronautica*
publication_short: In *Acta Astronautica*

abstract: Estimating the pose of an uncooperative spacecraft is an important computer vision problem for enabling the deployment of automatic vision-based systems in orbit, with applications ranging from on-orbit servicing to space debris removal. Following the general trend in computer vision, more and more works have been focusing on leveraging Deep Learning (DL) methods to address this problem. However and despite promising research-stage results, major challenges preventing the use of such methods in real-life missions still stand in the way. In particular, the deployment of such computation-intensive algorithms is still under-investigated, while the performance drop when training on synthetic and testing on real images remains to mitigate. The primary goal of this survey is to describe the current DL-based methods for spacecraft pose estimation in a comprehensive manner. The secondary goal is to help define the limitations towards the effective deployment of DL-based spacecraft pose estimation solutions for reliable autonomous vision-based applications. To this end, the survey first summarises the existing algorithms according to two approaches:- hybrid modular pipelines and direct end-to-end regression methods. A comparison of algorithms is presented not only in terms of pose accuracy but also with a focus on network architectures and models' sizes keeping potential deployment in mind. Then, current monocular spacecraft pose estimation datasets used to train and test these methods are discussed. The data generation methods:- simulators and testbeds, the domain gap and the performance drop between synthetically generated and lab/space collected images and the potential solutions are also discussed. Finally, the paper presents open research questions and future directions in the field, drawing parallels with other computer vision applications.

# Summary. An optional shortened abstract.
summary: This survey describes the current Deep Learning (DL)-based methods for spacecraft pose estimation in a comprehensive manner. A comparison of algorithms is presented not only in terms of pose accuracy but also with a focus on network architectures and models' sizes keeping potential deployment in mind.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2305.07348'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: 'https://doi.org/10.1016/j.actaastro.2023.08.001'
url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
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

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
