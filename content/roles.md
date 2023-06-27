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
   <p><strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>.<!-- ACKNOWLEDGEMENTS lists additional contributors. --></p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---

## Introduction

This document defines typical roles that have responsibilities for ensuring web accessibility. These role descriptions are generalized on purpose. A individual may fill with more than one role.

Each role description includes areas of focus in decision making, decision ownership, notes on the primary tasks of that role, a shortlist of common job titles, and a general description of the accessibility responsibilities of that role.

These roles were defined as part of the [Accessibility Roles and Responsibilities Mapping (ARRM)](/planning/arrm/) project. You are welcome to use them and change them for your organization.

The six main groups (categories) of roles covered in this document include:

1.  [Business roles](https://www.w3.org/WAI/EO/wiki/Role_definition_document#Business_Role_Group "Role definition document")
* Business Analysis

2.  [Author roles](https://www.w3.org/WAI/EO/wiki/Role_definition_document#Author_Role_Group "Role definition document")
* Content Authoring
* Content Publishing

3.  [Design roles](https://www.w3.org/WAI/EO/wiki/Role_definition_document#Design_Role_Group "Role definition document")
* User Experience (UX) Design
* Visual Design

4.  [Development roles](https://www.w3.org/WAI/EO/wiki/Role_definition_document#Development_Role_Group "Role definition document")
* Front-End Development
* Back-End Development

5.  [Testing roles](https://www.w3.org/WAI/EO/wiki/Role_definition_document#QA_Role_Group "Role definition document")
* QA Testing Roles (overall)
* Automated QA Testing
* Manual QA Testing

6.  [Administration roles](https://www.w3.org/WAI/EO/wiki/Role_definition_document#Administration_Role_Group "Role definition document")
* Product Ownership
* Project Management
* Governance
  

### 1\. Business Role Group

Main focus: **Business Vision, Rules & Requirements**

Writes business requirements and/or initial user stories, are concerned with ensuring that the project delivers the agreed-upon business benefits.

#### Business Analysis

Business analysts are involved in the design or modification of business systems or IT systems. They interact with business stakeholders and subject matter experts in order to understand their problems and needs. They gather, document and analyze business needs and requirements to help steer the team towards an end result that meets the organization's needs and expectations.

<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Business Analyst, Client Sponsor, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


### 2\. Author Role Group

Main focus: Content Strategy **and** Content Authoring (including audio/video production)

Responsible for creating all text presented by the deliverable in all forms (HTML, audio, video). Defines or selects the standards the content should meet and processes for its review and preparation.

#### Content Authoring

Content Creation is often used in marketing, but can also be a task assigned to a role within a product team. Content creation involves defining a content strategy, the writing or creation of the content or media for a product. The person who authors the content is responsible for making sure that content is accessible to people with disabilities.

Content Creation extends to roles specific audio and video media production. These begin with the writing of scripts but can extend to the production of the media files or support of live streaming content.

<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Key Deliverables</h5>

<ul><li> Body copy, managed content, scripts, taxonomies, writing guidelines, media files, including PDF, audio and video, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; margin: 0 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Tasks include</h5>

<ul><li> Content authoring, media and documentation creation, content strategies definition, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Content Strategist, Content Creator, Content Designer, Content Author, Digital Copywriter, UX Writer, Content Producer, Technical Writer, Script Writer, Video Producer, Podcast Host etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


#### Content Publishing

Description (not a definition, needs a more polished “Definition” statement): Team members who are not front-end web developers that are tasked with preparing content for publishing to websites, products, applications, etc. These team members do not author content, instead they work with the content within specific business enterprise systems or software tools and apply edits to material generated by content authors.

Content Publishers may perform some tasks that are a part of the front end web developer skillset, however they are not web developers and are often applying this markup using proprietary tools and widget.

<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Key Deliverables</h5>

<ul><li>Content editing and formatting, metadata and SEO optimization, content publishing schedule, cross-platform compatibility, and quality assurance and testing</li></ul>

</div>
<div style="border: 1px solid #ccc; margin: 0 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Tasks include</h5>

<ul><li> Advanced tagging in a PDF document, adjusting timing of captions, creating and editing transcripts, conversion to ePUB documentation, applying tags though a proprietary software to generate heading structure, SSML, etc. </li></ul>

</div>
<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Content Strategist, Content Producer, Content Publisher, Publishing Technology Specialist, Content Designer, Video Editor, Accessible Materials Specialist, Information Developer, Content Developer, Publishing Implementation Manager, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


### 3\. Design Role Group

Main focus: User Experience (UX) **and** Presentation **decisions**

These roles define the general "look and feel" of the products covering presentation, functionality, features, operation. They translate input from business roles into user stories, requirements, specifications, documentation, guidelines used by other roles (mainly Development) to build the finish product. This includes applying research and understanding of the intended audiences for a quality experience.

#### User Experience Design

The role of UX Design can potentially cover a large number of related areas: from exploratory user research (like user interviews, ethnographic research, etc.) to partial front-end development. For the purposes of this resource, UX Design is defined by its core responsibilities, such as information architecture, creating wireframes (low fidelity screen mockups), creating prototypes that define interactions, or testing designs for usability.

<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Key Deliverables</h5>

<ul><li> Wireframes, prototypes, interaction guidelines, information architecture, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; margin: 0 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Tasks include</h5>

<ul><li> User workflow / process maps, usability testing, user interviews and analysis, user task and workflow mapping, creating and maintaining user personas, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>User Experience (UX) Designer, Service Designer, Interaction Designer, Information Architect, User Researcher, UX Researcher, User Experience Analyst, Usability Specialist, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


#### Visual Design

Visual Design focuses largely on the look and feel of an application, as an end user would experience it, visually or otherwise. This includes specifying original design of interface elements and layout, choosing fonts and colors, and more. While UX design is focused on how something works, visual design is focused on how it looks and feels.

<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Key Deliverables include</h5>

<ul><li> Style guides, Page comps, Design mockups, Image files, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; margin: 0 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Tasks include</h5>

<ul><li> Visual styling, logos and branding, animation and iconography design, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Visual Designer, Web Designer, User Interface (UI) Designer, Graphic Designer, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


### 4\. Development Role Group

Main focus: **Development**

Oversees the creation, coding and delivery of the product based upon the requirements provided. Responsible for all user-facing and supporting systems, along with all related infrastructure selection, setup and deployment.

#### Front-End Development

Front end development typically builds the parts of a product that will be interacted with by the user - specifically, the user interface. For the purpose of this resource, front end development refers to the implementation or codification of the design in functional templates for a product using technologies such as HTML, CSS and JavaScript.

<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Key Deliverables</h5>

<ul><li> HTML and CSS files, client-side scripting, JavaScript libraries and frameworks, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; margin: 0 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Tasks include</h5>

<ul><li> Pattern libraries and prototypes, template functionalities, semantically-rich HTML document structures and widgets, use and adapt frameworks and content management systems, etc.</li></ul>

</div>
<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Front-End Developer, Web Developer, Full-Stack Developer, UI/UX Developer, JavaScript Developer, UI/UX Engineer, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


#### Back-End Development

Back end developers have a smaller, more indirect involvement with accessibility work, but still play a critical role in delivering accessible products, as the underlying product architecture can inform accessibility solutions. It’s important for back end developers to be involved in accessibility discussions so that any potential issues stemming from how the database is organized can be caught and fixed, or better yet, avoided altogether.

<div style="border: 1px solid #ccc; background: #eee; margin: 1em 0; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Back-End Developer, Middleware Developer, Database Architect, Data Engineer, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


### 5\. Testing Role Group

Main focus: **Testing**

QA Testers run automated test frameworks or manually test products to confirm correct operation based upon provided requirement.

#### QA Testing Roles (overall)

Quality Assurance (QA) Testers typically don’t contribute directly to the design and development phases of a product. They may have the opportunity to review and sign off on designs before they are implemented. The main accessibility role of a QA Tester in the accessibility lifecycle is to understand the accessibility requirements that exist and to run tests to ensure the product or feature conforms to those requirements. The testing roles have been split between automated and manual, but a number of QA professionals will do both.

#### Automated QA Testing

Quality Assurance (QA) automation frameworks typically run against products in order to test features and functionality that would otherwise fall to a manual QA tester. For the purpose of this resource, a QA Tester performing automated tests is responsible for running tests within an automation framework that covers accessibility features and requirements. This can be accomplished either through automation of functional tests, and/or the inclusion of an accessibility testing library within the framework. QA Testers responsible for automated testing may also typically run automated accessibility testing tools, such as browser extensions or add-ons. It is expected that automated tools will uncover about 30 to 35% of potential accessibility issues on a screen. The rest will be identified through the team's manual accessibility testing methodology.

<div style="border: 1px solid #ccc; background: #eee; margin: 1em 0; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>QA Automation Engineer, Quality Engineer, Automation Engineer, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


#### Manual QA Testing

Quality Assurance Testers responsible for manual testing will typically handle the testing that cannot be covered through the use of automated tools. They will typically be resources that are more knowledgeable about accessibility, with a deeper understanding of the requirements, and some experience operating assistive technologies for testing, such as screen readers. They will typically run a series of test cases to validate the degree of inclusion of the components of a screen and will be charged with making sure that the overall user experience is positive for people with disabilities. It is expected that manual testing will build on top of an automated testing process, in order to cover the remaining 65 to 70% of potential accessibility issues on any given screen.

<div style="border: 1px solid #ccc; background: #eee; margin: 1em 0; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>QA Analyst, QA Specialist, User Acceptance Tester, Functional Tester, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


### 6\. Administration Role Group

Main focus: **Business Vision, Rules & Requirements**

The roles in this section cover managing the product and project, as well as other bureaucratic functions of the broader organization that often have a larger mandate than any individual project. Most administrative roles, as defined in this resource, have very little, if anything, to do with the design, the implementation, or the testing of accessibility principles to create more inclusive applications and websites. These roles, however, are still instrumental in ensuring that the team members who are actively taking part in making content accessible and conformant with WCAG can be successful at doing so. This begins with project managers and product owners working hand in hand with the design, development and testing teams, but also other governance roles contributing to steering the organization's culture in a direction that is aligned with the goals pursued by accessibility guidelines.

#### Product Ownership

Product owners own individual products and define their features and are key to defining the importance of accessibility on a project. It is their job to make sure that products are built and delivered in a way that meets business needs and user needs. They should have some basic understanding of the accessibility implications of the UI requirements they request, such as cost and required infrastructure. But, as with features in general, they delegate design and implementation decisions to other roles. As a result, they are typically not directly involved and do not have ownership in the ARRM model.

<div style="border: 1px solid #ccc; background: #eee; margin: 1em 0; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Product Manager, Product Owner, Release Manager, Business Owner, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


#### Project Management

Project managers are primarily responsible for keeping everything about the process of building a product organized and on track. They have little decision-making power directly impacting accessibility. The person managing the project should make sure that accessibility is built into estimates, user stories (if Agile), and requirements documents. In smaller teams, the roles of product owners and project managers often overlap.

<div style="border: 1px solid #ccc; background: #eee; margin: 1em 0; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Project Manager, Scrum Master (Agile), Team Lead, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

#### Governance

Unlike most other administrative roles, governance is not part of an individual project team. Their mandate focuses on the big picture, often enterprise-wide initiatives. Most importantly to individual projects, governance roles are deliberative (often committee-based) and are not bound to the deadlines of a singular project without outside, executive influence to encourage higher-velocity decision making.

<div style="border: 1px solid #ccc; background: #eee; margin: 1em 0; padding: 1em; border-left: 10px solid #ddd;">

<h5>Example job titles for this role</h5>

<p>Legal, procurement, conformance, administrative, governance, branding, etc.</p>

</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}
