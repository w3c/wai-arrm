---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "WCAG Success Criteria ARRM - Accessibility Roles and Responsibilities Mapping"
nav_title: "WCAG SC ARRM"

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
# acknowledgements: /@@/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>.<!-- ACKNOWLEDGEMENTS lists additional contributors. --></p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>
   
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

To learn about WCAG, see the [WCAG Overview](standards-guidelines/wcag/). For background and context on this table, a description of the roles, and additional information, **see [ARRM: Accessibility Roles and Responsibilities Mapping main page](/planning/arrm/)**.


  <table style="text-align:center; width:100%" class="dense">
    <thead>
      <tr>
        <td>WCAG SC</td>
        <td>Level</td>
        <td>Business</td>
        <td>Content Authoring</td>
        <td>Visual Design</td>
        <td>UX Design</td>
        <td>Front-End Development</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1.1</td>
        <td>A</td>
        <td>C</td>
        <td>P, S, C</td>
        <td>P, S, C</td>
        <td>P, S, C</td>
        <td>P, C</td>
      </tr>
      <tr>
        <td>1.2.1</td>
        <td>A</td>
        <td></td>
        <td>P, S</td>
        <td>S</td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.2</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.3</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.4</td>
        <td>AA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.5</td>
        <td>AA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.6</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.7</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.8</td>
        <td>AAA</td>
        <td></td>
        <td>P, S</td>
        <td></td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.2.9</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.3.1</td>
        <td>A</td>
        <td></td>
        <td>P, S, C</td>
        <td>P, S, C</td>
        <td>P, S, C</td>
        <td>P, S</td>
      </tr>
      <tr>
        <td>1.3.2</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P, S</td>
        <td>P, S</td>
      </tr>
      <tr>
        <td>1.3.3</td>
        <td>A</td>
        <td>P</td>
        <td>P, S, C</td>
        <td>P, S</td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>1.3.4</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>1.3.5</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P, C</td>
        <td>P</td>
      </tr>
      <tr>
        <td>1.3.6</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>C</td>
        <td>P</td>
      </tr>
      <tr>
        <td>1.4.1</td>
        <td>A</td>
        <td></td>
        <td>S</td>
        <td>P, S</td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.4.2</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>1.4.3</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>1.4.4</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>C</td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>1.4.5</td>
        <td>AA</td>
        <td></td>
        <td>S, C</td>
        <td>P, S</td>
        <td></td>
        <td>P</td>
      </tr>
      <tr>
        <td>1.4.6</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>1.4.7</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>C</td>
        <td>P</td>
      </tr>
      <tr>
        <td>1.4.8</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>1.4.9</td>
        <td>AAA</td>
        <td></td>
        <td>S</td>
        <td>P</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>1.4.10</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>1.4.11</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>1.4.12</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
      </tr>
      <tr>
        <td>1.4.13</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>2.1.1</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>2.1.2</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
      </tr>
      <tr>
        <td>2.1.3</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>2.1.4</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.2.1</td>
        <td>A</td>
        <td>S</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.2.2</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.2.3</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.2.4</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.2.5</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.2.6</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.3.1</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.3.2</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.3.3</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>2.4.1</td>
        <td>A</td>
        <td></td>
        <td>P, S, C</td>
        <td></td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>2.4.2</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>2.4.3</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td>S, C</td>
        <td>P, S, C</td>
        <td>P</td>
      </tr>
      <tr>
        <td>2.4.4</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
        <td>P</td>
      </tr>
      <tr>
        <td>2.4.5</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.4.6</td>
        <td>AA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>P, S</td>
        <td>S</td>
      </tr>
      <tr>
        <td>2.4.7</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td>S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>2.4.8</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>2.4.9</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>2.4.10</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td>C</td>
      </tr>
      <tr>
        <td>2.5.1</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.5.2</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.5.3</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>2.5.4</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>2.5.5</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2.5.6</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>3.1.1</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
        <td>P</td>
      </tr>
      <tr>
        <td>3.1.2</td>
        <td>AA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td></td>
        <td>S</td>
      </tr>
      <tr>
        <td>3.1.3</td>
        <td>AAA</td>
        <td></td>
        <td>S, C</td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>3.1.4</td>
        <td>AAA</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
      </tr>
      <tr>
        <td>3.1.5</td>
        <td>AAA</td>
        <td></td>
        <td>P, S</td>
        <td>P, S</td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>3.1.6</td>
        <td>AAA</td>
        <td></td>
        <td>C</td>
        <td></td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>3.2.1</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>S</td>
      </tr>
      <tr>
        <td>3.2.2</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td>P, S</td>
      </tr>
      <tr>
        <td>3.2.3</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td>S</td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>3.2.4</td>
        <td>AA</td>
        <td></td>
        <td>P</td>
        <td>P</td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>3.2.5</td>
        <td>AAA</td>
        <td></td>
        <td>S</td>
        <td>S</td>
        <td>P</td>
        <td>P</td>
      </tr>
      <tr>
        <td>3.3.1</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td>P, S</td>
        <td></td>
      </tr>
      <tr>
        <td>3.3.2</td>
        <td>A</td>
        <td></td>
        <td>P</td>
        <td>P, S, C</td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>3.3.3</td>
        <td>AA</td>
        <td></td>
        <td>P, S, C</td>
        <td>S</td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>3.3.4</td>
        <td>AA</td>
        <td>S</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td>C</td>
      </tr>
      <tr>
        <td>3.3.5</td>
        <td>AAA</td>
        <td></td>
        <td>P</td>
        <td></td>
        <td>S</td>
        <td></td>
      </tr>
      <tr>
        <td>3.3.6</td>
        <td>AAA</td>
        <td>S</td>
        <td></td>
        <td></td>
        <td>P</td>
        <td></td>
      </tr>
      <tr>
        <td>4.1.1</td>
        <td>A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>P</td>
      </tr>
      <tr>
        <td>4.1.2</td>
        <td>A</td>
        <td></td>
        <td>C</td>
        <td></td>
        <td>P, S</td>
        <td>P</td>
      </tr>
      <tr>
        <td>4.1.3</td>
        <td>AA</td>
        <td></td>
        <td></td>
        <td></td>
        <td>P, S</td>
        <td>P</td>
      </tr>
    </tbody>
  </table>
