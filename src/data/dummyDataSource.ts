'use strict'
/**
 * Kanban task items data
 */

interface IKanbanData {
  id: String
  title: String
  status: String
  summary: String
  type: String
  priority: String
  tags: String
  estimate: Number
  assignee: String
  rankid: Number
  color: String // pattern '#02897B'
  className: String
  description?: String
}

const kanbanData: IKanbanData[] = [
  {
    id: 'Task 1',
    title: 'Task - 29001',
    status: 'Open',
    summary: 'Analyze the new requirements gathered from the customer.',
    type: 'Story',
    priority: 'Low',
    tags: 'Analyze,Customer',
    estimate: 3.5,
    assignee: 'Nancy Davloio',
    rankid: 1,
    color: '#02897B',
    className: 'e-story, e-low, e-nancy-davloio'
  },
  {
    id: 'Task 2',
    title: 'Task - 29002',
    status: 'InProgress',
    summary: 'Improve application performance',
    type: 'Improvement',
    priority: 'Normal',
    tags: 'Improvement',
    estimate: 6,
    assignee: 'Andrew Fuller',
    rankid: 1,
    color: '#673AB8',
    className: 'e-improvement, e-normal, e-andrew-fuller'
  },
  {
    id: 'Task 3',
    title: 'Task - 29003',
    status: 'Open',
    summary: 'Arrange a web meeting with the customer to get new requirements.',
    type: 'Others',
    priority: 'Critical',
    tags: 'Meeting',
    estimate: 5.5,
    assignee: 'Janet Leverling',
    rankid: 2,
    color: '#1F88E5',
    className: 'e-others, e-critical, e-janet-leverling'
  },
  {
    id: 'Task 4',
    title: 'Task - 29004',
    status: 'InProgress',
    summary: 'Fix the issues reported in the IE browser.',
    type: 'Bug',
    priority: 'Critical',
    tags: 'IE',
    estimate: 2.5,
    assignee: 'Janet Leverling',
    rankid: 2,
    color: '#E64A19',
    className: 'e-bug, e-release, e-janet-leverling'
  },
  {
    id: 'Task 5',
    title: 'Task - 29005',
    status: 'Review',
    summary: 'Fix the issues reported by the customer.',
    type: 'Bug',
    priority: 'Low',
    tags: 'Customer',
    estimate: 3.5,
    assignee: 'Steven walker',
    rankid: 1,
    color: '#E64A19',
    className: 'e-bug, e-low, e-steven-walker'
  },
  {
    id: 'Task 6',
    title: 'Task - 29007',
    status: 'Validate',
    summary: 'Validate new requirements',
    type: 'Improvement',
    priority: 'Low',
    tags: 'Validation',
    estimate: 1.5,
    assignee: 'Robert King',
    rankid: 1,
    color: '#673AB8',
    className: 'e-improvement, e-low, e-robert-king'
  },
  {
    id: 'Task 7',
    title: 'Task - 29009',
    status: 'Review',
    summary: 'Fix the issues reported in Safari browser.',
    type: 'Bug',
    priority: 'Critical',
    tags: 'Fix,Safari',
    estimate: 1.5,
    assignee: 'Nancy Davloio',
    rankid: 2,
    color: '#E64A19',
    className: 'e-bug, e-release, e-nancy-davloio'
  },
  {
    id: 'Task 8',
    title: 'Task - 29010',
    status: 'Close',
    summary: 'Test the application in the IE browser.',
    type: 'Story',
    priority: 'Low',
    tags: 'Review,IE',
    estimate: 5.5,
    assignee: 'Margaret hamilt',
    rankid: 3,
    color: '#02897B',
    className: 'e-story, e-low, e-margaret-hamilt'
  },
  {
    id: 'Task 9',
    title: 'Task - 29011',
    status: 'Validate',
    summary: 'Validate the issues reported by the customer.',
    type: 'Story',
    priority: 'High',
    tags: 'Validation,Fix',
    estimate: 1,
    assignee: 'Steven walker',
    rankid: 1,
    color: '#02897B',
    className: 'e-story, e-high, e-steven-walker'
  },
  {
    id: 'Task 10',
    title: 'Task - 29015',
    status: 'Open',
    summary: 'Show the retrieved data from the server in grid control.',
    type: 'Story',
    priority: 'High',
    tags: 'Database,SQL',
    estimate: 5.5,
    assignee: 'Margaret hamilt',
    rankid: 4,
    color: '#02897B',
    className: 'e-story, e-high, e-margaret-hamilt'
  },
  {
    id: 'Task 11',
    title: 'Task - 29016',
    status: 'InProgress',
    summary: 'Fix cannot open user’s default database SQL error.',
    priority: 'Critical',
    type: 'Bug',
    tags: 'Database,Sql2008',
    estimate: 2.5,
    assignee: 'Janet Leverling',
    rankid: 4,
    color: '#E64A19',
    className: 'e-bug, e-critical, e-janet-leverling'
  },
  {
    id: 'Task 12',
    title: 'Task - 29017',
    status: 'Review',
    summary: 'Fix the issues reported in data binding.',
    type: 'Story',
    priority: 'Normal',
    tags: 'Databinding',
    estimate: 3.5,
    assignee: 'Janet Leverling',
    rankid: 4,
    color: '#02897B',
    className: 'e-story, e-normal, e-janet-leverling'
  },
  {
    id: 'Task 13',
    title: 'Task - 29018',
    status: 'Close',
    summary: 'Analyze SQL server 2008 connection.',
    type: 'Story',
    priority: 'Critical',
    tags: 'Grid,Sql',
    estimate: 2,
    assignee: 'Andrew Fuller',
    rankid: 4,
    color: '#02897B',
    className: 'e-story, e-release, e-andrew-fuller'
  },
  {
    id: 'Task 14',
    title: 'Task - 29019',
    status: 'Validate',
    summary: 'Validate databinding issues.',
    type: 'Story',
    priority: 'Low',
    tags: 'Validation',
    estimate: 1.5,
    assignee: 'Margaret hamilt',
    rankid: 1,
    color: '#02897B',
    className: 'e-story, e-low, e-margaret-hamilt'
  },
  {
    id: 'Task 15',
    title: 'Task - 29020',
    status: 'Close',
    summary: 'Analyze grid control.',
    type: 'Story',
    priority: 'High',
    tags: 'Analyze',
    estimate: 2.5,
    assignee: 'Margaret hamilt',
    rankid: 5,
    color: '#02897B',
    className: 'e-story, e-high, e-margaret-hamilt'
  },
  {
    id: 'Task 16',
    title: 'Task - 29021',
    status: 'Close',
    summary: 'Stored procedure for initial data binding of the grid.',
    type: 'Others',
    priority: 'Critical',
    tags: 'Databinding',
    estimate: 1.5,
    assignee: 'Steven walker',
    rankid: 6,
    color: '#1F88E5',
    className: 'e-others, e-release, e-steven-walker'
  },
  {
    id: 'Task 17',
    title: 'Task - 29022',
    status: 'Close',
    summary: 'Analyze stored procedures.',
    type: 'Story',
    priority: 'Critical',
    tags: 'Procedures',
    estimate: 5.5,
    assignee: 'Janet Leverling',
    rankid: 7,
    color: '#02897B',
    className: 'e-story, e-release, e-janet-leverling'
  },
  {
    id: 'Task 18',
    title: 'Task - 29023',
    status: 'Validate',
    summary: 'Validate editing issues.',
    type: 'Story',
    priority: 'Critical',
    tags: 'Editing',
    estimate: 1,
    assignee: 'Nancy Davloio',
    rankid: 1,
    color: '#02897B',
    className: 'e-story, e-critical, e-nancy-davloio'
  },
  {
    id: 'Task 19',
    title: 'Task - 29024',
    status: 'Review',
    summary: 'Test editing functionality.',
    type: 'Story',
    priority: 'Normal',
    tags: 'Editing,Test',
    estimate: 0.5,
    assignee: 'Nancy Davloio',
    rankid: 5,
    color: '#02897B',
    className: 'e-story, e-normal, e-nancy-davloio'
  },
  {
    id: 'Task 20',
    title: 'Task - 29025',
    status: 'Open',
    summary: 'Enhance editing functionality.',
    type: 'Improvement',
    priority: 'Low',
    tags: 'Editing',
    estimate: 3.5,
    assignee: 'Andrew Fuller',
    rankid: 5,
    color: '#673AB8',
    className: 'e-improvement, e-low, e-andrew-fuller'
  },
  {
    id: 'Task 21',
    title: 'Task - 29026',
    status: 'InProgress',
    summary: 'Improve the performance of the editing functionality.',
    type: 'Epic',
    priority: 'High',
    tags: 'Performance',
    estimate: 6,
    assignee: 'Nancy Davloio',
    rankid: 5,
    color: '#e91e64',
    className: 'e-epic, e-high, e-nancy-davloio'
  },
  {
    id: 'Task 22',
    title: 'Task - 29027',
    status: 'Open',
    summary: 'Arrange web meeting with the customer to show editing demo.',
    type: 'Others',
    priority: 'High',
    tags: 'Meeting,Editing',
    estimate: 5.5,
    assignee: 'Steven walker',
    rankid: 6,
    color: '#1F88E5',
    className: 'e-others, e-high, e-steven-walker'
  },
  {
    id: 'Task 23',
    title: 'Task - 29029',
    status: 'Review',
    summary: 'Fix the editing issues reported by the customer.',
    type: 'Bug',
    priority: 'Low',
    tags: 'Editing,Fix',
    estimate: 3.5,
    assignee: 'Janet Leverling',
    rankid: 6,
    color: '#E64A19',
    className: 'e-bug, e-low, e-janet-leverling'
  },
  {
    id: 'Task 24',
    title: 'Task - 29030',
    status: 'Testing',
    summary: 'Fix the issues reported by the customer.',
    type: 'Bug',
    priority: 'Critical',
    tags: 'Customer',
    estimate: 3.5,
    assignee: 'Steven walker',
    rankid: 1,
    color: '#E64A19',
    className: 'e-bug, e-critical, e-steven-walker'
  },
  {
    id: 'Task 25',
    title: 'Task - 29031',
    status: 'Testing',
    summary: 'Fix the issues reported in Safari browser.',
    type: 'Bug',
    priority: 'Critical',
    tags: 'Fix,Safari',
    estimate: 1.5,
    assignee: 'Nancy Davloio',
    rankid: 2,
    color: '#E64A19',
    className: 'e-bug, e-release, e-nancy-davloio'
  },
  {
    id: 'Task 26',
    title: 'Task - 29032',
    status: 'Testing',
    summary: 'Check Login page validation.',
    type: 'Story',
    priority: 'Critical',
    tags: 'Testing',
    estimate: 0.5,
    assignee: 'Michael Suyama',
    rankid: 3,
    color: '#02897B',
    className: 'e-story, e-release, e-michael-suyama'
  },
  {
    id: 'Task 27',
    title: 'Task - 29033',
    status: 'Testing',
    summary: 'Fix the issues reported in data binding.',
    type: 'Story',
    priority: 'Normal',
    tags: 'Databinding',
    estimate: 3.5,
    assignee: 'Janet Leverling',
    rankid: 4,
    color: '#02897B',
    className: 'e-story, e-normal, e-janet-leverling'
  },
  {
    id: 'Task 28',
    title: 'Task - 29034',
    status: 'Testing',
    summary: 'Test editing functionality.',
    type: 'Story',
    priority: 'Normal',
    tags: 'Editing,Test',
    estimate: 0.5,
    assignee: 'Nancy Davloio',
    rankid: 5,
    color: '#02897B',
    className: 'e-story, e-normal, e-nancy-davloio'
  },
  {
    id: 'Task 29',
    title: 'Task - 29035',
    status: 'Testing',
    summary: 'Fix editing issues reported in Firefox.',
    type: 'Bug',
    priority: 'Critical',
    tags: 'Editing,Fix',
    estimate: 1.5,
    assignee: 'Robert King',
    rankid: 7,
    color: '#E64A19',
    className: 'e-bug, e-critical, e-robert-king'
  },
  {
    id: 'Task 30',
    title: 'Task - 29036',
    status: 'Testing',
    summary: 'Test editing feature in the IE browser.',
    type: 'Story',
    priority: 'Normal',
    tags: 'Testing',
    estimate: 5.5,
    assignee: 'Janet Leverling',
    rankid: 10,
    color: '#02897B',
    className: 'e-story, e-normal, e-janet-leverling'
  }
]

