---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "[draft title] Tasks Involved in Accessibility"
nav_title: "Tasks"
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome comments via GitHub or email from the [links below](#helpimprove).

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-@@-@@   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/tasks.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/tasks/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/tasls/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>. ACKNOWLEDGEMENTS lists additional contributors. </p>
   Developed with the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page provides an approach to addressing accessibility requirements in WCAG as tasks for specific roles.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::options toc_levels="2,3" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Introduction

@@ ... wording to make it clear that this is not a complete nor definitive list nor official list ... @@

<h2>Images and Graphs</h2>
<table style="vertical-align: top; text-align: left">
  <tr>
    <th>Number</th>
    <th>SC</th>
    <th>Level</th>
    <th>Task</th>
    <th>Primary</th>
    <th>Secondary</th>
    <th>Contributors</th>
  </tr>
  <tr>
    <td id="IMG-001">IMG-001</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Informative alternate text is provided for images (i.e. not "spacer" or image file name).</td>
    <td>Content Authoring</td>
    <td>UX Design</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-002">IMG-002</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Informative images are described with a clear and meaningful text equivalent (alt attribute or other equivalent means).</td>
    <td>Content Authoring</td>
    <td>Visual Design</td>
    <td>UX Design</td>
  </tr>
  <tr>
    <td id="IMG-003">IMG-003</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Purely decorative images are provided with null alt attribute values (or other equivalent means).</td>
    <td>Front-End Development</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-004">IMG-004</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Null alt attribute values are used for images that are already described in text in adjacent page content.</td>
    <td>Front-End Development</td>
    <td>UX Design</td>
    <td>Content Authoring<br /> Visual Design</td>
  </tr>
  <tr>
    <td id="IMG-005">IMG-005</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Adjacent linked images and text links pointing the same URL are combined into single links.</td>
    <td>Front-End Development</td>
    <td>UX Design</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-006">IMG-006</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Alt text used for images of text include all relevant text found in the image.</td>
    <td>Content Authoring</td>
    <td>UX Design<br /> Visual Design</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-007">IMG-007</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Informative images are marked up as foreground images, and not embedded as part of the CSS.</td>
    <td>Front-End Development</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-008">IMG-008</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>The purpose or function of complex images is accurately described in text.</td>
    <td>Content Authoring</td>
    <td>UX Design</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-009">IMG-009</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>The purpose or function of complex images is conveyed using a descriptive alt attribute value (or other equivalent means).</td>
    <td>Front-End Development</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-010">IMG-010</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>The full explanation of complex images is accurately described in text.</td>
    <td>Content Authoring</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-011">IMG-011</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>A mechanism that conveys the way through which the full explanation of complex images is defined.</td>
    <td>UX Design</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-012">IMG-012</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>The full explanation of complex images is provided through the longdesc attribute (or other equivalent means).</td>
    <td>Front-End Development</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-013">IMG-013</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Images primarily conveying function use alternative text to describe their purpose, rather than what they look like.</td>
    <td>Content Authoring</td>
    <td>UX Design</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-014">IMG-014</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Text alternatives of static and linked images do not replicate any information that is already being conveyed by screen reader technology.</td>
    <td>Content Authoring</td>
    <td>Front End Development</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-015">IMG-015</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Text alternatives of dynamically updated images are simultaneously updated as the images change.</td>
    <td>Front-End Development</td>
    <td>UX Design</td>
    <td>Content Authoring</td>
  </tr>
  <tr>
    <td id="IMG-016">IMG-016</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Alternate means of accessing CAPTCHA information are provided, such as audio CAPTCHA, logical question, or other equivalent means.</td>
    <td>Visual Design</td>
    <td>UX Design</td>
    <td>Business Analyst</td>
  </tr>
  <tr>
    <td id="IMG-017">IMG-017</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Images which do not convey information are defined as decorative.</td>
    <td>Content Authoring</td>
    <td>Visual Design<br /> UX Design</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-018">IMG-018</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1</a></td>
    <td>A</td>
    <td>Charts, graphs, infographics and other visual representations of information don't rely on color alone to convey information.</td>
    <td>Visual Design</td>
    <td>UX Designer</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td id="IMG-019">IMG-019</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#images-of-text">1.4.5</a></td>
    <td>AA</td>
    <td>Text content that conveys information is not part of images.</td>
    <td>Visual Design</td>
    <td>Content Authoring</td>
    <td>Front End Development</td>
  </tr>
  <tr>
    <td id="IMG-020">IMG-020</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#images-of-text">1.4.5</a></td>
    <td>AA</td>
    <td>Text that is visually made to be part of an image is handled through HTML and CSS instead.</td>
    <td>Front-End Development</td>
    <td>Visual Design</td>
    <td>Content Authoring</td>
  </tr>
  <tr>
    <td id="IMG-021">IMG-021</td>
    <td><a href="https://www.w3.org/TR/WCAG22/#images-of-text-no-exception">1.4.9</a></td>
    <td>AAA</td>
    <td>With the exception of logos, all images that contain text are only used for purely decorative purposes.</td>
    <td>Visual Design</td>
    <td>Content Authoring</td>
    <td>&nbsp;</td>
  </tr>
</table>

<h2>Document Structure</h2>
...
