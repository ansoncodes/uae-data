// Single source of truth for all page copy. Edit here, then run `npm run build`.

/**
 * SINGLE SOURCE OF TRUTH for course content.
 *
 * Every string below is transcribed from the SMEC Technologies brochure
 * "Professional Certificate in Data Analytics with Prompt Engineering".
 * Where noted, a small number of items come from the existing SMEC course
 * website. Nothing here is invented. Edit this file to change page copy.
 */

export const course = {
  title: "Professional Certificate in Data Analytics with Prompt Engineering",
  titleLines: ["Professional Certificate", "in Data Analytics", "with Prompt Engineering"],
  shortTitle: "Data Analytics with Prompt Engineering",
  duration: "5-6 Month",
  eligibility: "Plus 2, IT, Degree, Diploma, B-Tech & Above",
  eligibilityFull:
    "An individual with Plus 2, IT, Degree, Diploma, B-Tech & Above can Attend this Expertised Skill Development Program",
  certification: "Professional Certificate from SMEC Technologies",
  certificationLine:
    "Get certified as a next-gen Data Analytics & Gen AI professional with SMEC Technologies",

  description:
    "This Data Analytics Engineer Program will transform you into a data analytics expert. In this program, you will learn the latest analytics tools and techniques, how to work with Excel, SQL databases, the languages of R and Python, mathematical and statistical concepts, data manipulation, ETL, the art of creating data visualizations Power BI and Tableau, and how to apply statistics and predictive analytics in a business environment. This comprehensive data analytics program will help learners fast-track their careers in data analytics. It will help learners develop in-demand skills needed for a successful career. Learn from experienced instructors through live interactive sessions and build your hands-on skills through projects and integrated labs. This program is a great place to start your data analytics journey. In the end, you will have the opportunity to leverage the skills and knowledge you gained in the program by working on various projects to showcase your technical expertise to prospective employers.",

  /** Hero supporting copy – first sentences of the brochure description. */
  heroSummary:
    "Learn the latest analytics tools and techniques, how to work with Excel, SQL databases, the languages of R and Python, mathematical and statistical concepts, data manipulation, ETL, the art of creating data visualizations Power BI and Tableau, and how to apply statistics and predictive analytics in a business environment.",

  outcomes: [
    "Gain insights on several data visualization libraries in Python, including Matplotlib and Seaborn",
    "Learn Python for data manipulation, statistical analysis, and utilizing key libraries like pandas, NumPy, and Matplotlib.",
    "Gain proficiency in Excel, SQL and NoSQL for data analysis and database management.",
    "Master R programming and understand how various analytical packages are executed in R",
    "Learn ETL processes and tools for effective data integration.",
    "Develop skills in Tableau and Power BI for creating data visualizations and interactive dashboards",
    "Engage in real-world data analysis projects.",
    "Solve complex problems using data analytics tools and techniques.",
    "Identifying the dominating variables for forecasting and predictions through Predictive Analytics.",
  ],
};

/** Hero — the value proposition condenses brochure statements (tools, duration, live sessions, labs, projects). */
export const hero = {
  eyebrow: "Professional Certificate",
  titleLines: ["Become a", "Data-Driven", "Professional"],
  highlight: "Data-Driven",
  valueProp:
    "Learn Excel, SQL, Python, R, Power BI, Tableau, machine learning and prompt engineering in a 5-6 month programme built on live interactive sessions, integrated labs and real-world projects.",
  /** Short proof points — both are listed under `accreditations` below. */
  proof: ["25 Years of Excellence", "NSDC Approved Training Partner"],
};

/** Course facts strip under the hero. */
export const infoBar = [
  { value: "5-6 Months", label: "Course Duration", icon: "clock" },
  { value: "Eligibility", label: "Plus 2, IT, Degree, Diploma, B-Tech & Above", icon: "cap" },
  { value: "SMEC Technologies", label: "Professional Certification", icon: "badge" },
  { value: "UAE", label: "Admissions Open", icon: "pin" },
];

export const marqueeWords = ["Python", "SQL", "Excel", "R", "Power BI", "Tableau", "Machine Learning", "Gen AI"];