interface ICardData {
  id: String
  title: String
  status: String
  summary: String
  priority: String
  tags: String
  estimate?: Number
  assignee: String
  rankid: Number
  description?: String
}

const cardData: ICardData[] = [
  {
    id: 'Task 1',
    title: 'Task - 29001',
    status: 'Open',
    summary: 'Analyze customer requirements.',
    priority: 'High',
    tags: 'Bug, Release Bug',
    rankid: 1,
    assignee: 'Nancy Davloio'
  },
  {
    id: 'Task 2',
    title: 'Task - 29002',
    status: 'InProgress',
    summary: 'Add responsive support to applicaton',
    priority: 'Low',
    tags: 'Story, Kanban',
    rankid: 1,
    assignee: 'Andrew Fuller'
  },
  {
    id: 'Task 3',
    title: 'Task - 29003',
    status: 'Open',
    summary: 'Show the retrived data from the server in grid control.',
    priority: 'High',
    tags: 'Bug, Breaking Issue',
    rankid: 2,
    assignee: 'Janet Leverling'
  },
  {
    id: 'Task 4',
    title: 'Task - 29004',
    status: 'Open',
    summary: 'Fix the issues reported in the IE browser.',
    priority: 'High',
    tags: 'Bug, Customer',
    rankid: 3,
    assignee: 'Andrew Fuller'
  },
  {
    id: 'Task 5',
    title: 'Task - 29005',
    status: 'Review',
    summary: 'Improve application performance.',
    priority: 'Normal',
    tags: 'Story, Kanban',
    rankid: 1,
    assignee: 'Steven walker'
  },
  {
    id: 'Task 6',
    title: 'Task - 29009',
    status: 'Review',
    summary: 'API Improvements.',
    priority: 'Critical',
    tags: 'Bug, Customer',
    rankid: 2,
    assignee: 'Nancy Davloio'
  },
  {
    id: 'Task 7',
    title: 'Task - 29010',
    status: 'Close',
    summary: "Fix cannot open user's default database sql error.",
    priority: 'High',
    tags: 'Bug, Internal',
    rankid: 8,
    assignee: 'Margaret hamilt'
  },
  {
    id: 'Task 8',
    title: 'Task - 29015',
    status: 'Open',
    summary: 'Fix the filtering issues reported in safari.',
    priority: 'Critical',
    tags: 'Bug, Breaking Issue',
    rankid: 4,
    assignee: 'Margaret hamilt'
  },
  {
    id: 'Task 9',
    title: 'Task - 29016',
    status: 'Review',
    summary: 'Fix the issues reported in IE browser.',
    priority: 'High',
    tags: 'Bug, Customer',
    rankid: 3,
    assignee: 'Andrew Fuller'
  },
  {
    id: 'Task 10',
    title: 'Task - 29017',
    status: 'Review',
    summary: 'Enhance editing functionality.',
    priority: 'Normal',
    tags: 'Story, Kanban',
    rankid: 4,
    assignee: 'Janet Leverling'
  },
  {
    id: 'Task 11',
    title: 'Task - 29018',
    status: 'Close',
    summary: 'Arrange web meeting with customer to get login page requirement.',
    priority: 'High',
    tags: 'Feature',
    rankid: 1,
    assignee: 'Andrew Fuller'
  },
  {
    id: 'Task 12',
    title: 'Task - 29020',
    status: 'Close',
    summary: 'Login page validation.',
    priority: 'Low',
    tags: 'Bug',
    rankid: 2,
    assignee: 'Margaret hamilt'
  },
  {
    id: 'Task 13',
    title: 'Task - 29021',
    status: 'Close',
    summary: 'Test the application in IE browser.',
    priority: 'Normal',
    tags: 'Bug',
    rankid: 3,
    assignee: 'Steven walker'
  },
  {
    id: 'Task 14',
    title: 'Task - 29022',
    status: 'Close',
    summary: 'Analyze stored procedure.',
    priority: 'Critical',
    tags: 'CustomSample',
    rankid: 4,
    assignee: 'Janet Leverling'
  },
  {
    id: 'Task 15',
    title: 'Task - 29024',
    status: 'Review',
    summary: 'Check login page validation.',
    priority: 'Low',
    tags: 'Story',
    rankid: 5,
    assignee: 'Nancy Davloio'
  },
  {
    id: 'Task 16',
    title: 'Task - 29025',
    status: 'Close',
    summary: 'Add input validation for editing.',
    priority: 'Critical',
    tags: 'Bug, Breaking Issue',
    rankid: 5,
    assignee: 'Andrew Fuller'
  },
  {
    id: 'Task 17',
    title: 'Task - 29026',
    status: 'InProgress',
    summary: 'Improve performance of editing functionality.',
    priority: 'Critical',
    tags: 'Bug, Customer',
    rankid: 2,
    assignee: 'Nancy Davloio'
  },
  {
    id: 'Task 18',
    title: 'Task - 29027',
    status: 'Open',
    summary: 'Arrange web meeting for cutomer requirement.',
    priority: 'High',
    tags: 'Story',
    rankid: 5,
    assignee: 'Steven walker'
  },
  {
    id: 'Task 19',
    title: 'Task - 29029',
    status: 'Review',
    summary: 'Fix the issues reported by the customer.',
    priority: 'High',
    tags: 'Bug',
    rankid: 6,
    assignee: 'Janet Leverling'
  },
  {
    id: 'Task 20',
    title: 'Task - 29030',
    status: 'InProgress',
    summary: 'Test editing functionality',
    priority: 'Low',
    tags: 'Story',
    rankid: 3,
    assignee: 'Janet Leverling'
  },
  {
    id: 'Task 21',
    title: 'Task - 29031',
    status: 'InProgress',
    summary: 'Check filtering validation',
    priority: 'Normal',
    tags: 'Feature, Release',
    rankid: 4,
    assignee: 'Janet Leverling'
  },
  {
    id: 'Task 22',
    title: 'Task - 29032',
    status: 'InProgress',
    summary: 'Arrange web meeting with customer to get login page requirement',
    priority: 'Critical',
    tags: 'Feature',
    rankid: 5,
    assignee: 'Margaret hamilt'
  },
  {
    id: 'Task 23',
    title: 'Task - 29033',
    status: 'Open',
    summary: 'Arrange web meeting with customer to get editing requirements',
    priority: 'Critical',
    tags: 'Story, Improvement',
    rankid: 6,
    assignee: 'Andrew Fuller'
  },
  {
    id: 'Task 24',
    title: 'Task - 29034',
    status: 'InProgress',
    summary: 'Fix the issues reported by the customer.',
    priority: 'Critical',
    tags: 'Bug, Customer',
    rankid: 6,
    assignee: 'Steven walker'
  },
  {
    id: 'Task 25',
    title: 'Task - 29035',
    status: 'Close',
    summary: 'Fix the issues reported in Safari browser.',
    priority: 'High',
    tags: 'Bug',
    rankid: 6,
    assignee: 'Nancy Davloio'
  },
  {
    id: 'Task 26',
    title: 'Task - 29036',
    status: 'Review',
    summary: 'Check Login page validation.',
    priority: 'Critical',
    tags: 'Bug, Customer',
    rankid: 7,
    assignee: 'Margaret hamilt'
  },
  {
    id: 'Task 27',
    title: 'Task - 29037',
    status: 'Open',
    summary: 'Fix the issues reported in data binding.',
    priority: 'Normal',
    tags: 'Bug',
    estimate: 3.5,
    rankid: 7,
    assignee: 'Steven walker'
  },
  {
    id: 'Task 28',
    title: 'Task - 29038',
    status: 'Close',
    summary: 'Test editing functionality.',
    priority: 'Normal',
    tags: 'Story',
    estimate: 0.5,
    rankid: 7,
    assignee: 'Steven walker'
  }
]

