export const resumeData = {
  name: "Erik Stuble",
  title: "Engineering Manager",
  location: "Cleveland, Ohio, US",
  email: "erik.stuble11@gmail.com",
  linkedin: "linkedin.com/in/erikstuble",
  summary: `Engineering leader with over a decade of experience building and scaling high-performing teams to deliver secure, innovative cloud applications, microservices, SaaS, PaaS, and IaaS solutions for startups and global organizations. Passionate about technology, business impact, and mentoring the next generation of talent.\n\nI have over 15 years of experience learning and working at the intersection of software, engineering, and business. I’ve applied these skills by living, working, and managing teams both in-person and remotely across Australia, Asia, Europe, and the Americas. Through these diverse experiences, I’ve built deep expertise in cloud, DevSecOps, automation, and agile delivery—driving transformation and business agility, mentoring talent, and creating world-class products and platforms that serve a global community of customers and consumers.`,
  education: [
    {
      degree: "MBA International Business",
      school: "MIB Trieste School of Management",
      year: "2018"
    },
    {
      degree: "Electrical Engineering & Engineering Management",
      school: "Miami University",
      year: "2013"
    }
  ],
  skills: {
    cloudPlatforms: [
      { name: "AWS", level: 95 },
      { name: "Azure", level: 90 },
      { name: "Kubernetes (K8s)", level: 88 },
      { name: "Docker", level: 85 },
      { name: "GCP", level: 50 }
    ],
    infrastructureAsCode: [
      { name: "Terraform", level: 95 },
      { name: "Ansible", level: 85 },
      { name: "CloudFormation", level: 75 },
      { name: "ARM Templates", level: 60 },
      { name: "Packer", level: 70 }
    ],
    ciCdDevOps: [
      { name: "GitHub Actions", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "GitLab", level: 80 },
      { name: "CircleCI", level: 60 },
      { name: "Chef", level: 60 },
      { name: "Puppet", level: 50 }
    ],
    programming: [
      { name: "Python", level: 65 },
      { name: "Shell Scripting", level: 80 },
      { name: "YAML", level: 85 },
      { name: "Go", level: 50 },
      { name: "PHP", level: 50 },
      { name: "Ruby", level: 50 }
    ],
    security: [
      { name: "SOC 2", level: 85 },
      { name: "ISO 27001", level: 80 },
      { name: "Regulatory Compliance (EU, AUS, US)", level: 75 },
      { name: "Cloud Security", level: 80 },
      { name: "SBOM", level: 70 },
      { name: "CIS 2.0", level: 80 }
    ],
    leadership: [
      { name: "Team Leadership", level: 95 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Hiring & Mentoring", level: 90 },
      { name: "Stakeholder Management", level: 85 },
      { name: "Budget Management", level: 80 }
    ]
  },
  experience: [
    {
      company: "Rockwell Automation",
      title: "Engineering Manager Application Security, Product Automation, FactoryTalk Design Studio",
      period: "August 2022 - Present",
      location: "Cleveland, Ohio, US",
      overview: "Rockwell Automation is a global leader in industrial automation and digital transformation, providing integrated control and information solutions to help manufacturers optimize their operations. With over 28,000 employees worldwide, the company serves customers in more than 100 countries and is a Fortune 500 company.",
      technologies: ["Azure", "AWS", "AKS", "Kubernetes", "Go", "AngularJS", "Helm", "Istio", "DevSecOps", "CI/CD", "GitHub Actions", "Aqua Security", "Trivy", "BlackDuck", "JFrog Xray", "SonarQube", "StackHawk", "Burp Suite", "CycloneDX", "Cybeats", "SBOM", "SOC2", "ISO 27001"],
      description: "Leading and growing a global, hybrid/remote security engineering team responsible for application security, cloud and hybrid infrastructure, and compliance for Rockwell Automation’s flagship SaaS product, FactoryTalk Design Studio (FTDS). Brought in to manage the company’s strategic push to the cloud, overseeing the transformation to cloud-native applications and driving the adoption of modern DevOps and security best practices, workflows, and delivery pipelines to accelerate product delivery and enhance organizational agility.",
      achievements: [
        "Leading a global, hybrid/remote team of over 25 (including consultants), having grown the team from 6 to 12, across four strategic programs focused on cloud and hybrid infrastructure security and compliance.",
        "Managing four major business-critical programs across cloud, hybrid-cloud, and embedded systems (FTDS, Logix Designer, DfS [Design for Security], and Product Automation).",
        "Responsible for all aspects of people management, including hiring, onboarding, regular one-on-ones, quarterly and annual performance reviews, compensation adjustments, promotions, and career development for a global, hybrid/remote team.",
        "Delivered Rockwell Automation’s first global cloud product, FactoryTalk Design Studio (FTDS), leading the company’s inaugural SaaS launch on Microsoft Azure with multi-region, multi-account architecture and approving all security and implementation aspects.",
        "Engineered a Kubernetes-native RBAC platform with backend (Go) and frontend (AngularJS) microservices, serving both internal developers/users and as a core component of the FTDS product for customers.",
        "Built and integrated a comprehensive DevSecOps security and compliance pipeline, embedding automated controls and tools including Aqua Security (container scanning), SAST (SonarQube), DAST (StackHawk, Burp Suite), SCA (BlackDuck, JFrog Xray), and GitHub Advanced Security tooling (CodeQL, Dependabot, and secret scanning) into CI/CD and hardening AKS Kubernetes environments.",
        "Worked with the global security team to build out SBOM pipelines, verification, and storage utilizing GitHub, AquaSec/Trivy, BlackDuck, CycloneDX, and Cybeats.",
        "Spearheaded first time compliance with SOC2, ISO 27001, Government Executive Orders, and Data Privacy laws, automating 60% of audit and governance workflows.",
        "Identified and closed compliance gaps by automating company-wide security processes, enabling a shift from annual to quarterly release cycles and significantly increasing organizational agility.",
        "Automated product security reviews by over 50 percent through a homegrown DfS (Design for Security) process, automating the filling out, submission, and review workflow with custom scripts.",
        "Partnered with Finance, Security and Product teams to align technical execution with cost-saving and governance KPIs, building pipelines, monitoring, and visual graphs to show real-time spending to consumers and leaders.",
        "Managed communications, delivery, and deadlines for projects between the global Product Security Office and Office of Product Safety & Security with the Software Development teams."
      ]
    },
    {
      company: "Allianz Technology SE",
      title: "Engineering Manager, Enterprise Architecture - Agile Delivery Platform (ADP)",
      period: "August 2019 - August 2021",
      location: "Munich, Germany",
      overview: "Allianz Technology is the global IT service provider for Allianz Group, one of the world’s largest insurers and asset managers, with over €2 trillion in assets under management and operations in 70+ countries.",
      technologies: ["AWS", "Azure", "Kubernetes", "AKS", "EKS", "Istio", "Terraform", "GitHub Actions"],
      description: "Directed engineering and delivery for Allianz Technology’s global Agile Delivery Platform (ADP), leading a cross-functional team to design, implement, and launch the company’s first managed Kubernetes PaaS solution. Oversaw technical execution, resource planning, and operational excellence, ensuring alignment with enterprise architecture and business objectives.",
      achievements: [
        "Built and scaled a global platform engineering organization from one to four cross-functional teams, recruiting and developing technical leaders and architects across multiple regions.",
        "Designed, launched, and scaled Allianz Technology's first managed Kubernetes PaaS, delivering cloud-native solutions on AWS and Azure (AKS/EKS, Istio, Terraform, GitHub Actions).",
        "Deployed the platform to 12 cloud regions, serving 25+ business groups within 18 months, enabling rapid application deployment and infrastructure scaling.",
        "Led cloud FinOps strategy, budgeting, and defined platform SLOs, SLAs, and SLIs in partnership with finance and executive stakeholders, ensuring cost optimization and performance metrics.",
        "Managed contracts, vendor relationships, and operational models, including Product Service Agreement (PSA) development, Request for Proposal (RFP) processes, and contract negotiations to support service growth and customer success.",
        "Established and optimized incident management and on-call processes, improving platform reliability and response times across global operations.",
        "Coordinated global product launches, feature releases, and third-party integrations with zero downtime, ensuring seamless delivery and high customer satisfaction across all regions.",
        "Developed and maintained strong relationships with internal clients and external partners, implementing a systematic request coordination system that captured input from division leaders, PMs, architects, and developers, ranking requests by need and priority to ensure comprehensive roadmap alignment.",
        "Drove adoption of DevOps best practices, automation, and CI/CD pipelines, increasing deployment velocity and reducing operational risk.",
        "Presented technical and business updates to C-suite executives, influencing strategic direction and investment in cloud platform initiatives.",
        "Developed and led a Cloud Tribe to deliver and present news, new features, and strategic initiatives with timelines for large milestones and requests.",
        "Implemented comprehensive security and compliance frameworks, ensuring platform adherence to enterprise standards and regulatory requirements.",
        "Created and maintained technical documentation, runbooks, and operational procedures for platform maintenance and troubleshooting.",
        "Mentored and developed team members, fostering a culture of technical excellence and continuous learning across the organization.",
        "Collaborated with architecture teams to define and implement enterprise-wide cloud standards and best practices.",
        "Managed platform capacity planning and resource allocation, ensuring optimal performance and cost efficiency across all regions."
      ]
    },
    {
      company: "Allianz Technology SE",
      title: "Product Manager, Enterprise Architecture - Public Cloud Team",
      period: "August 2018 - August 2019",
      location: "Munich, Germany",
      overview: "Allianz Technology is the global IT service provider for Allianz Group, one of the world’s largest insurers and asset managers, with over €2 trillion in assets under management and operations in 70+ countries.",
      technologies: ["AWS", "Azure", "Terraform", "Ansible", "Jenkins", "GitHub", "Packer", "Jira", "Confluence", "DNS", "Proxy", "IAM", "Azure AD", "Python", "Bash"],
      description: "Launched and scaled Allianz’s first global AWS & Azure cloud managed infrastructure service, transforming an internal start-up into a production platform spanning 14 regions and 300+ accounts. Defined the product vision and roadmap, led multi-vendor and cross-functional teams, and managed all aspects of cloud operations, service delivery, and client engagement. Introduced agile methodologies and practices, driving a culture of continuous improvement and delivery transformation. Drove technical and business alignment, enabling secure, scalable, and cost-effective cloud adoption across the Allianz group.",
      achievements: [
        "Established and grew the first cloud program from 1 to 5 teams (5 to 30+ members) supporting global business units.",
        "Managed specialized teams for cloud development, consulting, customer service, and financial management for AWS and Azure cloud products and services.",
        "Advised the Senior VP of Architecture and Allianz Technology C-suite, including the CEO, on cloud strategy and progress through quarterly updates and strategic recommendations.",
        "Managed $100M+ in cloud spend and implemented cost visibility and FinOps tooling.",
        "Engineered multi-region landing zones, networking, user management (IAM), and automated infrastructure (IaC) using Terraform, Ansible, Packer, Jenkins, GitHub.",
        "Coordinated product launches, feature releases, and 3rd party integrations for Allianz’s IaaS cloud platform.",
        "Created RFPs, service agreements, and detailed technical requirements for new and existing projects.",
        "Designed and led the Operations Excellence team and incident management process, ensuring reliability and rapid response for global cloud services.",
        "Developed and maintained client relationships, gathering feedback and aligning services to business needs.",
        "Managed technical application services including DNS (OpenDNS, Bind9), proxy (Tinyproxy, Squid), and user management (IAM, Azure AD, Active Directory), leveraging custom automation and integration scripts in Python and Bash."
      ]
    },
    {
      company: "OpinionLab",
      title: "Team Leader, Operations Team",
      period: "October 2016 - August 2017",
      location: "Chicago, Illinois, US",
      overview: "OpinionLab was a leading customer feedback and voice-of-customer analytics platform, helping Fortune 500 companies collect, analyze, and act on customer insights to improve user experience and business outcomes.",
      technologies: ["AWS", "Terraform", "Ansible", "Chef", "Packer", "S3", "CloudFront", "Lambda", "API Gateway", "Cognito", "DynamoDB", "Agile/Scrum"],
      description: "Led a DevSecOps team while maintaining hands-on technical leadership in a startup company. Managed project prioritization, resource allocation, and operational excellence across critical systems, while driving agile transformation and establishing modern infrastructure patterns to support rapid development and deployment cycles.",
      achievements: [
        "Led and mentored a 10-member DevSecOps, operations, and IT team, maintaining over 90% retention during platform scale-out and modernization",
        "Architected and implemented serverless infrastructure for a React application supporting a new business line, utilizing S3, CloudFront, Lambda, API Gateway, Cognito, and DynamoDB to enable scalable, cost-effective delivery",
        "Interviewed and hired several additional DevOps and SecOps engineers to support team growth",
        "Managed prioritization, scheduling, and resource allocation for project work and lights-on operations across critical systems",
        "Led planning sessions, retrospectives, and standups for operation teams and scrum-of-scrums, enabling continuous improvement",
        "Assisted the Operations Director with security risk escalations and client implementation reviews",
        "Managed overall infrastructure and pipeline architecture, ensuring reliability and scalability across all DevOps initiatives",
        "Managed operational support, uptime, on-call SLAs, and rotation schedules for hybrid cloud and AWS infrastructure, ensuring platform resilience and developer velocity"
      ]
    },
    {
      company: "OpinionLab",
      title: "DevOps Engineer, Operation Team",
      period: "October 2015 - October 2016",
      location: "Chicago, Illinois, US",
      overview: "OpinionLab was a leading customer feedback and voice-of-customer analytics platform, helping Fortune 500 companies collect, analyze, and act on customer insights to improve user experience and business outcomes.",
      technologies: ["AWS", "Terraform", "Ansible", "Chef", "Circle-CI", "GitHub", "Packer", "Vault", "PagerDuty", "New Relic", "Zabbix", "Prometheus", "Grafana", "Jenkins", "ElasticSearch", "RabbitMQ", "Python", "Ruby"],
      description: "Led infrastructure modernization and DevOps transformation for a customer feedback analytics platform, establishing secure, scalable AWS infrastructure and implementing comprehensive automation to support rapid development and deployment cycles.",
      achievements: [
        "Redesigned AWS infrastructure and applications using Terraform, Ansible, Packer, and Vault, implementing secure, scalable infrastructure patterns to support multi-environment delivery",
        "Utilized Ruby to create custom automation scripts, Chef cookbooks (Ruby DSL), monitoring, and test solutions for infrastructure and application deployments.",
        "Developed and maintained Python scripts for Ansible deployments, automation workflows, and build processes, streamlining infrastructure provisioning and application delivery.",
        "Automated AWS cloud security and network management, implementing comprehensive security controls and monitoring",
        "Created Chef automation for ElasticSearch, RabbitMQ, and other in-house ETL services, improving operational efficiency",
        "Automated cloud deployments across 15+ production applications using Circle-CI, Chef, Ansible, and GitHub, increasing velocity by 600%",
        "Managed and created deployment pipeline for developer use in Jenkins and CircleCI, enabling repeatable, testable infrastructure rollouts",
        "Enhanced production stability by reengineering alerting across PagerDuty, New Relic, Zabbix, Prometheus, and Grafana, cutting false positives by 180%",
        "Developed on-call automation and supported production applications, reducing manual intervention and improving reliability"
      ]
    },
    {
      company: "Suncorp Group",
      title: "Lead DevOps Engineer / Iteration Manager, Suncorp Business Services - Digital Media, Platform Team",
      period: "May 2013 - October 2015",
      location: "Sydney, Australia",
      overview: "Suncorp Group is one of Australia's largest financial services organizations, providing insurance, banking, and wealth management products and services to millions of customers across Australia and New Zealand.",
      technologies: ["AWS", "Jenkins", "Git", "CloudFormation", "Ansible", "Drupal", "Adobe Experience Manager (AEM)", "Agile/Scrum", "DevOps", "PHP", "JavaScript", "Selenium", "Python", "Bash", "Jira", "Confluence"],
      description: "Served as Lead DevOps Engineer and Iteration Manager within Suncorp Business Services' Digital Media Platform Team, leading the modernization of the platform infrastructure and transformation from traditional middleware and midrange team limitations to modern DevOps practices, implementing CI/CD best practices and cloud-native solutions.",
      achievements: [
        "Led AWS cloud migration of 40+ high-traffic e-commerce Drupal sites from private cloud, enabling zero downtime deployments and infrastructure fault tolerance",
        "Built and maintained CI/CD pipelines using AWS, Jenkins, Git, CloudFormation, and Ansible, supporting scalable multi-region deployment",
        "Implemented a platform-wide Infrastructure as Code (IaC) and automation approach, architecting infrastructure for the New Zealand business unit's e-commerce operations",
        "Architected and built the Adobe Experience Manager (AEM) e-commerce platform with infrastructure automation, monitoring, and CI/CD workflow",
        "Set up network automation integration with AWS Cloud Route 53 and F5 network services",
        "Created monitoring and test scripts in Python and Bash and integrated them with F5 monitoring solutions for 24/7 coverage",
        "Delivered feature development and QA testing for 5 Banking and Personal Insurance Drupal sites leveraging PHP, JavaScript, and Selenium, aligned with Agile ceremonies",
        "Led project delivery and agile rituals for international multi-vendor teams",
        "Developed migration and DevOps roadmaps along with team workflows and structure",
        "Conducted audit reformations and outage/recovery planning",
        "Managed team iteration reports to ensure project deadlines and costs were met",
        "Facilitated cross-functional collaboration between development, operations, and business teams",
        "Managed product and team reports in Confluence and Jira, ensuring transparency and alignment across all stakeholders"
      ]
    }
  ],
  involvement: [
    {
      role: "Mentor",
      organization: "First Robotics Competition (FRC)",
      period: "February 2023 - Present",
      details: [
        "Started a new robotics program at an all girls high school in the local Cleveland area.",
        "Providing technical guidance and mentorship to the 8 club members and supported the participation in FRC.",
        "Facilitated learning, development, problem-solving, teamwork and communication skills for members."
      ]
    },
    {
      role: "Founding Member",
      organization: "Allianz Technology, DevOps Cultural Board",
      period: "January 2020 - August 2021",
      details: [
        "Collaborated with global leaders and board members to develop and implement solutions, resulting in successful launches of collaboration tools, automation, and cross-training within the company.",
        "Promoted DevOps culture, enhancing team collaboration, efficiency, and knowledge sharing.",
        "Championed engineering processes and best practices by leading lightning talks and securing $100,000 in funding to develop and support community tooling including GitHub, Actions, and FluxCD."
      ]
    },
    {
      role: "Founding Member",
      organization: "OpinionLab, Cultural Committee",
      period: "November 2015 - August 2017",
      details: [
        "Organized 10 events including team dinners, escape rooms, and birthdays/anniversary celebrations.",
        "Successfully integrated cultural and diversity levers into the hiring process for the technology department."
      ]
    },
    {
      role: "DevOps Clan Member",
      organization: "Suncorp Group",
      period: "May 2014 - October 2015",
      details: [
        "Participated in DevOps best practices and how best to rollout DevOps on a domain-wide scale.",
        "Conducted monthly lightning talks on DevOps and organized quarterly company FedEx days (hack-a-thons).",
        "Hosted 3 public meetups on current CI/CD and DevOps topics and tooling."
      ]
    },
    {
      role: "Graduate Ambassador",
      organization: "Suncorp Group",
      period: "August 2013 - October 2015",
      details: [
        "Interviewed and engaged in the hiring process of new graduates and working students.",
        "Mentored 10 new employees and graduates to support the adjustment to the corporate environment.",
        "Supported Suncorp at career fairs at 10 universities across 3 major cities in Australia."
      ]
    }
  ]
}; 