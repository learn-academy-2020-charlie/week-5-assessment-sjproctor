# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model, View, Controller, a organization model for how rails handles information, the user sees the view, the controller will update the model, and the user will see the updated view

  Researched answer:



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: has the ability to create, display, edit and delete information, also the components of persistent storage - Create, Read, Update, Delete

  Researched answer:



3. What is a migration? Why would you use one?

  Your answer: Modifying the database, like changing columns, modifying the shape of the database, $ rails g migration add_item_to_table, $ rails db:migrate, provides a type of version control

  Researched answer:



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: Person has_many Computers, Computer has_many People, Person has_many_through Computer, Person has_a Computer, Computer belongs_to Person, Person belongs_to Computer, the foreign key lives on the belongs_to side

  Researched answer:



5. What is object-relational mapping?

  Your answer: the middleman between the database layer and the application, translates to sql to form database operations, allows flexibility for developers to change technologies

  Researched answer:



6. What is a gem?

  Your answer: a Ruby library, packages code functionality, adds prebuilt code to your application

  Researched answer:



7. Why is it important to have validations in your application?

  Your answer: Ensures only desired data enter the database, desired data type, prevents null entries

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - representational state transfer, http verbs are linked to server side CRUD actions
- JSON - JavaScript Object Notation, key:value pairs/attributes, when passing JSON between applications, it gets "stringified" and then parsed
- API - set of functions and procedures, Application Programming Interface, website for computers, API (usually) is written in JSON
- Endpoints - API interaction with the database, user:page :: api:endpoint
- Strong params - strong parameters, control the creation of new object instances, keep unwanted information out of the database