interface IKanbanPizzaData {
  id: Number
  orderid: String
  title: String
  type: String
  size: String
  category: String
  description: String
  tags: String
  imageURL: String
  price: String // pattern '$4.79'
  date: String // pattern '02/01/2022'
  Descriptin?: String
}

const kanbanPizzaData: IKanbanPizzaData[] = [
  {
    id: 1,
    orderid: 'Order id - #16365',
    title: 'Mexican Green Wave',
    type: 'Vegetarian',
    size: 'Small',
    category: 'Order',
    description: 'Stromboli sandwich with chili sauce.',
    tags: 'Onions, Pepper, Cheese',
    imageURL: 'Mexican_Green_Wave.jpg',
    price: '$4.79',
    date: '02/01/2022'
  },
  {
    id: 2,
    orderid: 'Order id - #16366',
    title: 'Fresh Veggie',
    type: 'Vegetarian',
    size: 'Medium',
    category: 'Order',
    description: 'Veggie with Onions and Capsicum.',
    tags: 'Onions, Capsicum',
    imageURL: 'Fresh_Veggie.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 3,
    orderid: 'Order id - #16367',
    title: 'Peppy Paneer',
    type: 'Vegetarian',
    size: 'Large',
    category: 'Ready to Serve',
    description: "It's made using toppings of tomato, mozzarella cheese and fresh basil.",
    tags: 'Onions, Pepper, Cheese',
    imageURL: 'Peppy_Paneer.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 4,
    orderid: 'Order id - #16368',
    title: 'Margherita',
    type: 'Vegetarian',
    size: 'Small',
    category: 'Menu',
    description: 'Lebanese Pizza topped with tomato sauce.',
    tags: 'Onions, Pepper, Cheese',
    imageURL: 'Margherit.jpg',
    price: '$4.79',
    date: '02/01/2022'
  },
  {
    id: 5,
    orderid: 'Order id - #16369',
    title: 'Indian Tandoori Paneer',
    type: 'Vegetarian',
    size: 'Medium',
    category: 'Delivered',
    description: 'Tandoori Paneer with capsicum, red paprika and mint.',
    tags: 'Paneer, Capsicum',
    imageURL: 'IndianTandooriPaneer.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 6,
    orderid: 'Order id - #16370',
    title: 'Pepper Barbecue Chicken',
    type: 'Non-Vegetarian',
    size: 'Medium',
    category: 'Ready to Serve',
    description: 'Pepper Barbecue Chicken with cheese.',
    tags: 'Pepper, Chicken, Cheese',
    imageURL: 'Pepper_Barbeque.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 7,
    orderid: 'Order id - #16371',
    title: 'Chicken Sausage',
    type: 'Non-Vegetarian',
    size: 'Large',
    category: 'Ready to Serve',
    description: 'Chicken Sausage with cheese.',
    tags: 'Cheese, Chicken',
    imageURL: 'Chicken_Sausage.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 8,
    orderid: 'Order id - #16372',
    title: 'Chicken Golden Delight',
    type: 'Non-Vegetarian',
    size: 'Large',
    category: 'Order',
    description: 'Barbeque chicken with a topping of golden corn loaded with extra cheese.',
    tags: 'Onions, BBQ, Prawn',
    imageURL: 'Chicken_Golden_Delight.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 9,
    orderid: 'Order id - #16373',
    title: 'Pepper Barbecue and Onion',
    type: 'Non-Vegetarian',
    size: 'Medium',
    category: 'Menu',
    description: 'Pepper Barbecue chicken with Onion.',
    tags: 'Pepper, Chicken',
    imageURL: 'Pepper_Barbeque_Onion.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 10,
    orderid: 'Order id - #16374',
    title: 'Chicken Fiesta',
    type: 'Non-Vegetarian',
    size: 'Small',
    category: 'Delivered',
    description: 'Grilled Chicken Rashers with Peri-Peri chicken, Onion and Capsicum.',
    tags: 'Chicken, Capsicum',
    imageURL: 'chunky-chicken.png',
    price: '$4.79',
    date: '02/01/2022'
  },
  {
    id: 11,
    orderid: 'Order id - #16375',
    title: 'Double Cheese Margherita',
    type: 'Vegetarian',
    size: 'Medium',
    category: 'Delivered',
    description: 'Margherita with chili sauce and double Cheese.',
    tags: 'Onions, Pepper',
    imageURL: 'Double_Cheese_Margherita.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 12,
    orderid: 'Order id - #16376',
    title: 'Veggie Paradise',
    type: 'Vegetarian',
    size: 'Large',
    category: 'Menu',
    description: 'Veggie Delight with Goldern Corn, Black Olives, Capsicum and red Paprika.',
    tags: 'Corn, Capsicum',
    imageURL: 'Veggie_Paradise.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 13,
    orderid: 'Order id - #16377',
    title: 'Cheese and Corn',
    type: 'Vegetarian',
    size: 'Large',
    category: 'Order',
    description: 'Cheese with golden corn.',
    tags: 'Cheese, Corn',
    imageURL: 'Corn_Cheese.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 14,
    orderid: 'Order id - #16378',
    title: 'Chicken Tikka',
    type: 'Non-Vegetarian',
    size: 'Medium',
    category: 'Ready to Serve',
    description: 'Tandoori masala with Chicken Tikka, Onion, red paprika and mint.',
    tags: 'Chicken, Tikka, Paprika',
    imageURL: 'IndianChickenTikka.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 15,
    orderid: 'Order id - #16379',
    title: 'Chicken Dominator',
    type: 'Non-Vegetarian',
    size: 'Small',
    category: 'Menu',
    description:
      'Double Pepper Barbecue Chicken with Peri-Peri Chicken, Chicken Tikka, Grilled and Rashers.',
    tags: 'Pepper, Chicken',
    imageURL: 'Dominator.jpg',
    price: '$4.79',
    date: '02/01/2022'
  },
  {
    id: 16,
    orderid: 'Order id - #16380',
    title: 'Deluxe Veggie',
    type: 'Vegetarian',
    size: 'Medium',
    category: 'Delivered',
    description:
      'Onions and Capsicum those delectable mushrooms with paneer and golden corn to top it all.',
    tags: 'Mushrooms, Corn',
    imageURL: 'Deluxe_Veggie.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 17,
    orderid: 'Order id - #16381',
    title: 'Farm House',
    type: 'Vegetarian',
    size: 'Large',
    category: 'Menu',
    description: 'Crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes.',
    tags: 'Capsicum, Mushrooms',
    imageURL: 'Farmhouse.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 18,
    orderid: 'Order id - #16382',
    title: 'Veg Extravanganza',
    type: 'Vegetarian',
    size: 'Large',
    category: 'Served',
    description:
      'Pizza with corn, olives, onions, capsicum, tomatoes and jalapeno with cheese to go all around.',
    tags: 'Corn, Mushrooms',
    imageURL: 'Veg_Extravaganz.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 19,
    orderid: 'Order id - #16383',
    title: 'Margherita',
    type: 'Vegetarian',
    size: 'Small',
    category: 'Ready to Deliver',
    description: 'Lebanese Pizza topped with tomato sauce.',
    tags: 'Onions, Pepper, Cheese',
    imageURL: 'Margherit.jpg',
    price: '$4.79',
    date: '02/01/2022'
  },
  {
    id: 20,
    orderid: 'Order id - #16384',
    title: 'Pepper Barbecue and Onion',
    type: 'Non-Vegetarian',
    size: 'Medium',
    category: 'Ready to Deliver',
    description: 'Pepper Barbecue chicken with Onion.',
    tags: 'Onions, Pepper, Chicken',
    imageURL: 'Pepper_Barbeque_Onion.jpg',
    price: '$11.99',
    date: '02/01/2022'
  },
  {
    id: 21,
    orderid: 'Order id - #16385',
    title: 'Veggie Paradise',
    type: 'Vegetarian',
    size: 'Large',
    category: 'Ready to Deliver',
    description: 'Veggie Delight with Goldern Corn, Black Olives, Capsicum and red Paprika.',
    tags: 'Corn, Capsicum, Pepper',
    imageURL: 'Veggie_Paradise.jpg',
    price: '$14.99',
    date: '02/01/2022'
  },
  {
    id: 22,
    orderid: 'Order id - #16386',
    title: 'Chicken Dominator',
    type: 'Non-Vegetarian',
    size: 'Small',
    category: 'Ready to Deliver',
    description:
      'Double Pepper Barbecue Chicken with Peri-Peri Chicken, Chicken Tikka, Grilled and Rashers.',
    tags: 'Pepper, Chicken',
    imageURL: 'Dominator.jpg',
    price: '$4.79',
    date: '02/01/2022'
  }
]

