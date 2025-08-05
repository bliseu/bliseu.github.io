---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!-- Notion-style Banner Start -->
<div style="width:100%;height:180px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:24px;">
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Banner" style="width:100%;height:100%;object-fit:cover;object-position:center;">
</div>
<!-- Notion-style Banner End -->

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

My research centers on first-principles computational investigations of exotic quantum materials, where I explore the frontiers of hydrogen-based superconductors, non-centrosymmetric superconductors, and topological insulators and semimetals. I am also the author of crystal structure prediction code CRYSTREE, you can download CRYSTREE after registration from this link: [**Download**](https://bliseu.github.io/#-download).

Web of Science ResearcherID: [**E-4702-2016**](https://webofscience.clarivate.cn/wos/author/record/E-4702-2016)

ORCID: [**0000-0002-6392-4185**](https://orcid.org/0000-0002-6392-4185) 

Researchgate: [**Bin-Li-35**](https://www.researchgate.net/profile/Bin-Li-35)

<!--<script src="//taplink.cc/id:13359423/widget/" async></script> -->

<!--
<script async src="https://tally.so/widgets/embed.js"></script>

<script>
window.TallyConfig = {
  "formId": "w4bJ6A",
  "popup": {
    "emoji": {
      "text": "👋",
      "animation": "wave"
    },
    "open": {
      "trigger": "scroll",
      "scrollPercent": 50
    }
  }
};
</script>
-->

{% include_relative news.md %}

{% include_relative miscs.md %}

{% include_relative publications.md %}

{% include_relative download.md %}




<!--Google Scholar: <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=Citations ">  -->

<!--Google Scholar: 2004 -->


  
<a href="https://info.flagcounter.com/6xs4"><img src="https://s01.flagcounter.com/map/6xs4/size_s/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/" alt="Flag Counter" border="0"></a>
