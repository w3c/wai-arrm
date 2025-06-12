---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Visual Designer Responsibilities"
nav_title: "Visual Designer"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2025-03-06   # Keep the date of the English version

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  path: content/visual-designer.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

permalink: /planning/arrm/visual-designer/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/visual-designer/    # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</strong></p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>
---


{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

This page lists some digital accessibility tasks that are usually the responsibility of visual designers.

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

## Role summary

Visual Design focuses largely on the look and feel of an application, as an end user would experience it, visually or otherwise. This includes specifying original design of interface elements and layout, choosing fonts and colors, and more. While UX design is focused on how something works, visual design is focused on how it looks and feels.

**Key Deliverables include**

*   Style guides
*   Page comps
*   Design mockups
*   Image files
*   Etc.

**Tasks include**

*   Visual styling
*   Logos and branding
*   Animation and iconography design
*   Etc.

**Example job titles for this role**

Visual Designer, Web Designer, User Interface (UI) Designer, Graphic Designer.

## Tasks to get started

Below is a list of tasks for visual designers to get started making your work more accessible to disabled people. If these design tasks aren't met, your design can create barriers to users with disabilities.

You can also get the full list of [Tasks Involved in Accessibility as a web page](/planning/arrm/tasks/) with other roles, or download the [CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}).

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th style="white-space:nowrap;">WCAG SC</th>
      <th>Task</th>
      <!-- <th>Main Role</th><th>Primary Ownership</th><th>Secondary Ownership</th><th>Contributor</th> -->
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign starter = row["Starter List"] %}
      {% assign primary = row["Primary Ownership"] %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if starter and starter != "" and primary == "Visual Design" %}
        <tr>
          <td> style="white-space:nowrap;{{ row["ID"] }}</td>
          <td style="white-space:nowrap;>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <!-- <td>{{ row["Main Role"] }}</td><td>{{ row["Primary Ownership"] }}</td><td>{{ row["Secondary Ownership"] }}</td><td>{{ row["Contributor"] }}</td> -->
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Case study: How to use the tasks {#how-to-use-the-tasks}
A good way to get familiar with the tasks is to do a short case study.  Think about how you might tackle the task in your role. 

Then, think of how meeting this task impacts an end user. 

### Task:

IMG-018: Charts, graphs, infographics and other visual representations of information don't rely on color alone to convey information.

### Primary Role: Visual Designer

"As the primary owner of this task, I will ensure I don't use color alone when I'm creating a highly visual graphical representation of data (numbers, relationships between items, etc.) - for example a pie chart, line graph, bar graph or any other infographic that relies heavily on symbols or color. 

I will work with the content author or stakeholder to ensure there's an alternative way of perceiving the data and relationships between the data sets. This could be a matrix/ table, or bullet list, or simple text format. 

The secondary owner here is the UX designer, who will assist me in ensuring there is space for both the visual representation (also known as "complex images") on the page along with the text alternative, which should be adjacent to the visual design so it's accessed easily.

At the same time, the visual representation is ideally not navigable by keyboard and screen reader, as it is likely not linear.  A good practice is to make the visual - a pie chart, bar graph, line graph, etc. an image and add a short description to it to summarize it.  Example: "Graph showing the most downloaded songs between January and December 2022". 

Then the text alternative for the data will provide full details."


### Secondary Role: UX Designer
The secondary owner of the task is the UX Designer. They design the page layout, functionality and interactions with the content on the web page or screen. 

The UX designer should support the Visual Designer when they create both the visual representation of data and the text alternative.   They ensure that all users can access both through navigation.

### End user persona: Lexie, an online shopper who is colorblind
Lexie is colorblind and encounters barriers when shopping online. He has one of the most common visual disabilities that affect men: red and green color blindness. Lexie frequently shops online and sometimes encounters problems on websites and with apps where the color contrast of text and images is not adequate and where color alone is used to indicate required fields and sale prices. 

When red and green color combinations are used, Lexie cannot distinguish between the two, since both look brown to him. It is also very difficult for him to make product choices when color swatches are not labeled with the name of the color.

[Read Lexie's full story](/people-use-web/user-stories/story-four/) and learn about other design tasks that benefit users like him.

## Additional resources
* Use the [Tips for Designing](/tips/designing/) to get started.
* Use the [Resources for Designers](/roles/designers/).

## Draft review questions

{::nomarkdown}
{% include box.html type="start" title="How do you want to use this page?" icon="comments"%}
{:/}

For the later iterations of this page, we could:
- Provide the 'Tasks to get started' as separate tables by content type — images and graphs, semantic structure, ... like the full [Tasks page](/planning/arrm/tasks/)
- Provide all the tasks, in addition to the tasks to get started
- Provide filters to select what to show

Would that be particulalry useful to you? Or, are you comfortable downloading the [CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}) and using your spreadsheet software to see what you want?

We welcome your input by email or GitHub from the links below [Help improve this page](#helpimprove)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}
