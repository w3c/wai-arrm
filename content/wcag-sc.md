---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "WCAG Success Criteria - Accessibility Roles and Responsibilities Mapping (ARRM)"
title_html: "WCAG Success Criteria<br>Accessibility Roles and Responsibilities Mapping (ARRM)"
nav_title: "Responsibilities Matrix"
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
  path: content/wcag-sc.md    # Add the language shortcode to the middle of the filename, for example: content/wcag-sc.fr.md
permalink: /planning/arrm/wcag-sc/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/wcag-sc/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/wcag-sc/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong></p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>. ACKNOWLEDGEMENTS lists additional contributors.</p>
   <p>Developed with the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>
   
inline_css: | 
  .sidenav { 
    display: none; 
  } 
  #main { 
    grid-column: navigation-start / content-end; 
  }
  #main > *:not(table, header) {
    /* max-width: 50em; */
  }
---

This page shows what roles have primary (P), secondary (S), or contributor (C) responsibilities for Web Content Accessibility Guidelines (WCAG) 2 success criteria (SC).

To learn about WCAG, see the [WCAG Overview](standards-guidelines/wcag/).

For background and context on this table, description of the roles, and additional information for each role, **see [ARRM: Accessibility Roles and Responsibilities Mapping main page](/planning/arrm/)**.

<table>
  {% for row in site.data.arrm-matrix %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>
