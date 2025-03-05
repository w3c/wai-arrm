---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Front-End Developer Responsibilities"
nav_title: "Front-End Developer"
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome your comments via GitHub or email from the links below under [Help improve this page](#helpimprove). You are also welcome to join the [ARRM Community Group](https://www.w3.org/community/arrm/) to contribute.

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2022-02-24   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/front-end.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/front-end/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

ref: /planning/arrm/user-experience/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Editors and contributors: See ACKNOWLEDGEMENTS.</strong></p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

---


{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

This page lists some digital accessibility tasks that are usually the responsibility of developers.

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

Front end development typically builds the parts of a product that will be interacted with by the user - specifically, the user interface. For the purpose of this resource, front end development refers to the implementation or codification of the design in functional templates for a product using technologies such as HTML, CSS and JavaScript.

**Key Deliverables**

*   HTML and CSS files
*   Client-side scripting
*   JavaScript libraries and frameworks
*   Etc.

**Tasks include**

*   Pattern libraries and prototypes
*   Template functionalities
*   Semantically-rich HTML document structures and widgets
*   Use and adapt frameworks and content management systems
*   Etc.

**Example job titles for this role**

Front End Developer, Web Developer, Full-Stack Developer, UI/UX Developer, JavaScript Developer, UI/UX Engineer.

## Tasks to get started

Below is a list of tasks for front-end developers to get started making your work more accessible to disabled people. If these tasks aren't met, your code can create barriers to users with disabilities.

You can also get the full list of [Tasks Involved in Accessibility as a web page](/planning/arrm/tasks/) with other roles, or download the [CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}).

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <!-- <th>Main Role</th><th>Primary Ownership</th><th>Secondary Ownership</th><th>Contributor</th> -->
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign starter = row["Starter List"] %}
      {% assign primary = row["Primary Ownership"] %}
      {% if starter and starter != "" and primary == "Front-End Development" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <!-- <td>{{ row["Main Role"] }}</td><td>{{ row["Primary Ownership"] }}</td><td>{{ row["Secondary Ownership"] }}</td><td>{{ row["Contributor"] }}</td> -->
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

## Case study: How to use the tasks

A good way to get familiar with the tasks is to do a short case study. Think about how you might tackle the task in your role.

Then, think of how meeting this task impacts an end user.

### Task:

INP-004: All actionable elements can be reached, using only the keyboard.

### Primary Role: Front-end Developer

As a front-end developer, I will code all functionality of the content, on a web page and/or within individual components and elements, to ensure it is operable through a keyboard interface only. This also allows switch control systems to operate.

### Secondary Role: UX Designer

As the UX designer in support of the Front-end Developer, I will ensure to annotate my designs, wireframes and prototypes to clearly define the functionality of components on the page and the expected reading order to allow a keyboard user access to the page content.

### End User persona 1: Marta, a marketing assistant who is deaf and blind

Marta is a marketing assistant who is deaf and recently became legally blind too, which means she can see only small portions of a screen and read text when it is significantly enlarged. She uses screen magnification software to enlarge the text on websites to a suitable font size, displays text on a refreshable Braille device and a large computer screen with high resolution and high luminosity (brightness).

The viewport, or area that Kaseem sees when the screen is magnified, is very small. So the focus must be in or very close to that 'viewport' at all times. Shifting it unexpectedly to a completely different areas of the screen makes it very difficult to find and then move to that area, especially if she has no idea where the focus has landed. The focus could move to another area on the page, or to a completely new page.

### End user persona 2: Lakshmi, senior accountant who is blind

Lakshmi is blind. She is a semopr accountant at an insurance company that uses web-based documents and forms over a corporate intranet and like many other blind computer users, she does not read Braille.

Lakshmi relies on the screen reader assistive technology to let her know where she is on the web page. Moving the focus unexpectedly breaks the context of the page and her mental map or perception of the page.

[Read the full user stories](/people-use-web/user-stories/)

## Additional resources

*   Use the [WAI Tips for Developing](/tips/developing/) to get started.
*   See the [WAI Tutorials](/tutorials/) for menus, tables, forms and more.
*   Review the [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) for keyboard functionality for ARIA components.

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