export const about = {
  heading: "Building future-ready talent",
  intro:
    "SMEC Technologies is a software development and digital solutions company committed to building future-ready talent through industry-aligned training programs that bridge the gap between technology and real-world application.",
  paragraphs: [
    "SMEC Technologies is a dynamic software development and digital solutions company empowering businesses and learners alike in the digital era. As a part of the larger SMEC ecosystem, we combine deep domain expertise with cutting-edge technology to deliver innovative software solutions — from web and mobile applications to AI-enabled systems and digital transformation services.",
    "Our mission extends beyond software development — we are committed to building future-ready talent through industry-aligned training programs that bridge the gap between technology and real-world application. The Professional Certificate in Data Analytics with Prompt Engineering has been crafted to equip learners with the analytical thinking, data fluency, and AI prompt-engineering skills essential for today's data-driven world. By blending hands-on projects, applied learning, and expert mentorship, we ensure learners are prepared to excel in roles where data and intelligent systems meet.",
    "At SMEC Technologies, we believe in fostering innovation, fostering practical expertise, and creating pathways to meaningful careers.",
  ],
  whyLearnHeading: "Why should you learn from us?",
  whyLearn:
    "SMEC technologies is the training division of SMEC Automation Pvt. Ltd, a company with extensive experience in Data Science, ensuring their curriculum is aligned with real-world applications. We are a robust data science team that provides hands-on, industry-focused training with a strong emphasis on practical skills. Our courses are taught by seasoned specialists in the field of Data Science, making graduates highly employable",
  stats: [
    { value: 25, suffix: "", label: "Years of Excellence" },
    { value: 2000, suffix: "+", label: "Learning Students" },
    { value: 50000, suffix: "+", label: "Placed Students" },
    { value: 50, suffix: "+", label: "Mentors" },
    { value: 200, suffix: "+", label: "Employees" },
    { value: 50, suffix: "+", label: "Courses" },
  ],
};

/** "Key Features of the program" – 10 items, brochure page 3. */
export const keyFeatures = [
  {
    title: "Industry-aligned curriculum",
    text: "Industry-aligned data analytics curriculum meeting current enterprise demands.",
    icon: "briefcase",
  },
  {
    title: "Prompt Engineering",
    text: "Prompt Engineering to enhance data analysis efficiency.",
    icon: "sparkles",
  },
  {
    title: "Gen AI-driven analytics",
    text: "Gen AI—driven analytics for end-to-end workflows.",
    icon: "workflow",
  },
  {
    title: "Real-world projects",
    text: "Real-world projects for hands-on mastery.",
    icon: "layers",
  },
  {
    title: "Visualization & BI",
    text: "Next-Gen Data Visualization & BI Skills",
    icon: "chart",
  },
  {
    title: "Data to prediction",
    text: "Master the complete analytics & ML journey - from data to prediction.",
    icon: "trending",
  },
  {
    title: "Career-focused",
    text: "Career-focused, industry-ready training.",
    icon: "target",
  },
  {
    title: "AI-assisted labs",
    text: "AI-assisted analytics labs with real-world workflows.",
    icon: "cpu",
  },
  {
    title: "Expert-led mentorship",
    text: "Expert-led training and mentorship by industry professionals.",
    icon: "users",
  },
  {
    title: "Get certified",
    text: "Get certified as a next-gen Data Analytics & Gen AI professional with SMEC Technologies",
    icon: "award",
  },
];

/** "Why SMEC" cards — each text is assembled from brochure / SMEC site statements. */
export const whySmec = [
  {
    title: "Industry Focused",
    text: "Industry-aligned data analytics curriculum meeting current enterprise demands, aligned with real-world applications.",
    icon: "briefcase",
  },
  {
    title: "Hands-On Learning",
    text: "Real-world projects for hands-on mastery, and AI-assisted analytics labs with real-world workflows.",
    icon: "layers",
  },
  {
    title: "Expert Mentorship",
    text: "Expert-led training and mentorship by industry professionals. Courses are taught by seasoned specialists in the field of Data Science.",
    icon: "users",
  },
  {
    title: "Practical Skills",
    text: "Hands-on, industry-focused training with a strong emphasis on practical skills.",
    icon: "wand-sparkles",
  },
  {
    title: "Career Focused",
    text: "Career-focused, industry-ready training, with soft skills and interview preparation built into the programme.",
    icon: "target",
  },
  {
    title: "Professional Certification",
    text: "Get certified as a next-gen Data Analytics & Gen AI professional with SMEC Technologies.",
    icon: "award",
  },
];

/**
 * "What you will learn" roadmap. `outcomes` are indexes into `course.outcomes`;
 * `points` are brochure key-feature lines. Every outcome appears exactly once,
 * with `alwaysOutcomes` shown under the roadmap.
 */
