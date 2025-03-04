---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "WCAG Success Criteria"
nav_title: "WCAG Success Criteria"
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome your comments via GitHub or email from the links below under [Help improve this page](#helpimprove). You are also welcome to join the [ARRM Community Group](https://www.w3.org/community/arrm/) to contribute.

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title
    
lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2025-03-06   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/table.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/wcag-sc/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

ref: /planning/arrm/wcag-sc/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

---

This page provides an approach for assigning which roles have primary (P), secondary (S), or contributor (C) responsibilities for meeting Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)) 2.1 success criteria. A later iteration will include the success criteria added in WCAG 2.2.

You can download the information from the table as a [CSV file](https://raw.githubusercontent.com/w3c/wai-arrm/refs/heads/master/_data/arrm-wcag-sc.csv).

<table>
  {% for row in site.data.arrm-wcag-sc %}
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
