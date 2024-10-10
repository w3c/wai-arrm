---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Roles Involved in Accessibility"
nav_title: "Roles" 

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
  path: content/roles.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/roles/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/roles/    # Translators, do not change this
# changelog: /@@/changelog/
# acknowledgements: /@@/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>.<!-- ACKNOWLEDGEMENTS lists additional contributors. --></p>
   Developed with the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page defines typical roles that have responsibilities for ensuring accessibility. 

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::options toc_levels="2,3" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Introduction

This page defines typical roles that have responsibilities for ensuring accessibility. These role descriptions are generalized on purpose. An individual may fulfill more than one role.

Each role description includes areas of focus in decision making, decision ownership, notes on the primary tasks of that role, a shortlist of common job titles, and a general description of the accessibility responsibilities of that role.

You are welcome to use this information as is, or change it for your situation.

## 1\. Business Role Group

Writes business requirements and/or initial user stories, are concerned with ensuring that the project delivers the agreed-upon business benefits.

### Business Analysis

Business analysts are involved in the design or modification of business systems or IT systems. They interact with business stakeholders and subject matter experts in order to understand their problems and needs. They gather, document and analyze business needs and requirements to help steer the team towards an end result that meets the organization's needs and expectations.

<dl>
<dt>Example job titles for this role:</dt>
<dd>Business Analyst, Client Sponsor</dd>
</dl>

## 2\. Author Role Group

This role includes content strategy and content authoring, including audio/video production.

Responsible for creating all text presented by the deliverable in all forms (HTML, audio, video). Defines or selects the standards the content should meet and processes for its review and preparation.

### Content Authoring

Content Creation is often used in marketing, but can also be a task assigned to a role within a product team. Content creation involves defining a content strategy, the writing or creation of the content or media for a product. The person who authors the content is responsible for making sure that content is accessible to people with disabilities.

Content Creation extends to roles specific audio and video media production. These begin with the writing of scripts but can extend to the production of the media files or support of live streaming content.

<dl>
<dt>Key deliverable examples:</dt>
<dd>Body copy, managed content, scripts, taxonomies, writing guidelines, media files, including PDF, audio and video</dd>
<dt>Tasks include:</dt>
<dd>Content authoring, media and documentation creation, content strategies definition</dd><dt>Example job titles for this role:</dt>
<dd>Content Strategist, Content Creator, Content Designer, Content Author, Digital Copywriter, UX Writer, Content Producer, Technical Writer, Script Writer, Video Producer, Podcast Host</dd></dl>

### Content Publishing

Description (not a definition, needs a more polished “Definition” statement): Team members who are not front-end web developers that are tasked with preparing content for publishing to websites, products, applications, etc. These team members do not author content, instead they work with the content within specific business enterprise systems or software tools and apply edits to material generated by content authors.

Content Publishers may perform some tasks that are a part of the front end web developer skillset, however they are not web developers and are often applying this markup using proprietary tools and widget.

<dl>
<dt>Key deliverable examples:</dt>
<dd>Content editing and formatting, metadata and SEO optimization, content publishing schedule, cross-platform compatibility, and quality assurance and testing</dd>
<dt>Tasks include:</dt>
<dd>Advanced tagging in a PDF document, adjusting timing of captions, creating and editing transcripts, conversion to ePUB documentation, applying tags though a proprietary software to generate heading structure, SSML</dd>
<dt>Example job titles for this role:</dt>
<dd>Content Strategist, Content Producer, Content Publisher, Publishing Technology Specialist, Content Designer, Video Editor, Accessible Materials Specialist, Information Developer, Content Developer, Publishing Implementation Manager</dd>
</dl>

## 3\. Design Role Group

This group includes user research, user experience (UX), and presentation decisions.

Some roles within this group define the user experience of a product, designing its behaviours and interactions with the end user and/or their assistive technologies. Some roles provide the general "look and feel" of the products and features, covering presentation, fonts and colors. Others outline the functionality of features, and their operation through assistive technologies (ATs). They translate input from business roles into user stories, requirements, specifications, documentation, and guidelines used by other roles (mainly Development) to build the finished product.

