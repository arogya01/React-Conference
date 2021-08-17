import s1 from '../../Assets/S1 Small.jpg';
import s2 from '../../Assets/S2 Small.jpg';
import s3 from '../../Assets/S3 Small.jpg';
import s4 from '../../Assets/S4 Small.jpg';
import s5 from '../../Assets/S5.jpg';
import s6 from '../../Assets/S7 Small.jpg';

var faker=require('faker');

export const speaker = {
    headerText: "Speakers",
    cardContent: [
      {
          img:s1,
          name:faker.name.findName(),
          contact:faker.internet.email(),
          topic:'Cloud Native Approach for Node.js Developers' , 
          description:'What are cloud-native applications? How do you design and develop cloud-native applications? During this talk, Nikita will share recipes on how to develop in a cloud-native environment with Node.js stack. '
      },
      {
          img:s2,
          name:faker.name.findName(),
          contact:faker.internet.email(),
          topic:"Nobody cares about web performance. It's hard, expensive and unneeded" , 
          description:'In this talk, we will speak about the main concerns about performance optimization in Web - cost, maintainability, and redundancy in 2021. We will discover some latest statistics about performance budget and discuss how to start web performance in the already ongoing project'
      },
      {
          img:s3,
          name:faker.name.findName(),
          contact:faker.internet.email(),
          topic:'Who are you, JS developer?' , 
          description:'React, Angular, Vue, Svelte: are these networks essential in software development or they just replace JavaScript because of lack of knowledge? Who are you, JS developer? If you know only JavaScript, probably, it’ll be difficult to grow your career without Docker, Redis, GraphQL, React, Angular, Node, etc. I’ll tell you more about frameworks and technologies to sort things out.'
      },
      {
          img:s4,
          name:faker.name.findName(),
          contact:faker.internet.email(),
          topic:'What projects do you need to develop to become a JavaScript developer?' , 
          description:'The best teacher is a real-life experience in which we’ll walk through the applications of our favorite language that provide unique knowledge and “rock” us as specialists.'
      },
      {
          img:s5,
          name:faker.name.findName(),
          contact:faker.internet.email(),
          topic:'Refactoring of REST API' , 
          description:'In the talk, I plan to share my experience in REST API refactoring. I plan to have a quick review of patterns and antipatterns. You will see some bad ideas that make your API uncomfortable. Finally we review tips and tricks that can help you make your API better. Also, we review some API management tools that also help with API refactoring'
      },
      {
          img:s6,
          name:faker.name.findName(),
          contact:faker.internet.email(),
          topic:'Worker Threads vs C ++ Addons (part 2)' , 
          description:'There are so many ways to handle CPU-bound tasks with Node.js - Child Processes, Cluster, Worker Threads or even use of other programming languages (C, C++, Rust, Go). Let’s try to solve some common cases (hash functions, work with xlsx files, json format) and decide which option performs better'
      }
    
  ]
  };
  