const BUG_TASKS = [
  'UI component not displaying images in IE browser',
  'Button not responding on hover action',
  'Text overlapping in mobile view',
  'Dropdown menu not functioning properly',
  'Form validation error',
  'Alignment issue in tables',
  'Column not loading completely',
  'Broken UI Designs',
  'Font size inconsistency',
  'UI element misaligned on scroll'
]

const FEATURE_TASKS = [
  'Implement new user registration flow',
  'Add pagination to search results',
  'Improve accessibility for visually impaired users',
  'Create custom dashboard for users',
  'Develop user profile editing functionality',
  'Integrate with third-party API for weather data',
  'Implement social media sharing for articles',
  'Add support for multiple languages',
  'Create onboarding tutorial for new users',
  'Implement push notifications for mobile app'
]

const EPIC_TASKS = [
  'Revamp UI design for entire application',
  'Develop mobile application for iOS and Android',
  'Create API for integration with external systems',
  'Implement machine learning algorithms for personalized recommendations',
  'Upgrade database infrastructure for scalability',
  'Integrate with payment gateway for subscription model',
  'Develop chatbot for customer support',
  'Implement real-time collaboration features for team projects',
  'Create analytics dashboard for administrators',
  'Introduce gamification elements to increase user engagement'
]

const assignee = [
  'Andrew Fuller',
  'Janet Leverling',
  'Steven walker',
  'Robert King',
  'Margaret hamilt',
  'Nancy Davloio',
  'Margaret Buchanan',
  'Laura Bergs',
  'Anton Fleet',
  'Jack Kathryn',
  'Martin Davolio',
  'Fleet Jack'
]

const status: String[] = ['Open', 'InProgress', 'Review', 'Testing', 'Close']

const priority: String[] = ['Ultra-Critical', 'Critical', 'High', 'Normal', 'Low']

const types: String[] = ['Epic', 'Bug', 'Story']

const tagsField: String[] = [
  'Feature',
  'Bug',
  'Enhancement',
  'Documentation',
  'Automation',
  'Mobile',
  'Web',
  'iOS',
  'Safari',
  'Chrome',
  'Firefox',
  'Manual Testing'
]

const estimatePoints: Number[] = [1, 2, 3, 3.5, 4, 4.5, 5, 6, 7.5, 8]

export type { IKanbanData, ICardData, IKanbanPizzaData }

export {
  kanbanData,
  cardData,
  kanbanPizzaData,
  BUG_TASKS,
  FEATURE_TASKS,
  EPIC_TASKS,
  assignee,
  status,
  priority,
  types,
  tagsField,
  estimatePoints
}
