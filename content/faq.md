---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Frequently Asked Questions (FAQ)"
nav_title: "Frequently Asked Questions (FAQ)" 

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
  path: content/faq.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/faq  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

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

## Frequently Asked Questions

### Selecting No Additional Ownership Levels

Ownership assignment does not mean that all roles are involved on every checkpoint. Unlike primary owners, secondary owners and contributors can oftentimes be optional. It is common for there to be no secondary owners or contributors, especially in situations where the task is very specific. These are cases where the primary owner is the sole active role (such as choice of words for Content Authors, or color selection for Visual Designers). There are also situations where there could be one or multiple secondary owners, but no contributors. There are cases where the opposite may be true (no secondary but one or more contributors), though this is potentially rarer. Role ownership should only be added when their input is typically needed to effectively make final decisions on typical issues.

## Additional Guidance Assigning Front-End Developer Role

Of all the roles in this process Front-End Developer can be the most difficult to assign properly. Here are is some additional guidance to correctly assign ownership to avoid the common mistake of overstating or overestimating the ownership of developers.

### Development ≠ Ownership

Since the final deliverable is always dependent on its implementation it may seem appropriate to include the role as an owner on all checkpoints. This does not accurately reflect development with regard to decisions that impact accessibility in ARRM. For this process, it's critical to differentiate between design decisions and details provided (or delivered) to developers from those where they actively participate in making or deciding.

### No Input = No Ownership

If developers are given requirements to which they had little or no input they cannot be held accountable for results when implemented "as designed." In many cases if they did not implement the requirements as written it might be reported as a bug even it if improved accessibility.

### Scale & Scope of Contribution Matters

If developers are actively involved in design decisions that define the final requirements they are more likely to be an owner. But even in these cases the level of ownership is directly related to how their input impacts accessibility. Developer ownership level increases with directly with how their input impacts accessibility and where it applies.

Developers are typically involved actively in the functional and operational parts of a feature that impact page implementation. In these cases their ownership level rises with the amount and importance of their input to the final requirements and how they impact accessibility. These decisions include selecting infrastructure or approaches used. Accessibility topics in the Robust principle are one area where developers will have significant, often primary ownership.

Even when developers are involved there are portions where their input (and ownership) may be limited (Contributor at best or none) such as with UX or presentation. A developer cannot be held accountable for implementing colors that have inadequate contrast if they were specifically defined by designers. They should not take ownership for using instructions based upon sensory characteristics provided by a content author if they only coded the means to display the text.

### Fixing Bugs is Not Necessarily Ownership

Another misunderstanding is to consider implementation errors (bugs) as indicating ownership. If the requirements and documentation correctly incorporate accessibility but are not correctly implemented they are really "just bugs" or incorrect implementations. The developer needs to correct the implementation as they would any other bug. Correcting bugs does not equal ownership. A simple example would be color contrast errors where the correct color codes were provided in a style guide but not correctly entered into CSS classes.

### Coding Decisions = Ownership

Developers will be owners, often primary owners, when the issue is specifically about implementation or coding. If requirements leave the final implementation to the developer's discretion and it's is not accessible then it's likely owned by that role. A simple example would be where images are marked as decorative in the requirements but the developer implements them so they are announced (such as <img> without alt=""). Another is leaving out region definitions of page in HTML5 or ARIA, or heading tags that were included in the definition of the page structure.