This includes applying user research that has been conducted and an understanding of the intended audiences for a quality experience.

### User Experience Researcher

UX Researchers conduct both exploratory and generative research with end users (e.g. user interviews, ethnographic research, etc.) to gather their feedback. The responsibility of this role is to continuously feed user feedback to those creating products. They test existing concepts and summarize user insights to inform the assets that will be built by the roles in UX Design, Visual Design, Front-end Development and Content Authoring.

<dl>
<dt>Key deliverable examples:</dt>
<dd>Findings from moderated and unmoderated versions of user research studies, usability testing and user interviews (i.e. a moderator or facilitator was present during the test, or the end user was alone)</dd>
<dt>Tasks include:</dt>
<dd>Conducting user research with a partial prototype, concept, or completed product</dd><dt>Example job titles for this role:</dt>
<dd>User Researcher, UXR (User Experience Researcher), Usability Analyst</dd>
</dl>

### User Experience Design

UX Designers can potentially cover numerous related areas, from conceptualizing the user journey to partial front-end development. For the purposes of this resource, UX Design is defined by its core responsibilities, such as information architecture, creating wireframes (low fidelity screen mockups), and creating prototypes that define interactions.

<dl>
<dt>Key deliverable examples:</dt>
<dd>User journeys, wireframes, prototypes, interaction guidelines, information architecture</dd><dt>Tasks include:</dt>
<dd>User workflow / process maps, designing user experiences, user task and workflow mapping, creating and maintaining user personas</dd>
<dt>Example job titles for this role:</dt>
<dd>User Experience (UX) Designer, Product Designer, Web Designer, Service Designer</dd>
</dl>

### Visual Design

Visual Designers focus largely on the look and feel of an application, as an end user would experience it, visually or otherwise. This includes specifying original design of interface elements and layout, choosing fonts and colors, and more. While UX design is focused on how something works, visual design is focused on how it looks and feels.

<dl>
<dt>Key deliverable examples:</dt>
<dd>Style guides, page comps, design mockups, image files</dd>
<dt>Tasks include:</dt>
<dd>Visual styling, logos and branding, animation, and iconography design</dd>
<dt>Example job titles for this role:</dt>
<dd>Visual Designer, User Interface (UI) Designer, Interaction Designer, Graphic Designer</dd>
</dl>

## 4\. Development Role Group

Oversees the creation, coding and delivery of the product based upon the requirements provided. Responsible for all user-facing and supporting systems, along with all related infrastructure selection, setup and deployment.

### Front-End Development

Front end development typically builds the parts of a product that will be interacted with by the user - specifically, the user interface. For the purpose of this resource, front end development refers to the implementation or codification of the design in functional templates for a product using technologies such as HTML, CSS and JavaScript.

<dl>
<dt>Key deliverable examples:</dt>
<dd>HTML and CSS files, client-side scripting, JavaScript libraries and frameworks</dd><dt>Tasks include:</dt>
<dd>Pattern libraries and prototypes, template functionalities, semantically-rich HTML document structures and widgets, use and adapt frameworks and content management systems</dd><dt>Example job titles for this role:</dt>
<dd>Front-End Developer, Web Developer, Full-Stack Developer, UI/UX Developer, JavaScript Developer, UI/UX Engineer</dd>
</dl>

### Back-End Development

Back end developers have a smaller, more indirect involvement with accessibility work, but still play a critical role in delivering accessible products, as the underlying product architecture can inform accessibility solutions. It’s important for back end developers to be involved in accessibility discussions so that any potential issues stemming from how the database is organized can be caught and fixed, or better yet, avoided altogether.

<dl>
<dt>Example job titles for this role:</dt>
<dd>Back-End Developer, Middleware Developer, Database Architect, Data Engineer</dd>
</dl>

## 5\. Testing Role Group

QA Testers run automated test frameworks or manually test products to confirm correct operation based upon provided requirement.

