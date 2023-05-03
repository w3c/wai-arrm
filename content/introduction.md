---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "ARRM framework introduction"
nav_title: "ARRM framework introduction" 

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-05-03   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/introduction.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/introduction  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

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

Description of the ARRM framework which defines which roles have which responsibilities for meeting accessibility requirements.

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

## ARRM framework introduction

Questions around who owns accessibility and who should remove accessibility barriers when they arise too often fall to the front-end developer. As a result, developers are left to address issues like color selection, image description, and heading identification that are not really in their purview.

Such responsibilities may more appropriately fall to other roles within your team, namely those who made the decision to include these elements, such as UX designers, visual designers and content authors.

Accessibility issues are unfamiliar to most cross-functional teams which is why they so often persist in delivered products. Understanding what can and what should not be addressed directly by developers - and what likely requires input from other roles - can be very challenging. This is especially true when those in the role do not realize their decisions are the root cause. Understanding that the responsibility of accessibility is distributed across many roles and when each directly impacts it can reduce the time required to resolve the issue and maintain all expected standards. ARRM is a method designed to review accessibility checkpoints and identify who should be involved. Specifically, ARRM assigns primary, secondary, and contributory accessibility responsibility to appropriate members of the team.

## Accessibility Roles and Responsibilities Mapping (ARRM)

ARRM is a framework designed to help teams identify the roles involved in addressing accessibility issues through a “decision tree”.

### How to Use ARRM

Web accessibility is all about planning. The most successful teams and organizations understand that in order to win the game, accessibility considerations need to be addressed as early as possible in the process. This oftentimes starts as early as the design phase, if not earlier. After all, it is now a well-established fact that teams and organizations which explicitly fail to plan for Web accessibility are typically the ones who implicitly plan to fail at creating accessible content.

While familiarity the Web Content Accessibility Guidelines is useful, a team does not need to have in-depth expertise about them nor deep technical knowledge of how people with disabilities use the Web to benefit from this planning guide. ARRM is a three-pronged tool. Begin with the Decision Tree for a way to identify the most appropriate distribution of accessibility responsibility across the team.

### Role-Based Decision Tree

The Decision Tree is a [framework to define accessibility ownership](/planning/arrm/decision-tree/ "Role-Based Decision Tree") in a cross-functional product team (primary, secondary, contributor levels). It will walk users through a process to distribute the many responsibilities of Web accessibility across your entire team. Whether your team is counting dozens of people or just a handful, identifying key stakeholders by roles will soon allow you to start allocating specific responsibilities in a way that leverages the natural skills and expertise of each individual. After all, while it makes sense for a QA Tester to ensure that color contrast ratios are being met, doesn't it make more sense that such a responsibility be attributed to a Visual Designer instead?

### Role Definition

Of course, job titles are not universal and may not even be very descriptive. What they actually mean in terms of responsibilities also varies greatly from one organization or team to the next. To support the effectiveness of the Decision Tree, ARRM provides a [Role definition document](/planning/arrm/roles/ "Role definition document") to help provide context and better frame what is meant by reference to the various members of the cross-functional team identified with various roles in the process.

### The Matrix

Once the decision has been made about which role on your team has responsibility for certain aspects of product development, product managers can use the Matrix to map the responsibilities related to specific WCAG Success Criteria to the appropriate team member or members based on primary, secondary, or contributor levels of responsibility. The Matrix contains that mapping and can be sorted for a clear checklist of responsibilities for each role.

