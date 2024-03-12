---
title: '3D-Aware Object Localization using Gaussian Implicit Occupancy Function'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Vincent Gaudillière
- Leo Pauly
- admin
- Albert Garcia Sanchez
- Mohamed Adel Musallam
- Djamila Aouada

# Author notes (optional)
author_notes:
  - ''
  - ''
  - ''
  - ''
  - ''
  - ''

date: '2023-06-12T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *IEEE/RSJ International Conference on Intelligent Robots and Systems (2023)*
publication_short: In *IROS(2023)*

abstract: To automatically localize a target object in an image is crucial for many computer vision applications. To represent the 2D object, ellipse labels have recently been identified as a promising alternative to axis-aligned bounding boxes. This paper further considers 3D-aware ellipse labels, i.e., ellipses which are projections of a 3D ellipsoidal approximation of the object, for 2D target localization. Indeed, projected ellipses carry more geometric information about the object geometry and pose (3D awareness) than traditional 3D-agnostic bounding box labels. Moreover, such a generic 3D ellipsoidal model allows for approximating known to coarsely known targets. We then propose to have a new look at ellipse regression and replace the discontinuous geometric ellipse parameters with the parameters of an implicit Gaussian distribution encoding object occupancy in the image. The models are trained to regress the values of this bivariate Gaussian distribution over the image pixels using a statistical loss function. We introduce a novel non-trainable differentiable layer, E-DSNT, to extract the distribution parameters. Also, we describe how to readily generate consistent 3D-aware Gaussian occupancy parameters using only coarse dimensions of the target and relative pose labels. We extend three existing spacecraft pose estimation datasets with 3D-aware Gaussian occupancy labels to validate our hypothesis. Labels and source code are publicly accessible here:-[https://cvi2.uni.lu/3d-aware-obj-loc/](https://cvi2.uni.lu/3d-aware-obj-loc/).

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
  caption: ' '
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
