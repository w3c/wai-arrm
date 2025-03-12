---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Accessibility Roles and Responsibilities Mapping (ARRM)"
nav_title: "Roles and Responsibilities (ARRM)"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2025-03-06    # Keep the date of the English version

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  path: content/index.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

permalink: /planning/arrm/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/    # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

ARRM helps you assign responsibilities for digital accessibility to appropriate roles early in projects.

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

Different aspects of accessibility are the responsibility of different roles, such as writers, designers, and developers. It is best to clearly define each role's responsibilities early in projects.

When accessibility is left until late in a project, the responsibility often falls on developers. Then they end up handling tasks that are not in their skillset — for example, selecting colors, describing images, and writing headings.

## What is ARRM

Accessibility Roles and Responsibilities Mapping (ARRM) helps your team meet Web Content Accessibility Guidelines ([WCAG](/standards-guidelines/wcag/)). ARRM provides guidance on which roles you can assign responsibilities for accessibility.

{::nomarkdown}
{% include_cached box.html type="start" title="Here is a simplified example" class="simple" %}
{:/}

Roles that contribute to meeting WCAG requirements for headings:
* Writers are responsible for writing the heading text and communicating the heading levels.
* Designers are responsible for defining how the headings look.
* Developers are responsible for coding or marking up the headings.

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

ARRM includes a table of WCAG requirements — called "success criteria" — and a table of tasks that address the WCAG success criteria. The tables include primary, secondary, and contributor responsibilities. They are explained more in the Decision Tree page, [Ownership levels section](/planning/arrm/decision-tree/#ownership-levels).
* Primary — accountable for an accessibility task
* Secondary — responsible to help complete an accessibility task
* Contributor — should be consulted to successfully complete an accessibility task

## Typical roles and responsibilities

ARRM provides one approach for defining roles, tasks, and responsibilities. You can use these as they are, without any work to customize them.

* **[Roles Involved in Accessibility](/planning/arrm/roles/)**
* **[WCAG Success Criteria](/planning/arrm/wcag-sc/)** shows role responsibilities
* **[Tasks Involved in Accessibility](/planning/arrm/tasks/)** shows tasks you can use to help meet WCAG and their role responsibilities — subsets of the tasks are listed for these roles:
  * [User Experience (UX) Designer Responsibilities](/planning/arrm/user-experience/)
  * [Visual Designer Responsibilities](/planning/arrm/visual-designer/)
  * [Content Author Responsibilities](/planning/arrm/content-author/)
  * [Front-End Developer Responsibilities](/planning/arrm/front-end/)

## Customizing ARRM for your situation

Optionally, you can create accessibility roles and responsibilities based on your project and organization.

* You can define different roles for your project team or use the typical [role definitions](/planning/arrm/roles/).
* You can assign responsibilities at the success criteria level or at the task level.
	* If at the task level, you can define different tasks or use the typical [tasks involved in accessibility](/planning/arrm/tasks/).
* For each success criteria or task, walk through the steps for deciding who is responsible using the **[ARRM Decision Tree](/planning/arrm/decision-tree/)**.

## Accessibility is about people

While ARRM focuses on meeting WCAG, it is important to first [understand the people aspects of accessibility](/people/) and to [include people with disabilities in your project](/planning/involving-users/).

## Draft review
{::nomarkdown}
{% include box.html type="start" title="We particularly welcome your input on these questions:" icon="comments"%}
{:/}

- Do you have input on the [Role descriptions](/planning/arrm/roles/)? We are particularly interested in feedback to better cover roles in a wide range of organizations throughout the world.
- Please review the tasks in the role(s) that you know best — [User Experience (UX) Designer](/planning/arrm/user-experience/), [Visual Designer](/planning/arrm/visual-designer/), [Content Author](/planning/arrm/content-author/), [Front-End Developer](/planning/arrm/front-end/). Can the wording of the tasks be improved to better align with how your colleagues refer to things?
- How would you like to use this resource?
  - Are you comfortable downloading the CSV files and using spreadsheet or other software to sort and filter it for your needs?
  - How might we make this resource more useful for you?

We welcome your input by email or GitHub from the links below [Help improve this page](#helpimprove)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}
