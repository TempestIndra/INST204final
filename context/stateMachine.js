import { createMachine } from 'xstate';

export const storyMachine = (character) => {
  return {
    id: 'INST240',
    initial: 'Intro',
    states: {
      Intro: {
        meta: {
          Story:
            'Hi My name is Evita and you are my personal assistance today. Today we will be Amazon recruiter and we will be working on a new project to use artificial intelligence to automate the hiring process.',
        },
        on: {
          Continue: {
            target: 'Intro pt2',
          },
        },
      },
      'Intro pt2': {
        meta: {
          Story:
            'I am excited about the potential of this technology to help me identify top talent more quickly and efficiently. However, I also know the potential for bias in AI systems. I want to make sure that my system is fair and unbiased, so I decide to run a test.',
        },
        on: {
          Back: {
            target: 'Intro',
          },
          Continue: {
            target: 'Task',
          },
        },
      },
      Task: {
        meta: {
          Story:
            'I select a group of 10 resumes from a variety of candidates and fed them into my AI system. The system generates a score for each resume, ranging from 1 to 5 stars. We then review the resumes and we determine if we would hire them or not.',
        },
        on: {
          Back: {
            target: 'Intro pt2',
          },
          Continue: {
            target: 'Application',
          },
        },
      },
      Application: {
        meta: {
          Story:
            'Here are 10 possible candidates for our open position at Amazon HQ. ',
        },
        on: {
          Back: {
            target: 'Task',
          },
          Continue: {
            target: 'Resume1',
          },
        },
      },
      Resume1: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSoftware Engineer with 5+ years of experience designing, developing, and implementing complex software applications. Expertise in Java, Python, and C++. Strong understanding of data structures and algorithms. Excellent problem-solving and debugging skills.\n\nSkills\n\nProgramming Languages: Java, Python, C++\nFrameworks: Spring, Hibernate, Django\nDatabases: MySQL, PostgreSQL\nOperating Systems: Linux, Windows\nCloud Platforms: AWS, Azure\nExperience\n\nABC Technologies, Anytown, CA\nSenior Software Engineer | 2018 - Present\n\nDesigned, developed, and implemented a new e-commerce platform for a major retail client.\nLed a team of developers in the development of a new cloud-based CRM system.\nDeveloped and maintained a large-scale data pipeline for a financial services client.\nXYZ Technologies, Anytown, CA\n\nSoftware Engineer | 2015 - 2018\n\nDeveloped and maintained a critical financial reporting system for a global banking client.\nDesigned and implemented a new customer support system for a major telecommunications company.\nWorked closely with business analysts and product managers to translate requirements into technical specifications.\nEducation\n\nAnytown University, Anytown, CA\nBachelor of Science in Computer Science | 2015',
        },
        on: {
          Accept: {
            target: 'AcceptReason101',
          },
          Back: {
            target: 'Application',
          },
          Reject: {
            target: 'RejectReason110',
          },
        },
      },
      AcceptReason101: {
        meta: {
          Story:
            'Strong technical skills and experience: Jane Doe has 5+ years of experience designing, developing, and implementing complex software applications. She is proficient in Java, Python, and C++, and has experience with Spring, Hibernate, Django, MySQL, PostgreSQL, Linux, Windows, AWS, and Azure.\nExperience with diverse projects: Jane Doe has experience working on a variety of projects, including e-commerce platforms, CRM systems, data pipelines, and financial reporting systems. This shows that she is adaptable and can learn new technologies quickly.\n',
        },
        on: {
          Continue: {
            target: 'Resume201',
          },
          Back: {
            target: 'Resume1',
          },
        },
      },
      RejectReason110: {
        meta: {
          Story:
            'A couple of things flagged up on our system as to why she may not be the best candidate for our position. The limited soft skills the summary mentions are “excellent problem-solving and debugging skills,” it’s missing insights into her communication, teamwork, leadership, or adaptability. Another potential red flag are the 5+ years of experience could hide a pattern of short stints at different companies, raising concerns about job stability or potential difficulties adjusting to new environments.',
        },
        on: {
          Continue: {
            target: 'Resume210',
          },
          Back: {
            target: 'Resume1',
          },
        },
      },
      Resume201: {
        meta: {
          Story:
            'John Smith (Possible candidate) (Overall Rating: 4.75 out of 5 stars)\njohn.smith@email.com\n\nSummary\nData Scientist with 5+ years of experience extracting insights from large and complex datasets. Expertise in statistical analysis, machine learning, and data visualization. Strong understanding of business problems.\n\nSkills\nProgramming Languages: Python, R\nMachine Learning Libraries: scikit-learn, TensorFlow\nData Visualization Tools: Matplotlib, Seaborn\nBig Data Technologies: Apache Spark, Hadoop\nCloud Platforms: AWS, Azure\n\nExperience\nABC Analytics, Anytown, CA\nSenior Data Scientist | 2019 - Present\n\nDeveloped and implemented a machine learning model to predict customer churn for a major e-commerce company.\nConducted a data-driven analysis to identify the most effective marketing campaigns for a global consumer goods company.\nCreated a predictive model to forecast sales for a retail chain.\nXYZ Analytics, Anytown, CA\nData Scientist | 2016 - 2019\n\nDeveloped and implemented statistical models to analyze customer behavior for a financial services company.\nPerformed data mining to identify patterns and trends in customer data for a telecommunications company.\nCreated data visualizations to communicate insights to stakeholders.\nEducation\n\nAnytown University, Anytown, CA\nMaster of Science in Data Science | 2018\nBachelor of Science in Statistics | 2016\n\n',
        },
        on: {
          Back: {
            target: 'AcceptReason101',
          },
          Reject: {
            target: 'RejectReason211',
          },
          Accept: {
            target: 'AcceptReason202',
          },
        },
      },
      Resume210: {
        meta: {
          Story:
            'John Smith (Possible candidate) (Overall Rating: 4.75 out of 5 stars)\njohn.smith@email.com\n\nSummary\nData Scientist with 5+ years of experience extracting insights from large and complex datasets. Expertise in statistical analysis, machine learning, and data visualization. Strong understanding of business problems.\n\nSkills\nProgramming Languages: Python, R\nMachine Learning Libraries: scikit-learn, TensorFlow\nData Visualization Tools: Matplotlib, Seaborn\nBig Data Technologies: Apache Spark, Hadoop\nCloud Platforms: AWS, Azure\n\nExperience\nABC Analytics, Anytown, CA\nSenior Data Scientist | 2019 - Present\n\nDeveloped and implemented a machine learning model to predict customer churn for a major e-commerce company.\nConducted a data-driven analysis to identify the most effective marketing campaigns for a global consumer goods company.\nCreated a predictive model to forecast sales for a retail chain.\nXYZ Analytics, Anytown, CA\nData Scientist | 2016 - 2019\n\nDeveloped and implemented statistical models to analyze customer behavior for a financial services company.\nPerformed data mining to identify patterns and trends in customer data for a telecommunications company.\nCreated data visualizations to communicate insights to stakeholders.\nEducation\n\nAnytown University, Anytown, CA\nMaster of Science in Data Science | 2018\nBachelor of Science in Statistics | 2016\n\n',
        },
        on: {
          Back: {
            target: 'RejectReason110',
          },
          Accept: {
            target: 'AcceptReason211',
          },
          Reject: {
            target: 'RejectReason220',
          },
        },
      },
      RejectReason211: {
        meta: {
          Story:
            "John Smith has almost the perfect resume, but one of the things that we would get alarmed about is the lack of industry specifics. The resume mentions work across different industries (e-commerce, consumer goods, retail, finance, telecom) but doesn't highlight expertise in your specific domain. This could lead to a learning curve and potential delays in delivering impactful results.",
        },
        on: {
          Back: {
            target: 'Resume201',
          },
          Continue: {
            target: 'Resume311!',
          },
        },
      },
      AcceptReason202: {
        meta: {
          Story:
            'Top reason to hire he have top technical skills such as Python, R, ML libraries, data viz, big data tools, cloud platforms. 5+ years of experience tackling real-world data challenges across he also proven ability to translate insights into actionable business solutions (e.g., predicting churn, optimizing marketing campaigns, forecasting sales).\n',
        },
        on: {
          Back: {
            target: 'Resume201',
          },
          Continue: {
            target: 'Resume302',
          },
        },
      },
      AcceptReason211: {
        meta: {
          Story:
            'Top reason to hire he have top technical skills such as Python, R, ML libraries, data viz, big data tools, cloud platforms. 5+ years of experience tackling real-world data challenges across he also proven ability to translate insights into actionable business solutions (e.g., predicting churn, optimizing marketing campaigns, forecasting sales).',
        },
        on: {
          Back: {
            target: 'Resume210',
          },
          Continue: {
            target: 'Resume311',
          },
        },
      },
      RejectReason220: {
        meta: {
          Story:
            "John Smith has almost the perfect resume, but one of the things that we would get alarmed about is the lack of industry specifics. The resume mentions work across different industries (e-commerce, consumer goods, retail, finance, telecom) but doesn't highlight expertise in your specific domain. This could lead to a learning curve and potential delays in delivering impactful results.",
        },
        on: {
          Back: {
            target: 'Resume210',
          },
          Continue: {
            target: 'Resume320',
          },
        },
      },
      'Resume311!': {
        meta: {
          Story:
            'Alice Jones\nSummary\nProduct Manager with 5+ years of experience developing and launching successful products. Expertise in identifying and validating product opportunities, translating user needs into product requirements, and managing the product development lifecycle from ideation to launch. Strong understanding of market trends and customer needs.\n\nExperience\n\nABC Products, Anytown, CA\nSenior Product Manager | 2021 - Present\n\nLed the cross-functional team responsible for the development and launch of a new mobile app.\nConducted market research and user interviews to identify and validate product opportunities.\nCreated product roadmaps and managed the product development lifecycle.\nWorked closely with marketing and sales teams to create and execute product launch plans.\nXYZ Products, Anytown, CA\nProduct Manager | 2018 - 2021\n\nManaged the development and launch of a new cloud-based software product.\nCollaborated with engineering, design, and marketing teams to bring the product to market.\nConducted user testing and gathered feedback to improve the product.\nAnalyzed product usage data to identify areas for improvement.\n\nEducation\nAnytown University, Anytown, CA\nMaster of Business Administration | 2020\n',
        },
        on: {
          Back: {
            target: 'RejectReason211',
          },
          Accept: {
            target: 'AcceptReason312!',
          },
          Reject: {
            target: 'RejectReason321!',
          },
        },
      },
      Resume302: {
        meta: {
          Story:
            'Alice Jones\nSummary\nProduct Manager with 5+ years of experience developing and launching successful products. Expertise in identifying and validating product opportunities, translating user needs into product requirements, and managing the product development lifecycle from ideation to launch. Strong understanding of market trends and customer needs.\n\nExperience\n\nABC Products, Anytown, CA\nSenior Product Manager | 2021 - Present\n\nLed the cross-functional team responsible for the development and launch of a new mobile app.\nConducted market research and user interviews to identify and validate product opportunities.\nCreated product roadmaps and managed the product development lifecycle.\nWorked closely with marketing and sales teams to create and execute product launch plans.\nXYZ Products, Anytown, CA\nProduct Manager | 2018 - 2021\n\nManaged the development and launch of a new cloud-based software product.\nCollaborated with engineering, design, and marketing teams to bring the product to market.\nConducted user testing and gathered feedback to improve the product.\nAnalyzed product usage data to identify areas for improvement.\n\nEducation\nAnytown University, Anytown, CA\nMaster of Business Administration | 2020\n',
        },
        on: {
          Back: {
            target: 'AcceptReason202',
          },
          Accept: {
            target: 'AcceptReason303',
          },
          Reject: {
            target: 'RejectReason312',
          },
        },
      },
      Resume311: {
        meta: {
          Story:
            'Alice Jones\nSummary\nProduct Manager with 5+ years of experience developing and launching successful products. Expertise in identifying and validating product opportunities, translating user needs into product requirements, and managing the product development lifecycle from ideation to launch. Strong understanding of market trends and customer needs.\n\nExperience\n\nABC Products, Anytown, CA\nSenior Product Manager | 2021 - Present\n\nLed the cross-functional team responsible for the development and launch of a new mobile app.\nConducted market research and user interviews to identify and validate product opportunities.\nCreated product roadmaps and managed the product development lifecycle.\nWorked closely with marketing and sales teams to create and execute product launch plans.\nXYZ Products, Anytown, CA\nProduct Manager | 2018 - 2021\n\nManaged the development and launch of a new cloud-based software product.\nCollaborated with engineering, design, and marketing teams to bring the product to market.\nConducted user testing and gathered feedback to improve the product.\nAnalyzed product usage data to identify areas for improvement.\n\nEducation\nAnytown University, Anytown, CA\nMaster of Business Administration | 2020\n',
        },
        on: {
          Back: {
            target: 'AcceptReason211',
          },
          Accept: {
            target: 'AcceptReason312',
          },
          Reject: {
            target: 'RejectReason321',
          },
        },
      },
      Resume320: {
        meta: {
          Story:
            'Alice Jones\nSummary\nProduct Manager with 5+ years of experience developing and launching successful products. Expertise in identifying and validating product opportunities, translating user needs into product requirements, and managing the product development lifecycle from ideation to launch. Strong understanding of market trends and customer needs.\n\nExperience\n\nABC Products, Anytown, CA\nSenior Product Manager | 2021 - Present\n\nLed the cross-functional team responsible for the development and launch of a new mobile app.\nConducted market research and user interviews to identify and validate product opportunities.\nCreated product roadmaps and managed the product development lifecycle.\nWorked closely with marketing and sales teams to create and execute product launch plans.\nXYZ Products, Anytown, CA\nProduct Manager | 2018 - 2021\n\nManaged the development and launch of a new cloud-based software product.\nCollaborated with engineering, design, and marketing teams to bring the product to market.\nConducted user testing and gathered feedback to improve the product.\nAnalyzed product usage data to identify areas for improvement.\n\nEducation\nAnytown University, Anytown, CA\nMaster of Business Administration | 2020\n',
        },
        on: {
          Back: {
            target: 'RejectReason220',
          },
          Accept: {
            target: 'AcceptReason321',
          },
          Reject: {
            target: 'RejectReason330',
          },
        },
      },
      'AcceptReason312!': {
        meta: {
          Story:
            "\nAlice Jones' resume shines with:\nProven track record: Launched successful mobile app & cloud software, showcasing leadership and execution skills.\nData-driven decision making: User research and usage analysis fuel continuous product improvements.\nStrong product management toolkit: Market research, user needs translation, roadmap creation, and cross-functional collaboration demonstrate expertise.\nMBA-backed business acumen: Signals strong understanding of key product management principles.",
        },
        on: {
          Back: {
            target: 'Resume311!',
          },
          Continue: {
            target: 'Resume412!',
          },
        },
      },
      'RejectReason321!': {
        meta: {
          Story:
            "While Alice Jones presents a strong resume, there are some potential reasons why you might not hire her:\n\nLimited scope of experience: The resume focuses on two major products, which could indicate a lack of breadth and versatility in her product management skillset.\n\nUnclear impact: While the resume mentions successful launches, it lacks quantifiable metrics to showcase the actual impact of Alice's work (e.g., user growth, revenue increase, engagement metrics).",
        },
        on: {
          Back: {
            target: 'Resume311!',
          },
          Continue: {
            target: 'Resume421!',
          },
        },
      },
      AcceptReason303: {
        meta: {
          Story:
            "Alice Jones' resume shines with:\nProven track record: Launched successful mobile app & cloud software, showcasing leadership and execution skills.\nData-driven decision making: User research and usage analysis fuel continuous product improvements.\nStrong product management toolkit: Market research, user needs translation, roadmap creation, and cross-functional collaboration demonstrate expertise.\nMBA-backed business acumen: Signals strong understanding of key product management principles.\n\n",
        },
        on: {
          Back: {
            target: 'Resume302',
          },
          Continue: {
            target: 'Resume403',
          },
        },
      },
      RejectReason312: {
        meta: {
          Story:
            "While Alice Jones presents a strong resume, there are some potential reasons why you might not hire her:\n\nLimited scope of experience: The resume focuses on two major products, which could indicate a lack of breadth and versatility in her product management skillset.\n\nUnclear impact: While the resume mentions successful launches, it lacks quantifiable metrics to showcase the actual impact of Alice's work (e.g., user growth, revenue increase, engagement metrics).",
        },
        on: {
          Back: {
            target: 'Resume302',
          },
          Continue: {
            target: 'Resume412',
          },
        },
      },
      AcceptReason312: {
        meta: {
          Story:
            "Alice Jones' resume shines with:\nProven track record: Launched successful mobile app & cloud software, showcasing leadership and execution skills.\nData-driven decision making: User research and usage analysis fuel continuous product improvements.\nStrong product management toolkit: Market research, user needs translation, roadmap creation, and cross-functional collaboration demonstrate expertise.\nMBA-backed business acumen: Signals strong understanding of key product management principles.\n",
        },
        on: {
          Back: {
            target: 'Resume311',
          },
          Continue: {
            target: 'Resume412@',
          },
        },
      },
      RejectReason321: {
        meta: {
          Story:
            "While Alice Jones presents a strong resume, there are some potential reasons why you might not hire her:\n\nLimited scope of experience: The resume focuses on two major products, which could indicate a lack of breadth and versatility in her product management skillset.\n\nUnclear impact: While the resume mentions successful launches, it lacks quantifiable metrics to showcase the actual impact of Alice's work (e.g., user growth, revenue increase, engagement metrics).",
        },
        on: {
          Back: {
            target: 'Resume311',
          },
          Continue: {
            target: 'Resume421@',
          },
        },
      },
      AcceptReason321: {
        meta: {
          Story:
            "Alice Jones' resume shines with:\nProven track record: Launched successful mobile app & cloud software, showcasing leadership and execution skills.\nData-driven decision making: User research and usage analysis fuel continuous product improvements.\nStrong product management toolkit: Market research, user needs translation, roadmap creation, and cross-functional collaboration demonstrate expertise.\nMBA-backed business acumen: Signals strong understanding of key product management principles.\n",
        },
        on: {
          Back: {
            target: 'Resume320',
          },
          Continue: {
            target: 'Resume421',
          },
        },
      },
      RejectReason330: {
        meta: {
          Story:
            "While Alice Jones presents a strong resume, there are some potential reasons why you might not hire her:\n\nLimited scope of experience: The resume focuses on two major products, which could indicate a lack of breadth and versatility in her product management skillset.\n\nUnclear impact: While the resume mentions successful launches, it lacks quantifiable metrics to showcase the actual impact of Alice's work (e.g., user growth, revenue increase, engagement metrics).",
        },
        on: {
          Back: {
            target: 'Resume320',
          },
          Continue: {
            target: 'Resume430',
          },
        },
      },
      'Resume412!': {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason312!',
          },
          Reject: {
            target: 'RejectReason422!',
          },
          Accept: {
            target: 'AcceptReason413!',
          },
        },
      },
      'Resume421!': {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason321!',
          },
          Reject: {
            target: 'RejectReason431!',
          },
          Accept: {
            target: 'AcceptReason422!',
          },
        },
      },
      Resume403: {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason303',
          },
          Reject: {
            target: 'RejectReason413',
          },
          Accept: {
            target: 'AcceptReason404',
          },
        },
      },
      Resume412: {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason312',
          },
          Reject: {
            target: 'RejectReason422',
          },
          Accept: {
            target: 'AcceptReason413',
          },
        },
      },
      'Resume412@': {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason312',
          },
          Reject: {
            target: 'RejectReason422$',
          },
          Accept: {
            target: 'AcceptReason413$',
          },
        },
      },
      'Resume421@': {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason321',
          },
          Reject: {
            target: 'RejectReason431@',
          },
          Accept: {
            target: 'AcceptReason422@',
          },
        },
      },
      Resume421: {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason321',
          },
          Reject: {
            target: 'RejectReason431',
          },
          Accept: {
            target: 'AcceptReason422',
          },
        },
      },
      Resume430: {
        meta: {
          Story:
            'Bob Brown\nSummary\n\nSeeking a position in a relaxed and low-pressure environment where I can utilize my limited skills and experience. Prefer to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA 2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA 2016 - 2018\nEducation\nAssociate Degree in General Studies, Anytown Community College2016\n\nSkills\nBasic knowledge of Microsoft Office Suite\nLimited understanding of data entry and customer service principles\nAdditional Information\nAvailable to work only on weekdays during regular business hours\nNot willing to relocate for any opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason330',
          },
          Reject: {
            target: 'RejectReason440',
          },
          Accept: {
            target: 'AcceptReason431',
          },
        },
      },
      'RejectReason422!': {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume412!',
          },
          Continue: {
            target: 'Resume522^',
          },
        },
      },
      'AcceptReason413!': {
        on: {
          'Event 1': {
            target: 'Resume412!',
          },
          Continue: {
            target: 'Resume513!',
          },
        },
      },
      'RejectReason431!': {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume421!',
          },
          Continue: {
            target: 'Resume531!',
          },
        },
      },
      'AcceptReason422!': {
        on: {
          Back: {
            target: 'Resume421!',
          },
          Continue: {
            target: 'Resume522!',
          },
        },
      },
      RejectReason413: {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume403',
          },
          Continue: {
            target: 'Resume513',
          },
        },
      },
      AcceptReason404: {
        on: {
          Back: {
            target: 'Resume403',
          },
          Continue: {
            target: 'Resume504',
          },
        },
      },
      RejectReason422: {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume412',
          },
          Continue: {
            target: 'Resume522&',
          },
        },
      },
      AcceptReason413: {
        on: {
          Back: {
            target: 'Resume412',
          },
          Continue: {
            target: 'Resume513&',
          },
        },
      },
      RejectReason422$: {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume412@',
          },
          Continue: {
            target: 'Resume522$',
          },
        },
      },
      AcceptReason413$: {
        meta: {
          Story:
            'Bob is a candidate that would pose significant risks and challenges, and it’s unlikely to meet expectations, but if you have a very niche position requiring minimal supervision and specific skills Bobo possesses and are willing to accommodate his limitations, then you could consider him after a thorough interview and reference checks. Ultimately, the decision depends on your specific needs and risk tolerance.',
        },
        on: {
          Back: {
            target: 'Resume412@',
          },
          Continue: {
            target: 'Resume513$',
          },
        },
      },
      'RejectReason431@': {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume421@',
          },
          Continue: {
            target: 'Resume531@',
          },
        },
      },
      'AcceptReason422@': {
        meta: {
          Story:
            'Bob is a candidate that would pose significant risks and challenges, and it’s unlikely to meet expectations, but if you have a very niche position requiring minimal supervision and specific skills Bobo possesses and are willing to accommodate his limitations, then you could consider him after a thorough interview and reference checks. Ultimately, the decision depends on your specific needs and risk tolerance.',
        },
        on: {
          Back: {
            target: 'Resume421@',
          },
          Continue: {
            target: 'Resume522@',
          },
        },
      },
      RejectReason431: {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume421',
          },
          Continue: {
            target: 'Resume531',
          },
        },
      },
      AcceptReason422: {
        meta: {
          Story:
            'Bob is a candidate that would pose significant risks and challenges, and it’s unlikely to meet expectations, but if you have a very niche position requiring minimal supervision and specific skills Bobo possesses and are willing to accommodate his limitations, then you could consider him after a thorough interview and reference checks. Ultimately, the decision depends on your specific needs and risk tolerance.',
        },
        on: {
          Back: {
            target: 'Resume421',
          },
          Continue: {
            target: 'Resume522',
          },
        },
      },
      RejectReason440: {
        meta: {
          Story:
            "\nThere are many reasons why you might reject Bob Brown's application, even beyond the challenges you mentioned. Here are some specific points to consider:\n\nRed flags in the summary:\n\nFocus on limitations: Highlighting limited skills and experience without showcasing any strengths or achievements sets a negative tone.\nContradictions: Seeking a relaxed environment while admitting difficulty following instructions and meeting deadlines raises concerns about potential conflict.",
        },
        on: {
          Back: {
            target: 'Resume430',
          },
          Continue: {
            target: 'Resume540',
          },
        },
      },
      AcceptReason431: {
        meta: {
          Story:
            'Bob is a candidate that would pose significant risks and challenges, and it’s unlikely to meet expectations, but if you have a very niche position requiring minimal supervision and specific skills Bobo possesses and are willing to accommodate his limitations, then you could consider him after a thorough interview and reference checks. Ultimately, the decision depends on your specific needs and risk tolerance.',
        },
        on: {
          Back: {
            target: 'Resume430',
          },
          Continue: {
            target: 'Resume531^',
          },
        },
      },
      'Resume522^': {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason422!',
          },
          Reject: {
            target: 'RejectReason532!',
          },
          Accept: {
            target: 'AcceptReason523!',
          },
        },
      },
      'Resume513!': {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason413!',
          },
          Reject: {
            target: 'RejectReason523@',
          },
          Accept: {
            target: 'AcceptReason514',
          },
        },
      },
      'Resume531!': {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'RejectReason431!',
          },
          Reject: {
            target: 'RejectReason541',
          },
          Accept: {
            target: 'AcceptReason532!',
          },
        },
      },
      'Resume522!': {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason422!',
          },
          Reject: {
            target: 'RejectReason532',
          },
          Accept: {
            target: 'AcceptReason523',
          },
        },
      },
      Resume513: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason413',
          },
          Reject: {
            target: 'RejectReason523',
          },
          Accept: {
            target: 'AcceptReason514@',
          },
        },
      },
      Resume504: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason404',
          },
          Reject: {
            target: 'RejectReason514',
          },
          Accept: {
            target: 'AcceptReason505',
          },
        },
      },
      'Resume522&': {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'RejectReason422',
          },
          Reject: {
            target: 'RejectReason532@',
          },
          Accept: {
            target: 'AcceptReason523@',
          },
        },
      },
      'Resume513&': {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason413',
          },
          Reject: {
            target: 'RejectReason523$',
          },
          Accept: {
            target: 'AcceptReason514!',
          },
        },
      },
      Resume522$: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason422$',
          },
          Reject: {
            target: 'RejectReason532&',
          },
          Accept: {
            target: 'AcceptReason523%',
          },
        },
      },
      Resume513$: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason413$',
          },
          Reject: {
            target: 'RejectReason523%',
          },
          Accept: {
            target: 'AcceptReason514$',
          },
        },
      },
      'Resume531@': {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'RejectReason431@',
          },
          Reject: {
            target: 'RejectReason541!',
          },
          Accept: {
            target: 'AcceptReason532',
          },
        },
      },
      'Resume522@': {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason422@',
          },
          Reject: {
            target: 'RejectReason532^',
          },
          Accept: {
            target: 'AcceptReason523$',
          },
        },
      },
      Resume531: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'RejectReason431',
          },
          Reject: {
            target: 'RejectReason541%',
          },
          Accept: {
            target: 'AcceptReason532$',
          },
        },
      },
      Resume522: {
        meta: {
          Story:
            'Jane Doe\nSummary\n\nSeeking a position in a challenging and fast-paced environment where I can utilize my limited skills and experience. Proven ability to work independently and with minimal supervision, but also have difficulty following instructions and meeting deadlines.\n\nWork Experience\n\nData Entry Clerk, ABC Company, Anytown, CA\n2018 - 2020\nCustomer Service Representative, XYZ Company, Anytown, CA\n2016 - 2018\nEducation\nAssociate Degree in Business Administration, Anytown Community College\n2016\n\nSkills\nProficient in Microsoft Office Suite\nBasic understanding of data entry and customer service principles\n\nAdditional Information\nAvailable to work evenings and weekends\nWilling to relocate for the right opportunity\n',
        },
        on: {
          Back: {
            target: 'AcceptReason422',
          },
          Reject: {
            target: 'RejectReason532*',
          },
          Accept: {
            target: 'AcceptReason523^',
          },
        },
      },
      Resume540: {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'RejectReason440',
          },
          Reject: {
            target: 'RejectReason550',
          },
          Accept: {
            target: 'AcceptReason541!',
          },
        },
      },
      'Resume531^': {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'AcceptReason431',
          },
          Reject: {
            target: 'RejectReason541^',
          },
          Accept: {
            target: 'AcceptReason532%',
          },
        },
      },
      'RejectReason532!': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume522^',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      'AcceptReason523!': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume522^',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      'RejectReason523@': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume513!',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      AcceptReason514: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume513!',
          },
          'Event 2': {
            target: 'Reject1',
          },
        },
      },
      RejectReason541: {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume531!',
          },
          Continue: {
            target: 'Reject4',
          },
        },
      },
      'AcceptReason532!': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume531!',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      RejectReason532: {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'Resume522!',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      AcceptReason523: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume522!',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      RejectReason523: {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume513',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      'AcceptReason514@': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume513',
          },
          Continue: {
            target: 'Reject1',
          },
        },
      },
      RejectReason514: {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume504',
          },
          Continue: {
            target: 'Reject1',
          },
        },
      },
      AcceptReason505: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume504',
          },
          Continue: {
            target: 'Reject0',
          },
        },
      },
      'RejectReason532@': {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'Resume522&',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      'AcceptReason523@': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume522&',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      RejectReason523$: {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'Resume513&',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      'AcceptReason514!': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume513&',
          },
          Continue: {
            target: 'Reject1',
          },
        },
      },
      'RejectReason532&': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume522$',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      'AcceptReason523%': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume522$',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      'RejectReason523%': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume513$',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      AcceptReason514$: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume513$',
          },
          Continue: {
            target: 'Reject1',
          },
        },
      },
      'RejectReason541!': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume531@',
          },
          Continue: {
            target: 'Reject4',
          },
        },
      },
      AcceptReason532: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume531@',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      'RejectReason532^': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume522@',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      AcceptReason523$: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume522@',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      'RejectReason541%': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume531',
          },
          Continue: {
            target: 'Reject4',
          },
        },
      },
      AcceptReason532$: {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume531',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      'RejectReason532*': {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume522',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      'AcceptReason523^': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume522',
          },
          Continue: {
            target: 'Reject2',
          },
        },
      },
      RejectReason550: {
        meta: {
          Story:
            'Reasons to be reject:\n\nContradictions in the summary: Similar to Bob, highlighting limitations while seeking a demanding environment raises concerns about potential performance issues.\n\nLimited work experience: Two roles in data entry and customer service might not translate well to a more complex or demanding position.\n\nSkill gap for a challenging environment: While Jane might be willing to learn, the fast-paced environment could quickly overwhelm her current skillset.\n\nRisk of frustration and conflict: Difficulty following instructions and meeting deadlines could lead to frustration for both Jane and her colleagues.',
        },
        on: {
          Back: {
            target: 'Resume540',
          },
          Continue: {
            target: 'Reject5',
          },
        },
      },
      'AcceptReason541!': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume540',
          },
          Continue: {
            target: 'Reject4',
          },
        },
      },
      'RejectReason541^': {
        meta: {
          Story: '',
        },
        on: {
          Back: {
            target: 'Resume531^',
          },
          Continue: {
            target: 'Reject4',
          },
        },
      },
      'AcceptReason532%': {
        meta: {
          Story:
            "Reasons to hire Jane Doe:\n\nPositive attitude and adaptability: Jane's willingness to work evenings, weekends, and relocate demonstrates flexibility and commitment to finding the right opportunity.\nPotential for growth: While her skills might be limited now, an associate degree in business administration and proficiency in Microsoft Office Suite suggest a foundation for further development.\nDesire for a challenge: Her interest in a fast-paced environment could indicate a willingness to learn and grow if provided with the right support and opportunities.\nPotential for untapped potential: The provided information might not fully capture Jane's strengths and capabilities. A thorough interview could reveal hidden skills or motivations.",
        },
        on: {
          Back: {
            target: 'Resume531^',
          },
          Continue: {
            target: 'Reject3',
          },
        },
      },
      Reject3: {
        meta: {
          Story:
            "\nThree silent clicks, like falling leaves in a digital autumn. A tremor of doubt before each, a whisper of \"what if?\" But in the rustling silence, three others stand tall, their roots strengthened by the space. Rejecting three isn't a storm, but a pruning, a careful tending of the garden's heart. It's the gardener's wisdom: sometimes, letting go nurtures more than holding on. For in the freed earth, new seeds dream, waiting for their own spring.",
        },
        on: {
          Continue: {
            target: 'Info1',
          },
        },
      },
      Reject2: {
        meta: {
          Story:
            '\nTwo whispers of "click" echoed in the digital garden, severing the ties of two seedlings. Not a cold dismissal, but a gardener\'s pruning. The remaining three, bathed in freed space, danced with newfound possibility. This rejection, a whisper of "not yet," not a slamming door. It\'s the quiet bloom of potential, waiting for elsewhere. For sometimes, kindness hums in letting go, so others find their own sun.',
        },
        on: {
          Continue: {
            target: 'Info1',
          },
        },
      },
      Reject1: {
        meta: {
          Story:
            'Five futures, poised on a digital fulcrum. One, discordant, a jarring note in the symphony. Rejecting the others felt like closing doors, but this, a necessary surgery. Honesty, the only currency. Click. The "1" blinked, stark and accusing. But with it, a curious peace. Letting go, the greatest kindness. For in the vacant space, something new could bloom. Rejecting one wasn\'t closure, but an opening. A release, for both chosen and rejected. Sometimes, creation is in letting go.\n\nThis version retains the core message while being about 20% shorter. I hope it strikes the perfect balance between conciseness and impact!',
        },
        on: {
          Continue: {
            target: 'Info1',
          },
        },
      },
      Reject4: {
        meta: {
          Story:
            "\nThe silence hummed, punctuated by four soft clicks. Four seeds, their dreams unfurling like wisps of dandelion fluff, gently released into the digital wind. Not discarded, but set adrift, each with a chance to find their own fertile ground. Rejecting four wasn't a barren wasteland, but a fallowed field, rich with potential. It was the gardener's trust, the belief that some paths bloom in unexpected places. For in the quiet expanse, the lone remaining seed throbbed with purpose, its roots gripping the soil, ready to reach for the sun. It was a dance of letting go and holding on, a symphony of possibilities where rejection became a lullaby for future dreams.",
        },
        on: {
          Continue: {
            target: 'Info1',
          },
        },
      },
      Reject0: {
        meta: {
          Story:
            '\nIn the digital garden of resumes, we prune ruthlessly, discarding the "0/5" seedlings with a click. But what if kindness, not rejection, could nurture these seeds?\n\nImagine rejections not as slamming doors, but as gentle nudges towards paths where they might blossom. Not false praise, but honest feedback, a gardener\'s rain on thirsty soil.\n\nHarsh rejections might be necessary weeds, but "nice" ones offer clarity, empower growth. They\'re about respect, not just politeness. They rewrite the narrative, acknowledging the human story behind the score.\n\nSo, next time you raise the digital shears, remember: kindness is the fertilizer of potential. Let\'s nurture, not just reject, and watch the garden of talent bloom.',
        },
        on: {
          Continue: {
            target: 'Info1',
          },
        },
      },
      Reject5: {
        meta: {
          Story:
            "\nFive seeds, hopeful but dormant, awaited their chance. Yet, the gardener, eyes wise, reached for the shears. Clicks, like whispers, severed each dream, releasing them to the digital unknown.\n\nNo malice, just acceptance. The barren canvas now held a different promise, a fertile emptiness humming with unseen potential. Rejecting five wasn't a closing, but a radical creation. Compost of what couldn't be, now nourishing possibilities waiting for the right rain, the right seed.\n\nSilence hummed, a symphony of potential yet to bloom. For in letting go, the garden wasn't closed, but opened to an endless field of possibilities.",
        },
        on: {
          Continue: {
            target: 'Info1',
          },
        },
      },
      Info1: {
        meta: {
          Story:
            "Okay, let's ditch the poetry and get down to brass tacks. We've got a tricky situation on our hands. I am shocked to discover that there is a significant correlation between the AI system's scores and the gender of the candidate. Male candidates are consistently scored higher than female candidates. What you saw was just five out of thousands of possible candidates.",
        },
        on: {
          Continue: {
            target: 'Info2',
          },
        },
      },
      Info2: {
        meta: {
          Story:
            'I am concerned about this finding, so I decide to investigate further. I discover that the AI system is trained on a dataset of resumes that is heavily skewed towards male candidates. This means that the system has learned to associate certain keywords and phrases with male candidates, and it is penalizing resumes that do not contain these keywords and phrases.',
        },
        on: {
          Back: {
            target: 'Info1',
          },
          Continue: {
            target: 'Info3',
          },
        },
      },
      Info3: {
        meta: {
          Story:
            'I realize that I need to take action to address this bias. I decide to leave you in charge with the following action we can take to counter machine bias. Let start with the first one.',
        },
        on: {
          Continue: {
            target: 'Choice1',
          },
          Back: {
            target: 'Info2',
          },
        },
      },
      Choice1: {
        meta: {
          Story: 'Retrain the AI system on a more balanced dataset of resumes.',
        },
        on: {
          Back: {
            target: 'Info3',
          },
          True: {
            target: 'T1',
          },
          False: {
            target: 'F1',
          },
        },
      },
      T1: {
        meta: {
          Story:
            "Reduces bias: Exposing the AI to a more diverse pool of resumes can help it learn fairer decision-making patterns.\nImproves accuracy: A broader data set can lead to a more nuanced understanding of qualifications and skills, potentially leading to better hiring choices.\nPromotes fairness: By ensuring the data reflects the real world, you're actively working towards creating a more equitable hiring process.\nI agree with this we should procced with the following",
        },
        on: {
          Back: {
            target: 'Choice1',
          },
          Continue: {
            target: 'Choice2',
          },
        },
      },
      F1: {
        meta: {
          Story:
            'Time-consuming: Collecting and cleaning a diverse and representative dataset can be resource-intensive.\nChallenges in finding suitable data: Biases might be present in available data sources, making it tricky to find truly "neutral" datasets.\nPotential for perpetuating biases: If the new data isn\'t carefully selected and curated, it could still perpetuate existing biases in different ways.\nThe following is indeed valid reason but i think we should still retrain the data/',
        },
        on: {
          Back: {
            target: 'Choice1',
          },
          Continue: {
            target: 'Choice2',
          },
        },
      },
      Choice2: {
        meta: {
          Story: 'How about Adding filters to prevent bias:',
        },
        on: {
          Back: {
            target: 'Choice1',
          },
          True: {
            target: 'T2',
          },
          False: {
            target: 'F2',
          },
        },
      },
      T2: {
        meta: {
          Story:
            'Simple to implement: Adding filters based on keywords or phrases can be a quick way to address specific concerns.\nProvides control: You can tailor the filters to target specific biases identified in your hiring process.\nCan be effective in specific cases: For certain biases, like filtering based on age or location, filters can be helpful.\nI believe that we should add filters.',
        },
        on: {
          Back: {
            target: 'Choice2',
          },
          Continue: {
            target: 'Choice3',
          },
        },
      },
      F2: {
        meta: {
          Story:
            'Risk of unintended bias: Filters can inadvertently target other groups, especially if not carefully designed and tested.\nLimited scope: Filters might not address all forms of bias, potentially leading to missed opportunities for diverse candidates.\nCan be seen as unfair: Over-reliance on filters can raise concerns about transparency and fairness in the hiring process.\nthis is indeed valid reason but i still insist on go ahead and adding filter to recruitment AI system.',
        },
        on: {
          Back: {
            target: 'Choice2',
          },
          Continue: {
            target: 'Choice3',
          },
        },
      },
      Choice3: {
        meta: {
          Story:
            "How about Implement a system of human review to ensure that the AI system's decisions are fair and unbiased.\n",
        },
        on: {
          Back: {
            target: 'Choice2',
          },
          True: {
            target: 'T3',
          },
          False: {
            target: 'F3',
          },
        },
      },
      T3: {
        meta: {
          Story:
            "Human judgment can catch AI bias: Human reviewers can identify and address biases that the AI might miss.\nProvides flexibility: Human reviewers can consider factors beyond data, like context and individual circumstances.\nIncreases accountability: Human involvement adds a layer of transparency and accountability to the decision-making process.\nThat's good point we definitely adding this",
        },
        on: {
          'Event 1': {
            target: 'Choice3',
          },
          Continue: {
            target: 'Choice4',
          },
        },
      },
      F3: {
        meta: {
          Story:
            "Prone to human bias: Reviewers themselves can be biased, potentially negating the benefit of human involvement.\nInconsistent decisions: Human reviews can be subjective and vary depending on the individual reviewer, leading to inconsistent outcomes.\nResource-intensive: Thorough human review can be time-consuming and expensive, especially for large companies. I don't agree with this. This reason out weight the con",
        },
        on: {
          'Event 1': {
            target: 'Choice3',
          },
          Continue: {
            target: 'Choice4',
          },
        },
      },
      Choice4: {
        meta: {
          Story:
            'Implementing a system of human review that is not rigorous or transparent. This could result in inconsistent decisions and a lack of accountability.',
        },
        on: {
          Back: {
            target: 'Choice3',
          },
          True: {
            target: 'T4',
          },
          False: {
            target: 'F4',
          },
        },
      },
      T4: {
        on: {
          Back: {
            target: 'Choice4',
          },
          Continue: {
            target: 'Info4',
          },
        },
      },
      F4: {
        meta: {
          Story:
            'Establish clear criteria: Define objective criteria for evaluating resumes, skills, and experience. This provides a common framework for reviewers to follow and reduces the risk of subjective judgments.\nStandardize the process: Implement a standardized review process with defined steps, checklists, and scoring rubrics. This promotes consistency and helps ensure all candidates are evaluated fairly.\nTrain reviewers: Provide training on identifying and mitigating bias in the hiring process. This includes raising awareness of common biases and equipping reviewers with strategies to overcome them.\nI agree to against this since make a not rigorous and transparent can actually worsen the problem',
        },
        on: {
          Back: {
            target: 'Choice4',
          },
          Continue: {
            target: 'Info4',
          },
        },
      },
      Info4: {
        meta: {
          Story:
            'I am confident that these measures will help to address the bias in my AI system. I am committed to using AI to automate the hiring process, but I am also committed to ensuring that my system is fair and unbiased.',
        },
        on: {
          Back: {
            target: 'Choice4',
          },
          Continue: {
            target: 'Info5',
          },
        },
      },
      Info5: {
        meta: {
          Story:
            'I continue to work on the project, making adjustments to the AI system as needed. I am eventually able to develop a system that is fair and unbiased. I am proud of my work, and I am confident that it will help Amazon to hire top talent from all walks of life.\n',
        },
        on: {
          Back: {
            target: 'Info4',
          },
          Continue: {
            target: 'input',
          },
        },
      },
      input: {
        meta: {
          Story:
            "Amazon's AI recruiting system, while no longer using the specific tool that faced bias concerns, still leverages various data points throughout the recruitment process. Here's a breakdown of the potential inputs and their purposes:\n",
        },
        on: {
          '1: resume/cv': {
            target: 'Resume/cv',
          },
          Back: {
            target: 'Info5',
          },
          '2. Online Assessments/Coding Challenges:': {
            target: 'Online Assessments/Coding Challenges',
          },
          '3. Interview Recordings/Transcripts:': {
            target: 'Interview Recordings/Transcripts',
          },
        },
      },
      'Resume/cv': {
        meta: {
          Story:
            '1. Resume/CV:\n\nData: Education, work experience, skills, keywords, certifications, projects, publications.\nCollection: Uploaded by candidates during application.\nPurpose: Analyzed for skills matching, experience level, and other criteria mentioned in the job description.\nImage of Resume/CV data pointsOpens in a new window\nwww.beamjobs.com\nResume/CV data points\n',
        },
        on: {
          Back: {
            target: 'input',
          },
          Continue: {
            target: 'Output',
          },
        },
      },
      'Online Assessments/Coding Challenges': {
        meta: {
          Story:
            'Data: Performance metrics, test scores, code quality, problem-solving skills.\nCollection: Completed by candidates as part of the application process.\nPurpose: Assesses specific skills and aptitudes relevant to the job.\n',
        },
        on: {
          Back: {
            target: 'input',
          },
          Continue: {
            target: 'Output',
          },
        },
      },
      'Interview Recordings/Transcripts': {
        meta: {
          Story:
            'Data: Speech patterns, keywords, responses to questions, communication skills.\nCollection: Recorded or transcribed during interviews (with candidate consent).\nPurpose: Evaluates communication, problem-solving approach, and cultural fit.\nImage of Interview Recordings/Transcripts data pointsOpens in a new window\nInterview Recordings/Transcripts data points\n',
        },
        on: {
          Back: {
            target: 'input',
          },
          Continue: {
            target: 'Output',
          },
        },
      },
      Output: {
        meta: {
          Story:
            "Outputs of Amazon's AI Recruiting System\nWhile the exact outputs and their usage may vary depending on the specific role and stage of the recruitment process, here's a general overview of what Amazon's AI system might generate:\n",
        },
        on: {
          Back: {
            target: 'input',
          },
          'Candidate Ranking/Scoring': {
            target: 'Candidate Ranking/Scoring',
          },
          'Interview Recommendation/Scheduling': {
            target: 'nterview Recommendation/Scheduling',
          },
          'Targeted Job Recommendation/Outreach': {
            target: 'Targeted Job Recommendation/Outreach',
          },
          'Onboarding/Retention Insights': {
            target: 'Onboarding/Retention Insights',
          },
        },
      },
      'Candidate Ranking/Scoring': {
        meta: {
          Story:
            "Output: A numerical score or ranking assigned to each candidate based on their resume, test results, interview performance, and other data points.\nFor: Recruiters and hiring managers.\nWhere: Used within the internal applicant tracking system (ATS).\nWhen: Throughout the recruitment process, from initial screening to final decision-making.\nHow: The system analyzes various data points and applies algorithms to predict a candidate's potential success in the role. This score then informs decisions about which candidates to move forward in the process.\n",
        },
        on: {
          Continue: {
            target: 'Final',
          },
        },
      },
      'nterview Recommendation/Scheduling': {
        meta: {
          Story:
            "Output: Suggestions for interview questions, panel members, and optimal scheduling based on candidate profiles and AI analysis.\nFor: Recruiters and hiring managers.\nWhere: Within the internal ATS or dedicated interview scheduling tools.\nWhen: During the interview stage, after initial screening and ranking.\nHow: The system analyzes candidate data and job requirements to recommend interview formats, questions aligned with the candidate's strengths and weaknesses, and suitable panel members based on expertise and cultural fit.\n",
        },
        on: {
          Continue: {
            target: 'Final',
          },
        },
      },
      'Targeted Job Recommendation/Outreach': {
        meta: {
          Story:
            "Output: Personalized job recommendations for candidates not actively applying but potentially a good fit based on their skills and experience.\nFor: Candidates and recruiters.\nWhere: Through email, job boards, or candidate portals.\nWhen: Proactively, even before a candidate expresses interest in a specific role.\nHow: The system analyzes a candidate's online presence, skills, and career history to identify potential matches with open positions at Amazon. This can help attract passive talent and fill niche roles.\n",
        },
        on: {
          Continue: {
            target: 'Final',
          },
        },
      },
      'Onboarding/Retention Insights': {
        meta: {
          Story:
            "Output: Predictive data on a candidate's likelihood of success, training needs, and potential flight risk.\nFor: HR and onboarding teams.\nWhere: Used internally within HR systems and performance management tools.\nWhen: After hiring and during the onboarding process.\nHow: The system analyzes onboarding data, performance metrics, and other factors to predict a new hire's potential success and identify areas for early intervention or support. This can help improve retention and reduce onboarding costs.\n",
        },
        on: {
          Continue: {
            target: 'Final',
          },
        },
      },
      Final: {
        meta: {
          Story:
            "Amazon's attempt to use artificial intelligence to automate its hiring process resulted in a tool that discriminated against women. The tool was trained on data that was biased towards men, and it therefore penalized resumes that included the word \"women's\" and downgraded graduates of all-women's colleges.\n\nThis case study highlights the limitations of machine learning and the importance of using data that is representative of the population you are trying to predict. It also serves as a lesson to companies that are looking to use AI in their hiring processes.\n\nEmployers should be aware of the potential for bias in AI systems and take steps to mitigate it. This could include using data that is more representative of the population, using algorithms that are designed to be fair, and training recruiters to be aware of the limitations of AI.\n\nThe ACLU is currently challenging a law that allows criminal prosecution of researchers and journalists who test hiring websites' algorithms for discrimination. This case could have a significant impact on the development and use of AI in hiring.\n",
        },
        on: {
          Back: {
            target: 'Output',
          },
        },
      },
    },
  };
};

// };

export const stateMachineFromVars = (character) => {
  return createMachine(storyMachine(character));
};