### QA Testing Roles (overall)

Quality Assurance (QA) Testers typically don’t contribute directly to the design and development phases of a product. They may have the opportunity to review and sign off on designs before they are implemented. The main accessibility role of a QA Tester in the accessibility lifecycle is to understand the accessibility requirements that exist and to run tests to ensure the product or feature conforms to those requirements. The testing roles have been split between automated and manual, but a number of QA professionals will do both.

### Automated QA Testing

Quality Assurance (QA) automation frameworks typically run against products in order to test features and functionality that would otherwise fall to a manual QA tester. For the purpose of this resource, a QA Tester performing automated tests is responsible for running tests within an automation framework that covers accessibility features and requirements. This can be accomplished either through automation of functional tests, and/or the inclusion of an accessibility testing library within the framework. QA Testers responsible for automated testing may also typically run automated accessibility testing tools, such as browser extensions or add-ons. It is expected that automated tools will uncover about 30 to 35% of potential accessibility issues on a screen. The rest will be identified through the team's manual accessibility testing methodology.

<dl>
<dt>Example job titles for this role:</dt>
<dd>QA Automation Engineer, Quality Engineer, Automation Engineer</dd>
</dl>

### Manual QA Testing

Quality Assurance Testers responsible for manual testing will typically handle the testing that cannot be covered through the use of automated tools. They will typically be resources that are more knowledgeable about accessibility, with a deeper understanding of the requirements, and some experience operating assistive technologies for testing, such as screen readers. They will typically run a series of test cases to validate the degree of inclusion of the components of a screen and will be charged with making sure that the overall user experience is positive for people with disabilities. It is expected that manual testing will build on top of an automated testing process, in order to cover the remaining 65 to 70% of potential accessibility issues on any given screen.

<dl>
<dt>Example job titles for this role:</dt>
<dd>QA Analyst, QA Specialist, User Acceptance Tester, Functional Tester</dd>
</dl>

## 6\. Administration Role Group

The roles in this section cover managing the product and project, as well as other bureaucratic functions of the broader organization that often have a larger mandate than any individual project. Most administrative roles, as defined in this resource, have very little, if anything, to do with the design, the implementation, or the testing of accessibility principles to create more inclusive applications and websites. These roles, however, are still instrumental in ensuring that the team members who are actively taking part in making content accessible and conformant with WCAG can be successful at doing so. This begins with project managers and product owners working hand in hand with the design, development and testing teams, but also other governance roles contributing to steering the organization's culture in a direction that is aligned with the goals pursued by accessibility guidelines.

### Product Ownership

Product owners own individual products and define their features and are key to defining the importance of accessibility on a project. It is their job to make sure that products are built and delivered in a way that meets business needs and user needs. They should have some basic understanding of the accessibility implications of the UI requirements they request, such as cost and required infrastructure. But, as with features in general, they delegate design and implementation decisions to other roles. As a result, they are typically not directly involved and do not have ownership in the ARRM model.

<dl>
<dt>Example job titles for this role:</dt>
<dd>Product Manager, Product Owner, Release Manager, Business Owner</dd>
</dl>

### Project Management

Project managers are primarily responsible for keeping everything about the process of building a product organized and on track. They have little decision-making power directly impacting accessibility. The person managing the project should make sure that accessibility is built into estimates, user stories (if Agile), and requirements documents. In smaller teams, the roles of product owners and project managers often overlap.

<dl>
<dt>Example job titles for this role:</dt>
<dd>Project Manager, Scrum Master (Agile), Team Lead</dd>
</dl>

### Governance

Unlike most other administrative roles, governance is not part of an individual project team. Their mandate focuses on the big picture, often enterprise-wide initiatives. Most importantly to individual projects, governance roles are deliberative (often committee-based) and are not bound to the deadlines of a singular project without outside, executive influence to encourage higher-velocity decision making.

<dl>
<dt>Example job titles for this role:</dt>
<dd>Legal, procurement, conformance, administrative, governance, branding</dd>
</dl>