export const learnJourney = {
  stages: [
    { verb: "Collect", sub: "Data & databases", tools: ["excel", "sql", "mongodb"], outcomes: [2, 4] },
    { verb: "Analyse", sub: "Python, statistics, SQL", tools: ["python", "pandas", "numpy", "r"], outcomes: [1, 3] },
    { verb: "Visualise", sub: "Power BI & Tableau", tools: ["powerbi", "tableau", "matplotlib", "seaborn"], outcomes: [5, 0] },
    { verb: "Predict", sub: "Machine Learning", tools: ["sklearn", "python"], outcomes: [8] },
    {
      verb: "Automate",
      sub: "Generative AI",
      tools: ["chatgpt", "gemini", "genai"],
      points: ["Prompt Engineering to enhance data analysis efficiency.", "Gen AI—driven analytics for end-to-end workflows."],
    },
  ],
  alwaysOutcomes: [6, 7],
};

/** Curriculum – brochure pages 7 to 16, transcribed verbatim. */
export const curriculum = [
  {
    id: "python",
    title: "Programming with Python",
    summary: "Programming foundations, data structures, functions, modules and object-oriented Python.",
    units: [
      {
        title: "Programming with Python",
        topics: [
          "Concept of Programming",
          "Data Types",
          "Variables",
          "Operators",
          "Statements & Loops",
          "Strings",
          "Lists",
          "Tuples",
          "Sets",
          "Dictionary",
          "User Defined Functions",
          "Lambda Functions",
          "Modules",
          "Packages",
          "Math Module",
          "Random Module",
          "Statistics Module",
          "OS Module",
          "File Handling",
          "Exception Handling",
          "Regular Expressions",
          "Classes",
          "Methods",
          "Objects",
        ],
      },
    ],
  },
  {
    id: "statistics",
    kicker: "Statistical and Mathematical Essential for",
    title: "Data Science, Data Analytics",
    summary: "Exploratory Data Analysis and Databases",
    units: [
      {
        title: "Statistical & Mathematical Analysis",
        topics: [
          "Qualitative Data",
          "Quantitative Data",
          "Continuous Data",
          "Discrete Data",
          "Structured Data",
          "Unstructured Data",
          "Semi Structured Data",
          "Characteristics of Big Data",
          "Data Science Industry",
          "Statistics",
          "Data Handling Techniques",
          "Graph Plots",
          "Mean",
          "Median",
          "Mode",
          "Standard Deviation",
          "Variance",
          "Distribution",
          "Random Variables",
          "Correlation",
          "Covariance",
          "Probability Distribution Functions",
          "Array",
          "Matrix",
          "Linear Algebra",
          "Matrix Algebra",
          "Probability Theory",
        ],
      },
      {
        title: "Numerical Analysis & Data Visualisation",
        topics: [
          "Array Matrix Tensor Creation with NumPy Array Manipulations",
          "Indexing and slicing",
          "NumPy Data types",
          "Performing Matrix operations",
          "Linear Algebra",
          "Graph Plotting with Matplotlib and Seaborn",
          "Bar Plots",
          "Scatter Plots",
          "Line Plots",
          "Pie Plots",
          "Heatmaps",
        ],
      },
      {
        title: "Data Analytics with Pandas",
        topics: [
          "Analyzing Data with Pandas",
          "Data Structures",
          "Series and Data Frame Creation",
          "Statistical functions",
          "Attributes",
          "Accessing Rows and Columns",
          "Group by Aggregate",
          "Pivot Tables",
          "Merging Data Frames",
          "Data wrangling",
          "Outliers (Exploratory Data Analysis)",
        ],
      },
      {
        title: "Data Analytics SQL & No SQL",
        topics: [
          "Databases",
          "MySQL",
          "Create Database and Tables",
          "DDL-DML-DCL",
          "Sort",
          "Alter-Join-Wild Cards",
          "NoSQL (MongoDB)",
          "Insert and Insert Many-Update and Update Many",
          "Delete and Delete Many",
          "Embed Documents",
        ],
      },
      {
        title: "Advanced Prompt Engineering for Data Analytics Workflows",
        groups: [
          {
            heading: "Role of Prompt Engineering in Modern Data Analytics",
            topics: [],
          },
          {
            heading: "Prompt Structuring for Analytical Thinking",
            topics: [
              "Analytical prompts vs conversational prompts",
              "Context layering and constraint-based prompts",
            ],
          },
          {
            heading: "Prompt Engineering for Data Cleaning & Preparation",
            topics: [
              "Handling missing values, outliers, and inconsistencies",
              "Generating data validation rules via prompts",
            ],
          },
          {
            heading: "Prompting for Exploratory Data Analysis (EDA)",
            topics: ["Automated insight discovery", "Pattern and trend identification"],
          },
          {
            heading: "Prompt Engineering for SQL & Databases",
            topics: [
              "Business questions → optimized SQL queries",
              "Query explanation and performance improvement",
            ],
          },
          {
            heading: "Prompt-Assisted Python, Pandas & R Analytics",
            topics: ["Code generation and optimization", "Debugging and refactoring analytics scripts"],
          },
          {
            heading: "Prompt Engineering for Data Visualization",
            topics: ["Selecting appropriate charts", "Insight-driven storytelling prompts"],
          },
          {
            heading: "Gen AI in practice",
            topics: [
              "Gen AI Integration in Data Analytics Pipelines",
              "AI-Augmented Exploratory Data Analysis",
              "Prompt Evaluation & Optimization Techniques",
              "Hands-on Exercises using real analytics datasets",
            ],
          },
        ],
      },
      {
        title: "Analytics with R Programming",
        topics: [
          "R Variables and Expressions",
          "Control statements",
          "Strings Vectors List Array Matrix",
          "Functions-Data Manipulations with R",
          "Factors",
          "Data Frames",
          "Packages",
          "Data shaping",
          "Database connections",
          "Statistical Functions",
          "Data Visualization and Graph Plotting",
          "Machine learning in R",
        ],
      },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning Concepts and Implementations",
    summary: "Building Machine Learning Models",
    units: [
      {
        title: "Building Machine Learning Models",
        topics: [
          "Feature Selection",
          "Feature Extraction",
          "Data preprocessing",
          "Types of Learning",
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforced Learning",
          "Regression",
          "Classification",
          "Clustering",
          "Association",
          "Dimensionality Reduction Techniques",
          "Model building",
          "Model fine tuning",
          "Hyper parameter Tuning",
          "Model saving and reloading",
        ],
      },
    ],
  },
  {
    id: "visualization",
    kicker: "Data Visualization and Advanced Analytics With",
    title: "Excel, PowerBi And Tableau",
    summary: "Data Analytics with Excel, Power BI and Tableau",
    units: [
      {
        title: "Data Analytics with Excel",
        topics: [
          "Worksheets in Excel",
          "Rows & Columns",
          "Add Move & Delete Cells",
          "Formulas",
          "Formatting Calculations",
          "Data Analysis",
          "Sort & Filter",
          "Tables",
          "Conditional Formatting Functions",
          "Charts",
          "Pivot Tables",
        ],
      },
      {
        title: "Data Analytics & Visualization with Power BI",
        topics: [
          "Power BI Architecture Components",
          "Power BI Desktop",
          "Connect to Data in Power BI Desktop",
          "Data Sources for Power BI",
          "DAX in Power BI",
          "Filters in Power BI",
          "Power BI Query Overview",
          "Creating and Using Measures in Power",
          "Calculated Columns",
          "Data Visualizations",
          "Charts Area Funnel Combo Donut",
          "Waterfall line Maps Bar",
          "KPI",
          "Power BI Dashboard",
        ],
      },
      {
        title: "Data Analytics & Visualization with Tableau",
        topics: [
          "Tableau Architecture",
          "File Datatypes",
          "Tableau Operator",
          "String Functions",
          "Date Functions Logical Functions",
          "Aggregate Functions",
          "Joins in Tableau",
          "Types of Tableau Data Source",
          "Data Extracts, Filters, Sorting",
          "Formatting, Adding Worksheets and Renaming Worksheet in Tableau",
          "Tableau Save",
          "Reorder and Delete Worksheet",
          "Charts, and dashboard",
        ],
      },
    ],
  },
  {
    id: "gen-ai",
    kicker: "Generative AI—Driven",
    title: "Data Analytics Automation & Use Cases with BI Tools",
    summary: "AI-assisted querying, automated reporting, predictive analytics and a capstone project.",
    units: [
      {
        title: "Generative AI—Driven Data Analytics Automation & Use Cases with BI Tools",
        groups: [
          { heading: "Querying datasets", topics: ["AI-assisted KPI generation"] },
          {
            heading: "Automated Reporting & Insight Narration",
            topics: ["Executive summaries from analytics outputs", "Business storytelling using Gen AI"],
          },
          {
            heading: "Gen AI",
            topics: [
              "Prompt-driven insights for Power BI dashboards",
              "Tableau analytics explanations using Gen AI",
            ],
          },
          {
            heading: "AI-Assisted Predictive Analytics",
            topics: ["Feature suggestions via prompts", "Model interpretation & explainability"],
          },
          { heading: "Gen AI for Decision Support Systems", topics: [] },
          { heading: "Industry Use Cases", topics: ["Sales, Finance, Marketing, HR, Operations"] },
        ],
        note: "Capstone Project: Prompt-Driven Data Analytics & Reporting System",
      },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills And Interview Preparation",
    summary: "Assignments and projects – the following activities are compulsory for all the students.",
    units: [
      {
        title: "Assignments and projects",
        note: "The following activities are compulsory for all the students",
        topics: [
          "Daily/Weekly Assignments",
          "Main Project in Exploratory Data Analysis",
          "Main Project in Machine learning.",
        ],
      },
    ],
  },
];

/**
 * Short module names for the curriculum navigation (the full brochure titles stay on each panel).
 * The brochure gives no per-module duration; add `duration: "…"` to a module above to show one.
 */
export const moduleShortTitles = {
  python: "Programming with Python",
  statistics: "Statistics, Maths & Data Analytics",
  "machine-learning": "Machine Learning",
  visualization: "Excel, Power BI & Tableau",
  "gen-ai": "Gen AI Analytics Automation",
  "soft-skills": "Soft Skills & Interview Prep",
};

/** Illustrative analytics pipeline for the practical-learning section (icon keys from tool-icons.mjs). */
export const pipeline = [
  { label: "Raw Data", sub: "Excel, CSV & databases", icon: "excel" },
  { label: "Python", sub: "Clean & analyse with pandas", icon: "python" },
  { label: "SQL", sub: "Query, join & aggregate", icon: "sql" },
  { label: "Power BI", sub: "Model & visualise", icon: "powerbi" },
  { label: "AI Insights", sub: "Prompt-driven narration", icon: "genai" },
];

/** Learning experience – assembled from brochure statements only. */
export const learningExperience = [
  {
    eyebrow: "Live sessions",
    title: "Learn from experienced instructors through live interactive sessions",
    text: "Expert-led training and mentorship by industry professionals. Our courses are taught by seasoned specialists in the field of Data Science.",
    points: ["Live interactive sessions", "Expert-led training", "Mentorship by industry professionals"],
    image: "live",
  },
  {
    eyebrow: "Hands-on labs & projects",
    title: "Build your hands-on skills through projects and integrated labs",
    text: "AI-assisted analytics labs with real-world workflows, and real-world projects for hands-on mastery. The following activities are compulsory for all the students:",
    points: [
      "Daily/Weekly Assignments",
      "Main Project in Exploratory Data Analysis",
      "Main Project in Machine learning",
      "Capstone Project: Prompt-Driven Data Analytics & Reporting System",
    ],
    image: "labs",
  },
  {
    eyebrow: "Career preparation",
    title: "Soft Skills and Interview Preparation",
    text: "Career-focused, industry-ready training. In the end, you will have the opportunity to leverage the skills and knowledge you gained in the program by working on various projects to showcase your technical expertise to prospective employers.",
    points: ["Profile Building", "Industry Expert Training", "Advance Skills", "Course Exam"],
    image: "career",
  },
];

/** Tools & Technologies Covered – brochure page 19. Icons map to /public/tools. */
export const tools = [
  { name: "Microsoft Excel", short: "Excel", icon: "excel" },
  { name: "NumPy", short: "NumPy", icon: "numpy" },
  { name: "Matplotlib", short: "Matplotlib", icon: "matplotlib" },
  { name: "Generative AI (Gen AI)", short: "Gen AI", icon: "genai" },
  { name: "Python Programming Language", short: "Python", icon: "python" },
  { name: "MySQL or SQL", short: "SQL", icon: "sql" },
  { name: "Power BI", short: "Power BI", icon: "powerbi" },
  { name: "Pandas", short: "Pandas", icon: "pandas" },
  { name: "Tableau", short: "Tableau", icon: "tableau" },
  { name: "Gemini (Google AI Tool)", short: "Gemini", icon: "gemini" },
  { name: "ChatGPT", short: "ChatGPT", icon: "chatgpt" },
  { name: "Seaborn", short: "Seaborn", icon: "seaborn" },
  { name: "Py Charm", short: "PyCharm", icon: "pycharm" },
  { name: "Visual Studio Code", short: "VS Code", icon: "vscode" },
  { name: "Google Colab", short: "Colab", icon: "colab" },
  { name: "Scikit Learn", short: "Scikit-learn", icon: "sklearn" },
  { name: "Mongo DB", short: "MongoDB", icon: "mongodb" },
  { name: "R programming", short: "R", icon: "r" },
];

/** Filter groups for the tools grid (icon keys from `tools`). */
export const toolGroups = [
  { id: "programming", label: "Programming", tools: ["python", "r", "pycharm", "vscode", "colab"] },
  { id: "data", label: "Data & Databases", tools: ["excel", "sql", "mongodb", "pandas", "numpy"] },
  { id: "visualisation", label: "Visualisation & BI", tools: ["powerbi", "tableau", "matplotlib", "seaborn"] },
  { id: "ai", label: "ML & AI", tools: ["sklearn", "genai", "chatgpt", "gemini"] },
];

/** Brochure page 5 job-role list (full). The page shows `careerPaths` below. */
export const jobRoles = [
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "Machine Learning Specialists",
  "Business Analyst",
  "Big Data Engineer",
  "Hadoop/Spark Specialist",
  "AI Engineer",
  "AI Specialists",
  "NLP Engineer",
  "Computer Vision Engineer",
];

/**
 * Career paths shown on the page — only brochure roles this syllabus actually supports,
 * each with the curriculum topics it is built on. Deliberately left out: Machine Learning
 * Engineer, AI Engineer, Big Data Engineer, Hadoop/Spark Specialist, NLP Engineer and
 * Computer Vision Engineer, which depend on topics (MLOps, Hadoop/Spark, NLP, computer
 * vision) that are not in this curriculum.
 */
export const careerPaths = [
  { role: "Data Analyst", icon: "chart-bar-big", builtOn: ["Excel", "SQL", "Python & pandas", "Power BI", "Tableau"] },
  { role: "Business Analyst", icon: "presentation", builtOn: ["Excel", "Power BI dashboards", "Tableau", "Gen AI reporting"] },
  { role: "Data Scientist", icon: "brain", builtOn: ["Statistics & maths", "Python", "R", "Machine learning"] },
  { role: "Machine Learning Specialist", icon: "cpu", builtOn: ["Model building", "Model fine tuning", "Hyper parameter tuning"] },
  { role: "AI Specialist", icon: "sparkles", builtOn: ["Prompt engineering", "Gen AI in analytics pipelines", "Decision support"] },
];

/**
 * "Your future as a Data Analyst – Salary range" exactly as printed on brochure
 * page 5. These are Indian figures in LPA (lakhs per annum), so they are NOT
 * shown on the UAE edition — `salaryUae` below is used instead. Kept here so the
 * brochure content is not lost.
 */
export const salaryProgressionIndia = {
  heading: "Your future as a Data Analyst",
  label: "Salary Range",
  steps: [
    { years: "0 yrs", range: "3 - 4 LPA", pct: 16 },
    { years: "2 yrs", range: "6 - 7 LPA", pct: 30 },
    { years: "4 yrs", range: "10 - 13 LPA", pct: 54 },
    { years: "6 yrs", range: "14 - 18 LPA", pct: 75 },
    { years: "8 yrs", range: "Upto 24 LPA", pct: 100 },
  ],
};

/**
 * UAE market salary ranges for data roles, in the local convention: gross AED
 * per month. Third-party market data, NOT an SMEC figure and not a guarantee —
 * the attribution below is rendered on the page and must stay with the numbers.
 *
 * Source: Elite Recruitments, "UAE Data Analytics Salary Guide 2026",
 * published 21 April 2026 — https://eliterecruitments.com/uae-data-analytics-salary-guide-2026/
 *
 * Note: self-reported aggregators (PayScale UAE, 145 profiles, July 2026;
 * Indeed UAE, 87 salaries, September 2026) report materially lower averages of
 * roughly AED 5,300–5,900 per month. Recruiter guides and self-reported
 * averages diverge widely in the UAE; if SMEC prefers the conservative view,
 * swap the figures here and update `sourceLabel` / `sourceHref` to match.
 */
export const salaryUae = {
  heading: "Your future as a Data Analyst",
  label: "UAE Salary Range",
  unit: "Gross AED per month",
  steps: [
    { stage: "0 – 2 yrs", role: "Data Analyst", range: "8,000 – 12,000", pct: 30 },
    { stage: "2 – 5 yrs", role: "Data Analyst", range: "12,000 – 20,000", pct: 50 },
    { stage: "5+ yrs", role: "Senior Analyst", range: "20,000 – 35,000", pct: 88 },
    { stage: "Lead", role: "Analytics Manager", range: "25,000 – 40,000", pct: 100 },
  ],
  sourceLabel: "Elite Recruitments, UAE Data Analytics Salary Guide 2026 (April 2026)",
  sourceHref: "https://eliterecruitments.com/uae-data-analytics-salary-guide-2026/",
  disclaimer:
    "Independent UAE market ranges, shown for context only. Not an SMEC Technologies figure and not a guarantee of employment or earnings.",
};

/** Career roadmap – brochure page 18 (7 steps). */
export const careerRoadmap = [
  "Not Sure What to Do Next? We'll Guide You",
  "Choose SMEC - Your Career Partner",
  "Career Mentorship That Makes a Difference",
  "Live Training That Builds Real Skills",
  "Everything You Need to Get Hired",
  "Launch Your Career with Confidence",
  "Get Hired by Top Companies",
];

/** "Data Analyst" staircase – brochure page 5, bottom to top. */
export const milestones = [
  "Enroll in SMEC Technologies",
  "Profile Building",
  "Industry Expert Training",
  "Advance Skills",
  "Course Exam",
  "Your Dream Job is Ahead",
];

/** "MNC Companies" – brochure page 17, in printed order. */
/** Brochure page 17 list. Not shown on the UAE edition. */
export const companies = [
  "Mindtree",
  "Intel",
  "Fujitsu",
  "Huawei",
  "Salesforce",
  "Tech Mahindra",
  "Newgen",
  "Adobe",
  "Databricks",
  "Accenture",
  "Infosys",
  "Hexaware",
  "TCS",
  "Intellect",
  "Mphasis",
  "Cognizant",
  "Deloitte",
  "HCLTech",
  "Wipro",
  "Oracle",
  "IBM",
  "Microsoft",
  "Capgemini",
  "Persistent",
  "Ramco",
  "L&T Infotech",
  "KPMG",
];

/**
 * Accreditations & approvals – listed on the existing SMEC course website.
 * The NSDC mark and "25 Years of Excellence" also appear on the brochure cover.
 */
export const accreditations = [
  {
    title: "NSDC Approved Training Partner",
    detail: "National Skill Development Corporation · ID: TP056322",
  },
  {
    title: "Approved Training Partner",
    detail: "Government of India, Ministry of Skill Development & Entrepreneurship",
  },
  {
    title: "25 Years of Excellence",
    detail: "Training division of SMEC Automation Pvt. Ltd",
  },
  {
    title: "SAP Student Academy",
    detail: "Member of the SAP Student Academy Program",
  },
  {
    title: "CII International Certification",
    detail: "Confederation of Indian Industry",
  },
  {
    title: "Approved Trade Test Center",
    detail: "India International Skill Centre",
  },
];

/**
 * PLACEHOLDER TESTIMONIALS - realistic dummy content for design review only.
 * These are not real learner reviews. Before launch, replace every entry with a
 * genuine learner's own words (with their written consent) and remove
 * `placeholder: true`. `npm run build` prints a warning while any remain.
 * Never add these to review or rating structured data.
 */
export const testimonials = [
  {
    name: "Omar Al Hashimi",
    role: "Business Analyst, Dubai",
    quote:
      "I already lived in Excel and Power BI at work, but the prompt engineering module changed how I clean data and write SQL. Turning a business question into a working query is now the quick part of my day.",
    placeholder: true,
  },
  {
    name: "Priya Menon",
    role: "Data Analyst, Sharjah",
    quote:
      "The weekly assignments kept me consistent alongside a full-time job. Finishing the exploratory data analysis project gave me real work to walk through in interviews, not just certificates.",
    placeholder: true,
  },
  {
    name: "Mark Villanueva",
    role: "Finance Associate, Dubai",
    quote:
      "The capstone on prompt-driven reporting was the most useful part for me. Writing a clear executive summary straight from the analysis output is now a normal part of my week.",
    placeholder: true,
  },
  {
    name: "Mariam Al Suwaidi",
    role: "Recent Graduate, Abu Dhabi",
    quote:
      "I wanted practical skills, not only theory. Building the machine learning project with mentor feedback showed me how models are actually prepared, tuned and explained.",
    placeholder: true,
  },
];

/** FAQ – questions mirror brochure headings; every answer is brochure text. */
export const faqs = [
  {
    q: "Who can learn?",
    a: "An individual with Plus 2, IT, Degree, Diploma, B-Tech & Above can Attend this Expertised Skill Development Program.",
  },
  {
    q: "What is the course duration?",
    a: "Course Duration: 5-6 Month.",
  },
  {
    q: "Why should you learn from us?",
    a: "SMEC technologies is the training division of SMEC Automation Pvt. Ltd, a company with extensive experience in Data Science, ensuring their curriculum is aligned with real-world applications. We are a robust data science team that provides hands-on, industry-focused training with a strong emphasis on practical skills. Our courses are taught by seasoned specialists in the field of Data Science, making graduates highly employable.",
  },
  {
    q: "Which tools and technologies are covered?",
    a: "Microsoft Excel, NumPy, Matplotlib, Generative AI (Gen AI), Python Programming Language, MySQL or SQL, Power BI, Pandas, Tableau, Gemini (Google AI Tool), ChatGPT, Seaborn, Py Charm, Visual Studio Code, Google Colab, Scikit Learn, Mongo DB and R programming.",
  },
  {
    q: "What assignments and projects are part of the program?",
    a: "The following activities are compulsory for all the students: Daily/Weekly Assignments, Main Project in Exploratory Data Analysis, and Main Project in Machine learning. The Generative AI module includes a Capstone Project: Prompt-Driven Data Analytics & Reporting System.",
  },
  {
    q: "What job roles can I target after completion?",
    // Aligned with `careerPaths` — the roles this curriculum supports.
    a: "The programme builds skills for roles such as Data Analyst, Business Analyst, Data Scientist, Machine Learning Specialist and AI Specialist.",
  },
  {
    q: "What certification will I receive?",
    a: "Get certified as a next-gen Data Analytics & Gen AI professional with SMEC Technologies – the Professional Certificate in Data Analytics with Prompt Engineering.",
  },
];


/**
 * Site-wide brand, contact and navigation data.
 * Contact details come from the brochure and the existing SMEC course site.
 */

export const site = {
  name: "SMEC Technologies",
  tagline: "Centre for Technology & Professional Training",
  region: "UAE",
  url: "https://smectechnologies.co.in",
  phone: "+91 9778191215",
  phoneHref: "tel:+919778191215",
  email: "info@smectechnologies.co.in",
  whatsapp:
    "https://wa.me/919778191215?text=Hi%2C%20I%E2%80%99m%20interested%20in%20the%20Professional%20Certificate%20in%20Data%20Analytics%20with%20Prompt%20Engineering%20(UAE).%20Could%20you%20please%20share%20more%20details%3F",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/smec-technologies-co-in/" },
    { label: "Instagram", href: "https://www.instagram.com/smec.technologies/" },
    { label: "Facebook", href: "https://www.facebook.com/smectechnologies.co.in" },
    { label: "YouTube", href: "https://www.youtube.com/@SMECTechnologies" },
    { label: "X", href: "https://x.com/smec_tech" },
  ],
};

export const nav = [
  { label: "Course", href: "#course" },
  { label: "About", href: "#about" },
  { label: "Why SMEC", href: "#why" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Career", href: "#career" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#enquire" },
];

export const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

/**
 * "Book a Free Demo Class" lead form, shown in the hero and in the enquiry section. It mirrors the
 * enquiry form on the existing SMEC course site; the course title is sent as a hidden field.
 * `notice` is editorial: replace it with the real batch date / seat count when SMEC confirms one.
 */
export const heroForm = {
  notice: {
    title: "Admissions open for UAE learners",
  },
  pill: "5-6 Month Course",
  heading: "Book a Free Demo Class",
  text: "Get a free demo for the 5-6 month Professional Certificate in Data Analytics with Prompt Engineering. Enter your details and we'll call you back.",
  cta: "Apply Now",
};

/** Enquiry section — left column copy (from the existing enquiry and advisor copy). */
export const enquiry = {
  eyebrow: "Enquire",
  heading: "Take the first step toward your next career move.",
  text: "Share your details and an SMEC advisor will get in touch with course details, batch schedules and next steps for the Professional Certificate in Data Analytics with Prompt Engineering.",
  points: [
    "A call back from an SMEC advisor",
    "Course details, batch schedules and next steps",
    "Answers on eligibility, tools and certification",
  ],
};

/**
 * Photography. All images are hosted on Pexels (Pexels License: free for
 * commercial use, no attribution required) and chosen for UAE / GCC context:
 * learners and professionals in training and workplace settings, plus Dubai
 * architecture used only as supporting location context.
 * `id` is the Pexels photo id — swap it to change an image.
 */
export const media = {
  about: {
    id: "7984741",
    alt: "A man and a woman in traditional Gulf dress working together with a laptop and tablet in a bright modern office",
  },
  careerBand: {
    id: "7984727",
    alt: "A team of professionals in traditional Gulf dress, men and women, working on laptops around a meeting table",
  },
  enquiry: {
    id: "8154232",
    alt: "A professional woman in a headscarf working on a laptop beside printed charts at her desk",
  },
  heroSkyline: {
    id: "19664340",
    alt: "Dubai skyline across the water, with the Burj Khalifa on the horizon",
  },
  live: {
    id: "8939095",
    alt: "A mentor going through work on a laptop with a seated learner in a modern office",
  },
  labs: {
    id: "16007661",
    alt: "A learner working at a computer in a training lab alongside classmates",
  },
  career: {
    id: "7984728",
    alt: "Two Gulf professionals reviewing work together on a laptop and tablet",
  },
  careerFigure: {
    id: "8938682",
    alt: "A candidate and a hiring manager talking across a desk in a modern office",
  },
  enquiryCity: {
    id: "28350363",
    alt: "Modern towers and waterfront at Dubai Marina, United Arab Emirates",
  },
  finalSkyline: {
    id: "692102",
    alt: "Dubai skyline at dusk",
  },
};
