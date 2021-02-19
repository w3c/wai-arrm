---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "[Draft] Accessibility Roles and Responsibilities Mapping (ARRM) Overview"
nav_title: "Roles and Responsibilities (ARRM)" 

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
   <p><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>.<!-- ACKNOWLEDGEMENTS lists additional contributors. --></p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---

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

* **[Role Definitions](https://www@@)**
* **[Accessibility Roles and Responsibilities Mapping &mdash; Table of Success Criteria](https://www@@)**<br>which is also available as separate lists:
  * [UX Designer Responsibilities &mdash; List of Success Criteria](https://www@@)
  * [Visual Designer Responsibilities &mdash; List of Success Criteria](https://www@@)
  * [Content Author Responsibilities &mdash; List of Success Criteria](https://www@@)
  * [Front-End Developer Responsibilities &mdash; List of Success Criteria](https://www@@)

## Customizing ARRM for Your Situation

ARRM also guides organizations that want to customize their own accessibility roles and responsibilities mapping, based on the roles and considerations in their organizations.
* **[Customizing ARRM for Your Situation](https://www@@)** explains how to use the Role Definitions and the Decision Tree to create your customized Accessibility Responsibilities Mapping.
* **[ARRM Decision Tree](https://www@@)** provides the steps for deciding which roles have which level responsibilities for success criteria or your organization’s accessibility checkpoints.

## Future Work
Future work on ARRM includes breaking down success criteria into multiple sub-points, and assigning those sub-points to roles.
