---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "ARRM: Accessibility Roles and Responsibilities Model"
nav_title: "Roles and Responsibilities (ARRM)"
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome comments via GitHub or email from the [links below](#helpimprove). You are also welcome to join the [ARRM Community Group](https://www.w3.org/community/arrm/) to contribute.

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

ref: /planning/arrm/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Date:</strong> Draft updated 6 March 2025.</p>
   <p><strong>Editors and contributors: See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

Accessibility Roles and Responsibilities Model (ARRM) helps define which roles have responsibilities for meeting which aspects of Web Content Accessibility Guidelines (WCAG).

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

Different aspects of accessibility are the responsibility of different project roles, such as writers, designers, and developers. It is best to clearly define and communicate the responsibilities for accessibility early in projects.

When accessibility is left until late in a project, the responsibility often falls on developers and they are tasked with addressing aspects that are not their skillset. For example, selecting colors, describing images, and writing headings.

ARRM helps the right roles address their appropriate responsibilities.

## What is ARRM

Accessibility Roles and Responsibilities Model (ARRM) helps define which roles have responsibilities for meeting which aspects of [Web Content Accessibility Guidelines (WCAG)[(https://www.w3.org/WAI/standards-guidelines/wcag/) requirements, called "success criteria".

{::nomarkdown}
{% include_cached box.html type="start" title="Here is a simplified example." class="simple" %}
{:/}

Roles that contribute to meeting WCAG requirements on headings:
* Writers are responsible for the writing the heading text.
* Designers are responsible for defining how the headings look.
* Developers are responsible for coding or marking up the headings.

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

ARRM assigns primary, secondary, and contributor level responsibilities for tasks.

ARRM provides examples of typical responsibilities that each role has in helping to meet WCAG success criteria. It is a tool for project managers to assign different responsibilities across roles within their team.

## Typical Roles and Mapping

ARRM provides one approach for defining roles and responsibilities.

You can use these as they are, without doing any more work to customize them.

* **[Roles Involved in Accessibility](roles)**
* **[WCAG Success Criteria ARRM](wcag-sc)** is a table of WCAG success criteria (SC) with which roles have responsbilities for each SC
* **[ARRM Accessibility Task List](tasks)** has one option for tasks to meet WCAG with which roles have responsbilities for each task
* These role pages list the tasks:
  * [User Experience (UX) Designer Responsibilities](user-experience)
  * [Visual Designer Responsibilities](visual-designer)
  * [Content Author Responsibilities](content-author)
  * [Front-End Developer Responsibilities](front-end)

## Customizing ARRM for Your Situation

ARRM also guides organizations that want to customize their own accessibility roles and Responsibilities Model, based on considerations in their organizations. To facilitate this, ARRM includes:

* **[Deciding who is responsible](https://deploy-preview-9--wai-arrm.netlify.app/planning/arrm/decision-tree/)** that provides steps for deciding which roles have which level responsibilities.

First, decide if you want to use the example [role definitions](roles), or use different roles for your project team.

Next, for each success criteria or accessibility task, walk through the steps in 'Deciding who is responsible' to assign responsibilities.
