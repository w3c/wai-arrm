---
# NEW: Comments for new repos start with "NEW". Please delete the NEW comments. Leave the other comments for translators. Also, search for @@s to replace. For multi-page resources and other frontmatter info, see: https://wai-website-theme.netlify.app/writing/frontmatter/

# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Page Title"
title_html: "Main Title:<br>Other Part" # NEW: only needed if you need <br> or other in title. Otherwise, delete.
nav_title: "Short Title" # NEW: (I think not used yet, but in place for possible future use.)

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-@@-@@   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-resource-template
  path: content/index.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /link/to/page/   # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/
# @@SLH To Do: figure out if need to add lang here, too, and if this replaces "order" from older resources?

ref: /link/to/page/   # Translators, do not change this
changelog: /@@/changelog/
acknowledgements: /@@/acknowledgements/  # NEW: delete if don"t have a separate acknowledgements page. And delete it in the footer below.
license: creative-commons   # NEW: delete if not creative-commons

description:  # NEW: add a 150ish-character-description for social media   # translate the description
image: /content-images/wai-@@repo/social.png  # NEW: image for social media
feedbackmail: wai@w3.org  # NEW: delete this line if it’s an EOWG resource (the default is wai-eo-editors@w3.org)

# NEW: Footer below has several options, and not all will be relevant for specific pages. (Ask Shawn if questions.)

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. CHANGELOG.</p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>. ACKNOWLEDGEMENTS lists contributors and credits.</p>
   <p>Developed by the @@ Working Group (<a href="http://www.w3.org/WAI/@@/">@@WG</a>). Developed as part of the <a href="https://www.w3.org/WAI/@@/">WAI-@@ project</a>, @@co-funded by the European Commission.</p>

---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod architecto excepturi incidunt, odit modi quidem deserunt doloremque molestias saepe. Iste dolor non repellendus laudantium. Nihil velit mollitia voluptatem ullam libero.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Heading Level 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. **Assumenda aut, praesentium (bold)** commodi _nesciunt natus (italic)_ ipsum fugiat with **link markdown**:
* [[Exact Title of Page on WAI website - uses double brackets and permalink]](/permalink/to/page/)
* [link to WAI website that's not exact title of page - uses single brackets and permalink](/permalink/to/page/)
* [link to page off the WAI website - uses single brackets and full URI](https://example.com)

### Heading Level 3

1. This is 
2. a nice
3. ordered
4. list.

#### Heading Level 4


* And this is a
* bullet list

- You can use asterisks
- or dashes. Whatever floats
- your boat :-)

##### Heading Level 5

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. Assumenda aut, praesentium commodi nesciunt natus ipsum fugiat voluptates nisi ipsam voluptas recusandae, a. Sunt eos veritatis numquam

## Heading Level 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. Assumenda aut, praesentium commodi nesciunt natus ipsum fugiat voluptates nisi ipsam voluptas recusandae, a. Sunt eos veritatis numquam

### Heading Level 3

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. Assumenda aut, praesentium commodi nesciunt natus ipsum fugiat voluptates nisi ipsam voluptas recusandae, a. Sunt eos veritatis numquam
