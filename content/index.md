---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "ARRM: Accessibility Roles and Responsibilities Mapping"
nav_title: "Roles and Responsibilities (ARRM)"

doc-note-type: draft

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
  path: content/index.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/    # Translators, do not change this
# changelog: /@@/changelog/
# acknowledgements: /@@/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>.<!-- ACKNOWLEDGEMENTS lists additional contributors. --></p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

ARRM defines which roles have which responsibilities for meeting accessibility requirements.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::options toc_levels="2" /}

{::nomarkdown}
{% include_cached toc.html type="start" title="Page Contents" class="full" %}
{:/}

-   TOC is created automatically.
{:toc}

{::nomarkdown}
{% include_cached toc.html type="end" %}
{:/}


## Background

When responsibilities for accessibility are not clearly defined and communicated, they are often left until too late in the lifecycle. For example, developers are sometimes left to address issues like color selection, image description, and heading identification that are not really in their purview. Such responsibilities more appropriately fall to other roles earlier in the process, such as user experience (UX) designers, visual designers, and content authors.

ARRM helps the right roles address their appropriate responsibilities.

## What is ARRM

Accessibility Roles and Responsibilities Mapping (ARRM) helps define which roles (designer, developer, writer, etc.) have which responsibilities for meeting which aspects of the Web Content Accessibility Guidelines (WCAG) requirements.

{::nomarkdown}
{% include_cached box.html type="start" title="Here is a simplified example." class="simple" %}
{:/}

For meeting the WCAG requirement on headings:
* Writers are responsible for the writing the heading text.
* Designers are responsible for defining how the headings look.
* Developers are responsible for coding or marking up the headings.

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

ARRM assigns primary, secondary, and contributor level responsibilities for tasks.

ARRM currently provides an example of typical roles and responsibilities for WCAG success criteria. It is also a tool for project managers to assign different responsibilities across roles within their team.

## Typical Roles and Mapping

ARRM provides one approach for defining roles and responsibilities.

You can use these as they are, without doing any more work to customize them.

* **[Roles Involved in Accessibility](roles)**
* **[WCAG Success Criteria ARRM](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/matrix/)** table of all success criteria<br>which is also available as separate lists:
  * [User Experience (UX) Designer Responsibilities &mdash; List of Success Criteria](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/user-experience/)
  * [Visual Designer Responsibilities &mdash; List of Success Criteria](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/visual-designer/)
  * [Content Author Responsibilities &mdash; List of Success Criteria](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/content-author/)
  * [Front-End Developer Responsibilities &mdash; List of Success Criteria](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/front-end/)

## Customizing ARRM for Your Situation

ARRM also guides organizations that want to customize their own accessibility roles and responsibilities mapping, based on considerations in their organizations. The key tool for this is the:

* **[ARRM Decision Tree](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/decision-tree/)** provides steps for deciding which roles have which level responsibilities.

First, decide if you want to use the example [role definitions](roles), or use different roles for your project team.

Next, for each success criteria (or your organization’s accessibility checkpoints), walk through the ARRM Decision Tree to assign responsibilities.

<!-- @@not likely any time soon, so suggest we delete this section

## Future Work

Future work on ARRM includes breaking down success criteria into multiple sub-points, and assigning those sub-points to roles. We may also provide a tool for organizations that want to development their own ARRM.

-->
