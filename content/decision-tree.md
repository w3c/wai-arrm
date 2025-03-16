---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Decision Tree"
nav_title: "Decision Tree"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2025-03-15   # Keep the date of the English version

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
  path: content/decision-tree.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

permalink: /planning/arrm/decision-tree/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/decision-tree/    # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>
---


{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Introduction

This tool guides organizations that want to customize their own accessibility roles and responsibilities mapping, based on considerations in their organizations. For background and context on this decision tree, see [ARRM: Accessibility Roles and Responsibilities Mapping main page](/planning/arrm/).

The role-based decision tree is a framework to help anyone define a Responsibility Mapping of their own within their organization. It is a process to help teams define and distribute ownership and responsibility of accessibility requirements in the project lifecycle. Using this framework, a team should more easily define who ultimately owns specific requirements and who else is actively involved (those that contribute to the successful implementation of the tasks in the lifecycle).

## Ownership levels

The framework defines three levels of ownership for accessibility requirements, based on commonly agreed upon [RACI (responsible, accountable, consulted, and informed) matrix principles {% include external.html %}](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix#Key_responsibility_roles_(RACI_model)):

1.  **[Primary ownership](#primary-ownership)**  
    Those who are **accountable** for an accessibility task. Primary owners typically drive the decision-making process, have direct interaction with the secondary owner(s) discussing issues, delegate the work to other roles or team members (as needed), lead the task to completion, have final sign-off authority (if/when used), and are ultimately accountable for the outcome of task or design decisions regardless of when they occur in the process. The last few points emphasize that the primary role is ultimately accountable. This is why there can only be **one primary owner for each task**.
2.  **[Secondary ownership](#secondary-ownership)**  
    Those who are **responsible** to help complete an accessibility task. Secondary owners typically directly support the primary owner, are actively involved in the decision-making process, have active interest and participation in the outcomes, may work to complete the task, but ultimately defer final decisions to the primary owner.
3.  **[Contributors](#contributor)**  
    Those who need to be **consulted** in order to successfully complete an accessibility task. Contributors are typically not actively involved in the decision-making process, will typically provide initial input or requirements, and may be asked to provide additional information as needed to ensure successful task completion. Contributors may have limited participation by providing initial design input (such as branding guidance or business requirements) with little or no subsequent interaction. In those cases, the communication may be input only with little or no concern of being kept "informed" of the result (relying on the expertise of other owners).

### Ownership to RACI Role Mapping

Ownership role levels are very similar to the RACI responsibility roles. For those familiar with RACI definitions these can be helpful in understanding ownership levels but are not necessary. Accessibility ownership roles to RACI responsibility can be mapped to ownership levels like this:

-   Primary -> Accountable
-   Secondary -> Responsible
-   Contributor -> Consulted

Since all accessibility ownership roles provide some input to the design they are “informed.”

## Step 1. Primary ownership {#primary-ownership}

### Can this role be involved as a Primary Owner?

Since there must be one (and only one) primary owner for all tasks, picking them is a key first step. This section identifies a 7-step process through which a team can identify which role should be the primary owner for each of the tasks defined in the [Tasks Involved in Accessibility](/planning/arrm/tasks/). This section identifies the steps in identifying those roles who may be involved with each task as primary owners.

It is vital that in determining primary ownership, the team either ensures that someone for each of the required roles can act as primary owner. As an example, if a project team exists without actively engaged UX professionals this is the opportunity to make sure that said individuals are in place for potential work ahead or that some other mechanism is in place to handle tasks owned by such individuals. Similarly, if some tasks are provided by resources outside of the primary team, the project should potentially revisit ownership or consider adjustments to team makeup. This avoids bottlenecks caused by relying on individuals not directly accountable to the primary team working on this effort.

### Decision tree framework for primary ownership

The steps in the decision tree assume evaluation of tasks used to evaluate the accessibility of an existing product. In such cases, many design decisions have already been made, possibly documented and implemented. There are significant ownership differences when assigning ownership when reviewing design documents or even Web Content Accessibility Guideline (WCAG) success criteria.

#### Step A.

Is this task driven by [Business](/planning/arrm/roles/#business-role-group) or non-functional requirements?

*   If **"Yes"**, then primary ownership should be **Business** - Business Analysis
*   If **"No"**, then move on to step B.

**Business analysis examples include:**

*   Providing functional business requirements and features,
*   Specifying additional technical requirements (legal, financial, security, etc.),
*   Administering branding guidance and standards,
*   Defining core features and high-level product functionalities.

**Business Analysis as Primary Owner**

The Business Analyst role is the primary owner for items dictated by business requirements including branding guidance, core features and high-level product functionality, and contractual or legal requirements. After initiating the project, the role is typically hands-off.

#### Step B.

Is this task about [Content Authoring](/planning/arrm/content-author/)?

*   If **"Yes"**, then primary ownership of this task should be **Design** - Content Authoring
*   If **"No"**, then move on to step C.

**Content authoring examples include:**

*   Authoring copydecks and other related documents that manage content,
*   Composing content semantics and general document structure,
*   Defining static content such as taxonomy or labels and main body copy,
*   Writing multimedia alternatives such as text transcripts, captions, descriptive audio, etc.

**Content Authoring as Primary Owner**

Content Authors are involved any time there is text or text-based content. This includes the spoken part of a video or audio media as well as downloadable documents. This often includes tasks derived from writing guidelines and standards, taxonomies and terminology, translations and body copy.

#### Step C.

Is this task about [UX Design](/planning/arrm/user-experience/)?

*   If **"Yes"**, then primary ownership of this task should be **Design** - User Experience Design
*   If **"No"**, then move on to step D.

**UX Design examples include:**

*   Design lo-fidelity wireframes and structural decisions related to templates, data visualizations, etc.,
*   Making decisions related to UI component interactions and product features,
*   Define general page regions such as header, navigation, footer, etc.,
*   Improving interactions based on usability testing with users with disabilities,

**UX Design as Primary Owner**

UX Designers are often primary owners for accessibility tasks that relate to interactions since they define many of the features and operation of the product. Interaction-related tasks that come before implementation typically live within the UX Designers' set of responsibilities.

#### Step D.

Is this task about [Visual Design](/planning/arrm/visual-designer/)?

*   If **"Yes"**, then primary ownership of this task should be **Design** - Visual Design
*   If **"No"**, then move on to step E.

**Visual design examples include:**

*   Making presentation choices such as color, font, layout, spacing, etc.,
*   Adapting branding guidelines and related brand variations,
*   Documenting and defining presentation through style guides,
*   Designing hi-fidelity mock ups and comprehensive layouts (comps).

**Visual Design as Primary Owner**

Nearly any decision about final presentation design is likely to have the visual designer as a primary owner. The more they purely design (such as color selection), the more likely they are to be the primary owner. The most overlap for primary ownership tends to be with the UX Designer. In such cases, the final choice should be made on how essential the visual aspect is to the task.

#### Step E.

Is this task about [Development](/planning/arrm/front-end/)?

*   If **"Yes"**, then primary ownership of this task should be **Development** - Front-End Development
*   If **"No"**, then move on to step F.

**Development examples include:**

*   Making document structure decisions related to HTML and the use of WAI-ARIA,
*   Defining visual content layout, related to the use of CSS presentation,
*   Scripting interaction behaviors related to features and functionalities.

**Front-End Development as Primary Owner**

Front-End Developers are typically the primary owners when the tasks relate to implementation or the coding of the page. They typically are not primary owners when they follow instructions defined in requirements created by other stakeholders in early design phases.

It's a frequent misconception that front-end developers should own most, if not all tasks. But since most of the decisions that impact accessibility take place earlier in the process, other roles will have already made the decisions. Developers should only be an owner when they have direct decision-making input.

#### Step F.

Is this task about [Testing](/planning/arrm/roles/#testing-role-group)?

*   If **"Yes"**, confirm that one or more of the following is true before assigning to the tester:
    *   task is about running testing tools,
    *   task is related to test protocols, or
    *   Resolution of the task can be done directly and completely by the tester alone.
*   Otherwise, the answer is **"No"**. Move on to step G.

**Testing examples include:**

*   Running automated testing tools to discover accessibility issues that are easier to identify,
*   Running standard QA or feature testing to dive deeper into accessibility issues,
*   Executing test scripts and protocols to validate accessibility conformance.

**Note:**

Testing is not a role that makes or owns decisions that directly impact accessibility in the delivered product. The testing role is meant to confirm that the design or implementation meets accessibility requirements; however, the tester could be defined as a Contributor since they are responsible for providing the outcomes from validation of a design or implementation that takes place through testing.

**QA Testing as Primary Owner**

QA Testers are not typically part of the design or implementation process. Though they are essential or key to returning findings or feedback to respective owners for remediation, they are not likely to be identified as primary owners for any specific accessibility task, except actual testing.

#### Step G.

IF NONE OF THE ABOVE, then it escalates to an [Administrative](/planning/arrm/roles/#administration-role-group) concern.

If one of the main roles has not been assigned, it's up to management to decide ownership. This should only happen when roles are not clearly defined, or were not assigned in an earlier step. Management should review the task and assign as seems appropriate, based upon the roles on the team, using the guidance above. Management should run the decision tree again and identify the closest fit for ownership.

**Note:**  

Business Administration is not a role that makes or owns decisions that directly impact accessibility in the delivered product, but is meant to oversee the delivery process and that the product meets accessibility requirements.

### Decision tree application examples

To understand how to apply the steps in the decision tree, examples are helpful. The following are step-by-step examples using the Decision Tree framework to assign primary ownership for several tasks for two roles:

-   Implementation - [Front-End Development examples](/planning/arrm/front-end/#how-to-use-the-tasks)
-   Design - [Content authors examples](/planning/arrm/content-author/#how-to-use-the-tasks)

The resulting body of ownership guidance using this framework can then compiled in a role-specific master list, for all three levels of ownership (primary, secondary, contributor). This, in turn, can help create accessibility roles and responsibility mappings that can better help teams break down accessibility by roles. For an example, see this [Accessibility Task List](/planning/arrm/tasks/).

## Step 2: Secondary ownership {#secondary-ownership}

### Can this role be involved as a Secondary Owner?

This section identifies the steps in identifying those roles who, after the primary owner, may be involved with each task as secondary owners. After selecting the primary owner for each task, reconsider the expected level of involvement of the remaining roles. The following section provides support in determining when each role might be expected to act as a secondary owner. Note that some tasks might require more than one secondary owner. For each role, ask if this role likely to actively work with or play a key supporting role to the primary owner in addressing the task?

-   If the answer is "yes," add the role as a Secondary Owner.
-   If the answer is "no," consider this role as a potential Contributor to the task (covered in Step 3.)

**Business Analysis as Secondary Owner**

Business Analysts are not typically secondary owners. The role might be a secondary owner if there are active discussions that need review and approval for changes to items that are part of the requirements, variation to branding guidance, core features and high-level product functionality, or contractual or legal requirements and review determined by them as primary owners. After initiating the project, the role is typically hands-off.

**Content Authoring as Secondary Owner**

Unless they are already involved on a given task as primary owners, it is fair to assume that whenever text is involved, Content Authors will be identified as secondary owners to support in that capacity. This typically occurs when the Visual or UX Designers are the primary owners, but need considerable input from the Content Author.

**UX Design as Secondary Owner**

As a secondary owner, the UX Designer may be needed by the primary owner to answer questions about the intended use or purpose of items in the requirements, specifications, user stories or other documentation provided. Since UX Designers oversee the entire design, they are likely to want to review any decisions that may affect the final experience.

**Visual Design as Secondary Owner**

It's rare for Visual Designers to be a secondary owner as they are typically involved as primary owners of presentation tasks, or simply informed about any variations to their work. This typically occurs when the UX Designer is the primary owner, but needs considerable input from the Visual Designer.

**Front-End Development as Secondary Owner**

In early design phases Developers are most likely to be secondary owners working with the primary to identify what is possible to implement (when the requirements are vague or challenging). In testing and remediation work this situation may reoccur where the primary owner needs to work with Development to identify which implementations are possible to make a final decision. As a result, it's not uncommon for the Developer role to be a secondary owner.

**QA Testing as Secondary Owner**

QA Testers are not typically part of the design or implementation processes. This extends to secondary ownership, where secondary ownership might apply if testing is tightly integrated into the design or implementation processes.

## Step 3: Contributor {#contributor}

### Can this role be involved as a Contributor?

If the roles do not qualify as primary or secondary owners, then consider the interest or need of these roles to be informed or consulted on the decisions made by the primary and secondary owners. Can they be expected to provide input to the decision? As with secondary owners, depending on the nature of the task there can sometimes be more than one contributing role. The following section provides support in determining when each role might be expected to act as a contributor. For each role, ask does this decision typically need preliminary input from this role, or does this role need to be informed on the outcome?

-   If the answer is "yes," to either question, add the role as a Contributor.
-   If the answer is "no", then the role may not be involved at all.

**Business Analysis as a contributor**

In practice business typically more of an contributor by providing key additional initial requirements or documentation (such as brand guidelines) but little little else. As mentioned earlier, this role the role is typically hands-off after initiating the project.

**Content Authoring as a contributor**

When not a primary or secondary owner, Content Authors are usually not involved. The few cases where they might be an impact owner and need to be informed about decisions are in tasks where the management or presentation of text changes.

**UX Design as a Contributor**

Due to the UX Designer's typical involvement in overseeing the overarching design and structure of a project or product to ensure the final design meets the intended goals, it is rarer, though possible, for UX Designers to find themsleves involved as Contributors. One such example might be video content, where the UX Designer might be critical in defining the page structure and features of the video player, but would not be much involved in the content itself.

**Visual Design as a Contributor**

A Visual Designer is likely to want to know the outcomes of decisions that impact the final presentation when they are not the primary owner. Examples of this are when simple text or operation changes lead to cases not be clearly covered in style guides or comps.

**Front-End Development as a Contributor**

Since Developers are so integral to the final delivered product they are typically primary and secondary owners. There are fewer cases where the Developer is an impact owner. These cases are where a decision may require additional information beyond the standard updated requirements, user stories or specifications.

**QA Testing as a Contributor**

Many teams will view QA Testers as obvious Contributors on every requirement since they are so deeply involved with all aspects of validating the deliverable. However, if the details affecting accessibility are fully covered with other stakeholders in the lifecycle, they are likely to simply be identified as an additional step in the process, beyond the scope of the roles and responsibility mapping. QA Testers are likely to still be identified as Contributors when it comes to testing tool capabilities, testing protocols and methodologies, or changes to the details needed by the QA tester to complete the tests.
