import { Product } from '../utils/types';

export const productList: Product[] = [
  // {
  //   name: 'Databricks',
  //   cardImage:
  //     'https://www.brighttalk.com/wp-content/uploads/2019/07/Databricks-logo-1.png',
  //   slogan: "The world's most powerful data science platform",
  //   description: [],
  //   categories: ['Data Science', 'Big Data', 'Machine Learning'],
  //   url: 'https://www.databricks.com/',
  //   images: [],
  //   color: '#00b1b1'
  // },
  {
    name: 'LimeSurvey',
    cardImage:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Limesurvey_logo.png',
    slogan: 'A SaaS data collection tool',
    categories: ['Data Collection'],
    description: [
      'LimeSurvey is a SaaS tool used for data collection, as part of the National Surveillance Platform (NSP). DMIA is using version 3.22.6 of the community version of LimeSurvey, which means it is open-source and is installed on our own Canadian servers within the HC/PHAC network. LimeSurvey allows users to create forms in both official languages and, as of version 3, the tool has been deemed WCAP compliant.',
      'LimeSurvey is currently being used to collect quantitative and qualitative data on topics ranging from public health surveillance to program assessment. Examples of projects that currently utilize or have utilized LimeSurvey include, but are not limited to, the Maritime Declaration of Health and the corresponding Annexes, the Review of the Yellow Fever Vaccination Centre Designation Program, the PHAC Incident Notification Form as part of the COVID-19 Border Measures Analytics project, etc.'
    ],
    url: 'https://www.limesurvey.org/',
    images: [
      'products/LimeSurvey_01.PNG',
      'products/LimeSurvey_02.PNG',
      'products/LimeSurvey_03.PNG',
      'products/LimeSurvey_04.PNG',
      'products/LimeSurvey_05.PNG'
    ],
    color: '#3b9900'
  }
  // {
  //   name: "LiquidFiles",
  //   image:
  //     "https://man.liquidfiles.com/assets/images/logo_144x144-362aae5506940de69ed13cf4f518a9d20ca5271f4e82934de4e31cb04f03a37a.png",
  // },
];
